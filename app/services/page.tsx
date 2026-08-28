import type { Metadata } from 'next'
import { ArrowUpRight, Check } from 'lucide-react'
import { LeadFormTrigger } from '@/components/lead-form-trigger'
import { PageHero } from '@/components/page-hero'
import { CORE_COMPETENCIES, PROCESS_STEPS } from '@/lib/content'

export const metadata: Metadata = { title: 'Решения и услуги — 2В Сервис', description: 'Комплексные ИТ-проекты для крупных компаний.' }

export default function ServicesPage() {
  return <>
    <PageHero eyebrow="Решения и услуги" title="Система целиком. Не набор подрядчиков." description="От обследования и архитектуры до запуска, поддержки и развития — одна команда отвечает за весь результат." />
    <section className="section-pad bg-background"><div className="section-shell">
      <div className="flex items-end justify-between gap-8"><div><p className="eyebrow text-primary">Контур ответственности</p><h2 className="section-title mt-5 max-w-3xl">Закрываем весь ИТ-ландшафт.</h2></div><p className="hidden max-w-sm text-muted-foreground lg:block">Инфраструктура, инженерные системы, безопасность и enterprise-разработка объединены едиными SLA и управлением.</p></div>
      <div className="mt-14 flex flex-col gap-5">{CORE_COMPETENCIES.map((item,index)=><article key={item.title} className={`group grid min-w-0 gap-5 overflow-hidden rounded-[1.5rem] p-5 sm:gap-8 sm:rounded-[2rem] sm:p-7 md:grid-cols-[5rem_.8fr_1fr] md:p-10 ${index%3===0?'bg-primary text-primary-foreground':index%3===1?'bg-secondary':'bg-surface text-surface-foreground'}`}><span className="text-4xl font-black tracking-tighter opacity-30 sm:text-5xl">0{index+1}</span><div><h3 className="text-[1.35rem] font-bold leading-tight tracking-tight sm:text-2xl md:text-3xl">{item.title}</h3><p className="mt-4 leading-relaxed opacity-70">{item.description}</p></div><ul className="grid gap-3 sm:grid-cols-2">{item.details.map(detail=><li key={detail} className="flex gap-3 border-t border-current/15 pt-3 text-sm"><Check className="mt-0.5 size-4 shrink-0"/>{detail}</li>)}</ul></article>)}</div>
    </div></section>
    <section className="overflow-hidden bg-accent py-8 text-accent-foreground"><div className="marquee flex gap-12 whitespace-nowrap text-5xl font-black uppercase tracking-[-0.06em] md:text-8xl">{[...PROCESS_STEPS,...PROCESS_STEPS].map((s,i)=><span key={`${s.title}-${i}`}>{s.title} <span className="text-primary">/</span></span>)}</div></section>
    <section className="section-pad bg-surface text-surface-foreground"><div className="section-shell flex flex-col gap-12 md:flex-row md:items-end md:justify-between"><h2 className="max-w-4xl text-pretty text-[2.35rem] font-black leading-[.95] tracking-[-0.06em] sm:text-5xl md:text-7xl">Берём ответственность. Оставляем контроль.</h2><LeadFormTrigger className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-primary px-7 py-4 font-bold text-primary-foreground">Обсудить проект <ArrowUpRight className="size-5"/></LeadFormTrigger></div></section>
  </>
}
