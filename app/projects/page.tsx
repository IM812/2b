import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { PROJECTS } from '@/lib/content'

export const metadata: Metadata = { title: 'Проекты — 2В Сервис', description: 'Флагманские проекты 2В Сервис.' }

export default function ProjectsPage() {
  return <>
    <PageHero eyebrow="Проекты" title="Работа, которую можно измерить." description="Реальные системы в промышленной эксплуатации — для организаций с высокой ценой остановки." />
    <section className="section-pad bg-background"><div className="section-shell flex flex-col gap-6">
      {PROJECTS.map((project,i)=><Link key={project.slug} href={`/projects/${project.slug}`} className={`group grid gap-8 rounded-[2rem] p-8 transition-transform duration-300 hover:-translate-y-1 md:grid-cols-[1fr_18rem] md:p-12 ${i%2===0?'bg-surface text-surface-foreground':'bg-secondary'}`}>
        <div>
          <p className="eyebrow text-primary">{project.clientShort} · {project.industry}</p>
          <h2 className="mt-6 max-w-3xl text-balance text-3xl font-black leading-[0.98] tracking-[-0.05em] md:text-5xl">{project.title}</h2>
          <p className="mt-5 max-w-2xl leading-relaxed opacity-65">{project.summary}</p>
          <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold">Смотреть кейс <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"/></span>
        </div>
        <div className="flex flex-col justify-between gap-6 border-t border-current/15 pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
          {project.contractValue && <div><p className="text-4xl font-black tracking-tighter text-primary md:text-5xl">{project.contractValue}</p><p className="mt-1 text-xs uppercase tracking-widest opacity-50">Стоимость договора</p></div>}
          <div className="flex flex-wrap gap-2">{project.stack.slice(0,4).map(s=><span key={s} className="rounded-full border border-current/20 px-3 py-1 text-xs">{s}</span>)}</div>
        </div>
      </Link>)}
    </div></section>
  </>
}
