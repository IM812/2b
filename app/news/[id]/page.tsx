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
  const description = (item.excerpt || item.text).slice(0, 160)
  return { title: item.title, description, alternates: { canonical: `/news/${id}` }, openGraph: { title: item.title, description, images: item.image ? [item.image] : undefined } }
}

export default async function NewsItemPage({ params }: Props) {
  const { id } = await params
  const item = await getTelegramNewsItem(id)
  if (!item) notFound()
  return <article className="section-pad pt-28 sm:pt-36"><div className="section-shell">
    <div className="mx-auto max-w-3xl">
      <Link href="/news" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground"><ArrowLeft className="size-4" /> Все новости</Link>
      <time className="eyebrow mt-8 block text-primary" dateTime={item.date}>{new Intl.DateTimeFormat('ru-RU', { dateStyle: 'long', timeZone: 'Europe/Moscow' }).format(new Date(item.date))}</time>
      <h1 className="mt-4 text-pretty text-3xl font-semibold leading-[1.12] tracking-[-.03em] sm:text-4xl">{item.title}</h1>
      {item.image && <div className="relative mt-8 aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-secondary"><Image src={item.image} alt="Иллюстрация к новости" fill unoptimized sizes="(max-width: 768px) 100vw, 48rem" className="object-cover" /></div>}
      {item.excerpt && <p className="mt-8 whitespace-pre-line text-pretty text-lead leading-relaxed text-muted-foreground">{item.excerpt}</p>}
      <Link href={item.url} target="_blank" className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">Оригинал в Telegram <ArrowUpRight className="size-4" /></Link>
    </div>
  </div></article>
}
