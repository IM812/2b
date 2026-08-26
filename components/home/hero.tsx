import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const metrics = [
  ['8 500', 'пользователей'],
  ['1 000+', 'серверов'],
  ['24/7', 'центр поддержки'],
]

export function Hero() {
  return (
    <section className="relative min-h-[46rem] overflow-hidden bg-surface text-surface-foreground lg:min-h-[52rem]">
      <Image src="/images/editorial-datacenter.png" alt="Инфраструктура центра обработки данных" fill priority className="object-cover object-center opacity-80" />
      <div className="image-shade absolute inset-0" aria-hidden="true" />
      <div className="blueprint absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="section-shell relative flex min-h-[46rem] flex-col justify-between py-8 lg:min-h-[52rem] lg:py-12">
        <div className="flex items-center justify-between border-b border-surface-foreground/20 pb-5 text-surface-foreground/75">
          <p className="eyebrow">ИТ-партнёр полного цикла</p>
          <p className="hidden font-mono text-xs md:block">Москва · Работаем по всей России</p>
        </div>
        <div className="max-w-5xl py-16">
          <h1 className="display-title reveal-up max-w-4xl">Сложные системы. Стабильная работа.</h1>
          <p className="text-lead reveal-up reveal-delay-1 mt-8 max-w-2xl text-surface-foreground/76">
            Проектируем, внедряем и поддерживаем цифровую инфраструктуру крупных организаций — от рабочих мест до критичных корпоративных систем.
          </p>
          <div className="reveal-up reveal-delay-2 mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/contacts" className="inline-flex items-center justify-center gap-3 rounded-md bg-accent px-6 py-4 text-sm font-bold text-accent-foreground transition-transform hover:-translate-y-0.5">
              Обсудить задачу <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
            <Link href="/projects" className="inline-flex items-center justify-center gap-3 rounded-md border border-surface-foreground/45 bg-surface/25 px-6 py-4 text-sm font-bold text-surface-foreground backdrop-blur-sm transition-colors hover:bg-surface-foreground hover:text-surface">
              Смотреть проекты <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
        <dl className="grid border-t border-surface-foreground/20 sm:grid-cols-3">
          {metrics.map(([value, label]) => (
            <div key={label} className="border-b border-surface-foreground/20 py-5 sm:border-r sm:border-b-0 sm:px-6 sm:first:pl-0 sm:last:border-r-0">
              <dt className="text-2xl font-semibold tracking-[-0.04em] md:text-3xl">{value}</dt>
              <dd className="mt-1 text-sm text-surface-foreground/65">{label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
