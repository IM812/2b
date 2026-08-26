import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export function ContactCta() {
  return <section className="relative overflow-hidden bg-accent text-accent-foreground"><div className="absolute inset-0 opacity-15 hairline-grid" /><div className="section-shell section-pad relative"><p className="eyebrow">Начать разговор</p><div className="mt-8 grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end"><div><h2 className="max-w-6xl text-balance text-5xl font-medium leading-[.92] tracking-[-.06em] md:text-7xl lg:text-8xl">Давайте сделаем сложное устойчивым.</h2><p className="text-lead mt-8 max-w-2xl opacity-70">Расскажите о задаче — соберём нужную экспертизу и предложим практический следующий шаг.</p></div><Link href="/contacts" className="inline-flex shrink-0 items-center justify-center gap-3 bg-foreground px-7 py-5 text-sm font-bold text-background">Обсудить проект <ArrowUpRight className="size-4" /></Link></div></div></section>
}
