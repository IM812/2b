import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Unbounded, Inter, IBM_Plex_Mono } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

const _unbounded = Unbounded({
  subsets: ['latin', 'cyrillic'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-unbounded',
})

const _inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
})

const _plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-plex-mono',
})

export const metadata: Metadata = {
  title: '2В Сервис — Корпоративные информационные системы',
  description:
    '2В Сервис — российская технологическая компания, специализирующаяся на внедрении, развитии и сопровождении корпоративных информационных систем для крупных организаций.',
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
  colorScheme: 'dark',
  userScalable: true,
  themeColor: '#181b21',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ru"
      className={`${_unbounded.variable} ${_inter.variable} ${_plexMono.variable} bg-background`}
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
