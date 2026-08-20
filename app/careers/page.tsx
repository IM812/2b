import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Карьера — 2В Сервис',
  description: 'Работа в 2В Сервис: проекты для крупнейших авиационных и транспортных компаний страны.',
}

const OPENINGS = [
  { title: 'Ведущий инженер по интеграции', location: 'Москва', format: 'Полная занятость' },
  { title: 'Аналитик корпоративных информационных систем', location: 'Москва', format: 'Полная занятость' },
  { title: 'Инженер технической поддержки enterprise-систем', location: 'Москва', format: 'Полная занятость' },
  { title: 'Руководитель проектов внедрения', location: 'Москва', format: 'Полная занятость' },
]

const BENEFITS = [
  { title: 'Масштаб задач', description: 'Проекты для крупнейших авиационных компаний страны — системы с тысячами пользователей.' },
  { title: 'Полный цикл', description: 'Участие в проекте от обследования и проектирования до промышленной эксплуатации.' },
  { title: 'Долгосрочные проекты', description: 'Многолетние договоры дают возможность глубоко разобраться в архитектуре и процессах заказчика.' },
  { title: 'Инженерная культура', description: 'Решения принимаются на основе архитектуры и данных, а не шаблонов.' },
]

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Карьера"
        title="Работайте над системами, которые нельзя остановить"
        description="Мы собираем команду инженеров, аналитиков и руководителей проектов для работы с корпоративными информационными системами крупнейших организаций страны."
      />

      <section className="border-b border-border bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="Почему 2В Сервис" title="Что получает команда" />
          <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2">
            {BENEFITS.map((benefit) => (
              <div key={benefit.title} className="border-t border-border pt-5">
                <h3 className="text-base font-semibold leading-snug text-foreground">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="Вакансии" title="Открытые позиции" />
          <div className="mt-10 flex flex-col gap-4">
            {OPENINGS.map((role) => (
              <div
                key={role.title}
                className="flex flex-col gap-4 border border-border bg-background p-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h3 className="text-base font-semibold leading-snug text-foreground">{role.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {role.location} · {role.format}
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="shrink-0"
                  nativeButton={false}
                  render={<a href="mailto:hr@2v-service.ru?subject=Отклик%20на%20вакансию">Откликнуться</a>}
                />
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
            Не нашли подходящую вакансию? Напишите нам на{' '}
            <a href="mailto:hr@2v-service.ru" className="font-medium text-foreground underline underline-offset-4">
              hr@2v-service.ru
            </a>{' '}
            — мы рассматриваем резюме даже без открытой позиции.
          </p>
        </div>
      </section>
    </>
  )
}
