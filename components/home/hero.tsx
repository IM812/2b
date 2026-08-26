import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown, ArrowUpRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-[52rem] overflow-hidden bg-surface pt-18 text-surface-foreground lg:min-h-screen">
      <Image src="/images/editorial-datacenter.png" alt="Инфраструктура центра обработки данных" fill priority className="media-grade drift object-cover object-[65%_center] opacity-65" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,oklch(0.125_0.05_255/.98)_0%,oklch(0.125_0.05_255/.86)_45%,oklch(0.125_0.05_255/.2)_100%)]" />
      <div className="light-field absolute inset-0 opacity-80" aria-hidden="true" />
      <div className="hairline-grid absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="section-shell relative flex min-h-[calc(100vh-4.5rem)] flex-col justify-between py-8">
        <div className="flex justify-between border-b border-surface-foreground/15 pb-5"><p className="eyebrow text-accent">Enterprise IT / с 2010 года</p><p className="eyebrow hidden text-surface-foreground/45 md:block">Москва · Россия</p></div>
        <div className="py-16 lg:py-20">
          <h1 className="display-title reveal-up max-w-6xl">Технологии,<br /><span className="text-accent">на которые</span><br />можно опереться.</h1>
          <div className="mt-10 grid max-w-5xl gap-8 border-t border-surface-foreground/20 pt-8 md:grid-cols-[1fr_1.2fr]">
            <p className="eyebrow text-surface-foreground/45">Единый ИТ-партнёр полного цикла</p>
            <div><p className="text-lead reveal-up reveal-delay-1 max-w-2xl text-surface-foreground/75">Проектируем, внедряем и поддерживаем цифровую инфраструктуру крупных организаций — от рабочего места до критичных корпоративных систем.</p><div className="reveal-up reveal-delay-2 mt-8 flex flex-wrap gap-3"><Link href="/contacts" className="inline-flex items-center gap-3 bg-accent px-6 py-4 text-sm font-bold text-accent-foreground">Обсудить проект <ArrowUpRight className="size-4" /></Link><Link href="/projects" className="inline-flex items-center gap-3 border border-surface-foreground/30 px-6 py-4 text-sm font-bold hover:bg-surface-foreground hover:text-surface">Наши проекты <ArrowUpRight className="size-4" /></Link></div></div>
          </div>
        </div>
        <div className="flex items-end justify-between border-t border-surface-foreground/15 pt-5"><p className="max-w-sm text-xs leading-relaxed text-surface-foreground/45">Инфраструктура · Аутсорсинг · Информационная безопасность · Интеграция</p><ArrowDown className="size-5 text-accent" /></div>
      </div>
    </section>
  )
}
