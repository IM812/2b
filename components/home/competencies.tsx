import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { CORE_COMPETENCIES } from '@/lib/content'

export function Competencies() {
  return (
    <section id="capabilities" className="section-pad bg-background"><div className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[.42fr_1fr] lg:gap-24"><div><p className="eyebrow text-primary">Что мы делаем</p><p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">Одна команда отвечает за связность, устойчивость и развитие всей цифровой среды.</p></div><h2 className="section-title max-w-5xl">Управляем сложностью.<br /><span className="text-muted-foreground">Создаём устойчивость.</span></h2></div>
      <div className="mt-20 border-t border-border">{CORE_COMPETENCIES.slice(0, 5).map((item, index) => <article key={item.title} className="group grid gap-6 border-b border-border py-8 transition-colors hover:border-primary md:grid-cols-[5rem_1fr_1fr_auto] md:items-start md:py-10"><p className="font-mono text-xs text-muted-foreground">0{index + 1}</p><h3 className="max-w-lg text-2xl font-medium leading-tight tracking-[-0.035em] md:text-3xl">{item.title}</h3><p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">{item.description}</p><ArrowUpRight className="size-5 text-primary transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></article>)}</div>
      <Link href="/services" className="mt-10 inline-flex items-center gap-2 bg-foreground px-6 py-4 text-sm font-bold text-background">Все направления <ArrowUpRight className="size-4" /></Link>
    </div></section>
  )
}
