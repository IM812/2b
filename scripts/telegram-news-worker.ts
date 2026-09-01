import { randomUUID } from 'node:crypto'
import { mkdir, open, readFile, unlink } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { load } from 'cheerio'
import { readNewsState, writeNewsState, type NewsDraft } from '../lib/news-queue'

const token = process.env.NEWS_TELEGRAM_BOT_TOKEN
const allowedChat = Number(process.env.NEWS_TELEGRAM_CHAT_ID)
const channel = '@twoB_news'
if (!token || !Number.isSafeInteger(allowedChat)) throw new Error('NEWS_TELEGRAM_BOT_TOKEN and NEWS_TELEGRAM_CHAT_ID are required')
const api = `https://api.telegram.org/bot${token}`
const lockPath = resolve(process.env.NEWS_WORKER_LOCK_FILE || './data/telegram-news-worker.lock')

type Update = { update_id: number; message?: Message; callback_query?: { id: string; data?: string; from: { id: number }; message?: Message } }
type Message = { message_id: number; chat: { id: number }; from?: { id: number }; text?: string; caption?: string; photo?: { file_id: string }[] }

async function acquireWorkerLock() {
  await mkdir(dirname(lockPath), { recursive: true })
  try {
    const handle = await open(lockPath, 'wx', 0o600)
    await handle.writeFile(String(process.pid))
    await handle.close()
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code !== 'EEXIST') throw error
    const existingPid = Number(await readFile(lockPath, 'utf8').catch(() => '0'))
    try {
      if (existingPid > 0) process.kill(existingPid, 0)
      throw new Error(`Telegram news worker is already running (PID ${existingPid})`)
    } catch (processError) {
      if ((processError as NodeJS.ErrnoException).code !== 'ESRCH') throw processError
      await unlink(lockPath).catch(() => undefined)
      return acquireWorkerLock()
    }
  }
  const release = () => unlink(lockPath).catch(() => undefined)
  process.once('SIGINT', () => void release().finally(() => process.exit(0)))
  process.once('SIGTERM', () => void release().finally(() => process.exit(0)))
  process.once('exit', () => { void release() })
}

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

function canPublish(_userId: number) {
  return true
}

type ManagedPost = { id: number; text: string; hasPhoto: boolean }

async function getChannelPosts(before?: number): Promise<ManagedPost[]> {
  const url = new URL('https://t.me/s/twoB_news')
  if (before) url.searchParams.set('before', String(before))
  const response = await fetch(url, { headers: { 'user-agent': 'Mozilla/5.0 (compatible; 2BServiceNewsBot/1.0)' } })
  if (!response.ok) throw new Error(`Telegram history returned ${response.status}`)
  const $ = load(await response.text())
  return $('.tgme_widget_message').map((_, element) => {
    const message = $(element)
    const id = Number((message.attr('data-post') ?? '').split('/').at(-1))
    const text = message.find('.tgme_widget_message_text').text().replace(/\s+/g, ' ').trim()
    const hasPhoto = message.find('.tgme_widget_message_photo_wrap').length > 0
    const isCommand = /^\/news(?:@\w+)?(?:\s|$)/i.test(text)
    const isServiceMessage = /^(channel|group) created$/i.test(text)
    return Number.isSafeInteger(id) && !isCommand && !isServiceMessage && (text || hasPhoto) ? { id, text, hasPhoto } : null
  }).get().filter((post): post is ManagedPost => Boolean(post)).reverse()
}

let postCache: { expiresAt: number; posts: ManagedPost[] } | null = null

async function getAllChannelPosts(force = false) {
  if (!force && postCache && postCache.expiresAt > Date.now()) return postCache.posts
  const all = new Map<number, ManagedPost>()
  let before: number | undefined
  for (let page = 0; page < 100; page++) {
    const posts = await getChannelPosts(before)
    for (const post of posts) all.set(post.id, post)
    const oldest = posts.at(-1)?.id
    if (!oldest || oldest === before || posts.length < 2) break
    before = oldest
  }
  const posts = [...all.values()].sort((a, b) => b.id - a.id)
  postCache = { expiresAt: Date.now() + 15_000, posts }
  return posts
}

function nextNewsNumber(posts: ManagedPost[]) {
  return Math.max(0, ...posts.map((post) => Number(post.text.match(/^Новость №(\d+)/i)?.[1] ?? 0))) + 1
}

function postLabel(post: ManagedPost) {
  const number = post.text.match(/^Новость №\d+/i)?.[0]
  const content = post.text.replace(/^Новость №\d+\s*/i, '').trim() || 'Без текста'
  return `${number ?? `Пост #${post.id}`} — ${post.hasPhoto ? 'фото, ' : ''}${content}`.slice(0, 36)
}

