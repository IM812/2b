import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { CORE_COMPETENCIES } from '@/lib/content'

export function Competencies() {
  return (
    <section id="capabilities" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-[90rem] px-4 md:px-8">
        <div className="grid gap-8 border-b border-border pb-10 lg:grid-cols-[.7fr_1.3fr]">
          <p className="text-sm font-semibold text-primary">Направления работы</p>
          <div>
            <h2 className="max-w-4xl text-balance text-4xl font-semibold leading-tight md:text-6xl">От инфраструктуры до корпоративных систем</h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">Одна команда отвечает за проектирование, внедрение, эксплуатацию и развитие ИТ-среды.</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {CORE_COMPETENCIES.map((item, index) => (
            <article key={item.title} className="border-b border-border p-6 first:pl-0 md:border-r md:p-8 md:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0">
              <span className="text-xs font-semibold text-primary">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="mt-8 text-2xl font-semibold leading-tight">{item.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </article>
          ))}
        </div>
        <Link href="/services" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-foreground">Все услуги <ArrowRight className="size-4" /></Link>
      </div>
    </section>
  )
}
