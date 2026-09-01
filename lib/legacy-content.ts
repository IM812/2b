import { load } from 'cheerio'
import pages from '@/data/legacy-pages.json'

export type LegacySection = { level: 2 | 3; heading: string; paragraphs: string[]; items: string[] }
export type LegacyPage = { title: string; description: string; h1: string; intro: string[]; sections: LegacySection[] }
type StoredPage = { path: string; title: string; description: string; h1: string; html: string }

const clean = (value: string) => value.replace(/\u0451/g, 'е').replace(/\u0401/g, 'Е').replace(/\s+/g, ' ').replace(/\s+([,.!?;:])/g, '$1').trim()
const heading = (value: string) => clean(value).replace(/[.!]+$/, '')
const normalizePath = (value: string) => value.replace(/\/+$/, '') || '/'

function parseStoredPage(stored: StoredPage): LegacyPage {
  const $ = load(stored.html)
  $('script,style,form,nav,aside,pre,link,meta,noscript').remove()
  const intro: string[] = []
  const sections: LegacySection[] = []
  let current: LegacySection | null = null

  $('h1,h2,h3,p,li').each((_, element) => {
    const tag = element.tagName.toLowerCase()
    const text = clean($(element).text())
    if (!text || /Нужна помощь профессионалов|Получить бесплатную консультацию|За консультацией обращайтесь/i.test(text)) return
    if (tag === 'h2' || tag === 'h3') {
      current = { level: tag === 'h2' ? 2 : 3, heading: heading(text), paragraphs: [], items: [] }
      sections.push(current)
      return
    }
    if (tag === 'p') {
      if (current) current.paragraphs.push(text)
      else intro.push(text)
      return
    }
    if (tag === 'li' && current) current.items.push(text)
  })

  return {
    title: clean(stored.title),
    description: clean(stored.description) || heading(stored.h1),
    h1: heading(stored.h1),
    intro: [...new Set(intro)].slice(0, 8),
    sections: sections.filter((section) => section.paragraphs.length || section.items.length),
  }
}

const staticPages = new Map(
  (pages as StoredPage[]).map((page) => [normalizePath(page.path), parseStoredPage(page)]),
)

export async function getLegacyPage(path: string): Promise<LegacyPage | null> {
  return staticPages.get(normalizePath(path)) ?? null
}
