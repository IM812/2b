import { cn } from '@/lib/utils'

type PageHeroProps = {
  eyebrow: string
  title: string
  description?: string
  className?: string
}

export function PageHero({ eyebrow, title, description, className }: PageHeroProps) {
  return (
    <section className={cn('border-b border-border bg-secondary', className)}>
      <div className="mx-auto max-w-[90rem] px-4 py-20 md:px-8 md:py-28">
        <p className="text-sm font-semibold text-primary">{eyebrow}</p>
        <h1 className="mt-6 max-w-6xl text-balance text-5xl font-semibold leading-[1.02] md:text-7xl">{title}</h1>
        {description && <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">{description}</p>}
      </div>
    </section>
  )
}
