import { NextResponse } from 'next/server'

const attempts = new Map<string, { count: number; resetAt: number }>()
const WINDOW_MS = 10 * 60 * 1000
const MAX_ATTEMPTS = 5

function clean(value: unknown, maxLength: number) {
  return typeof value === 'string'
    ? value.replace(/[<>]/g, '').trim().slice(0, maxLength)
    : ''
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  })[character] ?? character)
}

export async function POST(request: Request) {
  const forwardedFor = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
  const ip = forwardedFor || 'unknown'
  const now = Date.now()
  const current = attempts.get(ip)

  if (current && current.resetAt > now && current.count >= MAX_ATTEMPTS) {
    return NextResponse.json({ error: 'Слишком много попыток. Попробуйте позже.' }, { status: 429 })
  }

  attempts.set(ip, current && current.resetAt > now
    ? { ...current, count: current.count + 1 }
    : { count: 1, resetAt: now + WINDOW_MS })

  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Некорректный запрос.' }, { status: 400 })
  }

  if (body.website) return NextResponse.json({ ok: true })

  const name = clean(body.name, 80)
  const phone = clean(body.phone, 30)
  const message = clean(body.message, 1500)
  const consent = body.consent === true
  const source = clean(body.source, 20)
  const taskType = clean(body.taskType, 100)
  const scale = clean(body.scale, 100)
  const timeline = clean(body.timeline, 100)

  if (name.length < 2 || !/^\+?[\d\s()\-]{7,20}$/.test(phone) || message.length < 5) {
    return NextResponse.json({ error: 'Проверьте имя, телефон и описание задачи.' }, { status: 400 })
  }

  if (source === 'quiz' && (!taskType || !scale || !timeline)) {
    return NextResponse.json({ error: 'Ответьте на все вопросы квиза.' }, { status: 400 })
  }

  if (!consent) {
    return NextResponse.json({ error: 'Подтвердите согласие на обработку персональных данных.' }, { status: 400 })
  }

  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID
  if (!token || !chatId) {
    return NextResponse.json({ error: 'Сервис временно недоступен.' }, { status: 503 })
  }

  const text = [
    '<b>Новая заявка с сайта 2В Сервис</b>',
    '',
    `<b>Имя:</b> ${escapeHtml(name)}`,
    `<b>Телефон:</b> ${escapeHtml(phone)}`,
    `<b>Тип обращения:</b> ${escapeHtml(source === 'career' ? 'Открытый отклик' : source === 'contact' ? 'Контактная форма' : source === 'quiz' ? 'Квиз' : 'Форма заявки')}`,
    `<b>Задача:</b> ${escapeHtml(message)}`,
    ...(source === 'quiz' ? [
      '',
      '<b>Ответы квиза</b>',
      `<b>Тип задачи:</b> ${escapeHtml(taskType)}`,
      `<b>Масштаб:</b> ${escapeHtml(scale)}`,
      `<b>Срок:</b> ${escapeHtml(timeline)}`,
    ] : []),
    '',
    '<i>Пользователь подтвердил согласие на обработку персональных данных.</i>',
  ].join('\n')

  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'HTML' }),
      signal: AbortSignal.timeout(8000),
    })

    if (!response.ok) throw new Error(`Telegram responded with ${response.status}`)
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Не удалось отправить заявку. Позвоните нам по телефону.' }, { status: 502 })
  }
}
