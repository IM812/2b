import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-[1.1fr_0.9fr] md:gap-8 md:px-8 md:py-24">
        <div className="flex flex-col justify-center">
          <p className="font-mono text-xs uppercase tracking-wider text-accent">
            Корпоративные информационные системы
          </p>
          <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.08] tracking-tight text-foreground md:text-6xl">
            Внедрение. Интеграция.
            <br />
            Развитие. Сопровождение.
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            2В Сервис реализует комплексные проекты автоматизации для крупных российских компаний.
            Проектируем и внедряем корпоративные системы, интегрируем их в существующий ИТ-ландшафт и
            обеспечиваем дальнейшее развитие и техническую поддержку.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 rounded-sm bg-foreground px-5 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-85"
            >
              Наши решения
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 rounded-sm border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Реализованные проекты
            </Link>
          </div>
          <p className="mt-10 border-t border-border pt-6 text-sm font-medium text-muted-foreground">
            Проекты для крупнейших российских компаний
          </p>
        </div>

        <div className="relative min-h-[280px] overflow-hidden rounded-md border border-border md:min-h-full">
          <Image
            src="/images/hero-systems.png"
            alt="Схема интеграции корпоративных информационных систем"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
