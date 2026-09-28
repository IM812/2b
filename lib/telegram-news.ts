import 'server-only'
import { load } from 'cheerio'
import { unstable_cache } from 'next/cache'

export const NEWS_CHANNEL = 'two_b_service'
export const NEWS_CHANNEL_URL = `https://t.me/${NEWS_CHANNEL}`

export type TelegramNews = {
  id: string
  text: string
  date: string
  image: string | null
  url: string
}

function imageFromStyle(style?: string) {
  const match = style?.match(/url\(['"]?(.+?)['"]?\)/)
  return match?.[1]?.replaceAll('&amp;', '&') ?? null
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
    const text = message.find('.tgme_widget_message_text').text().trim()
    const image = imageFromStyle(message.find('.tgme_widget_message_photo_wrap').attr('style'))
    const isServiceMessage = /^(channel|group) created$/i.test(text)
    const isBotCommand = /^\/news(?:@\w+)?(?:\s|$)/i.test(text)
    return id && !isServiceMessage && !isBotCommand && (text || image) ? { id, text, date: time, image, url: `https://t.me/${NEWS_CHANNEL}/${id}` } : null
  }).get().filter((item): item is TelegramNews => Boolean(item)).reverse()
}

const cachedNews = unstable_cache(loadTelegramNews, ['telegram-news-v2'], { revalidate: 60, tags: ['telegram-news'] })

export async function getTelegramNews() {
  try { return await cachedNews() } catch { return [] }
}

export async function getTelegramNewsItem(id: string) {
  return (await getTelegramNews()).find((item) => item.id === id) ?? null
}
