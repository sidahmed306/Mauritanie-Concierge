import { ServiceCard } from '@/components/service-card';
import { servicesData } from '@/lib/data/services';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { MessageCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Services | Mauritania Concierge – Airport Pickup, Private Driver, Desert Tours",
  description: "Premium concierge services in Mauritania: VIP airport pickup, private driver Nouakchott, hotel assistance, desert tours Chinguetti, translation, visa guide for foreigners.",
  keywords: [
    "services tourisme Mauritanie", "airport pickup Nouakchott", "chauffeur privé Mauritanie",
    "visa Mauritanie étranger", "guide pratique Mauritanie", "sécurité Mauritanie touriste",
    "tourisme Mauritanie", "safari désert Mauritanie", "Chinguetti tour"
  ],
};

export default async function ServicesPage({ params }: { params: Promise<{locale: string}> }) {
  const {locale} = await params;
  setRequestLocale(locale);

  const t = await getTranslations('ServicesOverviewPage');
  const tServices = await getTranslations('Services');

  const whatsappUrl = `https://wa.me/22238075450?text=${encodeURIComponent("Hello, I would like to inquire about your services in Mauritania.")}`;

  const practicalGuide = [
    {
      icon: "🛂",
      title: "Visa & Entry",
      content: "Most nationalities can obtain a visa on arrival at Nouakchott International Airport (NKC). We can assist you with the process and required documents before your trip."
    },
    {
      icon: "🛡️",
      title: "Safety",
      content: "Nouakchott is safe for foreigners and business travelers. We recommend using a private driver at all times. We provide vetted, secure transportation 24/7."
    },
    {
      icon: "💵",
      title: "Currency",
      content: "The currency is the Mauritanian Ouguiya (MRU). USD and EUR are widely accepted in hotels. ATMs are available in Nouakchott. We advise bringing cash for remote areas."
    },
    {
      icon: "🌡️",
      title: "Climate",
      content: "Mauritania is hot and dry. Best travel season is November to March (20–30°C). Summer temperatures can exceed 45°C in the desert. Always carry water."
    },
    {
      icon: "🌍",
      title: "Languages",
      content: "Arabic and French are official languages. Our team provides full assistance in English, French, and Arabic — ideal for business and tourism visits."
    },
    {
      icon: "📱",
      title: "SIM Card",
      content: "We provide SIM card assistance on arrival at the airport. Stay connected from day one. Local data plans are affordable and widely available."
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Hero */}
      <div className="bg-primary py-24">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">{t('tag')}</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{t('title')}</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">{t('subtitle')}</p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              title={tServices(`${service.slug}.title`)}
              description={tServices(`${service.slug}.shortDescription`)}
              href={`/services/${service.slug}`}
              imageSrc={service.imageSrc}
            />
          ))}
        </div>
      </div>

      {/* Practical Guide for Foreigners */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">For Foreigners</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">Practical Guide to Mauritania</h3>
            <p className="text-gray-600 text-lg">Everything you need to know before and during your visit to Mauritania.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {practicalGuide.map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="text-lg font-bold text-primary mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <div className="bg-primary rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">Need help planning your visit?</h4>
              <p className="text-white/80">Contact us directly on WhatsApp — we reply in under 5 minutes, 24/7.</p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-xl hover:bg-[#1DA851] transition-colors font-bold text-lg shadow-lg"
            >
              <MessageCircle className="w-6 h-6" />
              Contact on WhatsApp
            </a>
          </div>
        </div>
      </div>

    </main>
  );
}
