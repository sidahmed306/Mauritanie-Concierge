import { HeroSection } from '@/components/home/hero-section';
import { ServicesOverview } from '@/components/home/services-overview';
import { setRequestLocale } from 'next-intl/server';
import dynamic from 'next/dynamic';
import { Metadata } from 'next';

const TestimonialsSection = dynamic(() => import('@/components/home/testimonials-section').then(mod => mod.TestimonialsSection), {
  loading: () => <div className="h-96 w-full animate-pulse bg-gray-50"></div>
});

const FAQSectionHome = dynamic(() => import('@/components/home/faq-section-home').then(mod => mod.FAQSectionHome), {
  loading: () => <div className="h-96 w-full animate-pulse bg-white"></div>
});

export const metadata: Metadata = {
  title: "Mauritania Concierge | #1 Tourism & Concierge Service in Mauritania",
  description: "Your personal concierge in Mauritania. VIP airport pickup Nouakchott, private driver, desert tours Chinguetti, Terjit, Richat Structure (Eye of Africa). Visa assistance & guide for foreigners. Contact us on WhatsApp 24/7.",
  keywords: [
    "tourisme Mauritanie", "tourism Mauritania", "concierge Mauritanie",
    "airport pickup Nouakchott", "chauffeur privé Mauritanie", "private driver Mauritania",
    "safari désert Mauritanie", "Chinguetti tour", "Richat Structure Eye of Africa",
    "visa Mauritanie", "voyage Mauritanie étranger", "Banc d'Arguin",
    "Terjit oasis", "Nouakchott hotel", "VIP services Mauritania"
  ],
  openGraph: {
    title: "Mauritania Concierge | #1 Tourism & Concierge Service in Mauritania",
    description: "VIP airport pickup, private driver, desert tours to Chinguetti & Richat Structure. Trusted by 47+ international clients. WhatsApp 24/7.",
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
    title: 'Mauritania Concierge | #1 Tourism & Concierge Service',
    description: 'VIP airport pickup, private driver, desert tours. Trusted by 47+ clients. WhatsApp 24/7.',
  }
};

export default async function Home({ params }: { params: Promise<{locale: string}> }) {
  const {locale} = await params;
  setRequestLocale(locale);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: 'Mauritania Concierge',
    image: 'https://images.unsplash.com/photo-1757438059090-445d7100e1bf?auto=format&fit=crop&w=1200&q=80',
    description: 'Premium concierge and tourism service in Mauritania. VIP airport pickup, private driver, desert tours to Chinguetti, Terjit, Richat Structure (Eye of Africa). Visa assistance for foreigners.',
    telephone: '+22238075450',
    email: 'mauritanieconcierge@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Nouakchott',
      addressCountry: 'MR'
    },
    url: 'https://mauritanieconcierge.com',
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '47',
      bestRating: '5',
      worstRating: '1'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Concierge Services',
      itemListElement: [
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
        <ServicesOverview />
        <TestimonialsSection />
        <FAQSectionHome />
      </main>
    </>
  );
}
