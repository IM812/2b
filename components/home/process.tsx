import { PROCESS_STEPS } from '@/lib/content'
import { SectionHeading } from '@/components/section-heading'

export function Process() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
        <SectionHeading
          eyebrow="Полный цикл реализации"
          title="Берём ответственность за весь жизненный цикл системы"
          description="Мы не «программисты на заказ». Мы — исполнитель, способный забрать целиком корпоративный ИТ-проект: от первого обследования до многолетней технической поддержки."
        />

        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
          {PROCESS_STEPS.map((step, index) => (
            <div key={step.title} className="relative flex flex-col">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-primary">{String(index + 1).padStart(2, '0')}</span>
                <span className="h-px flex-1 bg-foreground/15" aria-hidden="true" />
              </div>
              <h3 className="mt-3 font-heading text-base font-medium leading-snug text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
