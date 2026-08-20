import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export function AboutPreview() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-[0.9fr_1.1fr] md:gap-10 md:px-8 md:py-24">
        <div className="relative min-h-[240px] overflow-hidden rounded-md border border-border order-2 md:order-1">
          <Image
            src="/images/about-architecture.png"
            alt="Схема многоуровневой архитектуры корпоративных систем"
            fill
            className="object-cover"
          />
        </div>

        <div className="order-1 flex flex-col justify-center md:order-2">
          <p className="font-mono text-xs uppercase tracking-wider text-accent">О компании</p>
          <h2 className="mt-3 text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
            Технологический партнёр для реализации комплексных корпоративных ИТ-проектов
          </h2>
          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
            Мы объединяем компетенции в области бизнес-анализа, проектирования, разработки, системной
            интеграции и технической поддержки и обеспечиваем полный цикл реализации проекта — от
            формирования требований до промышленной эксплуатации и последующего развития решения.
          </p>
          <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
            Сегодня 2В Сервис реализует проекты для компаний авиационной отрасли, включая ПАО «Аэрофлот»
            и АО «Авиакомпания «Россия».
          </p>
          <Link
            href="/about"
            className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-accent"
          >
            Подробнее о компании
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
