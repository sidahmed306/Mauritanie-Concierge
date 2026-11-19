import { useTranslations } from 'next-intl';
import { HeroSlideshow } from '@/components/home/hero-slideshow';
import { heroSlides } from '@/lib/data/hero-slides';
import { ArrowRight, Briefcase, Compass, Route } from 'lucide-react';
import { Link } from '@/i18n/routing';

export function HeroSection() {
  const t = useTranslations('Hero');

  return (
    <section className="relative min-h-screen w-full flex items-center bg-[#051017] py-24 overflow-hidden">
      <HeroSlideshow slides={heroSlides} captions={t.raw('slides')} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <p className="text-secondary font-bold tracking-widest uppercase text-xs md:text-sm mb-6">
            {t('tag')}
          </p>
          <h1 className="text-[40px] md:text-[56px] lg:text-[68px] leading-tight font-bold tracking-tight mb-6 text-white">
            {t('title')}<br />
            <span className="text-secondary">{t('titleBreak')}</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl font-light">
            {t('subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-12 w-full sm:w-auto">
            <Link href="/services#corporate" className="w-full sm:w-auto bg-secondary text-primary px-7 py-4 rounded-xl hover:bg-[#d6ba80] transition-colors font-bold text-lg flex items-center justify-center gap-3 min-h-[44px]">
              <Briefcase className="w-5 h-5 shrink-0" />
              {t('businessBtn')}
            </Link>
            <Link href="/destinations" className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 text-white px-7 py-4 rounded-xl hover:bg-white/20 transition-colors font-bold text-lg flex items-center justify-center gap-3 group min-h-[44px]">
              <Compass className="w-5 h-5 shrink-0" />
              {t('tourismBtn')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 rtl:rotate-180 transition-transform shrink-0" />
            </Link>
            <Link href="/services/intercity-transport" className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 text-white px-7 py-4 rounded-xl hover:bg-white/20 transition-colors font-bold text-lg flex items-center justify-center gap-3 min-h-[44px]">
              <Route className="w-5 h-5 shrink-0" />
              {t('transportBtn')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
