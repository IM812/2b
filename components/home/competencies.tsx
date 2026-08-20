import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { CORE_COMPETENCIES } from '@/lib/content'

export function Competencies() {
  return (
    <section id="capabilities" className="bg-surface text-surface-foreground">
      <div className="mx-auto grid max-w-[90rem] gap-12 px-4 py-24 md:px-8 md:py-36 lg:grid-cols-[.75fr_1.25fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-surface-foreground/55">Что мы делаем</p>
          <h2 className="mt-6 max-w-lg text-balance text-5xl font-semibold leading-[0.93] md:text-7xl">
            От замысла —
            <span className="block font-serif font-normal italic text-[oklch(0.4_0.12_116)]">до работающей</span>
            системы
          </h2>
          <p className="mt-7 max-w-sm text-base leading-relaxed text-surface-foreground/65">
            Берём ответственность за весь жизненный цикл: архитектуру, внедрение, интеграцию и дальнейшее развитие.
          </p>
          <Link href="/services" className="group mt-9 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.12em]">
            Все решения <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        <ol className="flex flex-col">
          {CORE_COMPETENCIES.map((item, index) => (
            <li key={item.title} className="group border-t border-surface-foreground/20 py-8 md:py-10">
              <div className="flex gap-5 md:gap-10">
                <span className="pt-1 font-mono text-xs text-surface-foreground/45">0{index + 1}</span>
                <div className="flex-1">
                  <h3 className="max-w-2xl text-balance text-2xl font-semibold leading-tight transition-transform duration-300 group-hover:translate-x-2 md:text-4xl">{item.title}</h3>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-surface-foreground/62 md:text-base">{item.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
