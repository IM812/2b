import { cn } from '@/lib/utils'

type PageHeroProps = { eyebrow: string; title: string; description?: string; className?: string }

export function PageHero({ eyebrow, title, description, className }: PageHeroProps) {
  return (
    <section className={cn('relative overflow-hidden bg-surface pb-20 pt-36 text-surface-foreground md:pb-28 md:pt-44', className)}>
      <div className="hairline-grid absolute inset-0 opacity-60" />
      <div className="light-field pointer-events-none absolute inset-0 opacity-70" />
      <div className="section-shell relative">
        <p className="eyebrow text-accent">{eyebrow}</p>
        <h1 className="mt-8 max-w-6xl text-balance text-5xl font-medium leading-[0.94] tracking-[-0.055em] md:text-7xl lg:text-8xl">{title}</h1>
        {description && <div className="mt-12 grid border-t border-surface-foreground/20 pt-8 md:grid-cols-2"><span className="eyebrow text-surface-foreground/45">2В Сервис / Enterprise IT</span><p className="max-w-2xl text-pretty text-lg leading-relaxed text-surface-foreground/70 md:text-xl">{description}</p></div>}
      </div>
    </section>
  )
}
