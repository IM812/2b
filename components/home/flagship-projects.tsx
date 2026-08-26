import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PROJECTS } from '@/lib/content'

export function FlagshipProjects() {
  const [featured, ...rest] = PROJECTS
  return (
    <section className="section-pad bg-surface text-surface-foreground">
      <div className="section-shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div><p className="eyebrow text-accent">Избранные проекты</p><h2 className="section-title mt-5 max-w-3xl">Ответственность, подтверждённая масштабом.</h2></div>
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-bold text-accent">Все проекты <ArrowUpRight className="size-4" /></Link>
        </div>
        <Link href={`/projects/${featured.slug}`} className="group relative mt-14 block min-h-[34rem] overflow-hidden rounded-md">
          <Image src={featured.image} alt="" fill className="object-cover transition-transform duration-700 group-hover:scale-[1.025]" />
          <div className="image-shade absolute inset-0" />
          <div className="relative flex min-h-[34rem] max-w-3xl flex-col justify-end p-7 md:p-12">
            <p className="eyebrow text-accent">{featured.clientShort} · {featured.industry}</p>
            <h3 className="mt-5 text-balance text-3xl font-medium leading-tight tracking-[-0.04em] md:text-5xl">{featured.title}</h3>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-surface-foreground/70">{featured.summary}</p>
            {featured.contractValue && <p className="mt-8 text-2xl font-semibold">{featured.contractValue}</p>}
          </div>
        </Link>
        <div className="mt-px grid gap-px bg-surface-foreground/15 md:grid-cols-2">
          {rest.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} className="group bg-surface p-7 transition-colors hover:bg-surface-foreground/5 md:p-10">
              <div className="flex items-start justify-between gap-6"><p className="eyebrow text-accent">{project.clientShort}</p><ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></div>
              <h3 className="mt-8 text-2xl font-medium leading-tight tracking-[-0.035em] md:text-3xl">{project.title}</h3>
              <p className="mt-8 text-sm text-surface-foreground/55">{project.stack.slice(0, 3).join(' · ')}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
