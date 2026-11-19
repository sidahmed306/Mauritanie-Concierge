import Image from 'next/image';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { ArrowLeft, CalendarDays, CheckCircle2, Clock, Mail, MapPin, MessageCircle, Route, Sparkles, Star } from 'lucide-react';
import { Link, routing } from '@/i18n/routing';
import { destinationsData, getDestination } from '@/lib/data/destinations';
import { CONTACT_EMAIL, whatsappLink } from '@/lib/data/services';
import { DestinationCard } from '@/components/destinations/destination-card';
import { PhotoCredits } from '@/components/destinations/photo-credits';

type Params = { locale: string; slug: string };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => destinationsData.map((d) => ({ locale, slug: d.slug })));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const destination = getDestination(slug);
  if (!destination) return {};
  const t = await getTranslations({ locale, namespace: `Destinations.items.${slug}` });
  return {
    title: `${t('name')} | Mauritania Concierge`,
    description: t('short'),
    openGraph: {
      title: `${t('name')} | Mauritania Concierge`,
      description: t('short'),
      images: [{ url: destination.hero.src, alt: destination.hero.alt }]
    }
  };
}

export default async function DestinationPage({ params }: { params: Promise<Params> }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const destination = getDestination(slug);
  if (!destination) notFound();

  const index = destinationsData.findIndex((d) => d.slug === slug);
  const t = await getTranslations('Destinations');
  const tItem = await getTranslations(`Destinations.items.${slug}`);

  const name = tItem('name');
  const highlights: { title: string; desc: string }[] = tItem.raw('highlights');
  const sites: { name: string; desc: string }[] = tItem.raw('sites');
  const whatsappUrl = whatsappLink(t('whatsappMessage', { destination: name }));
  const others = destinationsData.filter((d) => d.slug !== slug).slice(0, 3);

  const practical = [
    { icon: CalendarDays, label: t('bestSeason'), value: tItem('bestSeason') },
    { icon: Clock, label: t('duration'), value: tItem('duration') },
    { icon: Route, label: t('access'), value: tItem('access') }
  ];

  return (
    <main className="min-h-screen bg-white pb-24">
      {/* Hero */}
      <section className="relative min-h-[75vh] flex items-end bg-[#051017]">
        <Image
          src={destination.hero.src}
          alt={destination.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-[0.85]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#051017] via-[#051017]/30 to-transparent"></div>
        <div className="relative z-10 container mx-auto px-6 md:px-12 pb-16 pt-32">
          <Link href="/destinations" className="text-white/80 hover:text-white flex items-center gap-2 font-medium mb-6 transition-colors w-fit">
            <ArrowLeft size={20} className="rtl:rotate-180" /> {t('backToAll')}
          </Link>
          {index === 0 ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary text-primary text-xs font-bold uppercase tracking-wider mb-5">
              <Star size={14} className="fill-current" /> {t('flagship')}
            </span>
          ) : destination.special ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-primary text-xs font-bold uppercase tracking-wider mb-5">
              <Sparkles size={14} className="text-secondary" /> {t('special')}
            </span>
          ) : (
            <span className="inline-block px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider mb-5">
              {t('expedition', { number: String(index + 1).padStart(2, '0') })}
            </span>
          )}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 max-w-5xl">{name}</h1>
          <p className="text-secondary text-xl md:text-2xl font-medium">{tItem('tagline')}</p>
        </div>
      </section>

      {/* Intro + practical */}
      <section className="container mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="lg:col-span-2">
            <p className="text-gray-700 text-xl leading-relaxed mb-14">{tItem('intro')}</p>

            <h2 className="text-3xl font-bold text-primary mb-8">{t('highlightsTitle')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {highlights.map((h) => (
                <div key={h.title} className="rounded-2xl bg-gray-50 border border-gray-100 p-6">
                  <CheckCircle2 className="text-secondary mb-4" size={28} />
                  <h3 className="text-lg font-bold text-primary mb-2">{h.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{h.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-primary mb-8">{t('sitesTitle')}</h2>
            <ul className="space-y-5">
              {sites.map((s) => (
                <li key={s.name} className="flex gap-4">
                  <MapPin className="text-secondary shrink-0 mt-1" size={22} />
                  <div>
                    <h3 className="font-bold text-primary text-lg">{s.name}</h3>
                    <p className="text-gray-600">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <aside>
            <div className="lg:sticky lg:top-32 space-y-6">
              <div className="rounded-3xl bg-gray-50 border border-gray-100 p-8">
                <h2 className="text-xl font-bold text-primary mb-6">{t('practicalTitle')}</h2>
                <dl className="space-y-5">
                  {practical.map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex gap-3">
                      <Icon className="text-secondary shrink-0 mt-0.5" size={20} />
                      <div>
                        <dt className="text-xs uppercase tracking-wider font-bold text-gray-400 mb-1">{label}</dt>
                        <dd className="text-primary font-medium">{value}</dd>
                      </div>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="rounded-3xl bg-primary p-8">
                <h2 className="text-2xl font-bold text-white mb-3">{t('ctaTitle')}</h2>
                <p className="text-white/75 text-sm mb-6">{t('ctaDesc')}</p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] text-white py-4 px-6 rounded-xl font-bold text-lg hover:bg-[#1DA851] transition-colors flex items-center justify-center gap-3 min-h-[44px]"
                >
                  <MessageCircle size={22} /> {t('ctaBtn')}
                </a>
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(name)}`}
                  className="w-full mt-3 border border-white/20 text-white py-3 px-6 rounded-xl font-bold hover:bg-white/10 transition-colors flex items-center justify-center gap-3 min-h-[44px]"
                >
                  <Mail size={20} /> {t('emailBtn')}
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-primary mb-10">{t('galleryTitle')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {destination.gallery.map((photo, i) => (
              <figure
                key={photo.src}
                className={`relative overflow-hidden rounded-2xl group ${
                  i === 0 ? 'col-span-2 row-span-2 aspect-square md:aspect-auto' : 'aspect-[4/3]'
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes={i === 0 ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 50vw, 33vw'}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <figcaption className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/70 to-transparent text-white text-xs md:text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  {photo.alt}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Other expeditions */}
      <section className="container mx-auto px-6 md:px-12 pt-20">
        <h2 className="text-3xl font-bold text-primary mb-8">{t('otherTitle')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {others.map((d) => (
            <DestinationCard key={d.slug} destination={d} index={destinationsData.indexOf(d)} />
          ))}
        </div>

        <div className="mt-16">
          <PhotoCredits title={t('creditsTitle')} photos={[destination.hero, ...destination.gallery]} />
        </div>
      </section>
    </main>
  );
}
