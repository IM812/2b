import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PROJECTS } from '@/lib/content'

export function FlagshipProjects() {
  return (
    <section className="overflow-hidden bg-background py-24 md:py-36">
      <div className="mx-auto max-w-[90rem] px-4 md:px-8">
        <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">Избранные проекты</p>
            <h2 className="mt-5 max-w-4xl text-balance text-5xl font-semibold leading-[0.92] md:text-8xl">
              Результат виден
              <span className="block font-serif font-normal italic text-foreground/48">в масштабе.</span>
            </h2>
          </div>
          <Link href="/projects" className="group inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.12em]">
            Все кейсы <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        <div className="mt-16 flex snap-x gap-5 overflow-x-auto pb-6 [scrollbar-width:none] md:gap-8">
          {PROJECTS.map((project, index) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group min-w-[86vw] snap-start md:min-w-[42rem]"
            >
              <div className={`relative overflow-hidden ${index % 2 === 0 ? 'aspect-[4/3]' : 'aspect-[3/2] md:mt-20'}`}>
                <Image src={index === 0 ? '/images/editorial-documents.png' : index === 1 ? '/images/editorial-flight-ops.png' : '/images/editorial-datacenter.png'} alt={project.title} fill sizes="(min-width: 768px) 42rem, 86vw" className="object-cover grayscale-[12%] transition-transform duration-700 group-hover:scale-[1.035]" />
                <div className="film-grain absolute inset-0" />
                <span className="absolute left-5 top-5 bg-background/85 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.16em] backdrop-blur">{project.industry}</span>
                {project.contractValue && <span className="absolute bottom-5 right-5 font-serif text-3xl italic text-primary md:text-5xl">{project.contractValue}</span>}
              </div>
              <div className="flex items-start justify-between gap-5 border-t border-foreground/18 pt-5">
                <div>
                  <p className="text-sm text-foreground/52">{project.clientShort}</p>
                  <h3 className="mt-2 max-w-xl text-balance text-xl font-semibold leading-tight md:text-3xl">{project.title}</h3>
                </div>
                <ArrowUpRight className="mt-1 size-5 shrink-0 text-primary transition-transform group-hover:rotate-45" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
