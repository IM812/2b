const CLIENTS = ['ПАО «Аэрофлот»', 'АО «Авиакомпания «Россия»', 'Государственные заказчики', 'Промышленность']

export function TrustBar() {
  return (
    <section className="border-b border-border bg-background" aria-label="Заказчики">
      <div className="section-shell flex flex-wrap items-center gap-x-12 gap-y-5 py-7">
        <p className="eyebrow text-muted-foreground">Работаем с</p>
        {CLIENTS.map((client) => (
          <p key={client} className="text-sm font-semibold tracking-[-0.015em] md:text-base">
            {client}
          </p>
        ))}
      </div>
    </section>
  )
}
