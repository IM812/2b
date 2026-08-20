import { STATS } from '@/lib/content'

export function Stats() {
  return (
    <section className="border-b border-border bg-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <p className="font-mono text-xs uppercase tracking-wider text-background/50">
          2В Сервис в цифрах
        </p>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="border-t border-background/15 pt-6">
              <div className="text-3xl font-bold tracking-tight text-background md:text-4xl">
                {stat.value}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-background/65">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
