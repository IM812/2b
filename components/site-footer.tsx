import Link from 'next/link'
import { NAV_ITEMS, COMPANY_NAME } from '@/lib/nav'

export function SiteFooter() {
  return (
    <footer className="border-t border-foreground/10 bg-[oklch(0.11_0.012_262)] text-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5 font-heading text-lg font-medium tracking-tight">
              <span className="flex h-8 w-8 items-center justify-center bg-primary font-mono text-xs font-medium text-primary-foreground">
                2В
              </span>
              {COMPANY_NAME}
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-foreground/60">
              Технологический партнер для реализации комплексных корпоративных ИТ-проектов.
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-foreground/45">Навигация</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {NAV_ITEMS.slice(0, 4).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-foreground/70 hover:text-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-foreground/45">Компания</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {[...NAV_ITEMS.slice(4), { label: 'Контакты', href: '/contacts' }].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-foreground/70 hover:text-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-foreground/45">Контакты</h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-foreground/70">
              <li>
                <a href="mailto:info@2v-service.ru" className="hover:text-foreground">
                  info@2v-service.ru
                </a>
              </li>
              <li>
                <a href="tel:+74951234567" className="hover:text-foreground">
                  +7 (495) 123-45-67
                </a>
              </li>
              <li>г. Москва, Пресненская наб., 10</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-foreground/10 pt-6 text-xs text-foreground/45 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {COMPANY_NAME}. Все права защищены.</p>
          <p>ИНН 7700000000 · ОГРН 1000000000000</p>
        </div>
      </div>
    </footer>
  )
}
