import { FAQAccordion } from '@/components/faq-accordion';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export function FAQSectionHome() {
  const t = useTranslations('FAQ');
  // The four questions about our three service lines + requests, in the visitor's language.
  const faqs: { question: string; answer: string }[] = t.raw('items').slice(0, 4);

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 items-center">
        
        <div className="lg:w-1/3">
          <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">{t('tag')}</h2>
          <h3 className="text-4xl font-bold text-primary mb-6">{t('title')}</h3>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            {t('subtitle')}
          </p>
          <Link href="/faq" className="inline-block bg-primary text-white font-semibold px-8 py-4 rounded-xl hover:bg-[#081520] transition-colors shadow-lg">
            {t('viewAll')}
          </Link>
        </div>

        <div className="lg:w-2/3 w-full">
          <FAQAccordion faqs={faqs} />
        </div>

      </div>
    </section>
  );
}
