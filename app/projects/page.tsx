import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { PROJECTS } from '@/lib/content'

export const metadata: Metadata = { title:'Проекты — 2В Сервис', description:'Флагманские проекты 2В Сервис.' }
export default function ProjectsPage(){return <><PageHero eyebrow="Проекты" title="Работа, которую можно измерить." description="Реальные системы в промышленной эксплуатации — для организаций с высокой ценой остановки."/><section className="section-pad bg-background"><div className="section-shell flex flex-col gap-8">{PROJECTS.map((project,i)=><Link key={project.slug} href={`/projects/${project.slug}`} className="group grid overflow-hidden border border-border bg-card lg:grid-cols-[1.05fr_.95fr]"><div className="relative min-h-80"><Image src={project.image} alt="" fill priority={i === 0} className="media-grade object-cover transition-transform duration-700 group-hover:scale-[1.03]"/></div><div className="flex min-h-80 flex-col justify-between p-8 md:p-12"><div className="flex justify-between"><p className="eyebrow text-primary">0{i+1} · {project.clientShort}</p><ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"/></div><div><h2 className="text-balance text-3xl font-medium leading-[1.02] tracking-[-.045em] md:text-4xl">{project.title}</h2><p className="mt-5 text-sm leading-relaxed text-muted-foreground">{project.summary}</p><p className="mt-8 font-mono text-[10px] uppercase tracking-wider text-primary">{project.stack.slice(0,3).join(' · ')}</p></div></div></Link>)}</div></section></>}
