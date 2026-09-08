import type { Metadata } from 'next'
import { LogoConcepts } from '@/components/logo-concepts'

export const metadata: Metadata = {
  title: 'Варианты знака 2В',
  description: 'Рабочая страница сравнения трех направлений нового знака 2В.',
  robots: { index: false, follow: false },
}

export default function LogoConceptsPage() {
  return (
    <>
      <section className="overflow-hidden bg-surface pb-16 pt-32 text-surface-foreground sm:pb-20 sm:pt-36 md:pb-24 md:pt-40">
        <div className="section-shell">
          <p className="eyebrow text-primary">Айдентика / рабочий просмотр</p>
          <div className="mt-7 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[.9] tracking-[-.065em] sm:text-7xl md:text-8xl">
              Три направления знака 2В
            </h1>
            <p className="max-w-xl text-pretty text-lg leading-relaxed text-surface-foreground/60">
              Все варианты рассчитаны на использование без словесной части — в шапке сайта, favicon, документах и интерфейсах.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-background">
        <div className="section-shell">
          <div className="mb-10 grid gap-6 border-b border-border pb-8 sm:grid-cols-3">
            <p className="text-sm leading-relaxed text-muted-foreground">Проверка в основном фирменном цвете</p>
            <p className="text-sm leading-relaxed text-muted-foreground">Проверка на темном фоне</p>
            <p className="text-sm leading-relaxed text-muted-foreground">Проверка читаемости в малом размере</p>
          </div>
          <LogoConcepts />
        </div>
      </section>
    </>
  )
}
