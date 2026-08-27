import { STATS } from '@/lib/content'

export function Stats() {
  const selected = [STATS[0], STATS[1], STATS[2], STATS[5], STATS[6]]

  return (
    <section className="overflow-hidden bg-surface text-surface-foreground">
      <div className="section-shell section-pad">
        <div className="grid gap-10 border-b border-white/15 pb-10 sm:pb-14 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
          <div>
            <p className="eyebrow text-accent">Масштаб ответственности</p>
            <h2 className="section-title mt-5">Цифры — следствие системы.</h2>
          </div>
          <p className="max-w-lg text-sm leading-relaxed text-white/55 lg:justify-self-end">За каждой цифрой — действующие объекты, регламенты, дежурные команды и измеримый уровень сервиса.</p>
        </div>

        <dl className="divide-y divide-white/15">
          {selected.map((stat, index) => (
            <div key={stat.label} className="grid gap-3 py-6 sm:py-8 md:grid-cols-[4rem_1fr_1fr] md:items-baseline">
              <span className="font-mono text-[10px] text-white/35">{String(index + 1).padStart(2, '0')}</span>
              <dt className={`num tracking-[-0.055em] ${index === 0 ? 'text-[4.2rem] leading-none text-primary sm:text-7xl md:text-8xl' : 'text-[2.65rem] leading-none sm:text-5xl'}`}>{stat.value}</dt>
              <dd className="max-w-xs text-sm leading-relaxed text-white/55 md:justify-self-end">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
