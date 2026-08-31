import { load } from 'cheerio'

const token = process.env.NEWS_TELEGRAM_BOT_TOKEN
const channel = '@twoB_news'
if (!token) throw new Error('NEWS_TELEGRAM_BOT_TOKEN is required')

async function main() {
  const ids = new Set<number>()
  let before: number | undefined

  for (let page = 0; page < 100; page++) {
    const url = new URL('https://t.me/s/twoB_news')
    if (before) url.searchParams.set('before', String(before))
    const response = await fetch(url, { headers: { 'user-agent': 'Mozilla/5.0 (compatible; 2BServiceNewsBot/1.0)' } })
    if (!response.ok) throw new Error(`Telegram history returned ${response.status}`)
    const $ = load(await response.text())
    const pageIds = $('.tgme_widget_message').map((_, element) => Number(($(element).attr('data-post') ?? '').split('/').at(-1))).get().filter(Number.isSafeInteger)
    for (const id of pageIds) ids.add(id)
    const oldest = Math.min(...pageIds)
    if (!pageIds.length || oldest === before) break
    before = oldest
  }

  let deleted = 0
  const failed: { id: number; reason: string }[] = []
  for (const messageId of [...ids].sort((a, b) => b - a)) {
    const response = await fetch(`https://api.telegram.org/bot${token}/deleteMessage`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ chat_id: channel, message_id: messageId }),
    })
    const result = await response.json() as { ok: boolean; description?: string }
    if (result.ok) deleted += 1
    else failed.push({ id: messageId, reason: result.description ?? 'Unknown Telegram error' })
  }
  console.log(JSON.stringify({ found: ids.size, deleted, failed }))
}

void main()
