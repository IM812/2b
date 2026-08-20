import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export function AboutPreview() {
  return (
    <section className="bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 md:grid-cols-[0.9fr_1.1fr] md:gap-10 md:px-8 md:py-28">
        <div className="relative order-2 min-h-[280px] overflow-hidden md:order-1">
          <Image
            src="/images/about-team.png"
            alt="Команда инженеров 2В Сервис за обсуждением архитектуры системы"
            fill
            className="object-cover"
          />
        </div>

        <div className="order-1 flex flex-col justify-center md:order-2">
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-primary">О компании</p>
          <h2 className="mt-3 max-w-xl text-balance font-heading text-3xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-5xl">
            Технологический партнёр для комплексных корпоративных ИТ-проектов
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
            className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-primary"
          >
            Подробнее о компании
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
