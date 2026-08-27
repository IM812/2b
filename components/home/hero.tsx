import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SignalPulse } from '@/components/signal-pulse'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface text-surface-foreground">
      <div className="section-shell relative pb-24 pt-32 md:pb-32 md:pt-40">
        <div className="flex items-center gap-3">
          <span className="signal-dot" />
          <p className="eyebrow text-surface-foreground/55">2В Сервис · Москва · с 2010 · система работает</p>
        </div>

        <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start lg:gap-8">
          <h1 className="display-title reveal-up max-w-[46rem]">
            Инфраструктура,
            <br />
            которой доверяют
            <br />
            <span className="text-primary">полёты и документы.</span>
          </h1>

          {/* Сигнатурная плавающая панель статуса — асимметричный акцент композиции */}
          <div className="panel-ink reveal-up reveal-2 relative -mt-2 hidden overflow-hidden p-6 lg:block">
            <p className="eyebrow text-surface-foreground/45">Мониторинг сейчас</p>
            <SignalPulse className="mt-5 h-10 text-primary" />
            <dl className="mt-5 flex items-end justify-between border-t border-white/10 pt-4">
              <div>
                <dt className="eyebrow text-surface-foreground/40">Аптайм</dt>
                <dd className="num mt-1 text-3xl">99.98%</dd>
              </div>
              <div className="text-right">
                <dt className="eyebrow text-surface-foreground/40">Реакция</dt>
                <dd className="num mt-1 text-3xl">15 мин</dd>
              </div>
            </dl>
          </div>
        </div>

        <p className="reveal-up reveal-1 mt-10 max-w-xl text-pretty text-base leading-relaxed text-surface-foreground/65 md:text-lg">
          Обслуживаем ИТ-ландшафт, внедряем корпоративные системы и держим их в работе круглосуточно — для авиации,
          госсектора и промышленности.
        </p>

        <div className="reveal-up reveal-2 mt-9 flex flex-wrap gap-3">
          <Link
            href="/contacts"
            className="inline-flex items-center gap-3 rounded-full bg-primary px-6 py-4 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-85"
          >
            Обсудить задачу <ArrowUpRight className="size-4" />
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-4 text-sm font-bold transition-colors hover:bg-white/10"
          >
            Проекты <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
          <p className="eyebrow text-surface-foreground/45">
            ИТ-аутсорсинг · Инфраструктура · Корпоративные системы · Документооборот
          </p>
          <p className="font-mono text-[11px] text-surface-foreground/35">15 лет непрерывной эксплуатации</p>
        </div>
      </div>
    </section>
  )
}
