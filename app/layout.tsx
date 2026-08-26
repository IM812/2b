import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Manrope, IBM_Plex_Mono } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
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
  title: '2В Сервис — ИТ-аутсорсинг, инфраструктура и корпоративные системы',
  description:
    '2В Сервис — единый ИТ-партнёр для крупных государственных и коммерческих организаций: инфраструктура, аутсорсинг, информационная безопасность, внедрение и сопровождение корпоративных систем.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
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
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
