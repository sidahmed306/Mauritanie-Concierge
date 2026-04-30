import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mauritanieconcierge.com';
  const locales = ['en', 'fr', 'ar'];
  const baseRoutes = ['', '/services', '/tours', '/contact', '/about', '/faq', '/blog'];
  
  // Blog routes
  const blogSlugs = [
    '/blog/top-10-things-to-do-in-mauritania',
    '/blog/complete-guide-chinguetti-unesco',
    '/blog/visiting-richat-structure-guide',
    '/blog/terjit-oasis-hidden-paradise',
    '/blog/mauritania-travel-tips'
  ];

  const routes = [...baseRoutes, ...blogSlugs];
  const entries: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    routes.forEach((route) => {
      entries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
      });
    });
  });

  return entries;
}
