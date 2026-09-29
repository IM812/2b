import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { getTelegramNews } from '@/lib/telegram-news'

export async function LatestNews() {
  const news = (await getTelegramNews()).slice(0, 3)
  return <section className="section-pad bg-secondary"><div className="section-shell">
    <div className="flex flex-col justify-between gap-6 border-b border-border pb-8 sm:flex-row sm:items-end"><div><p className="eyebrow text-primary">Полезное</p><h2 className="section-title mt-5">Что происходит<br />прямо сейчас</h2></div><Link href="/news" className="inline-flex items-center gap-2 text-sm font-semibold">Всё полезное <ArrowRight className="size-4" /></Link></div>
    {news.length ? <div className="grid gap-px overflow-hidden rounded-[1.5rem] bg-border mt-8 md:grid-cols-3">{news.map((item) => <Link key={item.id} href={`/news/${item.id}`} className="group flex min-h-64 flex-col justify-between gap-8 bg-card p-6 sm:p-8"><time className="eyebrow text-primary">{new Intl.DateTimeFormat('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric', timeZone: 'Europe/Moscow' }).format(new Date(item.date))}</time><div><h3 className="text-pretty line-clamp-3 text-xl font-semibold leading-tight tracking-[-.035em]">{item.title}</h3>{item.excerpt ? <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{item.excerpt}</p> : null}<ArrowUpRight className="mt-6 size-5 text-muted-foreground" /></div></Link>)}</div> : <div className="mt-8 flex min-h-56 items-end rounded-[1.5rem] bg-card p-6 sm:p-8"><p className="max-w-xl text-xl font-semibold">Скоро здесь появятся первые публикации из официального Telegram-канала.</p></div>}
  </div></section>
}
