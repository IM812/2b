import { NextResponse } from 'next/server'

const attempts = new Map<string, { count: number; resetAt: number }>()
const WINDOW_MS = 10 * 60 * 1000
const MAX_ATTEMPTS = 5
const MAX_BODY_BYTES = 6_000
const BASE_FIELDS = new Set(['name', 'phone', 'message', 'website', 'consent', 'source', 'submittedAt'])
const QUIZ_FIELDS = new Set([...BASE_FIELDS, 'taskType', 'scale', 'timeline'])
const ALLOWED_SOURCES = new Set(['form', 'contact', 'career', 'quiz'])

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

function isAllowedRequestOrigin(request: Request) {
  const origin = request.headers.get('origin')
  if (!origin) return false

  try {
    const originUrl = new URL(origin)
    const forwardedHost = request.headers.get('x-forwarded-host')?.split(',')[0]?.trim()
    const requestHost = forwardedHost || request.headers.get('host') || new URL(request.url).host
    const fetchSite = request.headers.get('sec-fetch-site')
    return originUrl.host === requestHost && (!fetchSite || fetchSite === 'same-origin' || fetchSite === 'same-site')
  } catch {
    return false
  }
}

function isValidRussianPhone(value: string) {
  const digits = value.replace(/\D/g, '')
  return digits.length === 11 && (digits.startsWith('7') || digits.startsWith('8'))
}

export async function POST(request: Request) {
  if (!isAllowedRequestOrigin(request)) {
    return NextResponse.json({ error: 'Источник запроса не разрешён.' }, { status: 403 })
  }

  const contentType = request.headers.get('content-type') ?? ''
  const contentLength = Number(request.headers.get('content-length') ?? 0)
  if (!contentType.toLowerCase().startsWith('application/json') || contentLength > MAX_BODY_BYTES) {
    return NextResponse.json({ error: 'Некорректный запрос.' }, { status: 400 })
  }

  const forwardedFor = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
  const ip = forwardedFor || 'unknown'
  const now = Date.now()
  if (attempts.size > 2_000) {
    for (const [key, value] of attempts) {
      if (value.resetAt <= now) attempts.delete(key)
    }
  }
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

  if (!body || Array.isArray(body)) {
    return NextResponse.json({ error: 'Некорректный запрос.' }, { status: 400 })
  }

  if (body.website) return NextResponse.json({ ok: true })

  const submittedAt = typeof body.submittedAt === 'number' ? body.submittedAt : 0
  const formAge = Date.now() - submittedAt
  if (!Number.isFinite(submittedAt) || formAge < 1_500 || formAge > 2 * 60 * 60 * 1_000) {
    return NextResponse.json({ error: 'Обновите страницу и повторите отправку.' }, { status: 400 })
  }

  const rawSource = clean(body.source, 20)
  const source = ALLOWED_SOURCES.has(rawSource) ? rawSource : ''
  const allowedFields = source === 'quiz' ? QUIZ_FIELDS : BASE_FIELDS
  if (!source || Object.keys(body).some((key) => !allowedFields.has(key))) {
    return NextResponse.json({ error: 'Некорректный состав запроса.' }, { status: 400 })
  }

  const name = clean(body.name, 80)
  const phone = clean(body.phone, 30)
  const message = clean(body.message, 1500)
  const consent = body.consent === true
  const taskType = clean(body.taskType, 100)
  const scale = clean(body.scale, 100)
  const timeline = clean(body.timeline, 100)

  if (name.length < 2 || !isValidRussianPhone(phone) || message.length < 5) {
    return NextResponse.json({ error: 'Проверьте имя, российский номер телефона и описание задачи.' }, { status: 400 })
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
