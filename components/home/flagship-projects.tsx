import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PROJECTS } from '@/lib/content'

export function FlagshipProjects() {
  return (
    <section className="section-pad bg-surface text-surface-foreground">
      <div className="section-shell">
        <div className="grid gap-8 border-b rule-ink pb-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="eyebrow text-surface-foreground/50">Проекты</p>
            <h2 className="section-title mt-5 max-w-4xl">Там, где остановка недопустима.</h2>
          </div>
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-bold">
            Все проекты <ArrowUpRight className="size-4" />
          </Link>
        </div>

        {PROJECTS.map((project, index) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group grid gap-x-10 gap-y-6 border-b rule-ink py-10 md:grid-cols-[4rem_minmax(0,1fr)_minmax(0,16rem)] md:py-14"
          >
            <p className="font-mono text-xs text-surface-foreground/45">{String(index + 1).padStart(2, '0')}</p>

            <div>
              <p className="eyebrow text-surface-foreground/50">
                {project.clientShort} · {project.industry}
              </p>
              <h3 className="mt-4 max-w-3xl text-balance text-2xl font-semibold leading-[1.06] tracking-[-0.04em] md:text-4xl">
                {project.title}
              </h3>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-surface-foreground/60">{project.summary}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-surface-foreground/80 transition-colors group-hover:text-surface-foreground">
                Смотреть кейс <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </div>

            <dl className="flex flex-col gap-5 border-l rule-ink pl-6">
              {project.contractValue ? (
                <div>
                  <dt className="eyebrow text-surface-foreground/45">Стоимость</dt>
                  <dd className="num mt-2 text-2xl">{project.contractValue}</dd>
                </div>
              ) : null}
              <div>
                <dt className="eyebrow text-surface-foreground/45">Статус</dt>
                <dd className="mt-2 text-sm text-surface-foreground/75">{project.timeline}</dd>
              </div>
              <div>
                <dt className="eyebrow text-surface-foreground/45">Состав работ</dt>
                <dd className="mt-2 text-sm text-surface-foreground/75">{project.tags.join(' · ')}</dd>
              </div>
            </dl>
          </Link>
        ))}
      </div>
    </section>
  )
}
