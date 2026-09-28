'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { BrandEmblem } from '@/components/brand-logo'

const STORAGE_KEY = '2b-cookie-consent'

type Consent = 'all' | 'necessary'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!window.localStorage.getItem(STORAGE_KEY)) setVisible(true)
  }, [])

  const save = (value: Consent) => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ value, at: new Date().toISOString() }))
    setVisible(false)
  }

  console.log('[v0] cookie render', visible)
  if (!visible) return null

  return (
    <section
      role="dialog"
      aria-live="polite"
      aria-label="Использование файлов cookie"
      className="cookie-banner fixed inset-x-3 bottom-3 z-[55] mx-auto max-w-md overflow-hidden rounded-3xl border border-surface-foreground/10 bg-surface text-surface-foreground shadow-2xl shadow-surface/30 sm:inset-x-auto sm:left-6 sm:bottom-6 sm:mx-0"
    >
      <div className="flex flex-col gap-4 p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <BrandEmblem className="size-9 text-surface-foreground" />
          <div className="min-w-0 flex-1">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-surface-foreground/55">Cookie · 152-ФЗ</p>
            <h2 className="mt-1 text-base font-bold tracking-[-0.02em]">Мы используем cookie</h2>
          </div>
          <button
            type="button"
            onClick={() => save('necessary')}
            className="-mr-1 -mt-1 flex size-8 items-center justify-center rounded-full text-surface-foreground/60 transition-colors hover:bg-surface-foreground/10 hover:text-surface-foreground"
            aria-label="Закрыть и оставить только необходимые"
          >
            <X className="size-4" />
          </button>
        </div>
        <p className="text-sm leading-relaxed text-surface-foreground/70 text-pretty">
          Они помогают сайту работать стабильно и понимать, какие разделы полезны. Подробнее — в{' '}
          <Link href="/privacy" className="text-surface-foreground underline decoration-primary decoration-2 underline-offset-4 hover:text-primary">
            политике конфиденциальности
          </Link>
          .
        </p>
        <div className="flex flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={() => save('all')}
            className="flex-1 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-surface-foreground hover:text-surface"
          >
            Принять все
          </button>
          <button
            type="button"
            onClick={() => save('necessary')}
            className="flex-1 rounded-full border border-surface-foreground/20 px-5 py-3 text-sm font-semibold transition-colors hover:border-surface-foreground/50"
          >
            Только необходимые
          </button>
        </div>
      </div>
    </section>
  )
}
