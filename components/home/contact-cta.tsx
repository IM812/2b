import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export function ContactCta() {
  return (
    <section className="bg-background">
      <div className="section-shell section-pad">
        <div className="overflow-hidden rounded-[1.75rem] bg-primary text-primary-foreground sm:rounded-[2.5rem]">
          <div className="grid md:grid-cols-[1fr_auto]">
            <div className="p-6 sm:p-10 md:p-14">
              <p className="eyebrow text-white/55">Следующий проект</p>
              <h2 className="mt-7 max-w-4xl text-pretty text-[2.55rem] font-semibold leading-[.92] tracking-[-.065em] sm:text-6xl md:text-7xl">Соберём систему, на которую можно положиться.</h2>
            </div>
            <div className="flex flex-col justify-between border-t border-white/20 p-6 sm:p-10 md:w-72 md:border-l md:border-t-0">
              <span className="font-mono text-[10px] uppercase tracking-[.18em] text-white/50">Москва · Россия</span>
              <div className="mt-16 flex flex-col gap-4 md:mt-0">
                <a href="tel:+74957875615" className="text-lg font-semibold">+7 (495) 787-56-15</a>
                <Link href="/contacts" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-white px-6 text-sm font-bold text-primary">
                  Обсудить задачу <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
