'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { NAV_ITEMS } from '@/lib/nav'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-foreground/10 bg-background/80 backdrop-blur-xl">
      <div className="section-shell flex h-16 items-center justify-between md:h-18">
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3" onClick={() => setOpen(false)} aria-label="2В Сервис — на главную">
          <span className="flex size-9 items-center justify-center rounded-full bg-foreground text-xs font-bold text-background sm:rounded-xl">
            2В
          </span>
          <span className="text-sm font-bold tracking-[-0.02em]">Сервис</span>
        </Link>
        <nav className="hidden items-center gap-7 xl:flex" aria-label="Основная навигация">
          {NAV_ITEMS.map((item) => <Link key={item.href} href={item.href} className={cn('text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground', pathname === item.href && 'text-foreground')}>{item.label}</Link>)}
        </nav>
        <div className="hidden items-center gap-6 lg:flex">
          <a href="tel:+74957875615" className="text-xs font-semibold">+7 495 787-56-15</a>
          <Link href="/contacts" className="flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-xs font-semibold text-background transition-colors hover:bg-primary hover:text-primary-foreground">Обсудить проект <ArrowUpRight className="size-4" /></Link>
        </div>
        <button type="button" className="flex size-11 items-center justify-center lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? 'Закрыть меню' : 'Открыть меню'} aria-expanded={open}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && <nav className="border-t border-border bg-background px-5 py-6 lg:hidden" aria-label="Мобильная навигация"><ul className="flex flex-col">{NAV_ITEMS.map((item) => <li key={item.href}><Link href={item.href} onClick={() => setOpen(false)} className="flex items-center justify-between border-b border-border py-4 text-lg font-medium">{item.label}<ArrowUpRight className="size-4 text-muted-foreground" /></Link></li>)}</ul>        <Link href="/contacts" onClick={() => setOpen(false)} className="mt-6 flex justify-center rounded-full bg-primary px-5 py-4 font-semibold text-primary-foreground">Обсудить проект</Link></nav>}
    </header>
  )
}
