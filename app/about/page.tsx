import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { SystemVisual } from '@/components/system-visual'
import { SectionHeading } from '@/components/section-heading'
import { STATS } from '@/lib/content'

export const metadata: Metadata = {
  title: 'О компании — 2В Сервис',
  description: '2В Сервис — российская технологическая компания, специализирующаяся на внедрении и сопровождении корпоративных информационных систем.',
}

const PRINCIPLES = [
  {
    title: 'Отвечаем за результат',
    description: 'Ведем проект от постановки задачи до промышленной эксплуатации и берем на себя ответственность за работу системы.',
  },
  {
    title: 'Работаем на длинной дистанции',
    description: 'Большинство наших проектов — многолетние договоры с непрерывным сопровождением и развитием систем.',
  },
  {
    title: 'Понимаем масштаб enterprise',
    description: 'Опыт работы с крупнейшими авиационными компаниями страны — системами с тысячами пользователей и критичными требованиями к непрерывности.',
  },
  {
    title: 'Инженерный, а не маркетинговый подход',
    description: 'Решения проектируются исходя из архитектуры и процессов заказчика, а не из шаблонных внедрений.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="О компании"
        title="Технологический партнер для комплексных корпоративных ИТ-проектов"
        description="2В Сервис — российская компания, специализирующаяся на внедрении, развитии и технической поддержке корпоративных информационных систем для крупных организаций."
      />

      <section className="border-b border-border bg-background py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Кто мы"
              title="Работаем там, где ошибка стоит дорого"
            />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground text-pretty">
              Мы специализируемся на корпоративных информационных системах, от которых напрямую зависит непрерывность
              бизнеса заказчика — документообороте, интеграционных решениях и учетных системах. Наши клиенты —
              крупнейшие авиационные и транспортные компании страны, для которых простой систем недопустим.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
              Компания ведет действующие договоры по внедрению, интеграции и технической поддержке систем на
              многолетней основе, что позволяет нам глубоко понимать процессы заказчика и предлагать решения,
              выдерживающие проверку временем.
            </p>
          </div>
          <SystemVisual className="min-h-[28rem]" />
        </div>
      </section>

      <section className="border-b border-border bg-foreground py-20 text-background md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-2">
                <span className="text-3xl font-bold tracking-tight text-background md:text-4xl">{stat.value}</span>
                <span className="text-sm leading-relaxed text-background/60">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="Принципы" title="Как мы работаем с заказчиками" />
          <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2">
            {PRINCIPLES.map((principle) => (
              <div key={principle.title} className="border-t border-border pt-5">
                <h3 className="text-base font-semibold leading-snug text-foreground">{principle.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
