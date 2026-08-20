import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PROJECTS } from '@/lib/content'
import { SectionHeading } from '@/components/section-heading'

export function FlagshipProjects() {
  const featured = PROJECTS.slice(0, 2)

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Проекты"
            title="Реализуем проекты федерального масштаба"
            className="md:mr-8"
          />
          <Link
            href="/projects"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-foreground hover:text-primary"
          >
            Все проекты
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {featured.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group relative flex min-h-[26rem] flex-col justify-end overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/75 to-background/10" />
              <div className="relative flex flex-col p-7">
                <p className="font-mono text-xs uppercase tracking-wider text-primary">
                  {project.industry}
                </p>
                <h3 className="mt-3 text-2xl font-semibold leading-tight text-foreground">
                  {project.clientShort}
                </h3>
                <p className="mt-2 text-base font-medium text-foreground/90">{project.title}</p>
                <div className="mt-6 flex items-center justify-between border-t border-foreground/15 pt-4">
                  {project.contractValue ? (
                    <span className="text-sm font-semibold text-primary">
                      Стоимость договора — {project.contractValue}
                    </span>
                  ) : (
                    <span className="text-sm font-semibold text-muted-foreground">
                      Действующий договор
                    </span>
                  )}
                  <ArrowUpRight
                    className="size-4 text-muted-foreground transition-colors group-hover:text-primary"
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
