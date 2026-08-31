import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { notFound } from 'next/navigation'
import { getTelegramNewsItem } from '@/lib/telegram-news'

type Props = { params: Promise<{ id: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const item = await getTelegramNewsItem(id)
  if (!item) return { title: 'Новость' }
  const title = item.text.slice(0, 70) || 'Новость 2В Сервис'
  return { title, description: item.text.slice(0, 160), alternates: { canonical: `/news/${id}` }, openGraph: { title, description: item.text.slice(0, 160), images: item.image ? [item.image] : undefined } }
}

export default async function NewsItemPage({ params }: Props) {
  const { id } = await params
  const item = await getTelegramNewsItem(id)
  if (!item) notFound()
  return <article className="section-pad pt-28 sm:pt-36"><div className="section-shell">
    <Link href="/news" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground"><ArrowLeft className="size-4" /> Все новости</Link>
    <div className="mt-8 grid gap-8 lg:grid-cols-[.72fr_1.28fr]">
      <div><time className="eyebrow text-primary" dateTime={item.date}>{new Intl.DateTimeFormat('ru-RU', { dateStyle: 'long', timeZone: 'Europe/Moscow' }).format(new Date(item.date))}</time><p className="mt-5 font-mono text-xs text-muted-foreground">Публикация #{item.id}</p></div>
      <div>{item.image && <div className="relative mb-8 aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-secondary"><Image src={item.image} alt="Иллюстрация к новости" fill unoptimized sizes="(max-width: 1024px) 100vw, 65vw" className="object-cover" /></div>}<h1 className="text-pretty text-3xl font-semibold leading-[1.08] tracking-[-.045em] sm:text-5xl">{item.text || 'Новая публикация 2В Сервис'}</h1><Link href={item.url} target="_blank" className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">Оригинал в Telegram <ArrowUpRight className="size-4" /></Link></div>
    </div>
  </div></article>
}
