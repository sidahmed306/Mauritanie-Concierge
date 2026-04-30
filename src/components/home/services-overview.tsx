import { useTranslations } from 'next-intl';
import { ServiceCard } from '@/components/service-card';
import { servicesData } from '@/lib/data/services';
import { ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/routing';

export function ServicesOverview() {
  const t = useTranslations('ServicesOverview');
  const tServices = useTranslations('Services');

  const featuredServices = servicesData.slice(0, 4);

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">{t('tag')}</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-primary">{t('title')}</h3>
          </div>
          <Link href="/services" className="hidden md:flex items-center gap-2 font-bold text-primary hover:text-secondary transition-colors min-h-[44px] min-w-[44px]">
            {t('viewAll')} <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredServices.map((service, index) => (
            <ServiceCard 
              key={index} 
              title={tServices(`${service.slug}.title`)} 
              description={tServices(`${service.slug}.shortDescription`)} 
              href={`/services/${service.slug}`} 
              imageSrc={service.imageSrc} 
            />
          ))}
        </div>

        <div className="mt-12 md:hidden">
           <Link href="/services" className="flex items-center justify-center gap-2 font-bold text-white bg-primary rounded-xl py-4 min-h-[44px]">
             {t('viewAll')} <ArrowRight size={20} />
           </Link>
        </div>
      </div>
    </section>
  );
}
