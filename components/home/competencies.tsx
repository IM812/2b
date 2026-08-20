import { CORE_COMPETENCIES } from '@/lib/content'
import { SectionHeading } from '@/components/section-heading'

export function Competencies() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
        <SectionHeading
          eyebrow="Основные решения"
          title="Чем конкретно занимается компания"
          description="Не двадцать разрозненных услуг, а шесть крупных компетенций, вокруг которых строится каждый проект."
        />

        <div className="mt-14 grid gap-px overflow-hidden bg-foreground/10 md:grid-cols-2 lg:grid-cols-3">
          {CORE_COMPETENCIES.map((item) => (
            <div key={item.title} className="flex flex-col bg-background p-8">
              <span className="h-1 w-8 bg-primary" aria-hidden="true" />
              <h3 className="mt-5 font-heading text-lg font-medium leading-snug text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
