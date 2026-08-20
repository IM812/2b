import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PROJECTS } from '@/lib/content'
import { SectionHeading } from '@/components/section-heading'

const IMAGES = ['/images/case-document-system.png', '/images/case-integration.png']

export function FlagshipProjects() {
  const featured = PROJECTS.slice(0, 2)

  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Проекты"
            title="Реализуем проекты федерального масштаба"
            className="md:mr-8"
          />
          <Link
            href="/projects"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-foreground hover:text-accent"
          >
            Все проекты
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {featured.map((project, index) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group flex flex-col overflow-hidden rounded-md border border-border transition-colors hover:border-accent/50"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={IMAGES[index]}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {project.industry}
                </p>
                <h3 className="mt-3 text-xl font-semibold leading-tight text-foreground">
                  {project.client}
                </h3>
                <p className="mt-2 text-base font-medium text-foreground/90">{project.title}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.summary}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                  {project.contractValue ? (
                    <span className="text-sm font-semibold text-accent">
                      Стоимость договора — {project.contractValue}
                    </span>
                  ) : (
                    <span className="text-sm font-semibold text-muted-foreground">
                      Действующий договор
                    </span>
                  )}
                  <ArrowUpRight
                    className="size-4 text-muted-foreground transition-colors group-hover:text-accent"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
