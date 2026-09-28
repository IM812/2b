import type { MetadataRoute } from 'next'
import { PROJECTS } from '@/lib/content'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://2bservice.ru'
  const lastModified = new Date('2026-08-28')
  const articleSlugs = ['otkat-sistemy-windows-10-k-tochke-vosstanovleniya','kak-proverit-kompyuter-na-virusy-bez-antivirusa','15730','15743','15721','1117','4061','posledstviya-ne-obnovlyat-programmnoye-obespecheniye-na-kompyutere','sposoby-ochistki-kesha-v-outlook','top-variantov-khraneniya-paroley','15736','564','kak-ponyat-chto-zhestkiy-disk-skoro-vyydet-iz-stroya','kakiye-byvayu-sistemy-videonablyudeniya','prolil-kofe-na-klaviaturu','15732','15744','kakaya-windows-samaya-bystraya-test-shesti-pokoleniy-ot-xp-do-11','15742']
  const staticRoutes = ['', '/about', '/company/licenses/', '/tseny-it-obsluzhivaniya/', '/services', '/clients', '/technologies', '/additional-competencies', '/careers', '/news', '/contacts', '/details', ...articleSlugs.map((slug) => `/info/news/${slug}/`)]
  return [
    ...staticRoutes.map((route) => ({ url: `${base}${route}`, lastModified, changeFrequency: route === '' ? 'weekly' as const : 'monthly' as const, priority: route === '' ? 1 : route === '/services' || route === '/clients' ? .9 : .7 })),
  ]
}
