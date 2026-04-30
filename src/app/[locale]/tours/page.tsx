import { setRequestLocale, getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { TourCard } from '@/components/tours/tour-card';
import { IncludedSection } from '@/components/tours/included-section';
import Image from 'next/image';
import { toursData } from '@/lib/data/tours';
import dynamic from 'next/dynamic';

const MapSection = dynamic(() => import('@/components/tours/map-section').then(mod => mod.MapSection), {
  loading: () => <div className="h-96 w-full animate-pulse bg-gray-100 rounded-3xl my-20"></div>
});

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  
  return {
    title: "Mauritania Desert Tours | Chinguetti, Terjit, Richat",
    description: "Discover Mauritania with expert guided tours. Visit Chinguetti UNESCO site, Terjit Oasis, Eye of Africa. Packages from $200. Book on WhatsApp.",
    keywords: ["mauritania tours", "chinguetti tour", "richat structure", "terjit oasis", "banc d'arguin", "sahara desert tour mauritania", "atar mauritania tourism"],
    openGraph: {
      title: "Mauritania Desert Tours | Chinguetti, Terjit, Richat",
      description: "Discover Mauritania with expert guided tours. Visit Chinguetti UNESCO site, Terjit Oasis, Eye of Africa. Packages from $200. Book on WhatsApp.",
      url: 'https://mauritanieconcierge.com/tours',
      type: 'website'
    }
  };
}

export default async function ToursPage({ params }: { params: Promise<{locale: string}> }) {
  const {locale} = await params;
  setRequestLocale(locale);

  const t = await getTranslations('Tours');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: 'Mauritania Desert Tours',
    description: 'Discover Mauritania with expert guided tours. Visit Chinguetti UNESCO site, Terjit Oasis, Eye of Africa. Packages from $200.',
    url: 'https://mauritanieconcierge.com/tours',
    offers: {
      '@type': 'Offer',
      price: '200',
      priceCurrency: 'USD'
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="min-h-screen bg-gray-50 pb-24">
      <div className="relative h-[60vh] w-full flex items-center justify-center">
        <Image src="https://images.unsplash.com/photo-1489493512598-d08130f49bea?auto=format&fit=crop&w=2000&q=80" alt="Sahara Desert Dunes Mauritania Tours" fill sizes="100vw" priority className="object-cover brightness-[0.4]" />
        <div className="absolute inset-0 bg-[#0B1E2D]/40"></div>
        <div className="relative z-10 text-center text-white px-6 mt-16 max-w-4xl mx-auto">
          <h1 className="text-[40px] md:text-[56px] lg:text-[72px] font-bold tracking-tight mb-6 leading-tight">{t('pageTitle')}</h1>
          <p className="text-lg md:text-2xl text-gray-200 font-light">{t('pageSubtitle')}</p>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 mt-24">
         <div className="w-full max-w-7xl mx-auto mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {toursData.map((tour, idx) => (
                  <TourCard key={idx} tourId={tour.id} imageSrc={tour.imageSrc} imageAlt={tour.imageAlt} mostPopular={tour.mostPopular} locale={locale} />
              ))}
            </div>
         </div>

         <div className="max-w-5xl mx-auto">
           <MapSection />
           <IncludedSection />
         </div>
      </div>
    </main>
    </>
  );
}
