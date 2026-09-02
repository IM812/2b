import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const licenses = [
  { title: 'Лицензия на оказание услуг по передаче данных', image: '/licenses/data-transfer-new.png' },
  { title: 'Лицензия на оказание телематических услуг связи', image: '/licenses/communication-services-new.png' },
  { title: 'Сертификат партнера 1С', image: '/licenses/1c-new.png' },
  { title: 'Сертификат соответствия IQS', image: '/licenses/iqs-certificate-new.png' },
  { title: 'Сертификат соответствия ГОСТ Р', image: '/licenses/gost-new.png' },
  { title: 'Приложение к сертификату ГОСТ Р', image: '/licenses/gost-appendix-new.png' },
  { title: 'Сертификат Intel Technology Provider Gold', image: '/licenses/intel-new.png' },
  { title: 'Сертификат авторизованного партнера Eurolan', image: '/licenses/eurolan-new.png' },
  { title: 'Сертификат по медным и оптическим системам СКС', image: '/licenses/molex-new.png' },
  { title: 'Разрешение на использование знака соответствия IQS', image: '/licenses/iqs-permit-new.png' },
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
          <div className="grid grid-cols-2 items-start gap-3 sm:gap-5 lg:grid-cols-3">
            {licenses.map((license) => (
              <a
                key={license.title}
                href={license.image}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card text-card-foreground transition-colors hover:border-primary"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
                  <Image
                    src={license.image}
                    alt={license.title}
                    fill
                    quality={90}
                    sizes="(max-width: 640px) 46vw, (max-width: 1024px) 48vw, 33vw"
                    className="object-contain p-2.5 sm:p-5"
                  />
                </div>
                <h2 className="text-pretty p-3 text-[13px] font-semibold leading-snug sm:p-4 sm:text-base">{license.title}</h2>
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
