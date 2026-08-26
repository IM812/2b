import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export function ContactCta() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="section-shell section-pad">
        <p className="eyebrow text-primary-foreground/65">Начать разговор</p>
        <div className="mt-6 flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <div><h2 className="section-title max-w-5xl">Ваша инфраструктура может работать спокойнее.</h2><p className="text-lead mt-7 max-w-2xl text-primary-foreground/72">Расскажите о задаче. Мы соберём нужную экспертизу и предложим следующий практический шаг.</p></div>
          <Link href="/contacts" className="inline-flex shrink-0 items-center justify-center gap-3 rounded-md bg-accent px-7 py-4 text-sm font-bold text-accent-foreground transition-transform hover:-translate-y-0.5">Обсудить проект <ArrowUpRight className="size-4" /></Link>
        </div>
      </div>
    </section>
  )
}
