import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { ClientsIntro } from '@/components/editorial/page-intros'
import { PROJECTS } from '@/lib/content'

export const metadata: Metadata = { title: 'Клиенты и форматы работы', description: 'Опыт 2В Сервис в авиации, TravelTech и корпоративной инфраструктуре: внедрение, развитие и поддержка по SLA.', alternates: { canonical: '/clients' }, openGraph: { url: '/clients', title: 'Клиенты и форматы работы | 2В Сервис', description: 'Проектное внедрение, развитие систем и многолетнее сопровождение.' } }
const FORMATS=[['Проект внедрения','Полный цикл с фиксированными этапами и критериями приёмки.'],['Развитие системы','Регулярные релизы и адаптация решения к новым процессам.'],['Поддержка по SLA','Мониторинг, линии поддержки и управляемая эскалация.']]

export default function ClientsPage(){return <>
<ClientsIntro />
<section className="section-pad bg-background"><div className="section-shell"><div className="grid gap-8 border-b border-border pb-10 lg:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow text-primary">Форматы работы</p><h2 className="section-title mt-5">От отдельного проекта до многолетнего сопровождения.</h2></div><p className="max-w-xl text-lg leading-relaxed text-muted-foreground lg:pt-8">Прозрачная модель взаимодействия зависит от задачи: проектный контур, развитие действующей системы или постоянная эксплуатация.</p></div><div className="grid gap-4 pt-10 md:grid-cols-3">{FORMATS.map(([title,text],i)=><article key={title} className={`min-h-64 rounded-[2rem] p-7 ${i===1?'bg-primary text-primary-foreground':'bg-secondary'}`}><span className="font-mono text-xs opacity-50">0{i+1}</span><h2 className="mt-16 text-3xl font-bold tracking-tight">{title}</h2><p className="mt-4 text-sm leading-relaxed opacity-65">{text}</p></article>)}</div></div></section>
<section className="section-pad bg-surface text-surface-foreground"><div className="section-shell"><p className="eyebrow text-primary">Подтверждённые кейсы</p><div className="mt-10 flex flex-col">{PROJECTS.map((project,i)=><Link key={project.slug} href={`/projects/${project.slug}`} className="group grid gap-4 border-t border-white/15 py-8 last:border-b md:grid-cols-[4rem_.7fr_1.3fr_auto] md:items-center"><span className="font-mono text-xs text-primary">{String(i+1).padStart(2,'0')}</span><div><p className="text-xs uppercase tracking-widest text-surface-foreground/40">{project.industry}</p><p className="mt-2 font-bold">{project.clientShort}</p></div><h3 className="max-w-3xl text-balance text-xl font-bold md:text-2xl">{project.title}</h3><ArrowUpRight className="size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"/></Link>)}</div></div></section>
</>}
