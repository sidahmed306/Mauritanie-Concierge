import { ServiceCard } from '@/components/service-card';
import { corporateServices, touristServices, transportServices, whatsappLink } from '@/lib/data/services';
import { IntercityBand } from '@/components/intercity-band';
import { Fragment } from 'react';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Briefcase, Compass, MessageCircle, Route } from 'lucide-react';
import type { Metadata } from 'next';
import { pageSeo, seoKeywords } from '@/lib/seo';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { ArrowRight } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const meta = pageSeo.services[locale] ?? pageSeo.services.en;
  return { title: meta.title, description: meta.description, keywords: seoKeywords };
}

export default async function ServicesPage({ params }: { params: Promise<{locale: string}> }) {
  const {locale} = await params;
  setRequestLocale(locale);

  const t = await getTranslations('ServicesOverviewPage');
  const tServices = await getTranslations('Services');
  const tCat = await getTranslations('ServiceCategories');
  const tDest = await getTranslations('Destinations');

  const whatsappUrl = whatsappLink("Hello, I would like to inquire about your services in Mauritania.");

  const categories = [
    { key: 'corporate' as const, icon: Briefcase, items: corporateServices, bg: 'bg-gray-50' },
    { key: 'tourist' as const, icon: Compass, items: touristServices, bg: 'bg-white' },
    { key: 'transport' as const, icon: Route, items: transportServices, bg: 'bg-gray-50' }
  ];

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

      {/* Category jump links */}
      <div className="bg-primary pb-12 -mt-1">
        <div className="container mx-auto px-6 md:px-12 flex flex-col sm:flex-row justify-center gap-4">
          {categories.map(({ key, icon: Icon }) => (
            <a key={key} href={`#${key}`} className="flex items-center justify-center gap-3 px-7 py-4 rounded-xl border border-secondary/40 text-white hover:bg-secondary hover:text-primary transition-colors font-bold min-h-[44px]">
              <Icon size={20} /> {tCat(`${key}Title`)}
            </a>
          ))}
        </div>
      </div>

      {/* Service categories */}
      {categories.map(({ key, icon: Icon, items, bg }) => (
        <Fragment key={key}>
        {/* the transport pillar opens with the routes band (it carries the #transport anchor) */}
        {key === 'transport' && <IntercityBand />}
        <section id={key === 'transport' ? 'transport-services' : key} className={`${bg} py-20 scroll-mt-24`}>
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex items-start gap-5 mb-12 max-w-3xl">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary text-secondary shrink-0">
                <Icon size={28} />
              </div>
              <div>
                <p className="text-secondary font-bold tracking-widest uppercase text-sm mb-2">{tCat(`${key}Tag`)}</p>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">{tCat(`${key}Title`)}</h2>
                <p className="text-gray-600 text-lg">{tCat(`${key}Subtitle`)}</p>
              </div>
            </div>
            {key === 'tourist' && (
              <Link href="/destinations" className="group relative block overflow-hidden rounded-3xl mb-10 min-h-[320px] shadow-lg">
                <Image src="/images/destinations/adrar/chinguetti-minaret.jpg" alt="The minaret of the Chinguetti mosque at sunset" fill sizes="100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-r rtl:bg-gradient-to-l from-[#051017]/90 via-[#051017]/50 to-transparent"></div>
                <div className="relative z-10 p-8 md:p-12 max-w-2xl">
                  <p className="text-secondary font-bold tracking-widest uppercase text-sm mb-3">{tDest('tag')}</p>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{tDest('expeditionsBannerTitle')}</h3>
                  <p className="text-white/80 text-lg mb-6">{tDest('expeditionsBannerDesc')}</p>
                  <span className="inline-flex items-center gap-2 bg-secondary text-primary font-bold px-6 py-3 rounded-xl group-hover:gap-3 transition-all">
                    {tDest('expeditionsBannerCta')} <ArrowRight size={20} className="rtl:rotate-180" />
                  </span>
                </div>
              </Link>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((service) => (
                <ServiceCard
                  key={service.slug}
                  title={tServices(`${service.slug}.title`)}
                  description={tServices(`${service.slug}.shortDescription`)}
                  href={`/services/${service.slug}`}
                  imageSrc={service.imageSrc}
                />
              ))}
            </div>
          </div>
        </section>
        </Fragment>
      ))}

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
