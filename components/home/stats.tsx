import { STATS } from '@/lib/content'

export function Stats() {
  return <section className="overflow-hidden bg-primary text-primary-foreground"><div className="section-shell section-pad"><div className="grid gap-12 lg:grid-cols-[.48fr_1fr]"><div><p className="eyebrow text-primary-foreground/60">Операционный масштаб</p><h2 className="section-title mt-6">Цифры ежедневной ответственности.</h2></div><dl className="grid grid-cols-2 border-l border-primary-foreground/20">{STATS.map((stat) => <div key={stat.label} className="border-r border-b border-primary-foreground/20 p-6 md:p-9"><dt className="text-4xl font-medium tracking-[-0.055em] md:text-6xl">{stat.value}</dt><dd className="mt-4 max-w-[13rem] text-sm leading-relaxed text-primary-foreground/65">{stat.label}</dd></div>)}</dl></div></div></section>
}
