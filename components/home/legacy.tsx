import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { LEGACY_SERVICES } from '@/lib/content'

export function Legacy() {
  return (
    <section className="border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Дополнительные компетенции
          </p>
          <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-foreground md:text-3xl">
            За годы работы мы сформировали опыт и в смежных направлениях
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            Сегодня основной фокус компании сосредоточен на корпоративных информационных системах и
            комплексной автоматизации. Но накопленная за годы работы инфраструктура и опыт остаются частью
            наших возможностей.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {LEGACY_SERVICES.map((service) => (
            <div key={service.title} className="rounded-md border border-border bg-background p-6">
              <h3 className="text-base font-semibold leading-snug text-foreground">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>

        <Link
          href="/additional-competencies"
          className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-accent"
        >
          Подробнее о дополнительных компетенциях
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}
