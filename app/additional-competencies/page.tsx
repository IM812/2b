import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { LEGACY_SERVICES } from '@/lib/content'

export const metadata: Metadata = { title: 'Дополнительные компетенции — 2В Сервис', description: 'Дополнительные сервисы 2В Сервис.' }
export default function AdditionalCompetenciesPage(){return <>
<PageHero eyebrow="Дополнительные компетенции" title="Опыт, который остаётся полезным." description="Компетенции, сформированные за годы работы с корпоративными заказчиками и усиливающие наши основные проекты." />
<section className="section-pad bg-background"><div className="section-shell grid gap-5 md:grid-cols-2">{LEGACY_SERVICES.map((service,i)=><article key={service.title} className={`flex min-h-80 flex-col justify-between rounded-[2rem] p-8 md:p-10 ${i===1?'bg-primary text-primary-foreground':i===2?'bg-accent text-accent-foreground':'bg-secondary'}`}><span className="text-7xl font-black opacity-15">0{i+1}</span><div><h2 className="max-w-md text-3xl font-black tracking-[-0.04em]">{service.title}</h2><p className="mt-4 max-w-lg leading-relaxed opacity-70">{service.description}</p></div></article>)}</div></section>
<section className="bg-surface py-20 text-surface-foreground"><div className="section-shell"><p className="max-w-5xl text-balance text-3xl font-bold tracking-[-0.04em] md:text-5xl">Подключаем эти компетенции там, где они действительно усиливают основной проект — без продажи лишних услуг.</p></div></section>
</>}
