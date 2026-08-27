import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { PROJECTS } from '@/lib/content'

export function FlagshipProjects() {
  const featured = PROJECTS[0]
  return (
    <section className="section-pad overflow-hidden bg-surface text-surface-foreground">
      <div className="section-shell">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div><p className="eyebrow text-white/45">Избранные проекты</p><h2 className="section-title mt-5 max-w-4xl">Сложность, превращённая в рабочую систему.</h2></div>
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-bold">Все проекты <ArrowRight className="size-4" /></Link>
        </div>
        <Link href={`/projects/${featured.slug}`} className="group mt-14 grid overflow-hidden rounded-[2.25rem] bg-primary text-primary-foreground lg:grid-cols-[1.2fr_.8fr]">
          <div className="flex min-h-[30rem] flex-col justify-between p-8 md:p-12">
            <div className="flex items-center justify-between"><p className="eyebrow text-white/60">{featured.clientShort} · {featured.industry}</p><ArrowUpRight className="size-6 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></div>
            <div><h3 className="max-w-4xl text-balance text-4xl font-semibold leading-[.98] tracking-[-0.055em] md:text-6xl">{featured.title}</h3><p className="mt-6 max-w-2xl leading-relaxed text-white/70">{featured.summary}</p></div>
          </div>
          <div className="flex min-h-80 flex-col justify-end bg-accent p-8 text-accent-foreground md:p-12">
            <p className="eyebrow opacity-60">Результат</p>
            <p className="num mt-5 text-5xl md:text-7xl">{featured.contractValue || '24/7'}</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed opacity-70">{featured.timeline}. Единая ответственность за проектирование, внедрение и поддержку.</p>
          </div>
        </Link>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {PROJECTS.slice(1, 3).map((project, index) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} className="group flex min-h-80 flex-col justify-between rounded-[2rem] border border-white/10 bg-white/[.045] p-8 transition-colors hover:bg-white/[.08]">
              <div className="flex justify-between"><span className="eyebrow text-white/45">0{index + 2} · {project.industry}</span><ArrowUpRight className="size-5 text-white/45 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></div>
              <div><h3 className="text-balance text-3xl font-semibold leading-tight tracking-[-0.045em]">{project.title}</h3><p className="mt-5 line-clamp-2 text-sm leading-relaxed text-white/55">{project.summary}</p></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
