import Link from 'next/link'
import { NAV_ITEMS } from '@/lib/nav'
import { BrandMark } from '@/components/brand-mark'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="section-shell py-10 sm:py-14">
        <div className="grid gap-10 md:grid-cols-[1.2fr_2fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <BrandMark className="size-10" />
              <span className="text-sm font-bold">2В Сервис</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              ИТ-аутсорсинг, инфраструктура и корпоративные системы для организаций федерального масштаба.
            </p>
            <div className="mt-6 flex flex-col gap-1 text-sm font-semibold">
              <a href="mailto:info@2bservice.ru" className="hover:text-primary">
                info@2bservice.ru
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
        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-2">
            <p>© {new Date().getFullYear()} 2В Сервис</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <Link href="/privacy" className="hover:text-foreground">Политика конфиденциальности</Link>
              <Link href="/personal-data-consent" className="hover:text-foreground">Согласие на обработку ПДн</Link>
              <Link href="/details" className="hover:text-foreground">Реквизиты</Link>
            </div>
          </div>
          <p>БЦ «Башня Империя», Москва, Пресненская набережная, 6с2</p>
        </div>
      </div>
    </footer>
  )
}