async function showManageMenu(chatId: number, before?: number, messageId?: number) {
  const allPosts = await getAllChannelPosts()
  const posts = before ? allPosts.filter((post) => post.id < before) : allPosts
  const visible = posts.slice(0, 6)
  const oldestId = visible.at(-1)?.id
  const keyboardRows = visible.map((post) => [{ text: postLabel(post), callback_data: `view:${post.id}` }])
  if (posts.length > visible.length && oldestId) keyboardRows.push([{ text: 'Более старые', callback_data: `manage:${oldestId}` }])
  if (before) keyboardRows.push([{ text: 'К началу', callback_data: 'manage:0' }])
  const text = allPosts.length
    ? `Новости: ${allPosts.length}\n\nВыберите публикацию для просмотра.`
    : 'Новостей пока нет.'
  const replyMarkup = { inline_keyboard: keyboardRows }
  if (messageId) {
    await telegram('editMessageText', { chat_id: chatId, message_id: messageId, text, reply_markup: replyMarkup })
    return
  }
  await send(chatId, text, replyMarkup)
}

async function showPost(chatId: number, messageId: number, postId: number) {
  const post = (await getAllChannelPosts()).find((item) => item.id === postId)
  const text = post?.text || 'Новость с фотографией'
  await telegram('editMessageText', {
    chat_id: chatId,
    message_id: messageId,
    text: `${text.slice(0, 3500)}\n\nПост #${postId}`,
    reply_markup: { inline_keyboard: [[{ text: 'Удалить', callback_data: `askdelete:${postId}` }], [{ text: 'Назад', callback_data: 'manage:0' }]] },
  })
}

async function preview(draft: NewsDraft, scheduled = false) {
  const caption = `Предпросмотр новости:\n\n${draft.text || '(новость без текста)'}\n\n${draft.photoFileId ? 'Фото прикреплено.' : 'Без фотографии.'}`
  if (draft.photoFileId) return telegram('sendPhoto', { chat_id: draft.chatId, photo: draft.photoFileId, caption: caption.slice(0, 1024), reply_markup: keyboard(draft.id, scheduled) })
  return send(draft.chatId, caption, keyboard(draft.id, scheduled))
}

async function publish(draft: NewsDraft) {
  const posts = await getAllChannelPosts()
  const numberedText = `Новость №${nextNewsNumber(posts)}${draft.text ? `\n\n${draft.text}` : ''}`
  const result = draft.photoFileId
    ? await telegram('sendPhoto', { chat_id: channel, photo: draft.photoFileId, caption: numberedText.slice(0, 1024) })
    : await telegram('sendMessage', { chat_id: channel, text: numberedText })
  postCache = null
  return result
}

function parseMoscowDate(value: string) {
  const match = value.trim().match(/^(\d{2})\.(\d{2})\.(\d{4})\s+(\d{2}):(\d{2})$/)
  if (!match) return null
  const [, day, month, year, hour, minute] = match
  const date = new Date(`${year}-${month}-${day}T${hour}:${minute}:00+03:00`)
  return Number.isNaN(date.getTime()) || date <= new Date() ? null : date
}

async function handleMessage(message: Message) {
  if (!message.from) return
  const raw = message.text || message.caption || ''
  if (/^\/start(?:@\w+)?(?:\s|$)/i.test(raw)) {
    const authorized = await canPublish(message.from.id)
    await send(message.chat.id, authorized
      ? 'Вы можете публиковать новости.\n\n/news — создать новость\n/manage — посмотреть и удалить публикации'
      : 'Нет доступа к публикации. Войдите в разрешённый чат и попробуйте снова.')
    return
  }
  if (!(await canPublish(message.from.id))) {
    if (/^\/(?:news|manage)(?:@\w+)?(?:\s|$)/i.test(raw)) await send(message.chat.id, 'Нет доступа к управлению новостями.')
    return
  }
  if (/^\/manage(?:@\w+)?(?:\s|$)/i.test(raw)) {
    try { await showManageMenu(message.chat.id) }
    catch { await send(message.chat.id, 'Не удалось прочитать историю канала. Попробуйте ещё раз.') }
    return
  }
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
  const userKey = String(message.from.id)
  const isNewsCommand = /^\/news(?:@\w+)?(?:\s|$)/i.test(raw)
  const isWaitingForContent = state.awaitingContent[userKey] === true
  if (!isNewsCommand && !isWaitingForContent) return

  const text = isNewsCommand ? raw.replace(/^\/news(?:@\w+)?\s*/i, '').trim() : raw.trim()
  const photoFileId = message.photo?.at(-1)?.file_id
  if (isNewsCommand && !text && !photoFileId) {
    state.awaitingContent[userKey] = true
    await writeNewsState(state)
    await send(message.chat.id, 'Пришлите следующим сообщением текст новости или фотографию с подписью. Я покажу предпросмотр перед публикацией.', { force_reply: true, selective: true })
    return
  }
  if (!text && !photoFileId) { await send(message.chat.id, 'Нужен текст или фотография для новости.'); return }
  if (text.length > (photoFileId ? 1024 : 4096)) { await send(message.chat.id, `Текст слишком длинный для ${photoFileId ? 'подписи к фото' : 'Telegram-сообщения'}.`); return }
  delete state.awaitingContent[userKey]
  const draft: NewsDraft = { id: randomUUID(), chatId: message.chat.id, userId: message.from.id, text, photoFileId, createdAt: new Date().toISOString() }
  state.drafts[draft.id] = draft
  await writeNewsState(state)
  await preview(draft)
}

