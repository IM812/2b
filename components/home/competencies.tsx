import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { CORE_COMPETENCIES } from '@/lib/content'

export function Competencies() {
  return (
    <section id="capabilities" className="section-pad bg-background">
      <div className="section-shell">
        <div className="grid gap-8 border-b border-border pb-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="eyebrow text-primary">Направления</p>
            <h2 className="section-title mt-5 max-w-4xl">Одна команда отвечает за всю цифровую среду.</h2>
          </div>
          <Link href="/services" className="inline-flex items-center gap-2 text-sm font-bold text-primary">
            Все услуги <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <div>
          {CORE_COMPETENCIES.slice(0, 6).map((item, index) => (
            <article
              key={item.title}
              className="index-row border-b border-border md:grid-cols-[4rem_minmax(0,22rem)_minmax(0,1fr)]"
            >
              <p className="font-mono text-xs text-muted-foreground">{String(index + 1).padStart(2, '0')}</p>
              <h3 className="text-xl font-semibold leading-tight tracking-[-0.035em] md:text-2xl">{item.title}</h3>
              <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
