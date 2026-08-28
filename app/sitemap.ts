import type { MetadataRoute } from 'next'
import { PROJECTS } from '@/lib/content'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://2bservice.ru'
  const staticRoutes = ['', '/about', '/services', '/projects', '/clients', '/technologies', '/additional-competencies', '/careers', '/contacts', '/details', '/privacy', '/personal-data-consent']
  return [
    ...staticRoutes.map((route) => ({ url: `${base}${route}`, lastModified: new Date(), changeFrequency: route === '' ? 'weekly' as const : 'monthly' as const, priority: route === '' ? 1 : route === '/services' || route === '/projects' ? .9 : .7 })),
    ...PROJECTS.map((project) => ({ url: `${base}/projects/${project.slug}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: .8 })),
  ]
}
