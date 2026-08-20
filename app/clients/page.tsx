import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { PROJECTS } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Клиенты — 2В Сервис',
  description: 'Клиенты 2В Сервис — крупнейшие авиационные и транспортные компании страны.',
}

const CLIENTS = [
  {
    name: 'ПАО «Аэрофлот»',
    description: 'Крупнейший авиаперевозчик страны. Действующие договоры на развитие, сопровождение и интеграцию корпоративных информационных систем.',
  },
  {
    name: 'АО «Авиакомпания «Россия»',
    description: 'Внедрение корпоративной автоматизированной системы управления документацией (КАСУД) и её техническая поддержка.',
  },
]

export default function ClientsPage() {
  return (
    <>
      <PageHero
        eyebrow="Клиенты"
        title="Доверие крупнейших авиационных компаний страны"
        description="Мы работаем с организациями, для которых непрерывность корпоративных систем — часть непрерывности всего бизнеса."
        image="/images/editorial-flight-ops.png"
      />

      <section className="border-b border-border bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 sm:grid-cols-2">
            {CLIENTS.map((client) => (
              <div key={client.name} className="border border-border bg-card p-8">
                <h2 className="text-xl font-semibold leading-snug text-foreground">{client.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{client.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="Проекты" title="Что мы реализовали для наших клиентов" />
          <div className="mt-10 flex flex-col gap-4">
            {PROJECTS.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group flex items-center justify-between gap-6 border border-border bg-background p-6 transition-colors hover:border-accent/50"
              >
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {project.clientShort}
                  </p>
                  <h3 className="mt-1 text-base font-semibold leading-snug text-foreground text-balance">
                    {project.title}
                  </h3>
                </div>
                <ArrowUpRight
                  className="size-4 shrink-0 text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
