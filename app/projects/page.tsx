import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Check } from 'lucide-react'
import { ProjectsIntro } from '@/components/editorial/page-intros'
import { PROJECTS } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Проекты и кейсы',
  description:
    'Проекты 2В Сервис: внедрение корпоративных систем, интеграция, перенос инфраструктуры и техническая поддержка.',
  alternates: { canonical: '/projects' },
  openGraph: {
    url: '/projects',
    title: 'Проекты и кейсы | 2В Сервис',
    description: 'Задачи, выполненные работы и результат в эксплуатации.',
  },
}

const PROJECT_STAGES = [
  ['Обследование', 'Фиксируем задачу, ограничения и состояние действующей инфраструктуры.'],
  ['Проектирование', 'Определяем состав решения, точки интеграции и порядок перехода.'],
  ['Реализация', 'Настраиваем, переносим данные, тестируем и документируем изменения.'],
  ['Эксплуатация', 'Передаем решение в работу и при необходимости берем его на поддержку.'],
]

export default function ProjectsPage() {
  return (
    <>
      <ProjectsIntro />

      <section className="section-pad bg-background">
        <div className="section-shell">
          <div className="grid gap-8 border-b border-border pb-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="eyebrow text-primary">Опубликованные кейсы</p>
              <h2 className="section-title mt-5">Что было сделано и для чего</h2>
            </div>
            <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Здесь собраны проекты, по которым можно показать контекст задачи, состав работ и итог для заказчика. Без условных рейтингов и неподтвержденных показателей.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {PROJECTS.map((project, index) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                data-reveal={index % 2 ? 'right' : 'left'}
                className={`motion-card group flex min-h-full flex-col overflow-hidden rounded-[2rem] bg-secondary ${index === 0 ? 'lg:col-span-2 lg:grid lg:grid-cols-[1.08fr_0.92fr]' : ''}`}
              >
                <div className={`relative aspect-[16/10] overflow-hidden ${index === 0 ? 'lg:aspect-auto lg:min-h-[34rem]' : ''}`}>
                  <Image
                    src={project.image}
                    alt={`${project.clientShort}: ${project.title}`}
                    fill
                    quality={72}
                    sizes={index === 0 ? '(max-width: 1024px) 100vw, 55vw' : '(max-width: 1024px) 100vw, 45vw'}
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface/75 via-transparent to-transparent" aria-hidden />
                  <p className="absolute bottom-5 left-5 font-mono text-[10px] uppercase tracking-widest text-surface-foreground/70 sm:bottom-7 sm:left-7">
                    {project.industry}
                  </p>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-8 lg:p-10">
                  <div className="flex items-start justify-between gap-5 border-b border-border pb-5">
                    <p className="eyebrow text-primary">{project.clientShort}</p>
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-background text-foreground">
                      <ArrowUpRight className="size-4" aria-hidden />
                    </span>
                  </div>
                  <h2 className="mt-6 text-balance text-3xl font-semibold leading-tight tracking-[-.045em] sm:text-4xl">
                    {project.title}
                  </h2>
                  <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">{project.summary}</p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-8">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-semibold">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface text-surface-foreground">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="eyebrow text-primary">Подход к реализации</p>
              <h2 className="section-title mt-5">Один ответственный контур</h2>
              <p className="mt-6 max-w-md text-pretty leading-relaxed text-surface-foreground/60">
                Команда сопровождает решение от первичного обследования до промышленной эксплуатации.
              </p>
            </div>
            <div className="grid gap-px overflow-hidden rounded-[2rem] bg-white/15 sm:grid-cols-2">
              {PROJECT_STAGES.map(([title, description]) => (
                <article key={title} className="bg-surface p-6 sm:p-8">
                  <Check className="size-5 text-primary" aria-hidden />
                  <h3 className="mt-8 text-xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-surface-foreground/55">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
