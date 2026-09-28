import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { PROJECTS } from '@/lib/content'

export function FlagshipProjects() {
  const featured = PROJECTS[0]
  return (
    <section className="overflow-hidden bg-surface py-14 text-surface-foreground sm:py-24 md:py-36">
      <div className="marquee mb-10 flex whitespace-nowrap text-6xl font-semibold leading-none tracking-[-.08em] text-white/[.055] sm:mb-20 sm:text-[clamp(5rem,14vw,13rem)]" aria-hidden>
        <span>КРИТИЧНЫЕ СИСТЕМЫ · БЕЗ ОСТАНОВКИ ·&nbsp;</span><span>КРИТИЧНЫЕ СИСТЕМЫ · БЕЗ ОСТАНОВКИ ·&nbsp;</span>
      </div>
      <div className="section-shell">
        <div data-reveal="clip" className="grid gap-8 lg:grid-cols-[.55fr_1.45fr] lg:items-end">
          <div><p className="eyebrow text-accent">Избранные проекты</p><Link href="/clients" className="mt-6 inline-flex items-center gap-2 text-sm font-bold">Все клиенты и проекты <ArrowRight className="size-4" /></Link></div>
          <h2 className="section-title max-w-5xl">Не презентации<br /><span className="text-primary">Системы в эксплуатации</span></h2>
        </div>

        {/* Mobile: horizontal snap-scroll slider */}
        <div className="-mx-4 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:hidden [&::-webkit-scrollbar]:hidden">
          <Link href={`/clients#${featured.slug}`} className="motion-card group relative block min-h-[26rem] w-[86%] shrink-0 snap-center overflow-hidden rounded-[1.5rem] bg-primary p-5 text-primary-foreground">
            <div className="absolute -bottom-12 -right-3 select-none text-[11rem] font-black leading-none text-white/[.07]" aria-hidden>01</div>
            <div className="relative flex min-h-[22rem] flex-col justify-between">
              <div className="flex items-center justify-between"><p className="eyebrow text-white/60">{featured.clientShort} · {featured.industry}</p><ArrowUpRight className="size-8 transition-transform" /></div>
              <div className="grid min-w-0 gap-8">
                <h3 className="min-w-0 text-pretty text-[1.55rem] font-semibold leading-[1.02] tracking-[-.04em]">{featured.title}</h3>
                <div className="min-w-0"><p className="eyebrow text-white/50">Результат</p><p className="mt-3 max-w-md text-sm leading-relaxed text-white/75">{featured.result}</p></div>
              </div>
            </div>
          </Link>
          {PROJECTS.slice(1, 3).map((project, index) => (
            <Link key={project.slug} href={`/clients#${project.slug}`} className={`motion-card ${index === 0 ? 'bg-accent text-accent-foreground' : 'bg-white text-foreground'} group flex min-h-[19rem] w-[86%] shrink-0 snap-center flex-col justify-between gap-6 overflow-hidden rounded-[1.75rem] p-5`}>
              <div className="flex justify-between"><span className="eyebrow opacity-50">0{index + 2} · {project.industry}</span><ArrowUpRight className="size-6 transition-transform" /></div>
              <div>
                <h3 className="text-pretty text-[1.2rem] font-semibold leading-[1.1] tracking-[-.035em]">{project.title}</h3>
                <p className={`mt-4 max-w-sm text-pretty text-sm leading-relaxed ${index === 0 ? 'text-accent-foreground/70' : 'text-muted-foreground'}`}>{project.summary}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-4 flex justify-center gap-1.5 sm:hidden" aria-hidden>
          {Array.from({ length: 3 }).map((_, i) => (
            <span key={i} className="h-1.5 w-1.5 rounded-full bg-surface-foreground/20" />
          ))}
        </div>

        {/* Desktop / tablet: original layout */}
        <Link data-reveal="scale" href={`/clients#${featured.slug}`} className="motion-card group relative mt-16 hidden min-h-[38rem] overflow-hidden rounded-[3rem] bg-primary p-8 text-primary-foreground sm:block md:p-14">
          <div className="absolute -bottom-20 -right-6 select-none text-[18rem] font-black leading-none text-white/[.07]" aria-hidden>01</div>
          <div className="relative flex min-h-[31rem] flex-col justify-between">
            <div className="flex items-center justify-between"><p className="eyebrow text-white/60">{featured.clientShort} · {featured.industry}</p><ArrowUpRight className="size-8 transition-transform" /></div>
            <div className="grid min-w-0 gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(18rem,.7fr)] lg:items-end">
              <h3 className="min-w-0 text-pretty text-[2.4rem] font-semibold leading-[1.02] tracking-[-.04em] md:text-[5.4rem]">{featured.title}</h3>
              <div className="min-w-0 lg:border-l lg:border-white/20 lg:pl-8"><p className="eyebrow text-white/50">Результат</p><p className="mt-3 max-w-md text-sm leading-relaxed text-white/75 md:text-base">{featured.result}</p></div>
            </div>
          </div>
        </Link>

        <div className="mt-6 hidden gap-6 sm:grid md:grid-cols-[1.15fr_.85fr]">
          {PROJECTS.slice(1, 3).map((project, index) => (
            <Link key={project.slug} data-reveal style={{ '--reveal-delay': `${index * 110}ms` } as React.CSSProperties} href={`/clients#${project.slug}`} className={`motion-card ${index === 0 ? 'bg-accent text-accent-foreground md:translate-y-10' : 'bg-white text-foreground'} group flex min-h-[25rem] min-w-0 flex-col justify-between gap-6 overflow-hidden rounded-[2.5rem] p-8 md:p-10`}>
              <div className="flex justify-between"><span className="eyebrow opacity-50">0{index + 2} · {project.industry}</span><ArrowUpRight className="size-6 transition-transform" /></div>
              <div>
                <h3 className="text-pretty text-[1.7rem] font-semibold leading-[1.1] tracking-[-.035em] md:text-[2.4rem]">{project.title}</h3>
                <p className={`mt-4 max-w-sm text-pretty text-sm leading-relaxed sm:text-base ${index === 0 ? 'text-accent-foreground/70' : 'text-muted-foreground'}`}>{project.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
