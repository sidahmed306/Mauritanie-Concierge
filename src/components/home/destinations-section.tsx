import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { destinationsData } from '@/lib/data/destinations';
import { DestinationCard } from '@/components/destinations/destination-card';

export function DestinationsSection() {
  const t = useTranslations('Destinations');
  const [flagship, ...others] = destinationsData;

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-14">
          <div className="max-w-2xl">
            <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">{t('homeTag')}</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-primary mb-4">{t('homeTitle')}</h3>
            <p className="text-gray-600 text-lg">{t('homeSubtitle')}</p>
          </div>
          <Link href="/destinations" className="flex items-center gap-2 font-bold text-primary hover:text-secondary transition-colors min-h-[44px] shrink-0">
            {t('viewAll')} <ArrowRight size={20} className="rtl:rotate-180" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 lg:row-span-2">
            <DestinationCard destination={flagship} index={0} featured />
          </div>
          {others.map((d) => (
            <DestinationCard key={d.slug} destination={d} index={destinationsData.indexOf(d)} />
          ))}
        </div>
      </div>
    </section>
  );
}
