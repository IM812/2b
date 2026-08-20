import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export function ContactCta() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-[90rem] px-4 py-24 md:px-8 md:py-40">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">Начать разговор</p>
        <div className="mt-7 flex flex-col gap-10 border-y border-foreground/20 py-10 md:py-14 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-5xl text-balance text-[clamp(3.4rem,8vw,8rem)] font-semibold leading-[0.84]">Есть сложная <span className="font-serif font-normal italic text-primary">задача?</span></h2>
          <Link href="/contacts" className="group flex shrink-0 items-center gap-5 text-sm font-semibold uppercase tracking-[0.12em]">
            Обсудить проект
            <span className="flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 group-hover:rotate-45 md:size-20">
              <ArrowUpRight className="size-7" aria-hidden="true" />
            </span>
          </Link>
        </div>
        <div className="mt-5 flex flex-col gap-2 text-sm text-foreground/48 sm:flex-row sm:justify-between">
          <span>info@2v-service.ru</span><span>Москва · Работаем по всей России</span>
        </div>
      </div>
    </section>
  )
}
