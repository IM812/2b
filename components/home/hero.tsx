import Link from 'next/link'
import { ArrowDown, ArrowRight, Check } from 'lucide-react'
import { SignalPulse } from '@/components/signal-pulse'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pb-16 pt-28 md:pt-36">
      <div className="pointer-events-none absolute -right-[4vw] top-16 select-none text-[clamp(10rem,28vw,32rem)] font-black leading-none tracking-[-0.12em] text-primary/[0.045]" aria-hidden>
        2В
      </div>
      <div className="section-shell relative">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-primary"><span className="signal-dot" /><p className="eyebrow">Системы в рабочем состоянии</p></div>
          <p className="hidden font-mono text-[10px] uppercase tracking-[.18em] text-muted-foreground md:block">Москва · 55.7579° N</p>
        </div>

        <div className="relative mt-10 lg:min-h-[35rem]">
          <h1 className="relative z-10 max-w-[76rem] text-balance text-[clamp(4.4rem,10.5vw,10.5rem)] font-semibold leading-[.79] tracking-[-.085em]">
            Держим
            <span className="block pl-[10vw] text-primary">цифровой</span>
            <span className="block">контур.</span>
          </h1>
          <div className="relative z-20 mt-10 max-w-xl lg:absolute lg:bottom-2 lg:right-0 lg:mt-0 lg:w-[31rem]">
            <p className="text-lead text-foreground/72">Берём ответственность за инфраструктуру, корпоративные системы и поддержку крупных организаций.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/contacts" className="inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-accent-foreground transition-transform hover:-translate-y-1">Обсудить задачу <ArrowRight className="size-4" /></Link>
              <Link href="/projects" className="inline-flex items-center gap-3 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-bold transition-transform hover:-translate-y-1">Проекты</Link>
            </div>
          </div>
        </div>

        <div className="relative mt-16 lg:mt-24">
          <div className="lg:mr-52"><SignalPulse /></div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:absolute lg:-bottom-10 lg:right-0 lg:mt-0 lg:w-[27rem] lg:rotate-[-2deg]">
            <div className="rounded-[2rem] bg-primary p-7 text-primary-foreground shadow-2xl"><p className="eyebrow opacity-55">Под управлением</p><p className="num mt-9 text-6xl">8 500</p><p className="mt-2 text-sm opacity-70">пользователей ежедневно</p></div>
            <div className="rounded-[2rem] bg-accent p-7 text-accent-foreground shadow-2xl"><div className="flex items-center gap-2 text-sm font-bold"><Check className="size-4" /> На связи</div><p className="num mt-9 text-5xl">15 мин</p><p className="mt-2 text-sm opacity-70">норматив реакции</p></div>
          </div>
        </div>

        <a href="#capabilities" className="mt-20 inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[.2em] text-muted-foreground"><ArrowDown className="size-4" /> Смотреть возможности</a>
      </div>
    </section>
  )
}
