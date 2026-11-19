import { SITE_URL } from '@/lib/seo'
import { MetadataRoute } from 'next'
import { servicesData } from '@/lib/data/services'
import { destinationsData } from '@/lib/data/destinations'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL
  const locales = ['en', 'fr', 'ar']
  const pages = ['', '/services', '/contact', '/about', '/faq', ...servicesData.map(s => `/services/${s.slug}`), '/destinations', ...destinationsData.map(d => `/destinations/${d.slug}`)]

  const urls = locales.flatMap(locale =>
    pages.map(page => ({
      url: `${baseUrl}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: page === '' ? 1 : 0.8,
    }))
  )

  return urls
}
