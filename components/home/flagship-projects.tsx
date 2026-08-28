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
          <div><p className="eyebrow text-accent">Избранные проекты</p><Link href="/projects" className="mt-6 inline-flex items-center gap-2 text-sm font-bold">Все проекты <ArrowRight className="size-4" /></Link></div>
          <h2 className="section-title max-w-5xl">Не презентации.<br /><span className="text-primary">Работающие системы.</span></h2>
        </div>

        <Link data-reveal="scale" href={`/projects/${featured.slug}`} className="motion-card group relative mt-10 block min-h-[26rem] overflow-hidden rounded-[1.5rem] bg-primary p-5 text-primary-foreground sm:mt-16 sm:min-h-[38rem] sm:rounded-[3rem] sm:p-8 md:p-14">
          <div className="absolute -bottom-12 -right-3 select-none text-[11rem] font-black leading-none text-white/[.07] sm:-bottom-20 sm:-right-6 sm:text-[18rem]" aria-hidden>01</div>
          <div className="relative flex min-h-[22rem] flex-col justify-between sm:min-h-[31rem]">
            <div className="flex items-center justify-between"><p className="eyebrow text-white/60">{featured.clientShort} · {featured.industry}</p><ArrowUpRight className="size-8 transition-transform" /></div>
            <div className="grid min-w-0 gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(18rem,.7fr)] lg:items-end">
              <h3 className="min-w-0 text-pretty text-[2.15rem] font-semibold leading-[.93] tracking-[-.055em] sm:text-5xl md:text-8xl">{featured.title}</h3>
              <div className="min-w-0 lg:border-l lg:border-white/20 lg:pl-8"><p className="max-w-md text-sm leading-relaxed text-white/65 md:text-base">{featured.summary}</p></div>
            </div>
          </div>
        </Link>

        <div className="mt-6 grid gap-6 md:grid-cols-[1.15fr_.85fr]">
          {PROJECTS.slice(1, 3).map((project, index) => (
            <Link key={project.slug} data-reveal style={{ '--reveal-delay': `${index * 110}ms` } as React.CSSProperties} href={`/projects/${project.slug}`} className={`motion-card ${index === 0 ? 'bg-accent text-accent-foreground md:translate-y-10' : 'bg-white text-foreground'} group flex min-h-[19rem] min-w-0 flex-col justify-between overflow-hidden rounded-[1.75rem] p-5 sm:min-h-[25rem] sm:rounded-[2.5rem] sm:p-8 md:p-10`}>
              <div className="flex justify-between"><span className="eyebrow opacity-50">0{index + 2} · {project.industry}</span><ArrowUpRight className="size-6 transition-transform" /></div>
              <h3 className="text-pretty text-[1.8rem] font-semibold leading-[.98] tracking-[-.05em] sm:text-4xl md:text-5xl">{project.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
