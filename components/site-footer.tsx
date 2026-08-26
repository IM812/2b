import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { NAV_ITEMS } from '@/lib/nav'

export function SiteFooter() {
  return (
    <footer className="bg-surface text-surface-foreground">
      <div className="section-shell py-16 md:py-24">
        <div className="grid gap-14 border-b border-surface-foreground/15 pb-16 lg:grid-cols-[1.4fr_1fr]">
          <div><p className="eyebrow text-accent">Следующий проект</p><h2 className="mt-6 max-w-3xl text-balance text-4xl font-medium leading-[.98] tracking-[-.05em] md:text-6xl">Создадим ИТ-среду, на которую можно опереться.</h2></div>
          <div className="flex flex-col justify-end gap-5"><a href="mailto:info@2v-service.ru" className="text-2xl font-medium hover:text-accent">info@2v-service.ru</a><a href="tel:+74957875615" className="text-2xl font-medium hover:text-accent">+7 (495) 787-56-15</a><Link href="/contacts" className="mt-3 flex w-fit items-center gap-2 bg-accent px-6 py-4 text-sm font-bold text-accent-foreground">Начать разговор <ArrowUpRight className="size-4" /></Link></div>
        </div>
        <div className="grid gap-10 py-12 md:grid-cols-[1.2fr_2fr]">
          <div><Link href="/" className="inline-flex items-center gap-3"><span className="flex size-10 items-center justify-center bg-surface-foreground text-xs font-bold text-surface">2В</span><span className="font-bold">2В Сервис</span></Link><p className="mt-5 max-w-sm text-sm leading-relaxed text-surface-foreground/55">ИТ-аутсорсинг, инфраструктура и корпоративные системы для организаций федерального масштаба.</p></div>
          <nav className="grid grid-cols-2 gap-x-8 gap-y-4 md:grid-cols-4" aria-label="Навигация в подвале">{[...NAV_ITEMS, {label:'Контакты',href:'/contacts'}].map((item) => <Link key={item.href} href={item.href} className="text-sm text-surface-foreground/65 hover:text-surface-foreground">{item.label}</Link>)}</nav>
        </div>
        <div className="flex flex-col gap-3 border-t border-surface-foreground/15 pt-6 text-xs text-surface-foreground/40 md:flex-row md:justify-between"><p>© {new Date().getFullYear()} 2В Сервис</p><p>Москва, ул. 1-я Миусская, д. 20, стр. 5</p></div>
      </div>
    </footer>
  )
}
