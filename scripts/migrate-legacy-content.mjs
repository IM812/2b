import { mkdir, writeFile } from 'node:fs/promises'
import { load } from 'cheerio'
import { readFileSync } from 'node:fs'
import { read, utils } from 'xlsx'

const workbook = read(readFileSync('data/document-7050fd.xlsx'), { type: 'buffer' })
const sheet = workbook.Sheets[workbook.SheetNames[0]]
const rows = utils.sheet_to_json(sheet, { header: 1 }).flat().filter((value) => typeof value === 'string' && value.startsWith('https://2bservice.ru/'))
const urls = [...new Set([
  'https://2bservice.ru/company/licenses/',
  'https://2bservice.ru/tseny-it-obsluzhivaniya/',
  ...rows,
])]

const cleanText = (value = '') => value.replace(/ё/g, 'е').replace(/Ё/g, 'Е').replace(/\s+/g, ' ').replace(/\s+([,.!?;:])/g, '$1').trim()
const withoutHeadingDot = (value) => cleanText(value).replace(/[.!]+$/, '')

async function fetchHtml(url, attempts = 3) {
  for (let attempt = 1; attempt <= attempts; attempt++) {
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), 12_000)
    try {
      const response = await fetch(url, { signal: controller.signal, headers: { 'user-agent': 'Mozilla/5.0 (compatible; 2BServiceMigration/1.0)' } })
      if (!response.ok) throw new Error(`${response.status}`)
      return await response.text()
    } catch (error) {
      if (attempt === attempts) throw error
      await new Promise((resolve) => setTimeout(resolve, attempt * 1500))
    } finally {
      clearTimeout(timer)
    }
  }
}

function normalizeUrl(url) {
  return new URL(url).pathname.replace(/\/+$/, '') || '/'
}

function extractPage(url, html) {
  const $ = load(html)
  const root = $('.content').first().length ? $('.content').first() : $('main').first()
  const firstH1 = cleanText(root.find('h1').first().text() || $('h1').first().text())
  const title = $('title').text().replace(/\s+/g, ' ').trim()
  const description = ($('meta[name="description"]').attr('content') || '').replace(/\s+/g, ' ').trim()
  root.find('script,style,form,nav,aside,pre,link,meta,.breadcrumbs,.breadcrumb,.sidebar,[class*="sidebar"],[class*="banner"],noscript').remove()
  root.find('h1').first().remove()
  root.find('h1,h2,h3').each((_, element) => $(element).text(withoutHeadingDot($(element).text())))
  root.find('p,li,td,th').each((_, element) => {
    const node = $(element)
    if (!node.children().length) node.text(cleanText(node.text()))
  })
  root.find('img').each((_, element) => {
    const node = $(element)
    const source = node.attr('data-src') || node.attr('data-lazy-src') || node.attr('src')
    if (!source) return node.remove()
    try { node.attr('src', new URL(source, url).toString()) } catch { node.remove(); return }
    node.removeAttr('srcset').removeAttr('sizes').removeAttr('style').removeAttr('class')
    node.attr('loading', 'lazy').attr('decoding', 'async')
  })
  root.find('*').each((_, element) => {
    const node = $(element)
    const allowed = new Set(['href','src','alt','width','height','loading','decoding','colspan','rowspan','scope'])
    for (const attribute of Object.keys(element.attribs || {})) if (!allowed.has(attribute)) node.removeAttr(attribute)
    if (node.is('a')) {
      const href = node.attr('href')
      if (href) {
        try {
          const parsed = new URL(href, url)
          node.attr('href', parsed.hostname === '2bservice.ru' ? parsed.pathname : parsed.toString())
        } catch { node.removeAttr('href') }
      }
    }
  })
  return {
    path: normalizeUrl(url),
    sourceUrl: url,
    title,
    description,
    h1: withoutHeadingDot(firstH1 || title.split(' - ')[0]),
    html: root.html()?.trim() || '',
  }
}

let pages = []
try { pages = JSON.parse(readFileSync('data/legacy-pages.partial.json', 'utf8')) } catch {}
const completed = new Set(pages.map((page) => page.path))
const failures = []
for (const url of urls) {
  if (completed.has(normalizeUrl(url))) continue
  try {
    let html
    try {
      html = await fetchHtml(url, 2)
    } catch (error) {
      if (normalizeUrl(url) !== '/tseny-it-obsluzhivaniya') throw error
      html = readFileSync('/tmp/prices.html', 'utf8')
    }
    const page = extractPage(url, html)
    if (!page.h1 || page.html.length < 100) throw new Error('Content extraction returned an empty page')
    console.log(`${page.path}: ${page.html.length} chars`)
    pages.push(page)
    await mkdir('data', { recursive: true })
    await writeFile('data/legacy-pages.partial.json', JSON.stringify(pages, null, 2))
  } catch (error) {
    failures.push({ url, error: error instanceof Error ? error.message : String(error) })
    console.error(`FAILED ${url}: ${failures.at(-1).error}`)
  }
}

await mkdir('data', { recursive: true })
await writeFile('data/legacy-pages.json', JSON.stringify(pages, null, 2))
await writeFile('data/legacy-migration-failures.json', JSON.stringify(failures, null, 2))
console.log(`Saved ${pages.length}/${urls.length} pages`)
if (failures.length) process.exitCode = 1
