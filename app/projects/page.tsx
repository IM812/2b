import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { PROJECTS } from '@/lib/content'

export const metadata: Metadata = { title: 'Проекты — 2В Сервис', description: 'Флагманские проекты 2В Сервис.' }

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Проекты"
        title="Работа, которую можно измерить."
        description="Реальные системы в промышленной эксплуатации — для организаций с высокой ценой остановки."
      />
      <section className="section-pad bg-background">
        <div className="section-shell flex flex-col gap-5">
          {PROJECTS.map((project, i) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="panel group grid gap-x-10 gap-y-6 p-7 transition-transform duration-300 hover:-translate-y-1 md:grid-cols-[3rem_minmax(0,1fr)_minmax(0,15rem)] md:items-start md:p-9"
            >
              <span className="index-badge">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <p className="eyebrow text-primary">
                  {project.clientShort} · {project.industry}
                </p>
                <h2 className="mt-4 max-w-3xl text-balance text-2xl font-semibold leading-[1.06] tracking-[-0.035em] md:text-4xl">
                  {project.title}
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
              </div>
              <div className="flex flex-col gap-4 border-l border-border pl-6">
                {project.contractValue && <p className="num text-2xl text-primary">{project.contractValue}</p>}
                <p className="text-sm text-muted-foreground">{project.stack.slice(0, 3).join(' · ')}</p>
                <span className="inline-flex items-center gap-2 text-sm font-bold">
                  Кейс <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
