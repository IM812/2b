import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { CORE_COMPETENCIES } from '@/lib/content'

export function Competencies() {
  return (
    <section id="capabilities" className="section-pad bg-background">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[.45fr_1fr] lg:gap-20">
          <div>
            <p className="eyebrow text-primary">Экспертиза</p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">Единая ответственность за все уровни цифровой среды.</p>
          </div>
          <div>
            <h2 className="section-title max-w-4xl">Технологии должны работать на бизнес, а не требовать внимания.</h2>
            <div className="mt-14 grid gap-px overflow-hidden rounded-md bg-border md:grid-cols-2">
              {CORE_COMPETENCIES.slice(0, 6).map((item) => (
                <article key={item.title} className="group min-h-64 bg-card p-7 transition-colors hover:bg-secondary md:p-9">
                  <div className="flex items-start justify-between gap-6">
                    <h3 className="max-w-sm text-2xl font-semibold leading-tight tracking-[-0.03em]">{item.title}</h3>
                    <ArrowUpRight className="size-5 shrink-0 text-primary transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" />
                  </div>
                  <p className="mt-8 max-w-md text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </article>
              ))}
            </div>
            <Link href="/services" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-foreground">Все направления <ArrowUpRight className="size-4" /></Link>
          </div>
        </div>
      </div>
    </section>
  )
}
