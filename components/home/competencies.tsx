import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { CORE_COMPETENCIES } from '@/lib/content'

export function Competencies() {
  return (
    <section id="capabilities" className="section-pad bg-background">
      <div className="section-shell">
        <div className="grid gap-8 pb-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="eyebrow text-primary">Направления</p>
            <h2 className="section-title mt-5 max-w-4xl">Одна команда отвечает за всю цифровую среду.</h2>
          </div>
          <Link href="/services" className="inline-flex items-center gap-2 text-sm font-bold text-primary">
            Все услуги <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {CORE_COMPETENCIES.slice(0, 6).map((item, index) => (
            <article
              key={item.title}
              className="panel group flex flex-col gap-5 p-7 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <span className="index-badge">{String(index + 1).padStart(2, '0')}</span>
                <ArrowUpRight className="size-4 text-muted-foreground/50 transition-colors group-hover:text-primary" />
              </div>
              <h3 className="text-xl font-semibold leading-tight tracking-[-0.03em]">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
