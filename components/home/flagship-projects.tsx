import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PROJECTS } from '@/lib/content'

export function FlagshipProjects() {
  return (
    <section className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-[90rem] px-4 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold text-primary">Кейсы</p>
            <h2 className="mt-4 max-w-3xl text-balance text-4xl font-semibold leading-tight md:text-6xl">Решения, работающие в масштабе</h2>
          </div>
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-foreground">Все проекты <ArrowRight className="size-4" /></Link>
        </div>
        <div className="mt-12 divide-y divide-border border-y border-border bg-card">
          {PROJECTS.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} className="group grid gap-5 p-6 transition-colors hover:bg-secondary md:grid-cols-[1fr_.45fr_auto] md:items-center md:p-8">
              <div><p className="text-xs font-semibold uppercase tracking-wider text-primary">{project.industry} · {project.clientShort}</p><h3 className="mt-3 max-w-3xl text-2xl font-semibold leading-tight md:text-3xl">{project.title}</h3></div>
              <p className="text-sm text-muted-foreground">{project.stack.slice(0, 3).join(' · ')}</p>
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
