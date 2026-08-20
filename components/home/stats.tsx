import { STATS } from '@/lib/content'

export function Stats() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-[90rem] px-4 py-20 md:px-8 md:py-28">
        <div className="flex items-center justify-between border-b border-primary-foreground/25 pb-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em]">Факты, не обещания</p>
          <span className="font-serif italic">2В Сервис</span>
        </div>
        <div className="mt-10 flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          {STATS.map((stat, index) => (
            <div key={stat.label} className={index === 2 ? 'lg:-translate-y-10' : ''}>
              <div className="font-serif text-[clamp(3rem,6vw,6.5rem)] font-normal italic leading-none tracking-[-0.07em]">{stat.value}</div>
              <p className="mt-4 max-w-[13rem] text-sm leading-relaxed text-primary-foreground/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
