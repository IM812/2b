import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { PROJECTS } from '@/lib/content'

export function FlagshipProjects() {
  const featured = PROJECTS[0]
  return (
    <section className="overflow-hidden bg-surface py-24 text-surface-foreground md:py-36">
      <div className="marquee mb-20 flex whitespace-nowrap text-[clamp(5rem,14vw,13rem)] font-semibold leading-none tracking-[-.08em] text-white/[.055]" aria-hidden>
        <span>КРИТИЧНЫЕ СИСТЕМЫ · БЕЗ ОСТАНОВКИ ·&nbsp;</span><span>КРИТИЧНЫЕ СИСТЕМЫ · БЕЗ ОСТАНОВКИ ·&nbsp;</span>
      </div>
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[.55fr_1.45fr] lg:items-end">
          <div><p className="eyebrow text-accent">Избранные проекты</p><Link href="/projects" className="mt-6 inline-flex items-center gap-2 text-sm font-bold">Все проекты <ArrowRight className="size-4" /></Link></div>
          <h2 className="section-title max-w-5xl">Не презентации.<br /><span className="text-primary">Работающие системы.</span></h2>
        </div>

        <Link href={`/projects/${featured.slug}`} className="group relative mt-16 block min-h-[38rem] overflow-hidden rounded-[3rem] bg-primary p-8 text-primary-foreground md:p-14">
          <div className="absolute -bottom-20 -right-6 select-none text-[18rem] font-black leading-none text-white/[.07]" aria-hidden>01</div>
          <div className="relative flex min-h-[31rem] flex-col justify-between">
            <div className="flex items-center justify-between"><p className="eyebrow text-white/60">{featured.clientShort} · {featured.industry}</p><ArrowUpRight className="size-8 transition-transform group-hover:-translate-y-2 group-hover:translate-x-2" /></div>
            <div className="grid gap-8 lg:grid-cols-[1.3fr_.7fr] lg:items-end">
              <h3 className="text-balance text-5xl font-semibold leading-[.9] tracking-[-.065em] md:text-8xl">{featured.title}</h3>
              <div className="lg:border-l lg:border-white/20 lg:pl-8"><p className="num text-5xl text-accent md:text-7xl">{featured.contractValue || '24/7'}</p><p className="mt-5 text-sm leading-relaxed text-white/65">{featured.summary}</p></div>
            </div>
          </div>
        </Link>

        <div className="mt-6 grid gap-6 md:grid-cols-[1.15fr_.85fr]">
          {PROJECTS.slice(1, 3).map((project, index) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} className={`${index === 0 ? 'bg-accent text-accent-foreground md:translate-y-10' : 'bg-white text-foreground'} group flex min-h-[25rem] flex-col justify-between rounded-[2.5rem] p-8 md:p-10`}>
              <div className="flex justify-between"><span className="eyebrow opacity-50">0{index + 2} · {project.industry}</span><ArrowUpRight className="size-6 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></div>
              <h3 className="text-balance text-4xl font-semibold leading-[.95] tracking-[-.055em] md:text-5xl">{project.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
