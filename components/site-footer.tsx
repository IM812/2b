import Link from 'next/link'
import { BrandLogo } from '@/components/brand-logo'
import { NAV_ITEMS } from '@/lib/nav'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="section-shell py-10 sm:py-14">
        <div className="grid gap-10 md:grid-cols-[1.2fr_2fr]">
          <div>
            <Link href="/" className="inline-flex" aria-label="2В Сервис — технологии, люди, результат">
              <BrandLogo size="lg" />
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
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-muted-foreground hover:text-foreground">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-12 border-t border-border pt-6 text-xs leading-relaxed text-muted-foreground">
          <div className="flex flex-col gap-x-10 gap-y-4 lg:flex-row lg:justify-between">
            <p className="max-w-md">
          <span className="font-semibold text-foreground">Акционерное общество «2В Сервис»</span>
            <br />
            ИНН 7722701720 · КПП 772201001 · ОГРН 1097746738253
            <br />
            Основной ОКВЭД: 62.09.
            <br />
            Коды видов деятельности в области IT: 1.01; 2.01.
          </p>
            <dl className="grid max-w-xl gap-x-3 gap-y-1 sm:grid-cols-[4rem_1fr]">
              <dt>Адрес</dt>
              <dd className="text-foreground/80">109316, г. Москва, Остаповский проезд, 22, стр. 16</dd>
            </dl>
          </div>
          <div className="mt-6 flex flex-col gap-3 border-t border-border pt-5 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} АО «2В Сервис». Все права защищены.</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <Link href="/privacy" className="hover:text-foreground">Политика конфиденциальности</Link>
              <Link href="/personal-data-consent" className="hover:text-foreground">Согласие на обработку ПДн</Link>
              <Link href="/details" className="hover:text-foreground">Реквизиты</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
