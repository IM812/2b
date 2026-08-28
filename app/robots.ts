import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: '*', allow: '/', disallow: '/api/' }, sitemap: 'https://2bservice.ru/sitemap.xml', host: 'https://2bservice.ru' }
}
