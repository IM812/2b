import { load } from 'cheerio'

const urls = [
  'https://2bservice.ru/company/licenses/',
  'https://2bservice.ru/tseny-it-obsluzhivaniya/',
  'https://2bservice.ru/info/news/otkat-sistemy-windows-10-k-tochke-vosstanovleniya/',
]

for (const url of urls) {
  const response = await fetch(url, { headers: { 'user-agent': 'Mozilla/5.0' } })
  const html = await response.text()
  const $ = load(html)
  const candidates = $('main, article, [class*="content"], [class*="detail"], [class*="text"]')
    .map((_, element) => ({
      tag: element.tagName,
      className: $(element).attr('class') || '',
      textLength: $(element).text().replace(/\s+/g, ' ').trim().length,
      htmlLength: ($(element).html() || '').length,
    }))
    .get()
    .sort((a, b) => b.textLength - a.textLength)
    .slice(0, 15)
  console.log(JSON.stringify({
    url,
    status: response.status,
    title: $('title').text().trim(),
    description: $('meta[name="description"]').attr('content') || '',
    h1: $('h1').map((_, element) => $(element).text().replace(/\s+/g, ' ').trim()).get(),
    headings: $('h2,h3').map((_, element) => ({ tag: element.tagName, text: $(element).text().replace(/\s+/g, ' ').trim() })).get(),
    candidates,
  }, null, 2))
}