async function handleCallback(query: NonNullable<Update['callback_query']>) {
  if (!query.message || !query.data || !(await canPublish(query.from.id))) return
  const replyChatId = query.message.chat.id
  const [action, id] = query.data.split(':')
  await telegram('answerCallbackQuery', { callback_query_id: query.id }).catch(() => undefined)

  if (action === 'manage') {
    await showManageMenu(replyChatId, Number(id) || undefined, query.message.message_id)
    return
  }
  if (action === 'view') {
    await showPost(replyChatId, query.message.message_id, Number(id))
    return
  }
  if (action === 'askdelete') {
    await telegram('editMessageText', { chat_id: replyChatId, message_id: query.message.message_id, text: `Удалить пост #${id} из канала и с сайта?`, reply_markup: { inline_keyboard: [[{ text: 'Да, удалить', callback_data: `delete:${id}` }], [{ text: 'Отмена', callback_data: 'manage:0' }]] } })
    return
  }
  if (action === 'delete') {
    try {
      await telegram('deleteMessage', { chat_id: channel, message_id: Number(id) })
      postCache = null
      await telegram('editMessageText', { chat_id: replyChatId, message_id: query.message.message_id, text: `Пост #${id} удалён. На сайте он исчезнет в течение минуты.` })
    } catch (error) {
      const description = error instanceof Error ? error.message : ''
      const reason = /message can't be deleted|not enough rights|CHAT_ADMIN_REQUIRED/i.test(description)
        ? 'Telegram не разрешил удаление. Дайте боту право удалять сообщения в канале; для некоторых старых публикаций Telegram также может ограничивать удаление через Bot API.'
        : 'Не удалось удалить новость. Возможно, она уже удалена или недоступна.'
      await send(replyChatId, reason)
    }
    return
  }

  const state = await readNewsState()
  const draft = state.drafts[id]
  if (!draft || draft.userId !== query.from.id) { await send(replyChatId, 'Черновик не найден или принадлежит другому автору.'); return }
  if (action === 'cancel') { delete state.drafts[id]; await writeNewsState(state); await send(replyChatId, 'Публикация отменена.'); return }
  if (action === 'schedule') { state.awaitingDate[String(query.from.id)] = id; await writeNewsState(state); await send(replyChatId, 'Ответьте на это сообщение датой и временем по Москве: 31.12.2026 18:30', { force_reply: true, selective: true }); return }
  if (action === 'now') {
    try {
      await publish(draft)
      delete state.drafts[id]
      await writeNewsState(state)
      await send(replyChatId, 'Ок, новость размещена в канале.')
    } catch (error) {
      const reason = error instanceof Error && error.message.includes('not a member of the channel')
        ? 'Добавьте этого бота администратором канала @twoB_news с правом публикации сообщений.'
        : 'Telegram не смог опубликовать новость. Проверьте права бота в канале и попробуйте снова.'
      await send(replyChatId, reason)
    }
  }
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
  await acquireWorkerLock()
  await telegram('setMyCommands', {
    commands: [
      { command: 'news', description: 'Создать новую публикацию' },
      { command: 'manage', description: 'Посмотреть и удалить новости' },
      { command: 'start', description: 'Открыть справку по боту' },
    ],
    scope: { type: 'all_private_chats' },
  })
  console.log('Telegram news worker started for', channel)
  while (true) {
    try {
      await publishDue()
      const state = await readNewsState()
      const updates = await telegram<Update[]>('getUpdates', { offset: state.offset, timeout: 25, allowed_updates: ['message', 'callback_query'] })
      for (const update of updates) {
        try {
          if (update.message) await handleMessage(update.message)
          if (update.callback_query) await handleCallback(update.callback_query)
        } catch (error) {
          console.error('Update processing failed:', error)
        } finally {
          state.offset = Math.max(state.offset, update.update_id + 1)
          const latest = await readNewsState(); latest.offset = state.offset; await writeNewsState(latest)
        }
      }
    } catch (error) { console.error('Worker loop error:', error); await new Promise((resolve) => setTimeout(resolve, 3000)) }
  }
}

void main()
