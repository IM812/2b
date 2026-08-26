import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const metrics = [
  ['8 500', 'пользователей'],
  ['1 000+', 'серверов'],
  ['24/7', 'поддержка'],
]

export function Hero() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-[90rem] px-4 md:px-8">
        <div className="grid min-h-[42rem] lg:grid-cols-[1fr_22rem]">
          <div className="flex flex-col justify-center border-border py-20 lg:border-r lg:py-28 lg:pr-16">
            <p className="reveal-up text-sm font-semibold text-primary">ИТ-партнёр полного цикла</p>
            <h1 className="reveal-up reveal-delay-1 mt-6 max-w-5xl text-balance text-5xl font-semibold leading-[1.02] md:text-7xl lg:text-[5.6rem]">
              Обеспечиваем работу сложной ИТ-инфраструктуры
            </h1>
            <p className="reveal-up reveal-delay-2 mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Проектируем, внедряем и поддерживаем цифровую среду крупных государственных и коммерческих организаций — от рабочего места до корпоративной системы.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="/contacts" className="inline-flex items-center justify-center gap-3 bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-foreground">
                Обсудить задачу <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center gap-3 border border-border bg-card px-6 py-4 text-sm font-semibold transition-colors hover:border-foreground">
                Наши решения <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
          <dl className="grid border-t border-border lg:border-t-0">
            {metrics.map(([value, label]) => (
              <div key={label} className="flex flex-col justify-center border-b border-border px-6 py-8 last:border-b-0 lg:px-10">
                <dt className="text-4xl font-semibold tracking-tight md:text-5xl">{value}</dt>
                <dd className="mt-2 text-sm text-muted-foreground">{label} под управлением</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
