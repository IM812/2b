import { SectionHeading } from '@/components/section-heading'

const REASONS = [
  {
    title: 'Отвечаем за результат, а не за строки в договоре',
    description:
      'Забираем проект целиком — от обследования процессов до технической поддержки в промышленной эксплуатации.',
  },
  {
    title: 'Работаем с критичными для бизнеса системами',
    description:
      'Опыт сопровождения систем крупнейших авиационных заказчиков страны, эксплуатируемых в режиме 24/7.',
  },
  {
    title: 'Подтвержденная масштабность проектов',
    description: 'Действующие договоры с фактурой и цифрами, а не абстрактные обещания.',
  },
  {
    title: 'Инженерная, а не только продающая команда',
    description: 'В основе компании — специалисты по интеграции, архитектуре и поддержке enterprise-систем.',
  },
]

export function WhyUs() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
        <SectionHeading eyebrow="Почему 2В Сервис" title="Надежность вместо рекламного креатива" />

        <div className="mt-14 grid gap-x-10 gap-y-10 md:grid-cols-2">
          {REASONS.map((reason) => (
            <div key={reason.title} className="flex gap-5">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
              <div>
                <h3 className="font-heading text-base font-medium leading-snug text-foreground">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
