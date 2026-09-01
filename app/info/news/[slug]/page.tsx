import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { LegacyPage } from '@/components/legacy-page'
import { getLegacyPage } from '@/lib/legacy-content'

const slugs = ['otkat-sistemy-windows-10-k-tochke-vosstanovleniya','kak-proverit-kompyuter-na-virusy-bez-antivirusa','15730','15743','15721','1117','4061','posledstviya-ne-obnovlyat-programmnoye-obespecheniye-na-kompyutere','sposoby-ochistki-kesha-v-outlook','top-variantov-khraneniya-paroley','15736','564','kak-ponyat-chto-zhestkiy-disk-skoro-vyydet-iz-stroya','kakiye-byvayu-sistemy-videonablyudeniya','prolil-kofe-na-klaviaturu','15732','15744','kakaya-windows-samaya-bystraya-test-shesti-pokoleniy-ot-xp-do-11','15742'] as const

export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  if (!slugs.includes(slug as typeof slugs[number])) return {}
  const path = `/info/news/${slug}/`
  const page = await getLegacyPage(path)
  return page ? { title: page.title, description: page.description, alternates: { canonical: path }, openGraph: { title: page.title, description: page.description, url: path, type: 'article' } } : {}
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  if (!slugs.includes(slug as typeof slugs[number])) notFound()
  const page = await getLegacyPage(`/info/news/${slug}/`)
  if (!page) notFound()
  return <LegacyPage page={page} eyebrow="Статьи / ИТ-практика" />
}
