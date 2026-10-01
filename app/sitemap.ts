import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://2bservice.ru'
  const lastModified = new Date('2026-08-28')
  const staticRoutes = ['', '/about', '/services', '/clients', '/technologies', '/additional-competencies', '/careers', '/news', '/contacts']
  return [
    ...staticRoutes.map((route) => ({ url: `${base}${route}`, lastModified, changeFrequency: route === '' ? 'weekly' as const : 'monthly' as const, priority: route === '' ? 1 : route === '/services' || route === '/clients' ? .9 : .7 })),
  ]
}
