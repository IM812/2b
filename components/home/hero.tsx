import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface text-surface-foreground">
      <div className="spine pointer-events-none absolute inset-0 hidden text-surface-foreground/70 lg:block" aria-hidden />

      <div className="section-shell relative flex min-h-svh flex-col pt-28 md:pt-32">
        <div className="flex items-center justify-between border-b rule-ink pb-4">
          <p className="eyebrow text-surface-foreground/55">2В Сервис · Москва · с 2010</p>
          <p className="eyebrow hidden text-surface-foreground/40 md:block">Критичная ИТ-инфраструктура</p>
        </div>

        <div className="flex flex-1 flex-col justify-center py-14 md:py-20">
          <h1 className="display-title reveal-up max-w-[68rem]">
            Инфраструктура,
            <br />
            которой доверяют
            <br />
            <span className="text-surface-foreground/45">полёты и документы.</span>
          </h1>

          <div className="draw-rule mt-10 h-0.5 w-full bg-[linear-gradient(90deg,var(--primary)_0%,var(--primary)_18%,color-mix(in_oklab,var(--surface-foreground)_18%,transparent)_18%)] md:mt-14" />

          <div className="mt-10 grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <p className="reveal-up reveal-1 max-w-xl text-pretty text-base leading-relaxed text-surface-foreground/65 md:text-lg">
              Обслуживаем ИТ-ландшафт, внедряем корпоративные системы и держим их в работе круглосуточно — для авиации,
              госсектора и промышленности.
            </p>
            <div className="reveal-up reveal-2 flex flex-wrap gap-3">
              <Link
                href="/contacts"
                className="inline-flex items-center gap-3 bg-surface-foreground px-6 py-4 text-sm font-bold text-surface transition-opacity hover:opacity-85"
              >
                Обсудить задачу <ArrowUpRight className="size-4" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-3 border rule-ink px-6 py-4 text-sm font-bold transition-colors hover:bg-surface-foreground/10"
              >
                Проекты <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t rule-ink py-6">
          <p className="eyebrow text-surface-foreground/45">
            ИТ-аутсорсинг · Инфраструктура · Корпоративные системы · Документооборот
          </p>
          <p className="font-mono text-[11px] text-surface-foreground/35">15 лет непрерывной эксплуатации</p>
        </div>
      </div>
    </section>
  )
}
