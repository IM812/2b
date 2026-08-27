import { cn } from '@/lib/utils'

type PageHeroProps = { eyebrow: string; title: string; description?: string; className?: string }

export function PageHero({ eyebrow, title, description, className }: PageHeroProps) {
  return (
    <section className={cn('relative overflow-hidden bg-surface pb-12 pt-28 text-surface-foreground sm:pb-16 sm:pt-32 md:pb-24 md:pt-44', className)}>
      <div className="pointer-events-none absolute -right-24 top-24 size-52 rounded-full border border-white/10 sm:-right-16 sm:top-28 sm:size-64 md:size-96" aria-hidden>
        <div className="absolute inset-10 rounded-full border border-primary/60" />
        <div className="absolute inset-24 rounded-full bg-primary" />
      </div>
      <div className="section-shell relative">
        <div className="flex items-center gap-3"><span className="signal-dot" /><p className="eyebrow text-surface-foreground/55">{eyebrow}</p></div>
        <h1 className="display-title mt-6 max-w-[65rem] break-words text-balance sm:mt-8">{title}</h1>
        {description && (
          <div className="mt-8 flex flex-col gap-4 border-t border-white/15 pt-6 sm:mt-12 sm:gap-6 sm:pt-8 md:flex-row md:items-start md:justify-between">
            <span className="eyebrow text-primary">2В / {eyebrow}</span>
            <p className="max-w-3xl text-pretty text-lg leading-relaxed text-surface-foreground/70 md:text-xl">{description}</p>
          </div>
        )}
      </div>
      <p className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-[18vw] font-black leading-none tracking-[-0.09em] text-white/[0.025]" aria-hidden>2В СЕРВИС</p>
    </section>
  )
}
