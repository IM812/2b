import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { LegacyPage } from '@/components/legacy-page'
import { getLegacyPage } from '@/lib/legacy-content'

const path = '/tseny-it-obsluzhivaniya/'
export const dynamic = 'force-dynamic'
export const metadata: Metadata = {
  title: 'Цены на IT-услуги | 2BService - профессиональная IT-поддержка бизнеса',
  description: 'Цены на ИТ-обслуживание, поддержку инфраструктуры и разовые работы для бизнеса',
  alternates: { canonical: path },
}

export default async function PricesPage() {
  const page = await getLegacyPage(path)
  if (!page) notFound()
  return <LegacyPage page={page} eyebrow="Услуги / цены" />
}
