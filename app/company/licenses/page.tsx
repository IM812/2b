import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { LegacyPage } from '@/components/legacy-page'
import { getLegacyPage } from '@/lib/legacy-content'

const path = '/company/licenses/'
export const metadata: Metadata = {
  title: 'Профессиональный аутсорсинг 2B Service: Лицензии и сертификаты',
  description: 'Лицензии и сертификаты АО «2В Сервис», подтверждающие компетенции компании и специалистов',
  alternates: { canonical: path },
}

export default async function LicensesPage() {
  const page = await getLegacyPage(path)
  if (!page) notFound()
  return <LegacyPage page={page} eyebrow="Компания / лицензии и сертификаты" />
}
