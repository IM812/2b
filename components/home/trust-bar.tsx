const ITEMS = ['Аэрофлот', 'Авиакомпания «Россия»', '326,4 млн ₽', 'Enterprise-системы', 'Поддержка 24/7']

export function TrustBar() {
  const repeated = [...ITEMS, ...ITEMS]
  return (
    <section className="overflow-hidden border-y border-foreground/15 bg-primary py-4 text-primary-foreground" aria-label="Ключевые факты">
      <div className="marquee-track flex w-max items-center">
        {repeated.map((item, index) => (
          <div key={`${item}-${index}`} className="flex items-center">
            <span className="px-8 font-serif text-2xl italic md:px-14 md:text-4xl">{item}</span>
            <span className="size-1.5 rounded-full bg-primary-foreground" aria-hidden="true" />
          </div>
        ))}
      </div>
    </section>
  )
}
