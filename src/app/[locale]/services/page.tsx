import { ServiceCard } from '@/components/service-card';
import { servicesData } from '@/lib/data/services';
import { setRequestLocale, getTranslations } from 'next-intl/server';

export default async function ServicesPage({ params }: { params: Promise<{locale: string}> }) {
  const {locale} = await params;
  setRequestLocale(locale);

  const t = await getTranslations('ServicesOverviewPage');
  const tServices = await getTranslations('Services');

  return (
    <main className="min-h-screen py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">{t('tag')}</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">{t('title')}</h1>
          <p className="text-gray-600 text-lg">
             {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard 
              key={index} 
              title={tServices(`${service.slug}.title`)} 
              description={tServices(`${service.slug}.shortDescription`)} 
              href={`/services/${service.slug}`} 
              imageSrc={service.imageSrc} 
            />
          ))}
        </div>
      </div>
    </main>
  );
}
