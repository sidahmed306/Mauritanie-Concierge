import { useTranslations } from 'next-intl';
import { ServiceCard } from '@/components/service-card';
import { corporateServices, touristServices, type Service } from '@/lib/data/services';
import { ArrowRight, Briefcase, Compass } from 'lucide-react';
import { Link } from '@/i18n/routing';

export function ServicesOverview() {
  const t = useTranslations('ServicesOverview');
  const tCat = useTranslations('ServiceCategories');
  const tServices = useTranslations('Services');

  const groups: { key: 'corporate' | 'tourist'; icon: typeof Briefcase; items: Service[] }[] = [
    { key: 'corporate', icon: Briefcase, items: corporateServices.slice(0, 3) },
    { key: 'tourist', icon: Compass, items: touristServices.slice(0, 3) }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">{t('tag')}</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-primary">{t('title')}</h3>
        </div>

        <div className="space-y-20">
          {groups.map(({ key, icon: Icon, items }) => (
            <div key={key}>
              <div className="flex flex-col md:flex-row justify-between md:items-end mb-10 gap-4">
                <div className="flex items-center gap-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-secondary shrink-0">
                    <Icon size={24} />
                  </div>
                  <div>
                    <p className="text-secondary font-bold tracking-widest uppercase text-xs mb-1">{tCat(`${key}Tag`)}</p>
                    <h4 className="text-2xl md:text-3xl font-bold text-primary">{tCat(`${key}Title`)}</h4>
                  </div>
                </div>
                <Link href={`/services#${key}`} className="flex items-center gap-2 font-bold text-primary hover:text-secondary transition-colors min-h-[44px]">
                  {t('viewAll')} <ArrowRight size={20} className="rtl:rotate-180" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((service) => (
                  <ServiceCard
                    key={service.slug}
                    title={tServices(`${service.slug}.title`)}
                    description={tServices(`${service.slug}.shortDescription`)}
                    href={`/services/${service.slug}`}
                    imageSrc={service.imageSrc}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
