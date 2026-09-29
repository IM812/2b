import type { Metadata } from 'next'
import { ArrowDownRight } from 'lucide-react'
import { TechnologiesIntro } from '@/components/editorial/page-intros'

export const metadata: Metadata = {
  title: 'Технологии ИТ-инфраструктуры',
  description:
    'Серверы, системы хранения данных, резервное копирование, сети, СКС, виртуализация и мониторинг в проектах 2В Сервис.',
  alternates: { canonical: '/technologies' },
  openGraph: {
    url: '/technologies',
    title: 'Технологии ИТ-инфраструктуры | 2В Сервис',
    description: 'Технологические направления, с которыми работает инженерная команда 2В Сервис.',
  },
}

const TECHNOLOGY_GROUPS = [
  {
    title: 'Серверная инфраструктура',
    description: 'Подбор, поставка, установка, настройка и модернизация серверов под требования информационных систем.',
    scope: ['Физические серверы', 'Виртуализация', 'Миграция нагрузок', 'Администрирование'],
  },
  {
    title: 'Хранение и резервное копирование',
    description: 'Проектирование систем хранения и схем резервного копирования с учетом объема данных и допустимого времени восстановления.',
    scope: ['СХД', 'Backup', 'Репликация', 'Контроль восстановления'],
  },
  {
    title: 'Корпоративные сети',
    description: 'Локальные и беспроводные сети для офисов, площадок и распределенной инфраструктуры.',
    scope: ['LAN и Wi-Fi', 'Маршрутизация', 'Сетевой периметр', 'Мониторинг'],
  },
  {
    title: 'ЦОД и облачные ресурсы',
    description: 'Размещение оборудования, виртуальные ресурсы и перенос сервисов на управляемую технологическую площадку.',
    scope: ['Colocation', 'VPS', 'Миграция', 'Отказоустойчивость'],
  },
  {
    title: 'Инженерные системы',
    description: 'Физическая основа ИТ: кабельная инфраструктура, связь, видеонаблюдение и контроль доступа.',
    scope: ['СКС', 'IP-телефония', 'CCTV', 'СКУД'],
  },
  {
    title: 'Рабочие места и ПО',
    description: 'Стандартизация пользовательской среды, настройка оборудования и сопровождение программного обеспечения.',
    scope: ['Компьютеры и оргтехника', 'Операционные системы', 'Корпоративное ПО', 'Поддержка пользователей'],
  },
]

const SELECTION_CRITERIA = [
  ['Совместимость', 'Решение должно встраиваться в действующую инфраструктуру, а не создавать изолированный контур.'],
  ['Эксплуатация', 'Учитываем доступность специалистов, мониторинг, обновления и порядок восстановления.'],
  ['Масштабирование', 'Закладываем рост пользователей, данных и вычислительной нагрузки без полной перестройки.'],
  ['Стоимость владения', 'Сравниваем не только закупку, но и поддержку, лицензии, энергопотребление и дальнейшее развитие.'],
]

export default function TechnologiesPage() {
  return (
    <>
      <TechnologiesIntro />

      <section className="section-pad bg-background">
        <div className="section-shell">
          <div className="grid gap-8 border-b border-border pb-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="eyebrow text-primary">Технологический контур</p>
              <h2 className="section-title mt-5">С чем работает инженерная команда</h2>
            </div>
            <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              На сайте перечислены не бренды ради списка, а классы решений, которые мы проектируем, внедряем и поддерживаем в инфраструктуре заказчика.
            </p>
          </div>

          <div className="-mx-4 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-5 sm:px-5 md:mx-0 md:grid md:snap-none md:gap-4 md:overflow-visible md:px-0 md:pb-0 md:grid-cols-2 lg:grid-cols-3">
            {TECHNOLOGY_GROUPS.map((group, index) => (
              <article
                key={group.title}
                data-reveal="scale"
                className={`motion-card flex min-h-[21rem] w-[78%] shrink-0 snap-center flex-col rounded-[2rem] p-6 sm:min-h-[23rem] sm:w-[62%] sm:p-8 md:min-h-[25rem] md:w-auto md:shrink md:snap-align-none ${index === 0 ? 'bg-primary text-primary-foreground' : index === 4 ? 'bg-surface text-surface-foreground' : 'bg-secondary'}`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-xs opacity-55">T / {String(index + 1).padStart(2, '0')}</span>
                  <ArrowDownRight className="size-5 opacity-55" aria-hidden />
                </div>
                <h2 className="mt-8 text-balance text-2xl font-semibold leading-tight tracking-[-.04em] sm:mt-10 sm:text-3xl md:mt-12">{group.title}</h2>
                <p className="mt-4 text-pretty text-sm leading-relaxed opacity-65 sm:mt-5">{group.description}</p>
                <ul className="mt-auto flex flex-wrap gap-2 pt-6 sm:pt-8" aria-label={`Состав направления «${group.title}»`}>
                  {group.scope.map((item) => (
                    <li key={item} className="rounded-full border border-current/20 px-3 py-1.5 text-xs font-semibold">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="mt-3 text-xs text-muted-foreground md:hidden" aria-hidden>← Свайп для остальных направлений →</p>
        </div>
      </section>

      <section className="section-pad bg-surface text-surface-foreground">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="eyebrow text-primary">Как выбираем</p>
            <h2 className="section-title mt-5">Технология следует за задачей</h2>
            <p className="mt-6 max-w-md text-pretty leading-relaxed text-surface-foreground/60">
              Сначала определяем требования к надежности и эксплуатации, затем формируем состав решения.
            </p>
          </div>
          <div className="flex flex-col">
            {SELECTION_CRITERIA.map(([title, description], index) => (
              <article key={title} className="grid gap-4 border-t border-white/15 py-7 last:border-b sm:grid-cols-[3rem_0.65fr_1.35fr] sm:items-start">
                <span className="font-mono text-xs text-primary">0{index + 1}</span>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-sm leading-relaxed text-surface-foreground/55">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
