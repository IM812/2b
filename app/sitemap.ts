import type { MetadataRoute } from 'next'
import { PROJECTS } from '@/lib/content'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://2bservice.ru'
  const lastModified = new Date('2026-08-28')
  const staticRoutes = ['', '/about', '/services', '/projects', '/clients', '/technologies', '/additional-competencies', '/careers', '/news', '/contacts', '/details']
  return [
    ...staticRoutes.map((route) => ({ url: `${base}${route}`, lastModified, changeFrequency: route === '' ? 'weekly' as const : 'monthly' as const, priority: route === '' ? 1 : route === '/services' || route === '/projects' ? .9 : .7 })),
    ...PROJECTS.map((project) => ({ url: `${base}/projects/${project.slug}`, lastModified, changeFrequency: 'monthly' as const, priority: .8 })),
  ]
}
