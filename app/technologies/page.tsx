import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { SystemVisual } from '@/components/system-visual'
import { SectionHeading } from '@/components/section-heading'
import { TECH_AREAS, INDUSTRIES, PROCESS_STEPS } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Технологии и экспертиза — 2В Сервис',
  description: 'Технологическая экспертиза 2В Сервис: документооборот, интеграция, BPM, отказоустойчивость и информационная безопасность.',
}

export default function TechnologiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Технологии и экспертиза"
        title="Технологическая база для устойчивых корпоративных систем"
        description="Компетенции, накопленные на проектах для крупнейших авиационных и транспортных заказчиков страны — от документооборота до отказоустойчивой интеграционной архитектуры."
      />

      <section className="border-b border-border bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="Экспертиза" title="Направления технологической экспертизы" />
          <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {TECH_AREAS.map((area) => (
              <div key={area.title} className="border-t border-border pt-5">
                <h3 className="text-base font-semibold leading-snug text-foreground">{area.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-foreground py-20 text-background md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Подход"
            title="Полный цикл работы с корпоративной системой"
            invert
          />
          <div className="mt-12 grid gap-px overflow-hidden border border-background/15 bg-background/15 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step) => (
              <div key={step.title} className="bg-foreground p-6">
                <h3 className="text-sm font-semibold leading-snug text-background">{step.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-background/60">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-secondary py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SystemVisual light className="min-h-[28rem]" />
          <div>
            <SectionHeading eyebrow="Отрасли" title="Отрасли, в которых мы работаем" align="left" />
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              {INDUSTRIES.map((industry) => (
                <div key={industry.title}>
                  <h3 className="text-base font-semibold leading-snug text-foreground">{industry.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
