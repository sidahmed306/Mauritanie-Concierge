import { HeroSection } from '@/components/home/hero-section';
import { ServicesOverview } from '@/components/home/services-overview';
import { AudiencePaths } from '@/components/home/audience-paths';
import { IntercityBand } from '@/components/intercity-band';
import { TrustedBy } from '@/components/home/trusted-by';
import { WhyChooseUs } from '@/components/home/why-choose-us';
import { OnRequestSection } from '@/components/home/on-request-section';
import { HowItWorks } from '@/components/home/how-it-works';
import { DestinationsSection } from '@/components/home/destinations-section';
import { setRequestLocale } from 'next-intl/server';
import dynamic from 'next/dynamic';
import { Metadata } from 'next';
import { SITE_URL, seoFor, seoKeywords, alternatesFor } from '@/lib/seo';

const FAQSectionHome = dynamic(() => import('@/components/home/faq-section-home').then(mod => mod.FAQSectionHome), {
  loading: () => <div className="h-96 w-full animate-pulse bg-white"></div>
});

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const meta = seoFor(locale);
  const image = {
    url: 'https://images.unsplash.com/photo-1757438059090-445d7100e1bf?auto=format&fit=crop&w=1200&q=80',
    width: 1200,
    height: 630,
    alt: 'Mauritania Concierge'
  };
  return {
    title: meta.title,
    description: meta.description,
    keywords: seoKeywords,
    alternates: alternatesFor(locale, ''),
    openGraph: {
      title: meta.title,
      description: meta.ogDescription,
      url: `${SITE_URL}/${locale}`,
      siteName: 'Mauritania Concierge',
      locale,
      type: 'website',
      images: [image]
    },
    twitter: { card: 'summary_large_image', title: meta.title, description: meta.ogDescription }
  };
}

export default async function Home({ params }: { params: Promise<{locale: string}> }) {
  const {locale} = await params;
  setRequestLocale(locale);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['TravelAgency', 'LocalBusiness'],
    name: 'Mauritania Concierge',
    image: 'https://images.unsplash.com/photo-1757438059090-445d7100e1bf?auto=format&fit=crop&w=1200&q=80',
    description: 'Mauritania Concierge provides tourist expeditions across Mauritania, business delegation services in Nouakchott and nationwide, and intercity transport between all cities of Mauritania (Nouakchott, Nouadhibou, Atar, Rosso, Kiffa, Zouérat…).',
    slogan: 'Tourist expeditions, business delegations and intercity transport in Mauritania — and anything else on request',
    areaServed: { '@type': 'Country', name: 'Mauritania' },
    knowsLanguage: ['ar', 'fr', 'en'],
    telephone: '+22241075450',
    email: 'mauritanieconcierge@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Nouakchott',
      addressCountry: 'MR'
    },
    url: SITE_URL,
    priceRange: '$$',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Mauritania Concierge services: three active service lines + anything on request',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'Tourist expeditions & tourist services',
          itemListElement: [
            'Adrar & the ancient cities (Chinguetti, Ouadane)', 'Iron ore train expedition (Zouérat – Nouadhibou)',
            'Richat Structure (Eye of the Sahara)', "Banc d'Arguin National Park", 'Culture of Nouakchott & Nouadhibou',
            'Diawling National Park & the Senegal River', 'Airport pickup', 'Local guides', 'Hotel assistance'
          ].map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'TouristTrip', name } }))
        },
        {
          '@type': 'OfferCatalog',
          name: 'Business delegations in Nouakchott and nationwide',
          itemListElement: [
            'VIP airport reception', 'Delegation logistics', 'Business interpretation (Arabic, French, English)',
            'Chauffeurs and mobility in Nouakchott', 'Business accommodation', 'Corporate events & missions'
          ].map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } }))
        },
        {
          '@type': 'OfferCatalog',
          name: 'Intercity transport across Mauritania',
          itemListElement: [
            'Nouakchott – Nouadhibou', 'Nouakchott – Atar', 'Nouakchott – Rosso', 'Nouakchott – Kiffa',
            'Nouakchott – Kaédi', 'Nouakchott – Néma', 'Nouadhibou – Zouérat', 'Vehicle rental with driver'
          ].map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: `Intercity transport: ${name}` } }))
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Anything on request',
            description: 'Any other need in Mauritania arranged on request: vehicle or apartment rental, interpreters, guides, SIM cards, meeting rooms, appointments, event logistics.'
          }
        }
      ]
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="min-h-screen">
        <HeroSection />
        <AudiencePaths />
        <IntercityBand />
        <TrustedBy />
        <ServicesOverview />
        <DestinationsSection />
        <OnRequestSection />
        <WhyChooseUs />
        <HowItWorks />
        <FAQSectionHome />
      </main>
    </>
  );
}
