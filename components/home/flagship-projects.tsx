import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PROJECTS } from '@/lib/content'

export function FlagshipProjects() {
  return (
    <section className="bg-background py-24 md:py-36">
      <div className="mx-auto max-w-[90rem] px-4 md:px-8">
        <div className="flex flex-col gap-7 border-b border-foreground/18 pb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">Системы в эксплуатации</p>
            <h2 className="mt-5 max-w-4xl text-balance text-5xl font-semibold leading-[0.92] md:text-8xl">Масштаб, <span className="font-serif font-normal italic text-foreground/45">подтверждённый</span> работой.</h2>
          </div>
          <Link href="/projects" className="group inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.12em]">Все кейсы <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></Link>
        </div>
        <div className="divide-y divide-foreground/18">
          {PROJECTS.map((project, index) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} className="group grid gap-6 py-9 md:grid-cols-[5rem_1.35fr_.65fr_auto] md:items-center md:py-12">
              <span className="font-mono text-xs text-muted-foreground">0{index + 1} / 03</span>
              <div><p className="font-mono text-[10px] uppercase tracking-[0.15em] text-primary">{project.industry} · {project.clientShort}</p><h3 className="mt-3 max-w-2xl text-balance text-2xl font-semibold leading-tight md:text-4xl">{project.title}</h3></div>
              <div className="flex gap-2 font-mono text-[9px] uppercase tracking-[0.1em] text-muted-foreground md:flex-col">{project.stack.slice(0, 3).map((item) => <span key={item}>{item}</span>)}</div>
              <div className="flex items-center gap-5"><span className="font-serif text-3xl italic text-primary md:text-4xl">{project.contractValue || '24/7'}</span><ArrowUpRight className="size-5 transition-transform group-hover:rotate-45" /></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
