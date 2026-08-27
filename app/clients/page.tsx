import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { PROJECTS } from '@/lib/content'

export const metadata: Metadata = { title: 'Клиенты — 2В Сервис', description: 'Клиенты 2В Сервис — крупнейшие авиационные и транспортные компании страны.' }

const CLIENTS = [
  { name: 'ПАО «Аэрофлот»', description: 'Крупнейший авиаперевозчик страны. Действующие договоры на развитие, сопровождение и интеграцию корпоративных информационных систем.' },
  { name: 'АО «Авиакомпания «Россия»', description: 'Внедрение корпоративной автоматизированной системы управления документацией (КАСУД) и её техническая поддержка.' },
  { name: 'Exat.ru', description: 'Перенос серверов, баз данных и веб-сервисов на технологическую площадку 2В Сервис, резервирование и постоянное администрирование.' },
]

export default function ClientsPage(){return <>
  <PageHero eyebrow="Клиенты" title="Там, где остановка недопустима." description="Мы работаем с организациями, для которых непрерывность корпоративных систем — часть непрерывности всего бизнеса." />
  <section className="section-pad bg-background"><div className="section-shell grid gap-5 md:grid-cols-2">{CLIENTS.map((client,i)=><article key={client.name} className={`flex min-h-72 flex-col justify-between rounded-[2rem] p-8 md:p-10 ${i===0?'bg-primary text-primary-foreground':i===1?'bg-accent text-accent-foreground':'bg-surface text-surface-foreground md:col-span-2'}`}><span className="text-xs uppercase tracking-widest opacity-60">Заказчик 0{i+1}</span><div><h2 className="text-3xl font-black tracking-[-0.04em] md:text-4xl">{client.name}</h2><p className="mt-4 max-w-md leading-relaxed opacity-75">{client.description}</p></div></article>)}</div></section>
  <section className="section-pad bg-surface text-surface-foreground"><div className="section-shell"><p className="eyebrow text-primary">Реализованные проекты</p><div className="mt-10 flex flex-col">{PROJECTS.map((project)=><Link key={project.slug} href={`/projects/${project.slug}`} className="group flex items-center justify-between gap-6 border-t border-white/12 py-7 transition-colors last:border-b hover:text-primary"><div><p className="text-xs uppercase tracking-widest text-surface-foreground/45">{project.clientShort}</p><h3 className="mt-2 max-w-3xl text-balance text-xl font-bold md:text-2xl">{project.title}</h3></div><ArrowUpRight className="size-6 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"/></Link>)}</div></div></section>
</>}
