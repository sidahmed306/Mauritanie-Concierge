import { MetadataRoute } from 'next';
import { servicesData } from '@/lib/data/services';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mauritaniaconcierge.com';
  const locales = ['/en', '/fr', '/ar'];
  const paths = ['', '/services', '/about', '/contact', '/faq'];
  
  const sitemap: MetadataRoute.Sitemap = [];
  
  locales.forEach((locale) => {
    paths.forEach((path) => {
      sitemap.push({
        url: `${baseUrl}${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: path === '' ? 1 : 0.8,
      });
    });
    
    // Services dynamic pages
    servicesData.forEach((service) => {
      sitemap.push({
        url: `${baseUrl}${locale}/services/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.9,
      });
    });
  });
  
  return sitemap;
}
