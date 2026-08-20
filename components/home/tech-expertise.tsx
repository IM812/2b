import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { TECH_AREAS } from '@/lib/content'
import { SectionHeading } from '@/components/section-heading'

export function TechExpertise() {
  const preview = TECH_AREAS.slice(0, 6)

  return (
    <section className="border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Технологическая экспертиза"
            title="Инженерная глубина, а не просто перечень услуг"
            className="md:mr-8"
          />
          <Link
            href="/technologies"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-foreground hover:text-accent"
          >
            Вся экспертиза
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-12 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {preview.map((area) => (
            <div key={area.title} className="border-t border-border pt-5">
              <h3 className="text-base font-semibold leading-snug text-foreground">{area.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
