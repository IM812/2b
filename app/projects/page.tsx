import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { ProjectsIntro } from '@/components/editorial/page-intros'
import { PROJECTS } from '@/lib/content'

export const metadata: Metadata = { title: 'Проекты — 2В Сервис', description: 'Проекты внедрения, интеграции и поддержки критичных ИТ-систем.' }

export default function ProjectsPage() {
  return <>
    <ProjectsIntro />
    <section className="section-pad overflow-hidden bg-background">
      <div className="section-shell">
        <div data-reveal="line" className="mb-12 grid gap-6 border-b border-border pb-9 md:grid-cols-3">
          <div><p className="eyebrow text-primary">Портфель</p><p className="mt-3 text-3xl font-black">{PROJECTS.length} кейсов</p></div>
          <p className="text-sm leading-relaxed text-muted-foreground">Корпоративные системы, инфраструктура, интеграция и многолетняя поддержка.</p>
          <p className="text-sm leading-relaxed text-muted-foreground">Авиаперевозки, TravelTech и распределённая корпоративная инфраструктура.</p>
        </div>

        <div className="flex flex-col gap-5 md:gap-8">
          {PROJECTS.map((project, index) => (
            <Link
              key={project.slug}
              data-reveal={index % 2 ? 'right' : 'left'}
              style={{ '--reveal-delay': `${Math.min(index, 3) * 70}ms` } as React.CSSProperties}
              href={`/projects/${project.slug}`}
              className={`motion-card group grid min-h-[34rem] overflow-hidden rounded-[1.75rem] bg-secondary sm:rounded-[2.5rem] lg:min-h-[31rem] lg:grid-cols-[1.05fr_.95fr] ${index === 0 ? 'lg:min-h-[38rem]' : ''}`}
            >
              <div className={`relative min-h-72 overflow-hidden ${index % 2 ? 'lg:order-2' : ''}`}>
                <Image src={project.image} alt={`${project.clientShort}: ${project.title}`} fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.045]" priority={index === 0} />
                <div className="absolute inset-0 bg-gradient-to-t from-surface/60 via-transparent to-transparent" />
                <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 text-white sm:inset-x-7 sm:bottom-7">
                  <p className="font-mono text-[10px] uppercase tracking-[.18em] text-white/75">Документальный кадр · {project.industry}</p>
                  <span className="flex size-11 items-center justify-center rounded-full bg-background text-foreground"><ArrowUpRight className="size-5" /></span>
                </div>
              </div>
              <div className="flex min-w-0 flex-col justify-between p-6 sm:p-9 lg:p-11">
                <div>
                  <div className="flex items-center justify-between gap-4 border-b border-border pb-5">
                    <p className="eyebrow text-primary">{String(index + 1).padStart(2, '0')} · {project.clientShort}</p>
                    <span className="font-mono text-[10px] text-muted-foreground">{project.timeline}</span>
                  </div>
                  <h2 className="mt-7 text-balance text-3xl font-black leading-[1] tracking-[-.045em] md:text-5xl">{project.title}</h2>
                  <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">{project.summary}</p>
                </div>
                <div className="mt-10 flex flex-wrap gap-2">{project.stack.slice(0, 4).map((item) => <span key={item} className="rounded-full border border-border px-3 py-1 text-xs">{item}</span>)}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </>
}
