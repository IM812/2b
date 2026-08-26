import { cn } from '@/lib/utils'

type PageHeroProps = { eyebrow: string; title: string; description?: string; className?: string }

export function PageHero({ eyebrow, title, description, className }: PageHeroProps) {
  return (
    <section className={cn('relative overflow-hidden bg-surface pb-16 pt-36 text-surface-foreground md:pb-24 md:pt-44', className)}>
      <div className="spine pointer-events-none absolute inset-0 hidden text-surface-foreground/70 lg:block" aria-hidden />
      <div className="section-shell relative">
        <p className="eyebrow text-surface-foreground/50">{eyebrow}</p>
        <h1 className="display-title mt-7 max-w-[62rem]">{title}</h1>
        {description && (
          <div className="mt-12 grid gap-6 border-t rule-ink pt-8 md:grid-cols-[minmax(0,14rem)_minmax(0,1fr)]">
            <span className="eyebrow text-surface-foreground/40">2В Сервис</span>
            <p className="max-w-3xl text-pretty text-lg leading-relaxed text-surface-foreground/70">{description}</p>
          </div>
        )}
      </div>
    </section>
  )
}
