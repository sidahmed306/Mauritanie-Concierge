import Image from 'next/image';
import type { Metadata } from 'next';
import { pageSeo, seoKeywords, alternatesFor } from '@/lib/seo';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { destinationsData } from '@/lib/data/destinations';
import { DestinationCard } from '@/components/destinations/destination-card';
import { PhotoCredits } from '@/components/destinations/photo-credits';
import { ServiceCard } from '@/components/service-card';
import { touristServices } from '@/lib/data/services';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const meta = pageSeo.destinations[locale] ?? pageSeo.destinations.en;
  return { title: meta.title, description: meta.description, keywords: seoKeywords, alternates: alternatesFor(locale, '/destinations') };
}

export default async function DestinationsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Destinations');
  const tServices = await getTranslations('Services');
  const [flagship, ...rest] = destinationsData;
  const specials = rest.filter((d) => d.special);
  const others = rest.filter((d) => !d.special);

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
        {specials.map((d) => (
          <div key={d.slug} className="mb-8">
            <DestinationCard destination={d} index={destinationsData.indexOf(d)} featured />
          </div>
        ))}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {others.map((d) => (
            <DestinationCard key={d.slug} destination={d} index={destinationsData.indexOf(d)} />
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
