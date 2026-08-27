import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export function ContactCta() {
  return (
    <section className="bg-surface text-surface-foreground">
      <div className="section-shell section-pad">
        <p className="eyebrow text-surface-foreground/50">Контакт</p>
        <div className="mt-6 grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <h2 className="display-title max-w-4xl">Расскажите о задаче.</h2>
          <Link
            href="/contacts"
            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-primary px-7 py-5 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-85"
          >
            Связаться <ArrowUpRight className="size-4" />
          </Link>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          <div className="panel-ink p-6">
            <p className="eyebrow text-surface-foreground/45">Телефон</p>
            <a href="tel:+74957875615" className="mt-2 block text-lg font-semibold">
              +7 (495) 787-56-15
            </a>
          </div>
          <div className="panel-ink p-6">
            <p className="eyebrow text-surface-foreground/45">Адрес</p>
            <p className="mt-2 text-lg font-semibold">Москва, 1-я Миусская, 20с5</p>
          </div>
          <div className="panel-ink p-6">
            <p className="eyebrow text-surface-foreground/45">Поддержка</p>
            <p className="mt-2 text-lg font-semibold">Круглосуточно, 24/7</p>
          </div>
        </div>
      </div>
    </section>
  )
}
