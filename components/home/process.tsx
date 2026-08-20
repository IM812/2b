import Image from 'next/image'
import { PROCESS_STEPS } from '@/lib/content'

export function Process() {
  return (
    <section className="bg-background py-24 md:py-36">
      <div className="mx-auto grid max-w-[90rem] gap-14 px-4 md:px-8 lg:grid-cols-[.9fr_1.1fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">Как работаем</p>
          <h2 className="mt-6 text-balance text-5xl font-semibold leading-[0.94] md:text-7xl">Система проходит весь путь <span className="font-serif font-normal italic text-foreground/45">с одной командой.</span></h2>
          <div className="relative mt-10 aspect-[4/3] overflow-hidden">
            <Image src="/images/editorial-workshop.png" alt="Команда архитекторов обсуждает проект системы" fill className="object-cover" sizes="(min-width: 1024px) 40vw, 100vw" />
            <div className="film-grain absolute inset-0" />
          </div>
        </div>
        <ol className="flex flex-col">
          {PROCESS_STEPS.map((step, index) => (
            <li key={step.title} className={`border-t border-foreground/18 py-7 md:py-9 ${index % 2 ? 'lg:ml-16' : ''}`}>
              <div className="flex gap-5">
                <span className="font-serif text-2xl italic text-primary">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="text-2xl font-semibold md:text-3xl">{step.title}</h3>
                  <p className="mt-3 max-w-lg text-sm leading-relaxed text-foreground/58 md:text-base">{step.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
