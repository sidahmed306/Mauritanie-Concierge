import { HeroSection } from '@/components/home/hero-section';
import { ServicesOverview } from '@/components/home/services-overview';
import { setRequestLocale } from 'next-intl/server';
import dynamic from 'next/dynamic';

const TestimonialsSection = dynamic(() => import('@/components/home/testimonials-section').then(mod => mod.TestimonialsSection), {
  loading: () => <div className="h-96 w-full animate-pulse bg-gray-50"></div>
});

const FAQSectionHome = dynamic(() => import('@/components/home/faq-section-home').then(mod => mod.FAQSectionHome), {
  loading: () => <div className="h-96 w-full animate-pulse bg-white"></div>
});

export default async function Home({ params }: { params: Promise<{locale: string}> }) {
  const {locale} = await params;
  setRequestLocale(locale);

  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesOverview />
      <TestimonialsSection />
      <FAQSectionHome />
    </main>
  );
}
