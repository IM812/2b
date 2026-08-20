import { cn } from '@/lib/utils'

type PageHeroProps = {
  eyebrow: string
  title: string
  description?: string
  className?: string
}

export function PageHero({ eyebrow, title, description, className }: PageHeroProps) {
  return (
    <section className={cn('border-b border-border bg-secondary/40', className)}>
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-20">
        <p className="font-mono text-xs uppercase tracking-wider text-accent">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-balance text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
