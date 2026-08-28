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

        <div className="relative mt-7 sm:mt-10 lg:min-h-[35rem]">
          <h1 data-reveal className="relative z-10 max-w-[76rem] text-[3.45rem] font-semibold leading-[.82] tracking-[-.075em] min-[360px]:text-[3.8rem] sm:text-[4.4rem] md:text-[clamp(4.4rem,10.5vw,10.5rem)] md:leading-[.79] md:tracking-[-.085em]">
            Держим
            <span className="block pl-5 text-primary sm:pl-10 md:pl-[10vw]">цифровой</span>
            <span className="block">контур.</span>
          </h1>
          <div data-reveal="right" style={{ '--reveal-delay': '160ms' } as React.CSSProperties} className="relative z-20 mt-8 max-w-xl sm:mt-10 lg:absolute lg:bottom-2 lg:right-0 lg:mt-0 lg:w-[31rem]">
            <p className="text-lead text-foreground/72">Берём ответственность за инфраструктуру, корпоративные системы и поддержку крупных организаций.</p>
            <div className="mt-6 flex flex-col gap-2.5 min-[380px]:flex-row sm:mt-7 sm:flex-wrap sm:gap-3">
              <LeadFormTrigger className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-accent px-5 py-3 text-sm font-bold text-accent-foreground transition-transform hover:-translate-y-1 sm:px-6 sm:py-3.5">Обсудить задачу <ArrowRight className="size-4" /></LeadFormTrigger>
              <Link href="/projects" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-border bg-card px-5 py-3 text-sm font-bold transition-transform hover:-translate-y-1 sm:px-6 sm:py-3.5">Проекты</Link>
            </div>
          </div>
        </div>

        <div data-reveal="scale" style={{ '--reveal-delay': '260ms' } as React.CSSProperties} className="relative mt-10 sm:mt-16 lg:mt-24">
          <div className="lg:mr-52"><SignalPulse /></div>
          <div className="mt-3 grid gap-3 sm:mt-4 sm:grid-cols-2 sm:gap-4 lg:absolute lg:-bottom-10 lg:right-0 lg:mt-0 lg:w-[27rem] lg:rotate-[-2deg]">
            <div className="rounded-[1.5rem] bg-primary p-5 text-primary-foreground shadow-2xl sm:rounded-[2rem] sm:p-7"><p className="eyebrow opacity-55">Под управлением</p><p className="num mt-6 text-5xl sm:mt-9 sm:text-6xl">8 500</p><p className="mt-2 text-sm opacity-70">пользователей ежедневно</p></div>
            <div className="rounded-[1.5rem] bg-accent p-5 text-accent-foreground shadow-2xl sm:rounded-[2rem] sm:p-7"><div className="flex items-center gap-2 text-sm font-bold"><Check className="size-4" /> На связи</div><p className="num mt-6 text-4xl sm:mt-9 sm:text-5xl">15 мин</p><p className="mt-2 text-sm opacity-70">норматив реакции</p></div>
          </div>
        </div>

        <a href="#capabilities" className="mt-20 inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[.2em] text-muted-foreground"><ArrowDown className="size-4" /> Смотреть возможности</a>
      </div>
    </section>
  )
}
