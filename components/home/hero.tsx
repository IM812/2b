import Link from 'next/link'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { SystemVisual } from '@/components/system-visual'

export function Hero() {
  return (
    <section className="technical-grid border-b border-foreground/20 px-4 py-8 md:px-8 md:py-12">
      <div className="mx-auto max-w-[90rem] border-x border-foreground/20">
        <div className="flex items-center justify-between border-y border-foreground/20 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground md:px-6">
          <span>2V / Enterprise systems</span>
          <span className="hidden sm:inline">Moscow · UTC+3 · Operational</span>
          <span className="flex items-center gap-2"><i className="size-2 bg-primary" /> Online</span>
        </div>

        <div className="grid lg:grid-cols-[1.25fr_.75fr]">
          <div className="flex min-h-[34rem] flex-col justify-between border-b border-foreground/20 p-5 md:min-h-[42rem] md:p-8 lg:border-b-0 lg:border-r">
            <p className="reveal-up max-w-sm font-mono text-[11px] uppercase leading-relaxed tracking-[0.18em] text-muted-foreground">
              Единый ИТ-партнёр: инфраструктура, аутсорсинг и корпоративные системы
            </p>
            <h1 className="reveal-up reveal-delay-1 max-w-5xl text-balance text-[clamp(3.4rem,8.5vw,8.8rem)] font-semibold leading-[0.82] text-foreground">
              Системы,<br />которые<br /><span className="text-primary">работают.</span>
            </h1>
            <div className="reveal-up reveal-delay-2 flex flex-col gap-6 border-t border-foreground/20 pt-5 md:flex-row md:items-end md:justify-between">
              <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                С 2010 года проектируем, внедряем и поддерживаем ИТ-среду крупных государственных и коммерческих организаций — от рабочего места до критичной enterprise-системы.
              </p>
              <Link href="/projects" className="inline-flex shrink-0 items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] hover:text-primary">
                К проектам <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col bg-surface p-4 text-surface-foreground md:p-6">
            <div className="flex items-center justify-between pb-4 font-mono text-[9px] uppercase tracking-[0.16em] opacity-55">
              <span>System topology / live</span><span>01—06</span>
            </div>
            <SystemVisual light className="flex-1 border-surface-foreground/20" />
            <dl className="grid grid-cols-3 border-x border-b border-surface-foreground/20">
              {[['15 мин', 'Реакция'], ['24/7', 'Поддержка'], ['15+', 'Лет опыта']].map(([value, label]) => (
                <div key={label} className="border-r border-surface-foreground/20 p-4 last:border-r-0">
                  <dt className="text-xl font-semibold md:text-2xl">{value}</dt>
                  <dd className="mt-1 font-mono text-[9px] uppercase tracking-[0.14em] opacity-50">{label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-foreground/20 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground md:px-6">
          <span>Аутсорсинг · Инфраструктура · Интеграция · Поддержка</span>
          <a href="#capabilities" className="flex items-center gap-2 hover:text-primary">Ниже <ArrowDown className="size-3.5" /></a>
        </div>
      </div>
    </section>
  )
}
