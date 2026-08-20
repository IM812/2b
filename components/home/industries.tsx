import { INDUSTRIES } from '@/lib/content'
import { SectionHeading } from '@/components/section-heading'

export function Industries() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <SectionHeading eyebrow="Отрасли" title="С кем мы работаем" />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((industry) => (
            <div key={industry.title} className="rounded-md border border-border p-6">
              <h3 className="text-base font-semibold leading-snug text-foreground">{industry.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
