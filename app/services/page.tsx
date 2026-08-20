import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, Check } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { Process } from '@/components/home/process'
import { CORE_COMPETENCIES } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Решения и услуги — 2В Сервис',
  description:
    'Комплексные ИТ-проекты для крупных компаний: от обследования бизнес-процессов и проектирования решения до внедрения, интеграции, технической поддержки и развития системы.',
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Решения и услуги"
        title="Система целиком. Не набор подрядчиков."
        description="От обследования бизнес-процессов и проектирования решения до внедрения, интеграции, технической поддержки и развития системы."
      />

      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
          <div className="flex flex-col gap-16">
            {CORE_COMPETENCIES.map((item, index) => (
              <div
                key={item.title}
                className="grid gap-8 border-t border-border pt-10 md:grid-cols-[0.4fr_0.6fr] md:gap-14 first:border-t-0 first:pt-0"
              >
                <div>
                  <span className="font-mono text-xs text-accent">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-foreground md:text-3xl">
                    {item.title}
                  </h2>
                  <p className="mt-3 max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {item.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3 border-t border-border py-4">
                      <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                      <span className="text-sm leading-relaxed text-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Process />

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="flex flex-col items-start justify-between gap-6 rounded-md border border-border bg-secondary/40 p-8 md:flex-row md:items-center md:p-12">
            <SectionHeading
              eyebrow="Готовы начать"
              title="Обсудим задачи вашего ИТ-ландшафта"
              className="md:max-w-lg"
            />
            <Link
              href="/contacts"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-sm bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              Обсудить проект
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
