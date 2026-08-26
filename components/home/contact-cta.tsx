import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function ContactCta() {
  return (
    <section className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-[90rem] flex-col gap-10 px-4 py-20 md:px-8 md:py-28 lg:flex-row lg:items-end lg:justify-between">
        <div><p className="text-sm font-semibold text-primary-foreground/70">Обсудить проект</p><h2 className="mt-5 max-w-4xl text-balance text-4xl font-semibold leading-tight md:text-6xl">Найдём решение для вашей ИТ-задачи</h2><p className="mt-5 max-w-2xl text-lg leading-relaxed text-primary-foreground/75">Опишите контекст — предложим подход, состав команды и следующий шаг.</p></div>
        <Link href="/contacts" className="inline-flex shrink-0 items-center justify-center gap-3 bg-background px-6 py-4 text-sm font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background">Связаться с нами <ArrowRight className="size-4" /></Link>
      </div>
    </section>
  )
}
