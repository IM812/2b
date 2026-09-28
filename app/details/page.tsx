import type { Metadata } from 'next'
import { Building2, MapPin } from 'lucide-react'

export const metadata: Metadata = { title: 'Реквизиты', description: 'Юридические реквизиты, регистрационные данные и адреса АО «2В Сервис».', alternates: { canonical: '/details' }, openGraph: { url: '/details', title: 'Реквизиты | 2В Сервис', description: 'Юридическая информация АО «2В Сервис» для договоров и деловой переписки.' } }

const details = [['Полное наименование', 'Акционерное общество «2В Сервис»'], ['ИНН', '7722701720'], ['КПП', '772201001'], ['ОГРН', '1097746738253'], ['Основной ОКВЭД', '62.09 — Деятельность, связанная с использованием вычислительной техники и информационных технологий, прочая'], ['Коды видов деятельности в области ИТ', '1.01; 2.01']]

export default function DetailsPage() {
  return <article className="bg-background pb-24 pt-28 sm:pt-36">
    <header className="section-shell" data-reveal><p className="eyebrow text-primary">О компании</p><h1 className="mt-5 max-w-4xl text-balance text-5xl font-semibold leading-[.94] tracking-[-.055em] sm:text-7xl">Реквизиты</h1><p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">Юридическая информация и адреса АО «2В Сервис» для договоров и деловой переписки.</p></header>
    <div className="section-shell mt-12 grid gap-5 lg:grid-cols-[1.2fr_.8fr]">
      <section data-reveal className="rounded-[1.75rem] bg-secondary p-6 sm:p-9"><div className="flex items-center gap-3"><Building2 className="size-5 text-primary" /><h2 className="text-xl font-bold">Регистрационные данные</h2></div><dl className="mt-8 flex flex-col">{details.map(([label, value]) => <div key={label} className="grid gap-2 border-t border-border py-5 sm:grid-cols-[13rem_1fr]"><dt className="text-sm text-muted-foreground">{label}</dt><dd className="font-semibold">{value}</dd></div>)}</dl></section>
      <div className="flex flex-col gap-5"><section data-reveal style={{ '--reveal-delay': '100ms' } as React.CSSProperties} className="rounded-[1.75rem] bg-surface p-6 text-surface-foreground sm:p-8"><MapPin className="size-5 text-accent" /><h2 className="mt-6 text-xl font-bold">Адрес</h2><p className="mt-3 leading-relaxed text-surface-foreground/70">109316, Москва, Остаповский проезд, 22, стр. 16</p><a href="mailto:info@2bservice.ru" className="mt-7 inline-block font-semibold underline underline-offset-4">info@2bservice.ru</a></section></div>
    </div>
  </article>
}
