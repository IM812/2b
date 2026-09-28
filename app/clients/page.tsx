import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { ClientsIntro } from '@/components/editorial/page-intros'
import { PROJECTS } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Клиенты и выполненные проекты',
  description:
    'Клиенты 2В Сервис и выполненные проекты: задачи, решения и результаты в авиации, транспорте, гостиничном бизнесе, медиа, спорте и онлайн-сервисах.',
  alternates: { canonical: '/clients' },
  openGraph: {
    url: '/clients',
    title: 'Клиенты и проекты | 2В Сервис',
    description: 'Организации, с которыми работает 2В Сервис, и что именно было сделано.',
  },
}

const WORK_FORMATS = [
  ['Проект под ключ', 'Обследование, проектирование, поставка, внедрение и передача документации.'],
  ['Развитие системы', 'Планируем изменения, выпускаем доработки и адаптируем решение к новым процессам.'],
  ['Поддержка по SLA', 'Фиксируем состав услуг, время реакции, уровни эскалации и отчетность.'],
]

export default function ClientsPage() {
  return (
    <>
      <ClientsIntro />

      <section className="section-pad bg-secondary">
        <div className="section-shell">
          <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <p className="eyebrow text-primary">Что сделали</p>
              <h2 className="section-title mt-5">Проекты у клиентов</h2>
            </div>
            <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              По каждому проекту — задача заказчика, наше решение и результат в эксплуатации.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-4">
            {PROJECTS.map((project) => (
              <article key={project.slug} id={project.slug} data-reveal className="scroll-mt-28 rounded-[1.5rem] bg-background p-6 sm:p-8 md:p-10">
                <div className="flex flex-col gap-3 border-b border-border pb-6 md:flex-row md:items-start md:justify-between md:gap-10">
                  <div className="max-w-3xl">
                    <h3 className="text-pretty text-2xl font-semibold leading-tight tracking-[-.03em] sm:text-3xl">{project.title}</h3>
                  </div>
                  <p className="shrink-0 text-sm text-muted-foreground md:text-right">{project.timeline}</p>
                </div>
                <dl className="mt-6 grid gap-6 md:grid-cols-3">
                  {[['Задача', project.task], ['Решение', project.solution], ['Результат', project.result]].map(([term, text]) => (
                    <div key={term} className="flex flex-col gap-2">
                      <dt className="text-xs font-semibold uppercase tracking-[.14em] text-muted-foreground">{term}</dt>
                      <dd className="text-pretty text-sm leading-relaxed sm:text-base">{text}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-background">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="eyebrow text-primary">Формат взаимодействия</p>
            <h2 className="section-title mt-5">Под задачу и этап развития</h2>
          </div>
          <div className="flex flex-col">
            {WORK_FORMATS.map(([title, description]) => (
              <article key={title} className="grid gap-3 border-t border-border py-7 last:border-b sm:grid-cols-[0.7fr_1.3fr] sm:items-start">
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
            <p className="eyebrow text-primary">Похожая задача?</p>
            <h2 className="section-title mt-5">Обсудим ваш проект</h2>
          </div>
          <Link href="/contacts" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-background px-5 py-3 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5">
            Связаться <ArrowUpRight className="size-4" aria-hidden />
          </Link>
        </div>
      </section>
    </>
  )
}
