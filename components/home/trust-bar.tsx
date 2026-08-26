const ITEMS = ['Аэрофлот', 'Авиакомпания «Россия»', '15+ лет на рынке', 'SLA от 15 минут', 'Поддержка 24/7']

export function TrustBar() {
  return (
    <section className="border-b border-border bg-secondary" aria-label="Ключевые факты">
      <div className="mx-auto flex max-w-[90rem] flex-wrap items-center gap-x-10 gap-y-4 px-4 py-5 md:px-8">
        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Нам доверяют</span>
        {ITEMS.map((item) => (
          <span key={item} className="text-sm font-semibold text-foreground">{item}</span>
        ))}
      </div>
    </section>
  )
}
