import { ArrowUpRight } from 'lucide-react'
import { LeadFormTrigger } from '@/components/lead-form-trigger'

export function ContactCta() {
  return (
    <section className="overflow-hidden bg-primary text-primary-foreground">
      <div className="section-shell section-pad relative">
        <div className="pointer-events-none absolute -right-24 top-1/2 size-[34rem] -translate-y-1/2 rounded-full border border-white/15" aria-hidden="true"><div className="absolute inset-16 rounded-full border border-white/15" /><div className="absolute inset-32 rounded-full bg-accent" /></div>
        <div className="relative max-w-5xl">
          <p className="eyebrow text-white/55">Следующий проект</p>
          <h2 className="display-title mt-6">Давайте соберём систему, на которую можно положиться.</h2>
          <div className="mt-8 flex flex-col items-start gap-5 sm:mt-12 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
            <LeadFormTrigger className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-primary sm:w-auto sm:px-7 sm:py-4">Обсудить задачу <ArrowUpRight className="size-4" /></LeadFormTrigger>
            <a href="tel:+74957875615" className="text-lg font-semibold">+7 (495) 787-56-15</a>
          </div>
        </div>
      </div>
    </section>
  )
}
