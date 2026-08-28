'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { NAV_ITEMS } from '@/lib/nav'
import { LeadFormTrigger } from '@/components/lead-form-trigger'
import { BrandMark } from '@/components/brand-mark'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-foreground/10 bg-background/80 backdrop-blur-xl">
      <div className="section-shell flex h-16 items-center justify-between md:h-18">
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3" onClick={() => setOpen(false)} aria-label="2В Сервис — на главную">
          <BrandMark className="size-10" />
          <span className="text-sm font-bold tracking-[-0.02em]">Сервис</span>
        </Link>
        <nav className="hidden items-center gap-7 xl:flex" aria-label="Основная навигация">
          {NAV_ITEMS.map((item) => <Link key={item.href} href={item.href} className={cn('text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground', pathname === item.href && 'text-foreground')}>{item.label}</Link>)}
        </nav>
        <div className="hidden items-center gap-6 lg:flex">
          <a href="tel:+74957875615" className="text-xs font-semibold">+7 495 787-56-15</a>
          <LeadFormTrigger className="flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-xs font-semibold text-background transition-colors hover:bg-primary hover:text-primary-foreground">Обсудить проект <ArrowUpRight className="size-4" /></LeadFormTrigger>
        </div>
        <button type="button" className="flex size-11 items-center justify-center lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? 'Закрыть меню' : 'Открыть меню'} aria-expanded={open}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <nav className="mobile-menu fixed inset-x-0 top-16 flex h-[calc(100dvh-4rem)] flex-col overflow-y-auto bg-foreground text-background lg:hidden" aria-label="Мобильная навигация">
          <div className="flex items-center justify-between border-b border-background/15 px-5 py-4">
            <p className="font-mono text-[11px] uppercase tracking-[.22em] text-background/55">Навигация / 2В Сервис</p>
            <span className="flex items-center gap-2 text-xs text-background/65"><span className="size-1.5 rounded-full bg-accent" />На связи</span>
          </div>
          <ul className="flex flex-1 flex-col px-5">
            {NAV_ITEMS.map((item, index) => (
              <li key={item.href} className="mobile-menu-item" style={{ '--menu-index': index } as React.CSSProperties}>
                <Link href={item.href} onClick={() => setOpen(false)} className={cn('group flex min-h-16 items-center gap-4 border-b border-background/15 py-3 transition-colors hover:text-primary', pathname === item.href && 'text-primary')}>
                  <span className="w-6 font-mono text-[10px] text-background/35">{String(index + 1).padStart(2, '0')}</span>
                  <span className="min-w-0 flex-1 text-lg font-medium tracking-[-.025em] sm:text-xl">{item.label}</span>
                  <span className="flex size-8 items-center justify-center rounded-full border border-background/20 transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground"><ArrowUpRight className="size-3.5 transition-transform" /></span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="border-t border-background/15 bg-background/5 p-5">
            <div className="mb-4 flex items-end justify-between gap-4">
              <div><p className="mb-1 text-[11px] text-background/45">Прямой контакт</p><a href="tel:+74957875615" className="text-base font-semibold">+7 495 787-56-15</a></div>
              <a href="mailto:info@2bservice.ru" className="text-xs text-background/60">info@2bservice.ru</a>
            </div>
            <LeadFormTrigger onClick={() => setOpen(false)} className="group flex w-full items-center justify-between rounded-full bg-primary px-6 py-4 font-semibold text-primary-foreground transition-colors hover:bg-background hover:text-foreground"><span>Обсудить проект</span><ArrowUpRight className="size-5 transition-transform" /></LeadFormTrigger>
          </div>
        </nav>
      )}
    </header>
  )
}
