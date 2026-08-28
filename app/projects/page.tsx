import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { PROJECTS } from '@/lib/content'

export const metadata: Metadata = { title: 'Проекты — 2В Сервис', description: 'Проекты внедрения, интеграции и поддержки критичных ИТ-систем.' }

export default function ProjectsPage() { return <>
<PageHero eyebrow="Проекты" title="Сложность превращаем в работающую систему." description="Показываем не только результат, но и задачу, масштаб, архитектурный подход и дальнейшую эксплуатацию." />
<section className="section-pad bg-background"><div className="section-shell"><div className="mb-12 grid gap-6 border-b border-border pb-9 md:grid-cols-3"><div><p className="eyebrow text-primary">Портфель</p><p className="mt-3 text-3xl font-black">{PROJECTS.length} кейсов</p></div><p className="text-sm leading-relaxed text-muted-foreground">Корпоративные системы, инфраструктура, интеграция и многолетняя поддержка.</p><p className="text-sm leading-relaxed text-muted-foreground">Авиаперевозки, TravelTech и распределённая корпоративная инфраструктура.</p></div><div className="flex flex-col gap-8">{PROJECTS.map((project,i)=><Link key={project.slug} href={`/projects/${project.slug}`} className="motion-card group grid overflow-hidden rounded-[2rem] bg-secondary lg:grid-cols-[.82fr_1.18fr]"><div className={`relative min-h-64 overflow-hidden ${i%2?'lg:order-2':''}`}><Image src={project.image} alt="" fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover opacity-85 transition-transform duration-700 group-hover:scale-[1.03]"/><div className="absolute inset-0 bg-surface/20"/></div><div className="flex min-w-0 flex-col justify-between p-7 md:p-10"><div><div className="flex items-center justify-between gap-4"><p className="eyebrow text-primary">{String(i+1).padStart(2,'0')} · {project.clientShort}</p><ArrowUpRight className="size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"/></div><h2 className="mt-7 text-balance text-3xl font-black leading-[1] tracking-[-.045em] md:text-5xl">{project.title}</h2><p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">{project.summary}</p></div><div className="mt-10 flex flex-wrap gap-2">{project.stack.slice(0,4).map(s=><span key={s} className="rounded-full border border-border px-3 py-1 text-xs">{s}</span>)}</div></div></Link>)}</div></div></section>
</> }
