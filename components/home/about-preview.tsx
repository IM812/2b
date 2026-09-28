import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'

const PRINCIPLES = ['Ответственность за результат', 'Инженерная преемственность', 'Прозрачные SLA и отчетность']

export function AboutPreview() {
  return (
    <section className="section-pad overflow-hidden bg-background">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_.85fr] lg:items-start">
          <div>
            <p className="eyebrow text-primary">2В Сервис · с 2010 года</p>
            <h2 className="section-title mt-5 max-w-4xl">Встраиваемся в бизнес — остаемся рядом после запуска</h2>
            <p className="text-lead mt-8 max-w-2xl text-muted-foreground">Работаем по России — от отдельного офиса до федеральной инфраструктуры, где ИТ напрямую влияет на рейсы, производство и тысячи рабочих мест.</p>
          </div>
          <div className="rounded-[1.5rem] bg-secondary p-6 sm:rounded-[2rem] sm:p-8 md:p-10">
            <p className="eyebrow text-muted-foreground">Наш подход</p>
            <ul className="mt-6 flex flex-col gap-5 sm:mt-8 sm:gap-6">
              {PRINCIPLES.map((item) => <li key={item} className="flex items-center gap-4 border-b border-border pb-5 last:border-0 last:pb-0 sm:pb-6"><span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground sm:size-9"><Check className="size-4" /></span><span className="text-base font-semibold tracking-[-.025em] sm:text-lg">{item}</span></li>)}
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-8 border-t border-border pt-8 md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl text-2xl font-semibold leading-tight tracking-[-.035em] md:text-3xl">Одна команда проектирует, внедряет и сопровождает решение на всем жизненном цикле.</p>
          <Link href="/about" className="inline-flex shrink-0 items-center gap-3 rounded-full bg-foreground px-6 py-3.5 text-sm font-bold text-background">О компании <ArrowRight className="size-4" /></Link>
        </div>
      </div>
    </section>
  )
}
