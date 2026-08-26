'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown, ArrowUpRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-svh overflow-hidden bg-surface text-surface-foreground">
      <Image
        src="/images/hero-command-center.png"
        alt="Центр управления ИТ-инфраструктурой"
        fill
        priority
        className="media-grade object-cover object-[68%_center]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,oklch(0.095_0.018_258/.98)_0%,oklch(0.095_0.018_258/.88)_40%,oklch(0.095_0.018_258/.25)_76%,oklch(0.095_0.018_258/.08)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-surface to-transparent" />

      <div className="section-shell relative flex min-h-svh flex-col pt-28 md:pt-32">
        <div className="flex items-center justify-between border-b border-surface-foreground/20 pb-5">
          <p className="eyebrow text-accent">Mission-critical IT operations</p>
          <p className="eyebrow hidden text-surface-foreground/50 md:block">Москва · с 2010 года</p>
        </div>

        <div className="flex flex-1 flex-col justify-center py-16 md:py-24">
          <p className="reveal-up mb-8 max-w-sm text-sm leading-relaxed text-surface-foreground/65 md:ml-[42%]">
            Инфраструктура, корпоративные системы и поддержка для организаций, где остановка невозможна.
          </p>
          <h1 className="reveal-up text-balance text-[clamp(4rem,10vw,10rem)] font-medium leading-[.82] tracking-[-.07em]">
            Системы<br />держат <span className="text-accent">курс.</span>
          </h1>
          <div className="mt-10 flex flex-wrap items-center gap-4 md:ml-[42%]">
            <Link href="/contacts" className="inline-flex items-center gap-3 bg-accent px-7 py-4 text-sm font-bold text-accent-foreground transition-colors hover:bg-surface-foreground">
              Обсудить задачу <ArrowUpRight className="size-4" />
            </Link>
            <Link href="/projects" className="inline-flex items-center gap-3 border border-surface-foreground/35 px-7 py-4 text-sm font-bold transition-colors hover:bg-surface-foreground hover:text-surface">
              Смотреть проекты <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>

        <div className="grid border-t border-surface-foreground/20 md:grid-cols-[1fr_auto] md:items-center">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              ['8 500', 'пользователей'],
              ['1 000+', 'серверов'],
              ['15 мин', 'реакция'],
              ['24/7', 'поддержка'],
            ].map(([value, label]) => (
              <div key={label} className="border-r border-surface-foreground/15 py-5 pr-5">
                <p className="text-2xl font-medium tracking-[-.04em]">{value}</p>
                <p className="mt-1 text-xs text-surface-foreground/50">{label}</p>
              </div>
            ))}
          </div>
          <ArrowDown className="m-6 hidden size-5 text-accent md:block" />
        </div>
      </div>
    </section>
  )
}
