import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown, ArrowUpRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background px-4 pb-16 pt-8 md:px-8 md:pb-24">
      <div className="mx-auto max-w-[90rem]">
        <div className="grid items-end gap-8 lg:grid-cols-[1.15fr_.85fr]">
          <div className="relative z-10 pt-10 lg:pb-10 lg:pt-20">
            <p className="reveal-up font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
              Корпоративные системы · Москва · с 2014 года
            </p>
            <h1 className="reveal-up reveal-delay-1 mt-7 max-w-5xl text-balance text-[clamp(3.4rem,8vw,8.6rem)] font-semibold leading-[0.84] text-foreground">
              Сложные системы.
              <span className="block font-serif font-normal italic tracking-[-0.06em] text-primary">
                Без права
              </span>
              <span className="block">на остановку.</span>
            </h1>
            <div className="reveal-up reveal-delay-2 mt-10 flex max-w-2xl flex-col gap-6 border-t border-foreground/20 pt-6 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-md text-base leading-relaxed text-foreground/68 md:text-lg">
                Проектируем, внедряем и поддерживаем информационные системы, от которых зависит ежедневная работа больших компаний.
              </p>
              <Link href="/projects" className="group inline-flex shrink-0 items-center gap-3 text-sm font-semibold uppercase tracking-[0.12em] text-foreground">
                Смотреть кейсы
                <span className="flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="size-5" aria-hidden="true" />
                </span>
              </Link>
            </div>
          </div>

          <div className="relative min-h-[34rem] overflow-hidden lg:min-h-[47rem]">
            <Image
              src="/images/editorial-flight-ops.png"
              alt="Работа центра управления авиакомпании"
              fill
              priority
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="reveal-image object-cover grayscale-[18%]"
            />
            <div className="film-grain absolute inset-0" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-background/90 to-transparent p-6 pt-24">
              <p className="max-w-xs text-xs leading-relaxed text-foreground/70">В промышленной эксплуатации 24/7 — системы авиационных заказчиков федерального масштаба.</p>
              <span className="font-serif text-5xl italic text-primary">24/7</span>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-foreground/15 pt-5 text-[11px] uppercase tracking-[0.16em] text-foreground/45">
          <span>Внедрение · Интеграция · Сопровождение</span>
          <a href="#capabilities" className="flex items-center gap-2 text-foreground/70 hover:text-primary">
            Ниже <ArrowDown className="size-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
