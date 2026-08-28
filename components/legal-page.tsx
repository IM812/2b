import type { ReactNode } from 'react'
import Link from 'next/link'

type LegalPageProps = {
  eyebrow: string
  title: string
  updated: string
  children: ReactNode
}

export function LegalPage({ eyebrow, title, updated, children }: LegalPageProps) {
  return (
    <article className="bg-background pb-20 pt-28 sm:pt-36">
      <header className="section-shell">
        <p className="eyebrow text-primary">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold leading-[.95] tracking-[-.055em] sm:text-6xl">{title}</h1>
        <p className="mt-6 text-sm text-muted-foreground">Редакция от {updated}</p>
      </header>
      <div className="section-shell mt-10 grid gap-10 border-t border-border pt-8 lg:grid-cols-[16rem_1fr]">
        <aside className="text-sm leading-relaxed text-muted-foreground">
          <p className="font-semibold text-foreground">АО «2В Сервис»</p>
          <p className="mt-2">ИНН 7722701720<br />КПП 772201001<br />ОГРН 1097746738253</p>
          <a href="mailto:info@2bservice.ru" className="mt-4 inline-block underline underline-offset-4">info@2bservice.ru</a>
        </aside>
        <div className="legal-copy max-w-3xl text-[15px] leading-relaxed text-foreground/80">{children}</div>
      </div>
      <div className="section-shell mt-12"><Link href="/contacts" className="text-sm font-semibold underline underline-offset-4">Вернуться к контактам</Link></div>
    </article>
  )
}
