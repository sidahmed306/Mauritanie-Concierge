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
  title: "Mauritania Concierge | #1 Tourism & Concierge Service",
  description: "Your personal concierge in Mauritania. Airport pickup, private driver, desert tours to Chinguetti, Terjit, Richat Structure. Contact us on WhatsApp 24/7.",
  openGraph: {
    title: "Mauritania Concierge | #1 Tourism & Concierge Service",
    description: "Your personal concierge in Mauritania. Airport pickup, private driver, desert tours to Chinguetti, Terjit, Richat Structure. Contact us on WhatsApp 24/7.",
    url: 'https://mauritanieconcierge.com',
    siteName: 'Mauritania Concierge',
    locale: 'en_US',
    type: 'website',
  }
};

export default async function Home({ params }: { params: Promise<{locale: string}> }) {
  const {locale} = await params;
  setRequestLocale(locale);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Mauritania Concierge',
    image: 'https://mauritanieconcierge.com/logo.png',
    description: 'Your personal concierge in Mauritania. Airport pickup, private driver, desert tours to Chinguetti, Terjit, Richat Structure. Contact us on WhatsApp 24/7.',
    telephone: '+22238075450',
    email: 'mauritanieconcierge@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Nouakchott',
      addressCountry: 'MR'
    },
    url: 'https://mauritanieconcierge.com'
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
