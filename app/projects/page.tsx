import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
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
              <p className="eyebrow text-primary">Разборы проектов</p>
              <h2 className="section-title mt-5">Задача, решение, результат</h2>
            </div>
            <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Не каталог клиентов, а рабочие истории: зачем запускали проект, какой контур собрали и что осталось в эксплуатации после передачи решения.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {PROJECTS.map((project, index) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                data-reveal={index % 2 ? 'right' : 'left'}
                className={`motion-card group flex min-h-full flex-col gap-6 rounded-[2rem] border border-border bg-secondary p-4 transition-colors hover:border-primary/40 sm:p-6 lg:p-8 ${index === 0 ? 'lg:col-span-2 lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:gap-10' : ''}`}
              >
                <div className="relative min-h-56 overflow-hidden rounded-[1.5rem] bg-surface sm:min-h-64 lg:min-h-72">
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    sizes={index === 0 ? '(max-width: 1024px) 100vw, 45vw' : '(max-width: 1024px) 100vw, 50vw'}
                    priority={index === 0}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface/60 via-transparent to-transparent" aria-hidden />
                  <span className="absolute bottom-4 left-4 rounded-full bg-background/85 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[.2em] text-foreground backdrop-blur-sm">
                    {project.tags[0]}
                  </span>
                </div>
                <div className="flex flex-1 flex-col">
                  <div className="flex items-start justify-between gap-5 border-b border-border pb-5">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[.2em] text-muted-foreground">Кейс / {String(index + 1).padStart(2, '0')}</p>
                      <p className="eyebrow mt-3 text-primary">Работающая система</p>
                    </div>
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
