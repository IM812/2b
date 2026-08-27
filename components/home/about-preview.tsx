import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const PRINCIPLES = [
  {
    title: 'Ответственность за результат',
    text: 'Мы отвечаем не за отдельный этап, а за то, чтобы система работала в промышленной эксплуатации.',
  },
  {
    title: 'Инженерная преемственность',
    text: 'Те же специалисты, что проектировали и внедряли решение, сопровождают его дальше.',
  },
  {
    title: 'Работа по регламентам',
    text: 'Строгие SLA, формализованные процессы и прозрачная отчётность перед заказчиком.',
  },
]

export function AboutPreview() {
  return (
    <section className="section-pad bg-background">
      <div className="section-shell grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
        <div>
          <p className="eyebrow text-primary">О компании</p>
          <h2 className="section-title mt-5 max-w-2xl">Не поставщик услуг, а часть вашей команды.</h2>
          <p className="text-lead mt-8 max-w-xl text-muted-foreground">
            С 2010 года 2В Сервис работает с организациями, где ИТ-среда напрямую влияет на операционную деятельность:
            авиаперевозки, госсектор, транспорт и промышленность.
          </p>
          <Link href="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-primary">
            Подробнее о компании <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          {PRINCIPLES.map((item, index) => (
            <article key={item.title} className="panel flex gap-5 p-6">
              <span className="index-badge">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="text-lg font-semibold tracking-[-0.02em] md:text-xl">{item.title}</h3>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
