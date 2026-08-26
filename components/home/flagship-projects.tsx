import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PROJECTS } from '@/lib/content'

export function FlagshipProjects() {
  return <section className="section-pad bg-surface text-surface-foreground"><div className="section-shell">
    <div className="grid gap-10 lg:grid-cols-[.45fr_1fr]"><p className="eyebrow text-accent">Избранные проекты</p><div><h2 className="section-title max-w-5xl">Результат виден там, где нельзя остановиться.</h2><p className="text-lead mt-8 max-w-2xl text-surface-foreground/60">Проекты для авиации и крупных организаций с высокой ценой ошибки и строгими требованиями к непрерывности.</p></div></div>
    <div className="mt-16 flex flex-col gap-6">{PROJECTS.map((project, index) => <Link key={project.slug} href={`/projects/${project.slug}`} className="group grid overflow-hidden border border-surface-foreground/15 bg-surface-foreground/[.035] lg:grid-cols-2"><div className={index % 2 ? 'relative min-h-80 lg:order-2' : 'relative min-h-80'}><Image src={project.image} alt="" fill className="media-grade object-cover transition-transform duration-700 group-hover:scale-[1.03]" /></div><div className="flex min-h-80 flex-col justify-between p-7 md:p-10 lg:p-14"><div className="flex justify-between"><p className="eyebrow text-accent">{project.clientShort} · {project.industry}</p><ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></div><div><h3 className="text-balance text-3xl font-medium leading-[1.02] tracking-[-.045em] md:text-4xl">{project.title}</h3><p className="mt-5 max-w-xl text-sm leading-relaxed text-surface-foreground/60">{project.summary}</p></div></div></Link>)}</div>
    <Link href="/projects" className="mt-10 inline-flex items-center gap-2 text-sm font-bold text-accent">Все проекты <ArrowUpRight className="size-4" /></Link>
  </div></section>
}
