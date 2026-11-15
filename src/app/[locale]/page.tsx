import { HeroSection } from '@/components/home/hero-section';
import { ServicesOverview } from '@/components/home/services-overview';
import { AudiencePaths } from '@/components/home/audience-paths';
import { TrustedBy } from '@/components/home/trusted-by';
import { WhyChooseUs } from '@/components/home/why-choose-us';
import { OnRequestSection } from '@/components/home/on-request-section';
import { HowItWorks } from '@/components/home/how-it-works';
import { DestinationsSection } from '@/components/home/destinations-section';
import { setRequestLocale } from 'next-intl/server';
import dynamic from 'next/dynamic';
import { Metadata } from 'next';
import { getApprovedReviews, ratingSummary } from '@/lib/reviews';

const TestimonialsSection = dynamic(() => import('@/components/home/testimonials-section').then(mod => mod.TestimonialsSection), {
  loading: () => <div className="h-96 w-full animate-pulse bg-gray-50"></div>
});

const FAQSectionHome = dynamic(() => import('@/components/home/faq-section-home').then(mod => mod.FAQSectionHome), {
  loading: () => <div className="h-96 w-full animate-pulse bg-white"></div>
});

// Static page, regenerated in the background at most once an hour (approving a review refreshes it immediately).
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Mauritania Concierge | Corporate Mobility, Delegations & Tours in Mauritania",
  description: "Mobility and concierge partner in Mauritania trusted by international corporations. VIP airport reception, chauffeurs in Nouakchott, delegation logistics, any vehicle on request, and desert tours to Chinguetti, Ouadane and Terjit. WhatsApp 24/7.",
  keywords: [
    "tourisme Mauritanie", "tourism Mauritania", "concierge Mauritanie",
    "airport pickup Nouakchott", "chauffeur privé Mauritanie", "private driver Mauritania",
    "safari désert Mauritanie", "Chinguetti tour", "Richat Structure Eye of Africa",
    "visa Mauritanie", "voyage Mauritanie étranger", "Banc d'Arguin",
    "Terjit oasis", "Nouakchott hotel", "VIP services Mauritania",
    "corporate transport Nouakchott", "delegation services Mauritania", "business travel Mauritania",
    "chauffeur entreprise Nouakchott", "transport délégation Mauritanie", "4x4 rental with driver Mauritania"
  ],
  openGraph: {
    title: "Mauritania Concierge | Corporate Mobility, Delegations & Tours in Mauritania",
    description: "VIP airport pickup, private driver, desert tours to Chinguetti & Richat Structure. Trusted by international corporations and travelers. WhatsApp 24/7.",
    url: 'https://mauritanieconcierge.com',
    siteName: 'Mauritania Concierge',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1757438059090-445d7100e1bf?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Sahara desert dunes in Mauritania',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mauritania Concierge | Corporate Mobility & Tours',
    description: 'VIP airport pickup, private driver, desert tours. Trusted by international clients. WhatsApp 24/7.',
  }
};

export default async function Home({ params }: { params: Promise<{locale: string}> }) {
  const {locale} = await params;
  setRequestLocale(locale);

  const summary = ratingSummary(await getApprovedReviews());

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: 'Mauritania Concierge',
    image: 'https://images.unsplash.com/photo-1757438059090-445d7100e1bf?auto=format&fit=crop&w=1200&q=80',
    description: 'Premium concierge and tourism service in Mauritania. VIP airport pickup, private driver, desert tours to Chinguetti, Terjit, Richat Structure (Eye of Africa). Visa assistance for foreigners.',
    telephone: '+22241075450',
    email: 'mauritanieconcierge@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Nouakchott',
      addressCountry: 'MR'
    },
    url: 'https://mauritanieconcierge.com',
    priceRange: '$$',
    // Only real, approved reviews: never a hard-coded rating.
    ...(summary && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: String(summary.average),
        reviewCount: String(summary.count),
        bestRating: '5',
        worstRating: '1'
      }
    }),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Concierge Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Corporate VIP Airport Reception Nouakchott' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Corporate Mobility & Chauffeurs in Nouakchott' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Delegation Logistics Mauritania' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Transport Across Mauritania (4x4)' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'VIP Airport Pickup Nouakchott' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Private Driver Mauritania' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Desert Tours Chinguetti' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Richat Structure Expedition' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Translation Services Arabic French English' } },
      ]
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="min-h-screen">
        <HeroSection />
        <AudiencePaths />
        <TrustedBy />
        <ServicesOverview />
        <DestinationsSection />
        <OnRequestSection />
        <WhyChooseUs />
        <HowItWorks />
        <TestimonialsSection />
        <FAQSectionHome />
      </main>
    </>
  );
}
