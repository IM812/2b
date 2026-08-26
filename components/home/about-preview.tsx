import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export function AboutPreview() {
  return (
    <section className="section-pad bg-background">
      <div className="section-shell grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
        <div className="relative min-h-[32rem] overflow-hidden rounded-md">
          <Image src="/images/editorial-engineer.png" alt="Инженер 2В Сервис обслуживает инфраструктуру" fill className="object-cover" />
          <div className="absolute right-5 bottom-5 rounded-md bg-background p-5 shadow-2xl md:right-8 md:bottom-8 md:p-7">
            <p className="text-4xl font-semibold tracking-[-0.05em]">15+</p>
            <p className="mt-1 text-sm text-muted-foreground">лет отвечаем за результат</p>
          </div>
        </div>
        <div>
          <p className="eyebrow text-primary">О компании</p>
          <h2 className="section-title mt-5">Не исчезаем после запуска.</h2>
          <p className="text-lead mt-8 max-w-xl text-muted-foreground">Аналитики, архитекторы, разработчики и инженеры поддержки работают в едином контуре ответственности. Мы остаёмся рядом, когда система становится частью ежедневной работы бизнеса.</p>
          <div className="mt-10 border-t border-border pt-6"><p className="max-w-xl text-base leading-relaxed">От проектирования архитектуры до круглосуточной эксплуатации — одна команда, единые SLA и понятный результат.</p></div>
          <Link href="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-primary">Подробнее о компании <ArrowUpRight className="size-4" /></Link>
        </div>
      </div>
    </section>
  )
}
