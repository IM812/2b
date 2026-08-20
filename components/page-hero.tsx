import { cn } from '@/lib/utils'
import { SystemVisual } from '@/components/system-visual'

type PageHeroProps = {
  eyebrow: string
  title: string
  description?: string
  className?: string
}

export function PageHero({ eyebrow, title, description, className }: PageHeroProps) {
  return (
    <section className={cn('overflow-hidden bg-background', className)}>
      <div className="mx-auto grid max-w-[90rem] gap-10 px-4 py-12 md:px-8 md:py-20 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
        <div className="pb-5 pt-10 lg:pb-14 lg:pt-20">
          <div className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-px w-10 bg-primary" aria-hidden="true" />
            {eyebrow}
          </div>
          <h1 className="mt-8 max-w-5xl text-balance text-[clamp(3rem,7vw,6.8rem)] font-semibold leading-[0.9]">{title}</h1>
          {description && <p className="mt-8 max-w-2xl border-t border-foreground/16 pt-6 text-base leading-relaxed text-foreground/62 md:text-lg">{description}</p>}
        </div>
        <SystemVisual className="reveal-image lg:min-h-[32rem]" />
      </div>
    </section>
  )
}
