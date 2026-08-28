import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: ['Googlebot', 'YandexBot'], allow: '/', disallow: ['/api/', '/_next/'] },
      { userAgent: '*', allow: '/', disallow: ['/api/', '/_next/', '/*?*'] },
    ],
    sitemap: 'https://2bservice.ru/sitemap.xml',
    host: '2bservice.ru',
  }
}
