import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { STATS } from '@/lib/content'

export const metadata: Metadata = {
  title: 'О компании — 2В Сервис',
  description: '2В Сервис — единый ИТ-партнёр крупных организаций.',
}

const PRINCIPLES = [
  ['Отвечаем за результат', 'Ведём проект от постановки задачи до промышленной эксплуатации и отвечаем за работу системы.'],
  ['Работаем на длинной дистанции', 'Многолетние договоры позволяют глубоко понимать процессы и развивать решения вместе с заказчиком.'],
  ['Понимаем масштаб enterprise', 'Работаем с системами, где тысячи пользователей и простой недопустим.'],
  ['Инженерный подход', 'Проектируем на основе архитектуры, процессов и измеримых требований.'],
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="О компании"
        title="Рядом, когда система становится частью бизнеса."
        description="Российская технологическая компания с единой ответственностью за инфраструктуру, корпоративные системы и их круглосуточную эксплуатацию."
      />

      <section className="section-pad bg-background">
        <div className="section-shell grid gap-12 lg:grid-cols-[minmax(0,.85fr)_minmax(0,1.15fr)] lg:gap-20">
          <div>
            <p className="eyebrow text-primary">Кто мы</p>
            <h2 className="section-title mt-5">Работаем там, где ошибка стоит дорого.</h2>
          </div>
          <div>
            <p className="text-lead text-muted-foreground">
              С 2010 года мы проектируем, внедряем и поддерживаем ИТ-среду крупных государственных и коммерческих
              организаций.
            </p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Наша команда объединяет архитекторов, инженеров, аналитиков и специалистов поддержки. Заказчик получает не
              набор подрядчиков, а один центр ответственности за конечный результат.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="section-shell section-pad">
          <p className="eyebrow text-primary-foreground/60">В цифрах</p>
          <dl className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="border-b border-primary-foreground/20 py-8 pr-6 lg:border-r lg:[&:nth-child(4n)]:border-r-0"
              >
                <dt className="num text-4xl md:text-5xl">{stat.value}</dt>
                <dd className="mt-3 max-w-[15rem] text-sm leading-relaxed text-primary-foreground/70">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section-pad bg-background">
        <div className="section-shell">
          <p className="eyebrow text-primary">Принципы</p>
          <h2 className="section-title mt-5">Как мы работаем.</h2>
          <div className="mt-14 rule-top">
            {PRINCIPLES.map(([title, description], i) => (
              <article key={title} className="index-row border-b border-border md:grid-cols-[4rem_minmax(0,20rem)_minmax(0,1fr)]">
                <p className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="text-xl font-semibold tracking-[-0.035em] md:text-2xl">{title}</h3>
                <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
