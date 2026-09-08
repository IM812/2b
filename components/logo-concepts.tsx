'use client'

import { useId } from 'react'

type MarkProps = {
  className?: string
}

function CounterformMark({ className = '' }: MarkProps) {
  const maskId = useId().replace(/:/g, '')

  return (
    <svg className={className} viewBox="0 0 128 120" role="img" aria-label="Концепт Контрформа — знак 2В">
      <defs>
        <mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width="128" height="120">
          <rect width="128" height="120" fill="white" />
          <path
            d="M34 35c0-11 8-17 21-17h12c12 0 19 6 19 15 0 8-4 13-13 19L38 75h50M38 75v17h50"
            fill="none"
            stroke="black"
            strokeWidth="13"
            strokeLinecap="square"
            strokeLinejoin="round"
          />
        </mask>
      </defs>
      <path
        d="M18 8h48c26 0 41 11 41 29 0 11-6 19-17 24 13 4 20 13 20 25 0 18-15 26-44 26H18V8Z"
        fill="currentColor"
        mask={`url(#${maskId})`}
      />
    </svg>
  )
}

function LigatureMark({ className = '' }: MarkProps) {
  return (
    <svg className={className} viewBox="0 0 168 120" role="img" aria-label="Концепт Лигатура — знак 2В">
      <path d="M8 10h50c23 0 36 11 36 29 0 13-7 22-22 31L45 87h51v25H8V88l48-30c8-5 12-10 12-16 0-5-4-8-12-8H8V10Z" fill="currentColor" />
      <path
        d="M83 10h38c25 0 38 9 38 27 0 11-6 19-18 23 14 4 21 12 21 24 0 19-14 28-42 28H83V10Zm25 21v20h13c9 0 14-3 14-10s-5-10-14-10h-13Zm0 40v20h15c10 0 15-3 15-10s-5-10-15-10h-15Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
}

function ProtocolMark({ className = '' }: MarkProps) {
  return (
    <svg className={className} viewBox="0 0 184 120" role="img" aria-label="Концепт Протокол — знак 2В">
      <path d="M8 8h58l22 20v23L46 82h43v30H8V81l50-36v-9H8V8Z" fill="currentColor" />
      <path
        d="M101 8h48l25 22v20l-12 11 14 13v18l-23 20h-52V8Zm27 26v16h17l6-6v-5l-6-5h-17Zm0 40v16h19l6-5v-6l-6-5h-19Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
}

const CONCEPTS = [
  {
    code: 'A',
    name: 'Контрформа',
    description: 'Цифра 2 вырезана внутри силуэта буквы В. Один цельный знак вместо двух соседних символов — компактный, строгий и узнаваемый.',
    traits: ['Единый силуэт', 'Негативное пространство', 'Иконка и favicon'],
    Mark: CounterformMark,
  },
  {
    code: 'B',
    name: 'Лигатура',
    description: 'Два знака собраны в одну плотную конструкцию с общей опорой. Самый прямой и легко читаемый вариант для корпоративной среды.',
    traits: ['Читаемость', 'Корпоративный характер', 'Масштабируемость'],
    Mark: LigatureMark,
  },
  {
    code: 'C',
    name: 'Протокол',
    description: 'Угловая модульная геометрия отсылает к цифровым интерфейсам и инженерным схемам. Самый технологичный вариант новой серии.',
    traits: ['Современный IT', 'Модульная сетка', 'Выразительный ритм'],
    Mark: ProtocolMark,
  },
]

export function LogoConcepts() {
  return (
    <div className="flex flex-col gap-8">
      {CONCEPTS.map(({ code, name, description, traits, Mark }) => (
        <article key={code} className="overflow-hidden rounded-xl border border-border bg-card">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="flex min-h-80 items-center justify-center bg-secondary p-10 text-foreground sm:min-h-96 sm:p-16">
              <Mark className="w-full max-w-80" />
            </div>
            <div className="flex flex-col p-6 sm:p-9 lg:p-11">
              <div className="flex items-center justify-between gap-4 border-b border-border pb-5">
                <span className="eyebrow text-primary">Вариант {code}</span>
                <span className="font-mono text-xs text-muted-foreground">2В / MONOGRAM</span>
              </div>
              <h2 className="mt-7 text-4xl font-semibold tracking-[-.05em] sm:text-5xl">{name}</h2>
              <p className="mt-5 max-w-lg text-pretty leading-relaxed text-muted-foreground">{description}</p>
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
            <div className="flex min-h-36 items-center justify-between gap-5 border-b border-border p-6 text-foreground sm:border-b-0 sm:border-r">
              <span className="eyebrow text-muted-foreground">Монохром</span>
              <Mark className="w-24" />
            </div>
            <div className="flex min-h-36 items-center justify-between gap-5 border-b border-border bg-surface p-6 text-surface-foreground sm:border-b-0 sm:border-r">
              <span className="eyebrow text-surface-foreground/45">Инверсия</span>
              <Mark className="w-24" />
            </div>
            <div className="flex min-h-36 items-center justify-between gap-5 p-6 text-primary">
              <span className="eyebrow text-muted-foreground">Малый размер</span>
              <Mark className="w-10" />
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
