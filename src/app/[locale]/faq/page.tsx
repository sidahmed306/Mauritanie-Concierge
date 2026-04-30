import { FAQAccordion } from '@/components/faq-accordion';
import { setRequestLocale, getTranslations } from 'next-intl/server';

export default async function FAQPage({ params }: { params: Promise<{locale: string}> }) {
  const {locale} = await params;
  setRequestLocale(locale);

  const t = await getTranslations('FAQ');
  const faqs = t.raw('items');

  return (
    <main className="min-h-screen py-24 bg-white relative">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">{t('pageTag')}</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">{t('pageTitle')}</h1>
          <p className="text-gray-600 text-lg">
             {t('pageSubtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <FAQAccordion faqs={faqs} />
        </div>
      </div>
    </main>
  );
}
