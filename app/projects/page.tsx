import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { PROJECTS } from '@/lib/content'

export const metadata: Metadata = { title: 'Проекты — 2В Сервис', description: 'Флагманские проекты 2В Сервис.' }
const IMAGES = ['/images/editorial-documents.png', '/images/editorial-flight-ops.png', '/images/editorial-datacenter.png']

export default function ProjectsPage() {
  return (
    <>
      <PageHero eyebrow="Проекты" title="Работа, которую можно измерить" description="Не витрина абстрактных возможностей, а реальные системы в промышленной эксплуатации." image="/images/editorial-flight-ops.png" />
      <section className="bg-surface py-20 text-surface-foreground md:py-32">
        <div className="mx-auto flex max-w-[90rem] flex-col gap-24 px-4 md:px-8">
          {PROJECTS.map((project, index) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} className={`group grid gap-7 lg:grid-cols-[1.15fr_.85fr] lg:items-end ${index % 2 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
              <div className={`relative overflow-hidden ${index % 2 ? 'aspect-[4/3]' : 'aspect-[3/2]'}`}>
                <Image src={IMAGES[index]} alt={project.title} fill sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
              </div>
              <div className="border-t border-surface-foreground/25 pt-5 lg:pb-8">
                <div className="flex justify-between font-mono text-[10px] uppercase tracking-[0.15em] text-surface-foreground/50"><span>0{index + 1} · {project.industry}</span><span>{project.clientShort}</span></div>
                <h2 className="mt-7 text-balance text-3xl font-semibold leading-[1.02] md:text-5xl">{project.title}</h2>
                <p className="mt-5 text-sm leading-relaxed text-surface-foreground/60 md:text-base">{project.summary}</p>
                <div className="mt-8 flex items-end justify-between"><span className="font-serif text-3xl italic text-[oklch(0.4_0.12_116)] md:text-5xl">{project.contractValue || '24/7'}</span><ArrowUpRight className="size-6 transition-transform group-hover:rotate-45" /></div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
