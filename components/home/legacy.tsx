import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { LEGACY_SERVICES } from '@/lib/content'

export function Legacy() {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-24">
        <div data-reveal="clip" className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
            Дополнительные компетенции
          </p>
          <h2 className="mt-3 text-balance font-heading text-2xl font-semibold leading-tight tracking-tight text-foreground md:text-3xl">
            За годы работы мы сформировали опыт и в смежных направлениях
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            Сегодня основной фокус компании сосредоточен на корпоративных информационных системах и
            комплексной автоматизации. Но накопленная за годы работы инфраструктура и опыт остаются частью
            наших возможностей.
          </p>
        </div>

        <div className="mt-10 grid gap-px overflow-hidden bg-foreground/10 sm:grid-cols-2">
          {LEGACY_SERVICES.map((service, index) => (
            <div key={service.title} data-reveal="line" style={{ '--reveal-delay': `${index * 45}ms` } as React.CSSProperties} className="bg-secondary p-6">
              <h3 className="font-heading text-base font-medium leading-snug text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>

        <Link
          href="/additional-competencies"
          className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-primary"
        >
          Подробнее о дополнительных компетенциях
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}
