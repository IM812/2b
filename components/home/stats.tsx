import { STATS } from '@/lib/content'

export function Stats() {
  return (
    <section className="overflow-hidden bg-accent text-accent-foreground">
      <div className="section-shell section-pad">
        <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
          <div><p className="eyebrow opacity-60">Масштаб ответственности</p><h2 className="section-title mt-5">Цифры — следствие системы.</h2></div>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4 lg:pt-20">
            {STATS.slice(0, 4).map((stat, index) => (
              <div key={stat.label} className={index === 0 ? 'col-span-2 md:col-span-4' : ''}>
                <dt className={`num ${index === 0 ? 'text-[clamp(5rem,13vw,11rem)] leading-[.75]' : 'text-4xl md:text-5xl'}`}>{stat.value}</dt>
                <dd className="mt-4 max-w-56 text-sm leading-relaxed opacity-65">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
