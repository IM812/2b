import { randomUUID } from 'node:crypto'
import { readNewsState, writeNewsState, type NewsDraft } from '../lib/news-queue'

const token = process.env.TELEGRAM_BOT_TOKEN
const allowedChat = Number(process.env.TELEGRAM_CHAT_ID)
const channel = '@twoB_news'
if (!token || !Number.isSafeInteger(allowedChat)) throw new Error('TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID are required')
const api = `https://api.telegram.org/bot${token}`

type Update = { update_id: number; message?: Message; callback_query?: { id: string; data?: string; from: { id: number }; message?: Message } }
type Message = { message_id: number; chat: { id: number }; from?: { id: number }; text?: string; caption?: string; photo?: { file_id: string }[] }

async function telegram<T>(method: string, body: Record<string, unknown>): Promise<T> {
  for (let attempt = 0; attempt < 3; attempt++) {
    const response = await fetch(`${api}/${method}`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) })
    const data = await response.json() as { ok: boolean; result: T; description?: string }
    if (data.ok) return data.result
    if (response.status < 500 && response.status !== 429) throw new Error(data.description || method)
    await new Promise((resolve) => setTimeout(resolve, 1000 * (attempt + 1)))
  }
  throw new Error(`Telegram method failed: ${method}`)
}

function keyboard(id: string, scheduled = false) {
  return { inline_keyboard: [[{ text: scheduled ? 'Подтвердить время' : 'Опубликовать сейчас', callback_data: `${scheduled ? 'confirm' : 'now'}:${id}` }], [{ text: 'Выбрать дату и время', callback_data: `schedule:${id}` }, { text: 'Отмена', callback_data: `cancel:${id}` }]] }
}

async function send(chatId: number, text: string, replyMarkup?: object) {
  return telegram('sendMessage', { chat_id: chatId, text, reply_markup: replyMarkup })
}

async function preview(draft: NewsDraft, scheduled = false) {
  const caption = `Предпросмотр новости:\n\n${draft.text || '(новость без текста)'}\n\n${draft.photoFileId ? 'Фото прикреплено.' : 'Без фотографии.'}`
  if (draft.photoFileId) return telegram('sendPhoto', { chat_id: draft.chatId, photo: draft.photoFileId, caption: caption.slice(0, 1024), reply_markup: keyboard(draft.id, scheduled) })
  return send(draft.chatId, caption, keyboard(draft.id, scheduled))
}

async function publish(draft: NewsDraft) {
  if (draft.photoFileId) return telegram('sendPhoto', { chat_id: channel, photo: draft.photoFileId, caption: draft.text.slice(0, 1024) })
  return telegram('sendMessage', { chat_id: channel, text: draft.text })
}

function parseMoscowDate(value: string) {
  const match = value.trim().match(/^(\d{2})\.(\d{2})\.(\d{4})\s+(\d{2}):(\d{2})$/)
  if (!match) return null
  const [, day, month, year, hour, minute] = match
  const date = new Date(`${year}-${month}-${day}T${hour}:${minute}:00+03:00`)
  return Number.isNaN(date.getTime()) || date <= new Date() ? null : date
}

async function handleMessage(message: Message) {
  if (message.chat.id !== allowedChat || !message.from) return
  const state = await readNewsState()
  const waitingDraftId = state.awaitingDate[String(message.from.id)]
  if (waitingDraftId && message.text) {
    const date = parseMoscowDate(message.text)
    const draft = state.drafts[waitingDraftId]
    if (!date || !draft) { await send(message.chat.id, 'Неверная или прошедшая дата. Формат: 31.12.2026 18:30 (Москва).'); return }
    state.queue.push({ ...draft, publishAt: date.toISOString() })
    delete state.awaitingDate[String(message.from.id)]
    delete state.drafts[waitingDraftId]
    await writeNewsState(state)
    await send(message.chat.id, `Ок, будет размещено ${new Intl.DateTimeFormat('ru-RU', { dateStyle: 'long', timeStyle: 'short', timeZone: 'Europe/Moscow' }).format(date)} по Москве.`)
    return
  }
  const raw = message.text || message.caption || ''
  if (!raw.startsWith('/news')) return
  const text = raw.replace(/^\/news(?:@\w+)?\s*/i, '').trim()
  const photoFileId = message.photo?.at(-1)?.file_id
  if (!text && !photoFileId) { await send(message.chat.id, 'Добавьте текст после /news или отправьте фото с подписью /news текст.'); return }
  if (text.length > (photoFileId ? 1024 : 4096)) { await send(message.chat.id, `Текст слишком длинный для ${photoFileId ? 'подписи к фото' : 'Telegram-сообщения'}.`); return }
  const draft: NewsDraft = { id: randomUUID(), chatId: message.chat.id, userId: message.from.id, text, photoFileId, createdAt: new Date().toISOString() }
  state.drafts[draft.id] = draft
  await writeNewsState(state)
  await preview(draft)
}

async function handleCallback(query: NonNullable<Update['callback_query']>) {
  if (query.message?.chat.id !== allowedChat || !query.data) return
  const [action, id] = query.data.split(':')
  const state = await readNewsState()
  const draft = state.drafts[id]
  await telegram('answerCallbackQuery', { callback_query_id: query.id })
  if (!draft || draft.userId !== query.from.id) { await send(allowedChat, 'Черновик не найден или принадлежит другому автору.'); return }
  if (action === 'cancel') { delete state.drafts[id]; await writeNewsState(state); await send(allowedChat, 'Публикация отменена.'); return }
  if (action === 'schedule') { state.awaitingDate[String(query.from.id)] = id; await writeNewsState(state); await send(allowedChat, 'Ответьте на это сообщение датой и временем по Москве: 31.12.2026 18:30', { force_reply: true, selective: true }); return }
  if (action === 'now') { await publish(draft); delete state.drafts[id]; await writeNewsState(state); await send(allowedChat, 'Ок, новость размещена в канале.'); }
}

async function publishDue() {
  const state = await readNewsState()
  const due = state.queue.filter((item) => new Date(item.publishAt) <= new Date())
  for (const item of due) {
    try { await publish(item); state.queue = state.queue.filter((queued) => queued.id !== item.id); await send(item.chatId, 'Запланированная новость опубликована.') }
    catch (error) { console.error('Scheduled publish failed:', error) }
  }
  if (due.length) await writeNewsState(state)
}

async function main() {
  console.log('Telegram news worker started for', channel)
  while (true) {
    try {
      await publishDue()
      const state = await readNewsState()
      const updates = await telegram<Update[]>('getUpdates', { offset: state.offset, timeout: 25, allowed_updates: ['message', 'callback_query'] })
      for (const update of updates) {
        if (update.message) await handleMessage(update.message)
        if (update.callback_query) await handleCallback(update.callback_query)
        state.offset = Math.max(state.offset, update.update_id + 1)
        const latest = await readNewsState(); latest.offset = state.offset; await writeNewsState(latest)
      }
    } catch (error) { console.error('Worker loop error:', error); await new Promise((resolve) => setTimeout(resolve, 3000)) }
  }
}

void main()
