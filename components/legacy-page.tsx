import Link from 'next/link'
import type { LegacyPage as LegacyPageData } from '@/lib/legacy-content'

export function LegacyPage({ page, eyebrow = 'Материалы 2В Сервис' }: { page: LegacyPageData; eyebrow?: string }) {
  return <>
    <header className="bg-surface pb-14 pt-28 text-surface-foreground sm:pb-20 sm:pt-36">
      <div className="section-shell">
        <p className="eyebrow text-primary">{eyebrow}</p>
        <h1 className="mt-6 max-w-5xl text-balance text-4xl font-semibold leading-tight tracking-[-.05em] sm:text-6xl">{page.h1}</h1>
        {page.intro[0] && <p className="mt-8 max-w-3xl text-pretty text-lg leading-relaxed text-surface-foreground/70">{page.intro[0]}</p>}
      </div>
    </header>
    <main className="section-pad bg-background">
      <div className="section-shell grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <article className="legacy-copy max-w-4xl">
          {page.intro.slice(1).map((text) => <p key={text}>{text}</p>)}
          {page.sections.map((section, index) => <section key={`${section.heading}-${index}`}>
            {section.level === 2 ? <h2>{section.heading}</h2> : <h3>{section.heading}</h3>}
            {section.paragraphs.map((text) => <p key={text}>{text}</p>)}
            {section.items.length > 0 && <ul>{section.items.map((item) => <li key={item}>{item}</li>)}</ul>}
          </section>)}
        </article>
        <aside className="self-start rounded-3xl bg-secondary p-6 lg:sticky lg:top-28">
          <p className="eyebrow text-primary">Нужна помощь</p>
          <p className="mt-4 text-lg font-semibold">Обсудим задачу и предложим следующий шаг</p>
          <a className="mt-6 block rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground" href="tel:+74957875615">+7 (495) 787-56-15</a>
          <Link className="mt-3 block text-center text-sm text-muted-foreground hover:text-foreground" href="/contacts">Оставить заявку</Link>
        </aside>
      </div>
    </main>
  </>
}
