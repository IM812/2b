import Link from 'next/link'
import { ArrowDown, ArrowRight, Check } from 'lucide-react'
import { SignalPulse } from '@/components/signal-pulse'
import { LeadFormTrigger } from '@/components/lead-form-trigger'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pb-12 pt-24 sm:pb-16 sm:pt-28 md:pt-36">
      <div className="pointer-events-none absolute -right-6 top-14 select-none text-[9rem] font-black leading-none tracking-[-0.12em] text-primary/[0.05] sm:-right-[4vw] sm:top-16 sm:text-[clamp(10rem,28vw,32rem)] sm:text-primary/[0.045]" aria-hidden>
        2В
      </div>
      <div className="section-shell relative">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-primary"><span className="signal-dot" /><p className="eyebrow">Системы в рабочем состоянии</p></div>
          <p className="hidden font-mono text-[10px] uppercase tracking-[.18em] text-muted-foreground md:block">Москва · 55.7579° N</p>
        </div>

        <div className="mt-7 grid items-end gap-8 sm:mt-10 lg:grid-cols-[minmax(0,1.45fr)_minmax(18rem,.55fr)] lg:gap-12">
          <h1 data-reveal="clip" className="relative z-10 max-w-[62rem] text-[clamp(3rem,16vw,4rem)] font-semibold leading-[.9] tracking-[-.065em] sm:text-[clamp(4rem,10vw,6.75rem)] sm:leading-[.86] md:tracking-[-.075em]">
            Держим
            <span className="block pl-5 text-primary sm:pl-10 lg:pl-[6vw]">цифровой</span>
            <span className="block">контур.</span>
          </h1>
          <div data-reveal style={{ '--reveal-delay': '140ms' } as React.CSSProperties} className="relative z-20 max-w-xl lg:pb-2">
            <p className="text-lead text-foreground/72">Берём ответственность за инфраструктуру, корпоративные системы и поддержку крупных организаций.</p>
            <div className="mt-6 flex flex-col gap-2.5 min-[380px]:flex-row sm:flex-wrap sm:gap-3">
              <LeadFormTrigger className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-accent px-5 py-3 text-sm font-bold text-accent-foreground motion-lift sm:px-6 sm:py-3.5">Обсудить задачу <ArrowRight className="size-4" /></LeadFormTrigger>
              <Link href="/projects" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-border bg-card px-5 py-3 text-sm font-bold motion-lift sm:px-6 sm:py-3.5">Проекты</Link>
            </div>
          </div>
        </div>

        <div data-reveal="line" style={{ '--reveal-delay': '220ms' } as React.CSSProperties} className="mt-10 grid items-stretch gap-3 sm:mt-16 sm:gap-4 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <SignalPulse />
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-1">
            <div className="flex min-h-40 flex-col justify-between rounded-[1.25rem] bg-primary p-4 text-primary-foreground sm:min-h-48 sm:rounded-[2rem] sm:p-7"><p className="eyebrow opacity-55">Под управлением</p><div><p className="num mt-5 text-4xl sm:text-6xl">8 500</p><p className="mt-2 text-xs opacity-70 sm:text-sm">пользователей ежедневно</p></div></div>
            <div className="flex min-h-40 flex-col justify-between rounded-[1.25rem] bg-accent p-4 text-accent-foreground sm:min-h-48 sm:rounded-[2rem] sm:p-7"><div className="flex items-center gap-2 text-xs font-bold sm:text-sm"><Check className="size-4" /> На связи</div><div><p className="num mt-5 text-3xl sm:text-5xl">15 мин</p><p className="mt-2 text-xs opacity-70 sm:text-sm">норматив реакции</p></div></div>
          </div>
        </div>

        <a href="#capabilities" className="mt-12 inline-flex min-h-11 items-center gap-3 font-mono text-[10px] uppercase tracking-[.16em] text-muted-foreground sm:mt-20 sm:tracking-[.2em]"><ArrowDown className="size-4" /> Смотреть возможности</a>
      </div>
    </section>
  )
}
