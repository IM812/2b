import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export function AboutPreview() {
  return (
    <section className="bg-surface text-surface-foreground">
      <div className="mx-auto max-w-[90rem] px-4 py-24 md:px-8 md:py-36">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
          <div className="relative aspect-[3/2] overflow-hidden">
            <Image src="/images/editorial-engineer.png" alt="Инженер 2В Сервис в дата-центре" fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover object-center grayscale-[15%]" />
          </div>
          <div className="lg:-ml-24 lg:pb-10">
            <div className="relative bg-surface p-7 md:p-12">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-surface-foreground/48">О компании</p>
              <blockquote className="mt-6 font-serif text-3xl font-normal italic leading-[1.15] md:text-5xl">«Мы остаёмся рядом после запуска — когда система становится частью ежедневной работы бизнеса».</blockquote>
              <p className="mt-7 max-w-lg text-base leading-relaxed text-surface-foreground/62">Аналитики, архитекторы, разработчики и инженеры поддержки работают как одна проектная команда — от обследования до развития решения.</p>
              <Link href="/about" className="group mt-9 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.12em]">О команде <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
