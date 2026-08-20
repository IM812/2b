const CLIENTS = ['ПАО «Аэрофлот»', 'АО «Авиакомпания «Россия»']

export function TrustBar() {
  return (
    <section className="border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Нам доверяют реализацию критичных ИТ-проектов
          </p>
          <ul className="flex flex-wrap gap-x-10 gap-y-3">
            {CLIENTS.map((client) => (
              <li key={client} className="text-base font-semibold text-foreground md:text-lg">
                {client}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
