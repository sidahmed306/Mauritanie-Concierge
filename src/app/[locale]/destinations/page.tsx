import Image from 'next/image';
import type { Metadata } from 'next';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { destinationsData } from '@/lib/data/destinations';
import { DestinationCard } from '@/components/destinations/destination-card';
import { PhotoCredits } from '@/components/destinations/photo-credits';
import { ServiceCard } from '@/components/service-card';
import { touristServices } from '@/lib/data/services';

export const metadata: Metadata = {
  title: "Destinations | Mauritania Concierge – Adrar, Richat Structure, Banc d'Arguin, Diawling",
  description:
    "Five expeditions in Mauritania: Adrar and the ancient cities of Chinguetti and Ouadane, the Richat Structure (Eye of the Sahara), Banc d'Arguin National Park, Nouakchott & Nouadhibou culture, Diawling National Park and the Senegal River.",
  keywords: [
    'Adrar Mauritania tour', 'Chinguetti expedition', 'Ouadane', 'Richat Structure tour', 'Eye of the Sahara',
    "Banc d'Arguin National Park", 'Diawling National Park', 'Senegal River Mauritania', 'Nouadhibou iron ore train',
    'circuit Mauritanie', 'voyage Adrar', 'désert Mauritanie'
  ]
};

export default async function DestinationsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Destinations');
  const tServices = await getTranslations('Services');
  const [flagship, ...others] = destinationsData;

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="relative min-h-[60vh] flex items-end bg-[#051017]">
        <Image
          src={flagship.hero.src}
          alt={flagship.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-[0.8]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#051017] via-[#051017]/30 to-transparent"></div>
        <div className="relative z-10 container mx-auto px-6 md:px-12 pb-16 pt-32">
          <p className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">{t('tag')}</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-4xl">{t('title')}</h1>
          <p className="text-white/85 text-lg md:text-xl max-w-3xl">{t('subtitle')}</p>
        </div>
      </section>

      <section className="container mx-auto px-6 md:px-12 py-20">
        <div className="mb-8">
          <DestinationCard destination={flagship} index={0} featured />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {others.map((d, i) => (
            <DestinationCard key={d.slug} destination={d} index={i + 1} />
          ))}
        </div>

      </section>

      {/* Tourist services that accompany every expedition */}
      <section id="tourist-services" className="bg-white py-20 scroll-mt-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-12">
            <p className="text-secondary font-bold tracking-widest uppercase text-sm mb-3">{t('servicesTag')}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t('servicesTitle')}</h2>
            <p className="text-gray-600 text-lg">{t('servicesSubtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {touristServices.map((service) => (
              <ServiceCard
                key={service.slug}
                title={tServices(`${service.slug}.title`)}
                description={tServices(`${service.slug}.shortDescription`)}
                href={`/services/${service.slug}`}
                imageSrc={service.imageSrc}
              />
            ))}
          </div>
          <div className="mt-16">
            <PhotoCredits title={t('creditsTitle')} photos={destinationsData.map((d) => d.hero)} />
          </div>
        </div>
      </section>
    </main>
  );
}
