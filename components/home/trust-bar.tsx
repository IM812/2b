const CLIENTS = ['ПАО «Аэрофлот»', 'АО «Авиакомпания «Россия»', 'Государственные заказчики', 'Промышленность']

export function TrustBar() {
  return (
    <section className="border-b border-border bg-background" aria-label="Заказчики">
      <div className="section-shell flex flex-wrap items-center gap-x-6 gap-y-3 py-5 sm:gap-x-12 sm:gap-y-5 sm:py-7">
        <p className="eyebrow text-muted-foreground">Работаем с</p>
        {CLIENTS.map((client) => (
          <p key={client} className="text-xs font-semibold tracking-[-0.015em] sm:text-sm md:text-base">
            {client}
          </p>
        ))}
      </div>
    </section>
  )
}
