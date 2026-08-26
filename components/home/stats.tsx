import { STATS } from '@/lib/content'

export function Stats() {
  return (
    <section className="bg-surface py-20 text-surface-foreground md:py-24">
      <div className="mx-auto max-w-[90rem] px-4 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[.55fr_1.45fr]">
          <div><p className="text-sm font-semibold text-primary">Операционный масштаб</p><h2 className="mt-4 text-3xl font-semibold md:text-4xl">Инфраструктура под контролем</h2></div>
          <dl className="grid sm:grid-cols-2 lg:grid-cols-3">
            {STATS.map((stat) => (
              <div key={stat.label} className="border-l border-surface-foreground/20 px-6 py-5">
                <dt className="text-4xl font-semibold tracking-tight md:text-5xl">{stat.value}</dt>
                <dd className="mt-3 max-w-[14rem] text-sm leading-relaxed text-surface-foreground/60">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
