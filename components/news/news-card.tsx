import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { TelegramNews } from '@/lib/telegram-news'

const formatter = new Intl.DateTimeFormat('ru-RU', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/Moscow' })

export function NewsCard({ item, featured = false }: { item: TelegramNews; featured?: boolean }) {
  return (
    <article className={`group overflow-hidden rounded-[1.5rem] border border-border bg-card ${featured ? 'md:grid md:grid-cols-[1.15fr_.85fr]' : 'flex flex-col'}`}>
      {item.image && <div className={`relative overflow-hidden bg-secondary ${featured ? 'min-h-80 md:min-h-[32rem]' : 'aspect-[4/3]'}`}><Image src={item.image} alt="Иллюстрация к новости 2В Сервис" fill unoptimized sizes={featured ? '(max-width: 768px) 100vw, 58vw' : '(max-width: 768px) 100vw, 33vw'} className="object-cover transition-transform duration-500 group-hover:scale-[1.025]" /></div>}
      <div className="flex min-w-0 flex-1 flex-col justify-between gap-6 p-6 sm:p-8">
        <div className="flex flex-col gap-4">
          <time className="eyebrow text-primary" dateTime={item.date}>{formatter.format(new Date(item.date))}</time>
          <h2 className={`text-pretty font-semibold leading-[1.15] tracking-[-.03em] ${featured ? 'line-clamp-3 text-2xl sm:text-4xl' : 'line-clamp-2 text-xl sm:text-2xl'}`}>{item.title}</h2>
          {item.excerpt && <p className={`text-pretty leading-relaxed text-muted-foreground ${featured ? 'line-clamp-3 text-base' : 'line-clamp-3 text-sm'}`}>{item.excerpt}</p>}
        </div>
        <div className="flex items-center justify-between gap-4 border-t border-border pt-5"><Link href={`/news/${item.id}`} className="text-sm font-semibold text-primary">Подробнее</Link><ArrowUpRight className="size-5 text-muted-foreground" /></div>
      </div>
    </article>
  )
}
