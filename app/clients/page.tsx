import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { ClientsIntro } from '@/components/editorial/page-intros'

export const metadata: Metadata = {
  title: 'Клиенты и опыт работы',
  description:
    'Публичный клиентский опыт 2В Сервис в авиации, транспорте, гостиничном бизнесе, медиа, спорте и онлайн-сервисах.',
  alternates: { canonical: '/clients' },
  openGraph: {
    url: '/clients',
    title: 'Клиенты и опыт работы | 2В Сервис',
    description: 'Организации и отрасли, представленные в публичном портфеле 2В Сервис.',
  },
}

const CLIENT_GROUPS = [
  {
    category: 'Авиация',
    clients: ['ПАО «Аэрофлот»', 'АО «Авиакомпания «Россия»'],
    context: 'Корпоративные информационные системы, интеграция и техническая поддержка.',
  },
  {
    category: 'Транспорт и гостиничный бизнес',
    clients: ['АО «МКЖД»', 'Radisson Blu Шереметьево'],
    context: 'Инфраструктурные, информационные и инженерные системы объектов.',
  },
  {
    category: 'Медиа и спорт',
    clients: ['ИД «Комсомольская правда»', 'ХК «Спартак»'],
    context: 'ИТ-инфраструктура, сервисы для пользователей и техническое сопровождение.',
  },
  {
    category: 'Онлайн-сервисы',
    clients: ['Exat.ru'],
    context: 'Перенос, размещение и дальнейшее сопровождение инфраструктуры публичного сервиса.',
  },
]

const WORK_FORMATS = [
  ['Проект под ключ', 'Обследование, проектирование, поставка, внедрение и передача документации.'],
  ['Развитие системы', 'Планируем изменения, выпускаем доработки и адаптируем решение к новым процессам.'],
  ['Поддержка по SLA', 'Фиксируем состав услуг, время реакции, уровни эскалации и отчетность.'],
]

export default function ClientsPage() {
  return (
    <>
      <ClientsIntro />

      <section className="section-pad bg-background">
        <div className="section-shell">
          <div className="grid gap-8 border-b border-border pb-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <p className="eyebrow text-primary">Публичный портфель</p>
              <h2 className="section-title mt-5">Опыт в разных отраслях</h2>
            </div>
            <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Ниже — организации и направления работ, опубликованные на текущем сайте 2В Сервис. Состав конкретного проекта раскрываем только там, где доступно описание кейса.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {CLIENT_GROUPS.map((group, index) => (
              <article key={group.category} data-reveal="scale" className={`motion-card rounded-[2rem] p-6 sm:p-8 ${index === 0 ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}>
                <p className="eyebrow opacity-55">{group.category}</p>
                <ul className="mt-10 flex flex-col gap-3" aria-label={`Клиенты: ${group.category}`}>
                  {group.clients.map((client) => (
                    <li key={client} className="text-balance text-2xl font-semibold tracking-[-.035em] sm:text-3xl">
                      {client}
                    </li>
                  ))}
                </ul>
                <p className="mt-8 max-w-xl text-sm leading-relaxed opacity-65">{group.context}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-secondary">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="eyebrow text-primary">Формат взаимодействия</p>
            <h2 className="section-title mt-5">Под задачу и этап развития</h2>
          </div>
          <div className="flex flex-col">
            {WORK_FORMATS.map(([title, description], index) => (
              <article key={title} className="grid gap-4 border-t border-border py-7 last:border-b sm:grid-cols-[3rem_0.7fr_1.3fr] sm:items-start">
                <span className="font-mono text-xs text-primary">0{index + 1}</span>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface text-surface-foreground">
        <div className="section-shell flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="eyebrow text-primary">Нужен похожий контур?</p>
            <h2 className="section-title mt-5">Посмотрите, как мы разбираем реальные проекты</h2>
            <p className="mt-6 max-w-2xl leading-relaxed text-surface-foreground/60">
              На отдельной странице собраны задачи, архитектура, этапы запуска и результат в эксплуатации — без повторения клиентского списка.
            </p>
          </div>
          <Link href="/projects" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-background px-5 py-3 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5">
            Открыть кейсы <ArrowUpRight className="size-4" aria-hidden />
          </Link>
        </div>
      </section>
    </>
  )
}
