import { STATS } from '@/lib/content'

export function Stats() {
  return (
    <section className="overflow-hidden bg-accent text-accent-foreground">
      <div className="section-shell section-pad">
        <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
          <div data-reveal="clip"><p className="eyebrow opacity-60">Масштаб ответственности</p><h2 className="section-title mt-5">Цифры — следствие системы</h2></div>
          <dl className="grid grid-cols-2 gap-x-4 gap-y-5 sm:gap-x-6 sm:gap-y-12 md:grid-cols-4 lg:pt-20">
            {[STATS[0], STATS[1], STATS[2], STATS[5], STATS[6]].map((stat, index) => (
              <div key={stat.label} data-reveal="clip" style={{ '--reveal-delay': `${index * 50}ms` } as React.CSSProperties} className={`border-b border-current/10 pb-4 sm:border-none sm:pb-0 ${index === 0 ? 'col-span-2 border-none md:col-span-4' : ''}`}>
                <dt className={`num ${index === 0 ? 'text-[2.6rem] leading-[.85] sm:text-[clamp(5rem,13vw,11rem)]' : 'text-2xl sm:text-3xl md:text-5xl'}`}>{stat.value}</dt>
                <dd className="mt-1.5 max-w-56 text-xs leading-relaxed opacity-65 sm:mt-4 sm:text-sm">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
