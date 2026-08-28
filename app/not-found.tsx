import Link from 'next/link'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { BrandMark } from '@/components/brand-mark'
import { LeadFormTrigger } from '@/components/lead-form-trigger'

export default function NotFound() {
  return (
    <main className="relative flex min-h-[calc(100svh-4rem)] overflow-hidden bg-surface pt-16 text-surface-foreground">
      <div className="route-grid absolute inset-0 opacity-70" aria-hidden="true" />
      <div className="section-shell relative flex flex-1 items-center py-12 sm:py-16 lg:py-20">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
          <div data-reveal className="relative z-10 max-w-xl">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[.06] px-4 py-2 font-mono text-[10px] uppercase tracking-[.18em] text-white/65">
              <span className="signal-dot" /> Ошибка маршрута · 404
            </div>
            <h1 className="text-balance text-[3.4rem] font-semibold leading-[.9] tracking-[-.065em] sm:text-7xl lg:text-[6.5rem]">Такой страницы нет</h1>
            <p className="mt-7 max-w-lg text-pretty text-base leading-relaxed text-white/60 sm:text-lg">Похоже, адрес изменился или маршрут больше не существует. Вернитесь на главную — там всё работает по плану.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/" className="motion-lift inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground"><ArrowLeft className="size-4" /> На главную</Link>
              <LeadFormTrigger className="motion-lift inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-white/20 bg-white/[.06] px-6 py-3.5 text-sm font-bold text-white">Обсудить проект <ArrowUpRight className="size-4" /></LeadFormTrigger>
            </div>
          </div>

          <div data-reveal="scale" style={{ '--reveal-delay': '140ms' } as React.CSSProperties} className="relative mx-auto aspect-square w-full max-w-[35rem]" aria-hidden="true">
            <div className="absolute inset-[7%] rounded-[2.5rem] border border-white/10 bg-white/[.04] shadow-[0_40px_100px_-30px_rgba(0,72,255,.4)] backdrop-blur-sm" />
            <div className="absolute inset-[15%] rounded-[2rem] border border-primary/50" />
            <div className="absolute left-[17%] top-[17%] text-[clamp(6rem,19vw,13rem)] font-semibold leading-none tracking-[-.09em] text-white">4</div>
            <div className="absolute right-[16%] top-[17%] text-[clamp(6rem,19vw,13rem)] font-semibold leading-none tracking-[-.09em] text-white">4</div>
            <div className="absolute left-1/2 top-1/2 flex size-[29%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[2rem] bg-primary shadow-[0_0_0_12px_rgba(39,95,235,.15)]">
              <BrandMark className="size-[70%] text-white" />
            </div>
            <div className="not-found-route absolute left-[8%] top-1/2 h-px w-[84%] border-t border-dashed border-accent/80">
              <span className="not-found-node absolute -top-2 size-4 rounded-full bg-accent shadow-[0_0_0_8px_rgba(255,91,62,.14)]" />
            </div>
            <span className="absolute bottom-[10%] left-1/2 -translate-x-1/2 font-mono text-[9px] uppercase tracking-[.22em] text-white/40">route not found / recalculating</span>
          </div>
        </div>
      </div>
    </main>
  )
}
