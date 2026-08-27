import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { CORE_COMPETENCIES } from '@/lib/content'

export function Competencies() {
  return (
    <section id="capabilities" className="section-pad overflow-hidden bg-background">
      <div className="section-shell">
        <div className="grid gap-8 border-b border-border pb-10 md:pb-14 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
          <div>
            <p className="eyebrow text-primary">Что держим в работе</p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">Один центр ответственности за весь ИТ-ландшафт.</p>
          </div>
          <h2 className="section-title">От первого обращения до критичного контура.</h2>
        </div>

        <div className="divide-y divide-border">
          {CORE_COMPETENCIES.slice(0, 6).map((item, index) => (
            <article key={item.title} className="group grid min-w-0 gap-5 py-7 sm:py-9 md:grid-cols-[4rem_.75fr_1fr_auto] md:items-start md:gap-8">
              <span className="font-mono text-[10px] text-muted-foreground">0{index + 1} / 06</span>
              <h3 className="max-w-md text-[1.65rem] font-semibold leading-[1.02] tracking-[-0.045em] sm:text-3xl md:text-4xl">{item.title}</h3>
              <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">{item.description}</p>
              <span className="flex size-10 items-center justify-center rounded-full border border-border transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground" aria-hidden="true">
                <ArrowUpRight className="size-4" />
              </span>
            </article>
          ))}
        </div>

        <div className="flex justify-end border-t border-border pt-7">
          <Link href="/services" className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-foreground px-6 text-sm font-bold text-background sm:w-auto">
            Все направления <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
