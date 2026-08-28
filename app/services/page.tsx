import type { Metadata } from 'next'
import { ArrowUpRight, Check } from 'lucide-react'
import { LeadFormTrigger } from '@/components/lead-form-trigger'
import { PageHero } from '@/components/page-hero'
import { CORE_COMPETENCIES, PROCESS_STEPS } from '@/lib/content'

export const metadata: Metadata = { title: 'Решения и услуги — 2В Сервис', description: 'Комплексные ИТ-проекты: инфраструктура, корпоративные системы, интеграция и поддержка.' }

export default function ServicesPage() {
  return <>
    <PageHero variant="services" eyebrow="Решения и услуги" title="Один центр ответственности за весь ИТ-контур." description="От рабочих мест и инженерных систем до enterprise-разработки — проектируем, запускаем и поддерживаем как единую систему." />
    <section className="section-pad bg-background"><div className="section-shell">
      <div className="grid gap-8 border-b border-border pb-10 lg:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow text-primary">9 направлений</p><h2 className="section-title mt-5">Подключаем ровно тот контур, который нужен задаче.</h2></div><p className="max-w-2xl text-lg leading-relaxed text-muted-foreground lg:pt-8">Можно передать нам отдельную систему, площадку или весь ИТ-ландшафт. В любом масштабе фиксируем зоны ответственности, SLA и измеримый результат.</p></div>
      <div className="flex flex-col">{CORE_COMPETENCIES.map((item,index)=><article key={item.title} className="group grid gap-5 border-b border-border py-8 md:grid-cols-[4rem_.85fr_1.15fr] md:gap-8 md:py-10"><span className="font-mono text-xs text-primary">{String(index+1).padStart(2,'0')}</span><div><h3 className="text-balance text-2xl font-bold tracking-tight md:text-3xl">{item.title}</h3><p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">{item.description}</p></div><ul className="grid content-start gap-3 sm:grid-cols-2">{item.details.map(detail=><li key={detail} className="flex gap-3 rounded-xl bg-secondary p-4 text-sm leading-relaxed"><Check className="mt-0.5 size-4 shrink-0 text-primary"/>{detail}</li>)}</ul></article>)}</div>
    </div></section>
    <section className="section-pad bg-surface text-surface-foreground"><div className="section-shell"><div className="grid gap-8 lg:grid-cols-[.65fr_1.35fr]"><div className="lg:sticky lg:top-28 lg:self-start"><p className="eyebrow text-primary">Как работаем</p><h2 className="section-title mt-5">От обследования до развития.</h2><p className="mt-5 max-w-sm leading-relaxed text-surface-foreground/60">Каждый этап заканчивается понятным результатом и контрольной точкой для заказчика.</p></div><div className="grid gap-px overflow-hidden rounded-[2rem] bg-white/15 sm:grid-cols-2">{PROCESS_STEPS.map((step,i)=><article key={step.title} className="min-h-56 bg-surface p-7"><span className="font-mono text-xs text-primary">Этап {String(i+1).padStart(2,'0')}</span><h3 className="mt-12 text-2xl font-bold">{step.title}</h3><p className="mt-3 text-sm leading-relaxed text-surface-foreground/55">{step.description}</p></article>)}</div></div></div></section>
    <section className="bg-primary py-16 text-primary-foreground"><div className="section-shell flex flex-col gap-8 md:flex-row md:items-end md:justify-between"><div><p className="eyebrow opacity-65">Следующий шаг</p><h2 className="mt-5 max-w-3xl text-balance text-4xl font-black tracking-[-.05em] md:text-6xl">Разберём текущий контур и предложим план действий.</h2></div><LeadFormTrigger className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-background px-7 py-4 font-bold text-foreground">Обсудить задачу <ArrowUpRight className="size-5"/></LeadFormTrigger></div></section>
  </>
}
