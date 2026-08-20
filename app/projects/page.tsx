import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { PROJECTS } from '@/lib/content'

export const metadata: Metadata = { title: 'Проекты — 2В Сервис', description: 'Флагманские проекты 2В Сервис.' }

export default function ProjectsPage() {
  return (
    <>
      <PageHero eyebrow="Проекты" title="Работа, которую можно измерить" description="Не витрина абстрактных возможностей, а реальные системы в промышленной эксплуатации." />
      <section className="bg-surface py-20 text-surface-foreground md:py-32">
        <div className="mx-auto max-w-[90rem] px-4 md:px-8">
          <div className="border-t border-surface-foreground/20">
            {PROJECTS.map((project, index) => (
              <Link key={project.slug} href={`/projects/${project.slug}`} className="group grid gap-6 border-b border-surface-foreground/20 py-10 lg:grid-cols-[5rem_1fr_.55fr_auto] lg:items-center lg:py-14">
                <span className="font-mono text-xs text-surface-foreground/40">0{index + 1} / 03</span>
                <div><div className="font-mono text-[10px] uppercase tracking-[0.15em] text-[oklch(0.42_0.09_125)]">{project.industry} · {project.clientShort}</div><h2 className="mt-4 max-w-3xl text-balance text-3xl font-semibold leading-[1.02] md:text-5xl">{project.title}</h2><p className="mt-5 max-w-2xl text-sm leading-relaxed text-surface-foreground/58 md:text-base">{project.summary}</p></div>
                <div className="flex flex-wrap gap-2 lg:flex-col">{project.stack.map((item) => <span key={item} className="font-mono text-[9px] uppercase tracking-[0.12em] text-surface-foreground/45">{item}</span>)}</div>
                <div className="flex items-center gap-5"><span className="font-serif text-4xl italic text-[oklch(0.42_0.09_125)]">{project.contractValue || '24/7'}</span><ArrowUpRight className="size-6 transition-transform group-hover:rotate-45" /></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
