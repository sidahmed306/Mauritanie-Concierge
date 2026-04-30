import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mauritanieconcierge.com'
  const locales = ['en', 'fr', 'ar']
  const pages = ['', '/services', '/tours', '/contact', '/about', '/faq']

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
