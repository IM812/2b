import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { LEGACY_SERVICES } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Дополнительные компетенции — 2В Сервис',
  description: 'Дополнительные сервисы 2В Сервис: ИТ-обслуживание, консалтинг и сопутствующие услуги, накопленные за годы работы с корпоративными заказчиками.',
}

export default function AdditionalCompetenciesPage() {
  return (
    <>
      <PageHero
        eyebrow="Дополнительные компетенции"
        title="Сервисы, накопленные за годы работы с корпоративными заказчиками"
        description="Помимо основной специализации на корпоративных информационных системах, мы сохраняем и развиваем компетенции, сформированные на предыдущих этапах работы компании."
      />

      <section className="border-b border-border bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="Компетенции" title="Дополнительные направления работы" />
          <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
            {LEGACY_SERVICES.map((service) => (
              <div key={service.title} className="bg-background p-8">
                <h3 className="text-lg font-semibold leading-snug text-foreground">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-6xl px-6">
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
            Эти компетенции носят вспомогательный характер по отношению к основному направлению деятельности —
            внедрению и сопровождению корпоративных информационных систем — и предоставляются действующим и новым
            заказчикам по запросу.
          </p>
        </div>
      </section>
    </>
  )
}
