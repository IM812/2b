import { INDUSTRIES } from '@/lib/content'

export function Industries() {
  return (
    <section className="overflow-hidden bg-surface py-24 text-surface-foreground md:py-36">
      <div className="mx-auto max-w-[90rem] px-4 md:px-8">
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-surface-foreground/50">Критические отрасли</p>
            <h2 className="mt-6 max-w-xl text-balance text-5xl font-semibold leading-[0.92] md:text-7xl">Цена простоя <span className="font-serif font-normal italic text-[oklch(0.42_0.09_125)]">измерима.</span></h2>
            <p className="mt-8 max-w-md text-base leading-relaxed text-surface-foreground/60">Проектируем для сред, где архитектурное решение напрямую влияет на непрерывность бизнеса.</p>
          </div>
          <div className="border-t border-surface-foreground/20">
            {INDUSTRIES.map((industry, index) => (
              <div key={industry.title} className="group grid gap-4 border-b border-surface-foreground/20 py-7 md:grid-cols-[4rem_1fr_auto] md:items-center">
                <span className="font-mono text-[10px] text-surface-foreground/40">0{index + 1}</span>
                <div><h3 className="text-2xl font-semibold md:text-3xl">{industry.title}</h3><p className="mt-2 max-w-xl text-sm leading-relaxed text-surface-foreground/55">{industry.description}</p></div>
                <span className="h-2 w-2 rounded-full bg-[oklch(0.42_0.09_125)] transition-transform group-hover:scale-150" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
