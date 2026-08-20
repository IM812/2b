import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-background">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-photo.png"
          alt="Центр мониторинга корпоративных информационных систем ночью"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[86vh] max-w-7xl flex-col justify-end px-4 pb-16 pt-40 md:px-8 md:pb-24">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
          Корпоративные информационные системы
        </p>
        <h1 className="mt-6 max-w-4xl text-balance font-heading text-5xl font-semibold leading-[0.98] tracking-tight text-foreground md:text-8xl">
          Строим системы,
          <br />
          на которых держится бизнес
        </h1>
        <p className="mt-7 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          2В Сервис реализует комплексные проекты автоматизации для крупных российских компаний —
          от обследования и проектирования до промышленной эксплуатации и многолетней технической
          поддержки.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Наши решения
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 border border-foreground/25 px-6 py-3.5 text-sm font-semibold text-foreground backdrop-blur-sm transition-colors hover:bg-foreground/10"
          >
            Реализованные проекты
          </Link>
        </div>
      </div>
    </section>
  )
}
