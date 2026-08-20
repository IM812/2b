import Image from 'next/image'
import { cn } from '@/lib/utils'

type PageHeroProps = {
  eyebrow: string
  title: string
  description?: string
  className?: string
  image?: string
}

export function PageHero({ eyebrow, title, description, className, image = '/images/editorial-datacenter.png' }: PageHeroProps) {
  return (
    <section className={cn('overflow-hidden bg-background', className)}>
      <div className="mx-auto grid max-w-[90rem] gap-8 px-4 py-10 md:px-8 md:py-16 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
        <div className="pb-4 pt-10 lg:pb-12 lg:pt-20">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
          <h1 className="mt-7 max-w-5xl text-balance text-[clamp(3.2rem,7vw,7rem)] font-semibold leading-[0.88]">{title}</h1>
          {description && <p className="mt-8 max-w-2xl border-t border-foreground/20 pt-6 text-base leading-relaxed text-foreground/62 md:text-lg">{description}</p>}
        </div>
        <div className="relative aspect-[4/3] overflow-hidden lg:aspect-[3/4]">
          <Image src={image} alt="" fill priority sizes="(min-width: 1024px) 40vw, 100vw" className="reveal-image object-cover grayscale-[15%]" />
          <div className="film-grain absolute inset-0" />
        </div>
      </div>
    </section>
  )
}
