'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { NAV_ITEMS, COMPANY_NAME } from '@/lib/nav'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-foreground/20 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-[90rem] items-center justify-between px-4 md:h-16 md:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 text-foreground"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-8 w-8 items-center justify-center bg-foreground font-mono text-[10px] font-medium text-background">
            2В
          </span>
          <span className="hidden text-sm font-semibold uppercase tracking-[0.16em] sm:inline">{COMPANY_NAME}</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Основная навигация">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-foreground',
                pathname === item.href && 'text-foreground',
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center lg:flex">
          <Link
            href="/contacts"
            className="inline-flex items-center gap-2 bg-primary px-4 py-2.5 font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-primary-foreground transition-colors hover:bg-foreground"
          >
            Обсудить проект
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <button
          type="button"
          className="flex size-10 items-center justify-center text-foreground lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-border bg-background px-4 py-4 lg:hidden"
          aria-label="Мобильная навигация"
        >
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'block rounded-sm px-2 py-2.5 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground',
                    pathname === item.href && 'text-foreground',
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contacts"
            onClick={() => setOpen(false)}
            className="mt-4 flex items-center justify-center gap-1.5 bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
          >
            Обсудить проект
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </nav>
      )}
    </header>
  )
}
