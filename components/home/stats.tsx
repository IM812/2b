import { STATS } from '@/lib/content'

export function Stats() {
  return (
    <section className="bg-primary">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <p className="font-mono text-xs uppercase tracking-[0.15em] text-primary-foreground/60">
          2В Сервис в цифрах
        </p>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="border-t border-primary-foreground/25 pt-6">
              <div className="font-heading text-3xl font-semibold tracking-tight text-primary-foreground md:text-4xl">
                {stat.value}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/75">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
