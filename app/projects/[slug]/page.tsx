import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { PROJECTS } from '@/lib/content'
import { Button } from '@/components/ui/button'

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = PROJECTS.find((p) => p.slug === slug)
  if (!project) return {}
  return {
    title: `${project.title} — 2В Сервис`,
    description: project.summary,
  }
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const index = PROJECTS.findIndex((p) => p.slug === slug)
  const project = PROJECTS[index]
  if (!project) notFound()

  const next = PROJECTS[(index + 1) % PROJECTS.length]

  return (
    <>
      <section className="border-b border-border bg-background py-20 text-foreground md:py-32">
        <div className="mx-auto max-w-[90rem] px-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground/65 transition-colors hover:text-background"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Все проекты
          </Link>
          <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-wide text-foreground/50">
            <span>{project.industry}</span>
            {project.contractValue && (
              <>
                <span aria-hidden="true">·</span>
                <span className="text-accent">{project.contractValue}</span>
              </>
            )}
          </div>
          <h1 className="mt-7 max-w-6xl text-balance text-5xl font-semibold leading-[0.94] md:text-8xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/65">{project.summary}</p>
          <p className="mt-8 text-sm font-medium text-foreground/80">{project.client}</p>
        </div>
      </section>

      <section className="border-b border-border bg-background py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="flex flex-col gap-10">
            <div>
              <h2 className="text-sm font-medium uppercase tracking-wide text-accent">Задача</h2>
              <p className="mt-3 text-lg leading-relaxed text-foreground text-pretty">{project.task}</p>
            </div>
            <div>
              <h2 className="text-sm font-medium uppercase tracking-wide text-accent">Решение</h2>
              <p className="mt-3 text-lg leading-relaxed text-foreground text-pretty">{project.solution}</p>
            </div>
            <div>
              <h2 className="text-sm font-medium uppercase tracking-wide text-accent">Масштаб</h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground text-pretty">{project.scale}</p>
            </div>
            <div>
              <h2 className="text-sm font-medium uppercase tracking-wide text-accent">Результат</h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground text-pretty">{project.result}</p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="border border-border bg-card p-6">
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Сроки</p>
              <p className="mt-1 text-sm font-medium text-foreground">{project.timeline}</p>
              <div className="mt-5 h-px w-full bg-border" />
              <p className="mt-5 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Технологии и решения
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="border border-border px-3 py-1 text-xs font-medium text-foreground">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Следующий проект</p>
            <h3 className="mt-2 text-xl font-semibold leading-snug text-foreground text-balance">{next.title}</h3>
          </div>
          <Button
            size="lg"
            className="shrink-0"
            nativeButton={false}
            render={
              <Link href={`/projects/${next.slug}`}>
                Смотреть проект
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            }
          />
        </div>
      </section>
    </>
  )
}
