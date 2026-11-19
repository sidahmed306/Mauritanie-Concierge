import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { ArrowRight, MapPin, MessageCircle, Route } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { whatsappLink } from '@/lib/data/services';

/** Intercity transport, the company's third pillar: routes across Mauritania + direct booking. */
export function IntercityBand() {
  const t = useTranslations('Transport');
  const routes: string[] = t.raw('routes');

  return (
    <section id="transport" className="relative overflow-hidden bg-[#051017] py-20 md:py-24 scroll-mt-24">
      <Image
        src="https://images.unsplash.com/photo-1494783367193-149034c05e8f?auto=format&fit=crop&w=1920&q=80"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-r rtl:bg-gradient-to-l from-[#051017] via-[#051017]/85 to-[#051017]/40"></div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="inline-flex items-center gap-2 text-secondary font-bold tracking-widest uppercase text-sm mb-4">
            <Route size={18} /> {t('tag')}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{t('title')}</h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl">{t('subtitle')}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={whatsappLink(t('whatsappMessage'))}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-7 py-4 rounded-xl hover:bg-[#1DA851] transition-colors font-bold text-lg min-h-[44px]"
            >
              <MessageCircle className="w-6 h-6" /> {t('cta')}
            </a>
            <Link
              href="/services/intercity-transport"
              className="inline-flex items-center justify-center gap-2 border border-white/25 text-white px-7 py-4 rounded-xl hover:bg-white/10 transition-colors font-bold text-lg min-h-[44px]"
            >
              {t('details')} <ArrowRight size={20} className="rtl:rotate-180" />
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8">
          <p className="text-white font-bold text-lg mb-5">{t('routesTitle')}</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {routes.map((route) => (
              <li key={route} className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white/90">
                <MapPin size={18} className="text-secondary shrink-0" />
                <span className="font-medium">{route}</span>
              </li>
            ))}
          </ul>
          <p className="text-white/60 text-sm mt-5">{t('note')}</p>
        </div>
      </div>
    </section>
  );
}
