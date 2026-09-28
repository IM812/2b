import 'server-only'
import { load } from 'cheerio'
import { unstable_cache } from 'next/cache'

export const NEWS_CHANNEL = 'two_b_service'
export const NEWS_CHANNEL_URL = `https://t.me/${NEWS_CHANNEL}`

export type TelegramNews = {
  id: string
  text: string
  title: string
  excerpt: string
  date: string
  image: string | null
  url: string
}

function imageFromStyle(style?: string) {
  const match = style?.match(/url\(['"]?(.+?)['"]?\)/)
  return match?.[1]?.replaceAll('&amp;', '&') ?? null
}

// Emoji/pictographic bullets Telegram authors use instead of "-" or "*" list markers.
const BULLET_PATTERN = /^[\s\u2022\u25CF\u25AA\u25B6\u27A1\u2705\u2B50\u26A0\uFE0F\p{Extended_Pictographic}\uFE0F\u200D]+/u

// After we strip URLs, "read more at <link>" teasers are left dangling with nothing
// to point to (e.g. "Подробнее читайте на"). The page already links to the original
// Telegram post via a separate button, so trim these leftover teaser phrases.
const DANGLING_LINK_TEASER =
  /([.!?])\s*(подробнее\s+)?(читайте|смотрите|узна[йю]те|подробности)(\s+(полностью|подробнее|тут|здесь|на|у нас|по ссылке|в канале|в нашем канале))*\s*[:\-—]?\s*$/giu
const DANGLING_LINK_TEASER_ONLY =
  /^\s*(подробнее\s+)?(читайте|смотрите|узна[йю]те|подробности)(\s+(полностью|подробнее|тут|здесь|на|у нас|по ссылке|в канале|в нашем канале))*\s*[:\-—]?\s*$/giu

function stripDanglingLinkTeaser(text: string) {
  return text.replace(DANGLING_LINK_TEASER, '$1').replace(DANGLING_LINK_TEASER_ONLY, '').trim()
}

function cleanMessageText(html: string) {
  const withBreaks = html
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n\n')
  const text = load(`<div>${withBreaks}</div>`).text()
  const cleaned = text
    .replace(/https?:\/\/\S+/g, '')
    .replace(/\bt\.me\/\S+/g, '')
    .replace(/#[\p{L}\p{N}_]+/gu, '')
    .replace(/[\p{Extended_Pictographic}\uFE0F\u200D]/gu, '')
    .split('\n')
    .map((line) => line.replace(BULLET_PATTERN, '').replace(/[ \t]+/g, ' ').trim())
    .filter((line, index, lines) => line || (index > 0 && lines[index - 1]))
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
  return stripDanglingLinkTeaser(cleaned)
}

function splitTitleAndExcerpt(text: string) {
  const paragraphs = text.split('\n').filter(Boolean)
  const first = paragraphs[0] ?? ''
  const sentenceMatch = first.match(/^.{1,110}?[.!?](?=\s|$)/)
  const title = (sentenceMatch?.[0] ?? first.slice(0, 110)).trim()
  const rest = [first.slice(title.length).trim(), ...paragraphs.slice(1)].filter(Boolean).join(' ')
  return { title: title || 'Новая публикация 2В Сервис', excerpt: rest }
}

async function loadTelegramNews(): Promise<TelegramNews[]> {
  const response = await fetch(`https://t.me/s/${NEWS_CHANNEL}`, {
    headers: { 'user-agent': 'Mozilla/5.0 (compatible; 2BServiceNews/1.0)' },
    next: { revalidate: 60 },
  })
  if (!response.ok) throw new Error(`Telegram returned ${response.status}`)
  const $ = load(await response.text())
  return $('.tgme_widget_message_wrap').map((_, element) => {
    const message = $(element).find('.tgme_widget_message')
    const dataPost = message.attr('data-post') ?? ''
    const id = dataPost.split('/').at(-1) ?? ''
    const time = message.find('time').attr('datetime') ?? new Date().toISOString()
    const text = cleanMessageText(message.find('.tgme_widget_message_text').html() ?? '')
    const image = imageFromStyle(message.find('.tgme_widget_message_photo_wrap').attr('style'))
    const isServiceMessage = /^(channel|group) created$/i.test(text)
    const isBotCommand = /^\/news(?:@\w+)?(?:\s|$)/i.test(text)
    if (!id || isServiceMessage || isBotCommand || !(text || image)) return null
    const { title, excerpt } = splitTitleAndExcerpt(text)
    return { id, text, title, excerpt, date: time, image, url: `https://t.me/${NEWS_CHANNEL}/${id}` }
  }).get().filter((item): item is TelegramNews => Boolean(item)).reverse()
}

const cachedNews = unstable_cache(loadTelegramNews, ['telegram-news-v2'], { revalidate: 60, tags: ['telegram-news'] })

export async function getTelegramNews() {
  try { return await cachedNews() } catch { return [] }
}

export async function getTelegramNewsItem(id: string) {
  return (await getTelegramNews()).find((item) => item.id === id) ?? null
}
