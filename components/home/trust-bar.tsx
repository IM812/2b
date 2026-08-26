const ITEMS = ['Аэрофлот', 'Авиакомпания «Россия»', '8 500 пользователей', 'SLA от 15 минут', 'Поддержка 24/7']

export function TrustBar() {
  return <section className="border-b border-border bg-card" aria-label="Ключевые факты"><div className="section-shell flex min-h-24 flex-wrap items-center gap-x-10 gap-y-4 py-5"><span className="eyebrow text-primary">Доверие и масштаб</span>{ITEMS.map((item) => <span key={item} className="text-sm font-semibold tracking-[-0.01em]">{item}</span>)}</div></section>
}
