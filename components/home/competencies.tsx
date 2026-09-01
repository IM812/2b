import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { CORE_COMPETENCIES } from '@/lib/content'

export function Competencies() {
  return (
    <section id="capabilities" className="section-pad overflow-hidden bg-background">
      <div className="section-shell">
        <div data-reveal="clip" className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
          <div>
            <p className="eyebrow text-primary">Что держим в работе</p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">Не разрозненные подрядчики, а один центр ответственности за весь ИТ-ландшафт.</p>
          </div>
          <h2 className="section-title">От первого обращения до критичного контура.</h2>
        </div>
        <div className="mt-14 grid gap-4 lg:grid-cols-12 lg:grid-rows-2">
          {CORE_COMPETENCIES.slice(0, 6).map((item, index) => (
            <article key={item.title} data-reveal style={{ '--reveal-delay': `${Math.min(index, 3) * 90}ms` } as React.CSSProperties} className={`motion-card group relative min-h-56 overflow-hidden rounded-[1.5rem] p-5 sm:min-h-64 sm:rounded-[2rem] sm:p-7 md:p-9 ${index === 0 ? 'bg-primary text-primary-foreground lg:col-span-7 lg:row-span-2' : index === 1 ? 'bg-accent text-accent-foreground lg:col-span-5' : index === 2 ? 'bg-surface text-surface-foreground lg:col-span-5' : 'border border-border bg-card lg:col-span-4'}`}>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs opacity-55">0{index + 1}</span>
                <ArrowUpRight className="size-5 opacity-50 transition-transform" />
              </div>
              <div className={index === 0 ? 'mt-14 sm:mt-24 md:mt-40' : 'mt-10 sm:mt-14'}>
                <h3 className={index === 0 ? 'max-w-xl text-[1.7rem] font-semibold leading-none tracking-[-0.045em] sm:text-[2rem] md:text-[3.45rem]' : 'text-xl font-semibold leading-tight tracking-[-0.035em] sm:text-[1.2rem]'}>{item.title}</h3>
                <p className="mt-5 max-w-lg text-sm leading-relaxed opacity-65">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
        <Link href="/services" className="mt-8 inline-flex items-center gap-3 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-bold">Все направления <ArrowRight className="size-4" /></Link>
      </div>
    </section>
  )
}
