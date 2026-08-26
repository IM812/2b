import { STATS } from '@/lib/content'

export function Stats() {
  return (
    <section className="border-y border-foreground/20 bg-foreground text-background">
      <div className="mx-auto max-w-[90rem] px-4 py-16 md:px-8 md:py-24">
        <div className="flex items-end justify-between gap-8 border-b border-background/20 pb-5">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-background/55">Операционный масштаб</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">Инфраструктура под контролем</h2>
          </div>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-background/50 md:block">Данные компании</span>
        </div>
        <dl className="grid sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, index) => (
            <div key={stat.label} className="border-b border-background/20 py-7 sm:border-r sm:px-6 sm:first:pl-0 lg:[&:nth-child(4n)]:border-r-0">
              <dt className="text-4xl font-semibold tracking-[-0.05em] md:text-5xl">{stat.value}</dt>
              <dd className="mt-3 max-w-[14rem] font-mono text-[10px] uppercase leading-relaxed tracking-[0.12em] text-background/55">{stat.label}</dd>
              <span className="mt-8 block font-mono text-[9px] text-primary">SYS.{String(index + 1).padStart(2, '0')}</span>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
