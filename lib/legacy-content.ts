import { load } from 'cheerio'

export type LegacySection = { level: 2 | 3; heading: string; paragraphs: string[]; items: string[] }
export type LegacyPage = { title: string; description: string; h1: string; intro: string[]; sections: LegacySection[] }

const clean = (value: string) => value.replace(/ё/g, 'е').replace(/Ё/g, 'Е').replace(/\s+/g, ' ').replace(/\s+([,.!?;:])/g, '$1').trim()
const heading = (value: string) => clean(value).replace(/[.]$/, '')

export async function getLegacyPage(path: string): Promise<LegacyPage | null> {
  const response = await fetch(`https://2bservice.ru${path}`, { next: { revalidate: 86400 }, headers: { 'user-agent': '2B-Service-Migration/1.0' } })
  if (!response.ok) return null
  const html = await response.text()
  const $ = load(html)
  const h1Node = $('h1').first()
  if (!h1Node.length) return null
  const title = clean($('title').first().text())
  const description = clean($('meta[name="description"]').attr('content') || '') || heading(h1Node.text())
  const root = h1Node.closest('main, article, .news-detail, .detail, .content, .container').first()
  const scope = root.length ? root : h1Node.parent()
  const intro: string[] = []
  const sections: LegacySection[] = []
  let current: LegacySection | null = null
  scope.find('h1,h2,h3,p,li').each((_, element) => {
    const tag = element.tagName.toLowerCase()
    const text = clean($(element).text())
    if (!text || /Нужна помощь профессионалов|Получить бесплатную консультацию|За консультацией обращайтесь/i.test(text)) return
    if (tag === 'h2' || tag === 'h3') {
      current = { level: tag === 'h2' ? 2 : 3, heading: heading(text), paragraphs: [], items: [] }
      sections.push(current)
    } else if (tag === 'p') {
      if (current) current.paragraphs.push(text)
      else if (text !== heading(h1Node.text())) intro.push(text)
    } else if (tag === 'li' && current) current.items.push(text)
  })
  return { title, description, h1: heading(h1Node.text()), intro: [...new Set(intro)].slice(0, 8), sections: sections.filter((item) => item.paragraphs.length || item.items.length) }
}

export function LegacyContent({ page }: { page: LegacyPage }) {
  return null
}
