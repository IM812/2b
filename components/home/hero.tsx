import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { SignalPulse } from '@/components/signal-pulse'

export function Hero() {
  return (
    <section className="overflow-hidden bg-background pb-10 pt-28 md:pb-16 md:pt-36">
      <div className="section-shell">
        <div className="flex items-center gap-3 text-primary"><span className="signal-dot" /><p className="eyebrow">Инфраструктура работает. Бизнес движется.</p></div>
        <div className="mt-8 grid items-end gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(20rem,.55fr)]">
          <h1 className="display-title max-w-5xl">ИТ, которое<span className="block text-primary">держит масштаб.</span></h1>
          <div className="pb-2">
            <p className="text-lead max-w-xl text-muted-foreground">Проектируем, внедряем и круглосуточно поддерживаем цифровую среду крупных организаций — от рабочего места до критичной системы.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/contacts" className="inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5">Обсудить задачу <ArrowRight className="size-4" /></Link>
              <Link href="/projects" className="inline-flex items-center gap-3 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-bold transition-colors hover:border-primary">Смотреть проекты</Link>
            </div>
          </div>
        </div>
        <div className="mt-12 grid gap-4 lg:grid-cols-[minmax(0,1.4fr)_minmax(18rem,.6fr)]">
          <SignalPulse />
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">
            <div className="rounded-[1.75rem] bg-primary p-6 text-primary-foreground md:p-8"><p className="eyebrow text-primary-foreground/65">Под управлением</p><p className="num mt-8 text-5xl md:text-7xl">8 500</p><p className="mt-2 text-sm text-primary-foreground/75">пользователей ежедневно</p></div>
            <div className="rounded-[1.75rem] bg-accent p-6 text-accent-foreground md:p-8"><div className="flex items-center gap-2 text-sm font-bold"><Check className="size-4" /> На связи</div><p className="num mt-8 text-4xl md:text-6xl">15 мин</p><p className="mt-2 text-sm text-accent-foreground/75">норматив реакции</p></div>
          </div>
        </div>
      </div>
    </section>
  )
}
