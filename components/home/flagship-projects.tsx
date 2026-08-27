import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PROJECTS } from '@/lib/content'

export function FlagshipProjects() {
  return (
    <section className="section-pad bg-surface text-surface-foreground">
      <div className="section-shell">
        <div className="grid gap-8 pb-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="eyebrow text-surface-foreground/50">Проекты</p>
            <h2 className="section-title mt-5 max-w-4xl">Там, где остановка недопустима.</h2>
          </div>
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-bold">
            Все проекты <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <div className="flex flex-col gap-5">
          {PROJECTS.map((project, index) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="panel-ink group grid gap-x-10 gap-y-6 p-7 transition-colors duration-300 hover:bg-white/[0.04] md:grid-cols-[3rem_minmax(0,1fr)_minmax(0,16rem)] md:items-start md:p-9"
            >
              <span className="index-badge-ink">{String(index + 1).padStart(2, '0')}</span>

              <div>
                <p className="eyebrow text-surface-foreground/50">
                  {project.clientShort} · {project.industry}
                </p>
                <h3 className="mt-4 max-w-3xl text-balance text-2xl font-semibold leading-[1.06] tracking-[-0.035em] md:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-5 max-w-2xl text-sm leading-relaxed text-surface-foreground/60">{project.summary}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary">
                  Смотреть кейс{' '}
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>

              <dl className="flex flex-col gap-5 border-l border-white/10 pl-6">
                {project.contractValue ? (
                  <div>
                    <dt className="eyebrow text-surface-foreground/45">Стоимость</dt>
                    <dd className="num mt-2 text-2xl text-primary">{project.contractValue}</dd>
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
      </div>
    </section>
  )
}
