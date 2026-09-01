import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, Radio } from 'lucide-react'
import { NewsCard } from '@/components/news/news-card'
import { getTelegramNews, NEWS_CHANNEL_URL } from '@/lib/telegram-news'

export const metadata: Metadata = { title: 'Новости', description: 'Новости, проекты и события компании 2В Сервис.', alternates: { canonical: '/news' }, openGraph: { title: 'Новости | 2В Сервис', description: 'Свежие новости, проекты и события компании 2В Сервис.', url: '/news' } }

export default async function NewsPage() {
  const news = await getTelegramNews()
  return <>
    <section className="overflow-hidden bg-surface pt-32 pb-16 text-surface-foreground sm:pt-40 sm:pb-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[1.35fr_.65fr] lg:items-end">
        <div><p className="eyebrow text-accent">Прямой эфир компании</p><h1 className="display-title mt-6 max-w-5xl">Новости<br /><span className="text-primary">Без пресс-релизов</span></h1></div>
        <div className="border-l border-white/15 pl-6"><Radio className="size-6 text-accent" /><p className="mt-5 text-lead text-white/65">Проекты, технологии и жизнь команды — прямо из официального Telegram-канала.</p><Link href={NEWS_CHANNEL_URL} target="_blank" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">Открыть канал <ArrowUpRight className="size-4" /></Link></div>
      </div>
    </section>
    <section className="section-pad bg-background"><div className="section-shell">
      {news.length ? <><NewsCard item={news[0]} featured /><div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">{news.slice(1).map((item) => <NewsCard key={item.id} item={item} />)}</div></> : <div className="panel flex min-h-80 flex-col items-start justify-between gap-8 p-7 sm:p-10"><div><p className="eyebrow text-primary">Лента готова</p><h2 className="section-title mt-5 max-w-3xl">Первая новость появится здесь автоматически</h2></div><Link href={NEWS_CHANNEL_URL} target="_blank" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">Перейти в Telegram <ArrowUpRight className="size-4" /></Link></div>}
    </div></section>
  </>
}
