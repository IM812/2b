import { ArrowUpRight } from 'lucide-react'
import { LeadFormTrigger } from '@/components/lead-form-trigger'
import { QuizTrigger } from '@/components/lead-quiz'

export function ContactCta() {
  return (
    <section className="max-h-[700px] overflow-hidden bg-primary text-primary-foreground">
      <div className="section-shell relative py-16 sm:py-20 md:py-24">
        <div data-reveal="scale" className="pointer-events-none absolute -right-24 top-1/2 hidden size-[28rem] -translate-y-1/2 rounded-full border border-primary-foreground/15 lg:block" aria-hidden="true"><div className="absolute inset-16 rounded-full border border-primary-foreground/15" /><div className="absolute inset-32 rounded-full bg-accent" /></div>
        <div data-reveal="clip" className="relative max-w-4xl">
          <p className="eyebrow text-primary-foreground/55">Следующий проект</p>
          <h2 className="mt-6 text-balance text-4xl font-semibold leading-[.95] tracking-[-.055em] sm:text-5xl md:text-6xl">Соберем надежную систему под вашу задачу</h2>
          <div className="mt-8 flex flex-col items-start gap-5 sm:mt-12 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
            <LeadFormTrigger className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-primary sm:w-auto sm:px-7 sm:py-4">Обсудить задачу <ArrowUpRight className="size-4" /></LeadFormTrigger>
            <QuizTrigger className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/35 px-6 py-3.5 text-sm font-bold text-white sm:w-auto">Подобрать решение</QuizTrigger>
            <a href="tel:+74957875615" className="text-lg font-semibold">+7 (495) 787-56-15</a>
          </div>
        </div>
      </div>
    </section>
  )
}
