import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { TECH_AREAS } from '@/lib/content'
import { SectionHeading } from '@/components/section-heading'

export function TechExpertise() {
  const preview = TECH_AREAS.slice(0, 6)

  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
        <div data-reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            invert
            eyebrow="Технологическая экспертиза"
            title="Инженерная глубина, а не просто перечень услуг"
            className="md:mr-8"
          />
          <Link
            href="/technologies"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-surface-foreground hover:text-primary"
          >
            Вся экспертиза
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-14 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {preview.map((area, index) => (
            <div key={area.title} data-reveal style={{ '--reveal-delay': `${index * 70}ms` } as React.CSSProperties} className="border-t border-surface-foreground/15 pt-5">
              <h3 className="font-heading text-base font-medium leading-snug text-surface-foreground">
                {area.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-surface-foreground/65">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
