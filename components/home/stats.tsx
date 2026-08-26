import { STATS } from '@/lib/content'

export function Stats() {
  return (
    <section className="bg-secondary">
      <div className="section-shell section-pad">
        <div className="grid gap-8 border-b border-foreground/15 pb-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <h2 className="section-title max-w-3xl">Масштаб ежедневной ответственности.</h2>
          <p className="eyebrow text-muted-foreground">Подтверждённые показатели</p>
        </div>
        <dl className="grid sm:grid-cols-2 lg:grid-cols-4">
          {STATS.slice(0, 4).map((stat) => (
            <div
              key={stat.label}
              className="border-b border-foreground/12 py-8 pr-6 lg:border-r lg:[&:nth-child(4n)]:border-r-0"
            >
              <dt className="num text-4xl text-primary md:text-5xl">{stat.value}</dt>
              <dd className="mt-3 max-w-[15rem] text-sm leading-relaxed text-muted-foreground">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
