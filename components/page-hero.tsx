import { cn } from '@/lib/utils'
import { PageNetworkScene, type SceneVariant } from '@/components/page-network-scene'

type PageHeroProps = { eyebrow: string; title: string; description?: string; className?: string; variant?: SceneVariant }

export function PageHero({ eyebrow, title, description, className, variant }: PageHeroProps) {
  return (
    <section className={cn('relative max-h-[700px] overflow-hidden bg-surface pb-12 pt-28 text-surface-foreground sm:pb-16 sm:pt-32 md:pb-20 md:pt-36', className)}>
      {variant && <PageNetworkScene variant={variant} />}
      <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/90 to-surface/20" aria-hidden />
      <div className="section-shell relative z-10">
        <div className="flex items-center justify-between gap-6 border-b border-white/15 pb-5">
          <div className="flex items-center gap-3"><span className="signal-dot" /><p className="eyebrow text-surface-foreground/55">{eyebrow}</p></div>
          <p className="hidden font-mono text-[10px] uppercase tracking-[.2em] text-surface-foreground/35 sm:block">Москва · Работаем по всей России</p>
        </div>
        <h1 className="display-title mt-6 max-w-[65rem] text-balance sm:mt-8">{title}</h1>
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
