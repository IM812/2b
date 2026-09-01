import type { Metadata } from 'next'
import Link from 'next/link'

const licenses = [
  { title: 'Лицензия на оказание услуг по передаче данных', image: '/licenses/data-transfer.jpg' },
  { title: 'Лицензия на оказание телематических услуг связи', image: '/licenses/communication-services.jpg' },
]

const path = '/company/licenses/'

export const metadata: Metadata = {
  title: 'Профессиональный аутсорсинг 2B Service: Лицензии и сертификаты',
  description: 'Лицензии и сертификаты АО «2В Сервис», подтверждающие компетенции компании и специалистов',
  alternates: { canonical: path },
}

export default function LicensesPage() {
  return (
    <>
      <header className="bg-surface pb-14 pt-28 text-surface-foreground sm:pb-20 sm:pt-36">
        <div className="section-shell">
          <p className="eyebrow text-primary">Компания / лицензии и сертификаты</p>
          <h1 className="mt-6 max-w-5xl text-balance text-4xl font-semibold leading-tight tracking-[-.05em] sm:text-6xl">
            Лицензии и сертификаты
          </h1>
          <p className="mt-8 max-w-3xl text-pretty text-lg leading-relaxed text-surface-foreground/70">
            Документы, подтверждающие право компании оказывать услуги связи, соответствие стандартам качества и партнерские компетенции
          </p>
        </div>
      </header>

      <main className="section-pad bg-background">
        <div className="section-shell">
          <div className="grid max-w-4xl items-start gap-5 sm:grid-cols-2">
            {licenses.map((license) => (
              <a
                key={license.image}
                href={license.image}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card text-card-foreground transition-colors hover:border-primary"
              >
                <div className="flex aspect-[4/5] items-center justify-center overflow-hidden bg-secondary p-5">
                  <img
                    src={license.image}
                    alt={license.title}
                    loading="eager"
                    decoding="async"
                    className="block max-h-full w-auto max-w-full object-contain"
                  />
                </div>
                <h2 className="text-pretty p-4 text-base font-semibold leading-snug">{license.title}</h2>
              </a>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-3xl bg-secondary p-6 sm:flex-row sm:items-center sm:p-8">
            <div>
              <p className="eyebrow text-primary">Нужна помощь</p>
              <p className="mt-3 max-w-xl text-pretty text-lg font-semibold">Обсудим задачу и предложим следующий шаг</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground" href="tel:+74957875615">+7 (495) 787-56-15</a>
              <Link className="rounded-full border border-border px-5 py-3 text-sm font-semibold hover:border-primary" href="/contacts">Оставить заявку</Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
