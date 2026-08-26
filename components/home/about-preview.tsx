import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function AboutPreview() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-[90rem] gap-10 px-4 md:px-8 lg:grid-cols-[.7fr_1.3fr]">
        <p className="text-sm font-semibold text-primary">О компании</p>
        <div>
          <h2 className="max-w-5xl text-balance text-4xl font-semibold leading-tight md:text-6xl">Одна команда на всём жизненном цикле системы</h2>
          <div className="mt-8 grid gap-6 border-t border-border pt-8 md:grid-cols-2">
            <p className="text-lg leading-relaxed text-muted-foreground">Аналитики, архитекторы, разработчики и инженеры поддержки работают в едином контуре ответственности.</p>
            <p className="text-lg leading-relaxed text-muted-foreground">Мы остаёмся рядом после запуска — когда система становится частью ежедневной работы бизнеса.</p>
          </div>
          <Link href="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-foreground">Подробнее о компании <ArrowRight className="size-4" /></Link>
        </div>
      </div>
    </section>
  )
}
