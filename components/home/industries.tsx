import Image from 'next/image'
import { INDUSTRIES } from '@/lib/content'

export function Industries() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden">
      <Image src="/images/editorial-industry.png" alt="Инженер на производственной площадке" fill sizes="100vw" className="object-cover" />
      <div className="film-grain absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/40 to-transparent" />
      <div className="relative mx-auto flex min-h-[80vh] max-w-[90rem] flex-col justify-between px-4 py-16 md:px-8 md:py-24">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">Там, где цена простоя высока</p>
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_.8fr]">
          <h2 className="max-w-4xl text-balance text-5xl font-semibold leading-[0.9] md:text-8xl">Работаем внутри <span className="font-serif font-normal italic text-primary">реального</span> бизнеса.</h2>
          <ul className="border-t border-foreground/35">
            {INDUSTRIES.map((industry) => (
              <li key={industry.title} className="flex items-center justify-between border-b border-foreground/25 py-4 text-sm font-semibold uppercase tracking-[0.1em] md:text-base">
                {industry.title}<span className="font-serif text-xl italic text-primary">↗</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
