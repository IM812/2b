import type { Metadata, Viewport } from 'next'
import { Manrope, IBM_Plex_Mono } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { LeadFormProvider } from '@/components/lead-form-provider'
import { MotionSystem } from '@/components/motion-system'
import { LeadQuiz } from '@/components/lead-quiz'
import './globals.css'

const _manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-manrope',
})

const _plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-plex-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://2bservice.ru'),
  title: { default: '2В Сервис — ИТ-аутсорсинг и инфраструктура', template: '%s | 2В Сервис' },
  description: 'Единый ИТ-партнёр для крупных государственных и коммерческих организаций: инфраструктура, аутсорсинг, информационная безопасность и корпоративные системы.',
  alternates: { canonical: '/' },
  openGraph: { type: 'website', locale: 'ru_RU', url: '/', siteName: '2В Сервис', title: '2В Сервис — ИТ-аутсорсинг и инфраструктура', description: 'Инфраструктура, безопасность и корпоративные системы для организаций федерального масштаба.', images: ['/opengraph-image'] },
  twitter: { card: 'summary_large_image', title: '2В Сервис — ИТ-аутсорсинг и инфраструктура', description: 'Инфраструктура, безопасность и корпоративные системы.', images: ['/opengraph-image'] },
  icons: { icon: '/icon.svg', apple: '/apple-icon' },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  userScalable: true,
  themeColor: '#10182b',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ru"
      className={`${_manrope.variable} ${_plexMono.variable} bg-background`}
    >
      <body className="antialiased font-sans">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': ['Organization', 'ProfessionalService'],
          '@id': 'https://2bservice.ru/#organization',
          name: 'АО «2В Сервис»',
          url: 'https://2bservice.ru',
          logo: 'https://2bservice.ru/icon.svg',
          email: 'info@2bservice.ru',
          telephone: '+7-495-787-56-15',
          taxID: '7722701720',
          address: { '@type': 'PostalAddress', postalCode: '109316', addressLocality: 'Москва', streetAddress: 'Остаповский проезд, 22, стр. 16', addressCountry: 'RU' },
          location: { '@type': 'Place', name: 'Офис 2В Сервис — Башня Империя', address: { '@type': 'PostalAddress', addressLocality: 'Москва', streetAddress: 'Пресненская набережная, 6, стр. 2', addressCountry: 'RU' } },
          areaServed: 'RU',
          knowsAbout: ['ИТ-аутсорсинг', 'ИТ-инфраструктура', 'Информационная безопасность', 'Корпоративные информационные системы', 'Инженерные системы'],
        }).replace(/</g, '\\u003c') }} />
        <MotionSystem />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <LeadFormProvider />
        <LeadQuiz />
      </body>
    </html>
  )
}
