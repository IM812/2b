import { CORE_COMPETENCIES } from '@/lib/content'
import { SectionHeading } from '@/components/section-heading'

export function Competencies() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <SectionHeading
          eyebrow="Основные решения"
          title="Чем конкретно занимается компания"
          description="Не двадцать разрозненных услуг, а шесть крупных компетенций, вокруг которых строится каждый проект."
        />

        <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {CORE_COMPETENCIES.map((item) => (
            <div key={item.title} className="flex flex-col bg-background p-7">
              <span className="h-1 w-8 bg-accent" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-semibold leading-snug text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
