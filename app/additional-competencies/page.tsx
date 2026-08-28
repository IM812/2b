import type { Metadata } from 'next'
import { Check } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { LEGACY_SERVICES } from '@/lib/content'

export const metadata: Metadata = { title: 'Дополнительные компетенции — 2В Сервис', description: 'ИТ-консалтинг, инженерные сервисы и логистическая поддержка проектов.' }
const USE_CASES=[['Когда открывается новый объект','Связываем монтаж, сеть, рабочие места и запуск сервисов в один график.'],['Когда инфраструктура выросла стихийно','Проводим аудит, документируем контур и формируем план модернизации.'],['Когда проект распределён по площадкам','Берём организационную и логистическую координацию поставок и работ.']]

export default function AdditionalCompetenciesPage(){return <>
<PageHero eyebrow="Дополнительные компетенции" title="Практический опыт вокруг основного ИТ-проекта." description="Подключаем сопутствующие работы, когда они сокращают риски, сроки и число подрядчиков на стыках." />
<section className="section-pad bg-background"><div className="section-shell"><div className="flex flex-col">{LEGACY_SERVICES.map((service,i)=><article key={service.title} className="grid gap-5 border-t border-border py-9 last:border-b md:grid-cols-[4rem_.8fr_1.2fr]"><span className="font-mono text-xs text-primary">0{i+1}</span><h2 className="text-balance text-3xl font-bold tracking-tight">{service.title}</h2><p className="max-w-2xl leading-relaxed text-muted-foreground">{service.description}</p></article>)}</div></div></section>
<section className="section-pad bg-secondary"><div className="section-shell"><p className="eyebrow text-primary">Когда это полезно</p><div className="mt-10 grid gap-4 md:grid-cols-3">{USE_CASES.map(([title,text],i)=><article key={title} className={`min-h-64 rounded-[2rem] p-7 ${i===0?'bg-primary text-primary-foreground':'bg-background'}`}><Check className="size-5"/><h2 className="mt-16 text-2xl font-bold tracking-tight">{title}</h2><p className="mt-4 text-sm leading-relaxed opacity-65">{text}</p></article>)}</div></div></section>
<section className="bg-surface py-16 text-surface-foreground"><div className="section-shell grid gap-6 md:grid-cols-[.7fr_1.3fr]"><p className="eyebrow text-primary">Наш принцип</p><p className="text-balance text-3xl font-bold tracking-[-.04em] md:text-5xl">Не продаём лишнее. Закрываем только те стыки, которые влияют на результат.</p></div></section>
</>}
