type MarkProps = {
  className?: string
}

function JunctionMark({ className = '' }: MarkProps) {
  return (
    <svg className={className} viewBox="0 0 176 112" role="img" aria-label="Концепт Стык — знак 2В">
      <path d="M20 33C20 19 31 12 46 12h17c17 0 27 9 27 23 0 11-5 18-18 26L25 91h67" fill="none" stroke="currentColor" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M105 18v76h26c20 0 31-8 31-22 0-11-8-18-21-19 11-2 17-8 17-18 0-12-10-17-28-17h-25Zm15 13h10c8 0 12 3 12 8s-4 8-12 8h-10V31Zm0 29h12c9 0 14 4 14 10 0 7-5 10-14 10h-12V60Z" fill="currentColor" fillRule="evenodd" />
    </svg>
  )
}

function ModuleMark({ className = '' }: MarkProps) {
  return (
    <svg className={className} viewBox="0 0 176 112" role="img" aria-label="Концепт Модуль — знак 2В">
      <path d="M12 18h55c17 0 27 10 27 25 0 11-6 20-18 27L48 86h46v16H12V87l51-30c9-5 14-9 14-15 0-5-4-8-11-8H12V18Z" fill="currentColor" />
      <path d="M105 18h36c17 0 27 8 27 22 0 10-5 17-14 20 11 3 17 10 17 20 0 14-11 22-30 22h-36V18Zm17 15v20h16c8 0 12-3 12-10s-4-10-12-10h-16Zm0 34v20h18c9 0 13-3 13-10s-4-10-13-10h-18Z" fill="currentColor" fillRule="evenodd" />
    </svg>
  )
}

function RouteMark({ className = '' }: MarkProps) {
  return (
    <svg className={className} viewBox="0 0 176 112" role="img" aria-label="Концепт Маршрут — знак 2В">
      <path d="M16 30c0-10 8-18 18-18h32c14 0 23 9 23 22 0 9-5 16-14 21L24 88h65" fill="none" stroke="currentColor" strokeWidth="14" strokeLinecap="square" strokeLinejoin="round" />
      <path d="M110 18v76m0-76h22c16 0 26 7 26 19 0 11-9 18-25 18h-23m0 0h25c17 0 27 7 27 20 0 12-10 19-27 19h-25" fill="none" stroke="currentColor" strokeWidth="14" strokeLinejoin="round" />
    </svg>
  )
}

const CONCEPTS = [
  {
    code: 'A',
    name: 'Стык',
    description: 'Плавная «2» соединяется с компактной «В». Знак сохраняет преемственность с текущей пластикой, но становится спокойнее и увереннее.',
    traits: ['Преемственность', 'Мягкая геометрия', 'Хорошая читаемость'],
    Mark: JunctionMark,
  },
  {
    code: 'B',
    name: 'Модуль',
    description: 'Плотная конструкция из двух равных блоков. Подчеркивает системность, инженерный подход и хорошо работает как иконка.',
    traits: ['Технологичность', 'Компактность', 'Сильный силуэт'],
    Mark: ModuleMark,
  },
  {
    code: 'C',
    name: 'Маршрут',
    description: 'Линейный знак напоминает схему соединений и движение сигнала. Самый технический и строгий вариант из трех.',
    traits: ['Инфраструктура', 'Связность', 'Динамика'],
    Mark: RouteMark,
  },
]

export function LogoConcepts() {
  return (
    <div className="flex flex-col gap-6">
      {CONCEPTS.map(({ code, name, description, traits, Mark }) => (
        <article key={code} className="overflow-hidden rounded-[2rem] border border-border bg-card">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="flex min-h-80 items-center justify-center bg-secondary p-8 text-primary sm:p-12">
              <Mark className="w-full max-w-sm" />
            </div>
            <div className="flex flex-col p-6 sm:p-9 lg:p-11">
              <div className="flex items-center justify-between gap-4 border-b border-border pb-5">
                <span className="eyebrow text-primary">Вариант {code}</span>
                <span className="font-mono text-xs text-muted-foreground">2В / SYMBOL</span>
              </div>
              <h2 className="mt-7 text-4xl font-semibold tracking-[-.05em] sm:text-5xl">{name}</h2>
              <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">{description}</p>
              <ul className="mt-8 flex flex-wrap gap-2" aria-label={`Характеристики концепта «${name}»`}>
                {traits.map((trait) => (
                  <li key={trait} className="rounded-full border border-border px-3 py-1.5 text-xs font-semibold">
                    {trait}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid border-t border-border sm:grid-cols-3">
            <div className="flex min-h-36 items-center justify-between gap-5 border-b border-border p-6 text-primary sm:border-b-0 sm:border-r">
              <span className="eyebrow text-muted-foreground">Основной</span>
              <Mark className="w-24" />
            </div>
            <div className="flex min-h-36 items-center justify-between gap-5 border-b border-border bg-surface p-6 text-surface-foreground sm:border-b-0 sm:border-r">
              <span className="eyebrow text-surface-foreground/45">Инверсия</span>
              <Mark className="w-24" />
            </div>
            <div className="flex min-h-36 items-center justify-between gap-5 p-6 text-foreground">
              <span className="eyebrow text-muted-foreground">24 px</span>
              <Mark className="w-12" />
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
