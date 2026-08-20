import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { PROJECTS } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Проекты — 2В Сервис',
  description: 'Флагманские проекты 2В Сервис для крупнейших авиационных и транспортных компаний страны.',
}

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Проекты"
        title="Реализованные проекты для крупнейших заказчиков"
        description="Полный цикл внедрения, интеграции и технической поддержки корпоративных информационных систем — от постановки задачи до промышленной эксплуатации."
      />

      <section className="border-b border-border bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-6">
            {PROJECTS.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group grid gap-6 border border-border bg-card p-8 transition-colors hover:border-accent/50 md:grid-cols-[1fr_auto] md:items-center md:p-10"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    <span>{project.industry}</span>
                    {project.contractValue && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="text-accent">{project.contractValue}</span>
                      </>
                    )}
                  </div>
                  <h2 className="mt-4 text-2xl font-semibold leading-snug text-foreground text-balance md:text-3xl">
                    {project.title}
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-border px-3 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="mt-5 text-sm font-medium text-foreground">{project.clientShort}</p>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-foreground md:justify-end">
                  <span>Подробнее о проекте</span>
                  <ArrowUpRight
                    className="size-4 text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
