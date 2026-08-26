import Link from 'next/link'
import { NAV_ITEMS } from '@/lib/nav'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="section-shell py-14">
        <div className="grid gap-10 md:grid-cols-[1.2fr_2fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="flex size-9 items-center justify-center bg-foreground text-xs font-bold text-background">
                2В
              </span>
              <span className="text-sm font-bold">2В Сервис</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              ИТ-аутсорсинг, инфраструктура и корпоративные системы для организаций федерального масштаба.
            </p>
            <div className="mt-6 flex flex-col gap-1 text-sm font-semibold">
              <a href="mailto:info@2v-service.ru" className="hover:text-primary">
                info@2v-service.ru
              </a>
              <a href="tel:+74957875615" className="hover:text-primary">
                +7 (495) 787-56-15
              </a>
            </div>
          </div>
          <nav className="grid grid-cols-2 gap-x-8 gap-y-4 md:grid-cols-3" aria-label="Навигация в подвале">
            {[...NAV_ITEMS, { label: 'Контакты', href: '/contacts' }].map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-muted-foreground hover:text-foreground">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} 2В Сервис</p>
          <p>Москва, ул. 1-я Миусская, д. 20, стр. 5</p>
        </div>
      </div>
    </footer>
  )
}
