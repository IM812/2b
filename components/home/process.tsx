import { PROCESS_STEPS } from '@/lib/content'
import { SystemVisual } from '@/components/system-visual'

export function Process() {
  return (
    <section className="bg-background py-14 sm:py-24 md:py-36">
      <div className="mx-auto grid max-w-[90rem] gap-14 px-4 md:px-8 lg:grid-cols-[.9fr_1.1fr]">
        <div data-reveal="clip" className="lg:sticky lg:top-28 lg:self-start">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">Контур реализации</p>
          <h2 className="mt-5 max-w-xl text-pretty text-[2.35rem] font-semibold leading-[0.96] sm:mt-6 sm:text-5xl md:text-7xl">Одна архитектура. <span className="font-serif font-normal italic text-foreground/45">Одна ответственность.</span></h2>
          <SystemVisual className="mt-10" />
        </div>
        <ol className="flex flex-col">
          {PROCESS_STEPS.map((step, index) => (
            <li key={step.title} data-reveal="line" style={{ '--reveal-delay': `${Math.min(index, 4) * 45}ms` } as React.CSSProperties} className="group border-t border-foreground/18 py-7 transition-colors hover:border-primary md:py-9">
              <div className="grid gap-4 md:grid-cols-[4rem_1fr]">
                <span className="font-mono text-xs text-muted-foreground">{String(index + 1).padStart(2, '0')} / 08</span>
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
