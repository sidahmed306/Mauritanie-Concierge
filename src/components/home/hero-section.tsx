import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from '@/i18n/routing';

export function HeroSection() {
  const t = useTranslations('Hero');

  const phoneNumber = "22238075450"; 
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hello, I would like to inquire about your concierge services in Mauritania.")}`;

  return (
    <section className="relative h-screen w-full flex items-center bg-[#051017]">
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1489493512598-d08130f49bea?auto=format&fit=crop&w=2000&q=80" 
          alt="Mauritania desert landscape" 
          fill 
          sizes="100vw"
          className="object-cover brightness-[0.35]"
          priority={true}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#051017]/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-[40px] md:text-[56px] lg:text-[72px] leading-tight font-bold tracking-tight mb-6 text-white">
            {t('title')}<br />
            <span className="text-secondary">{t('titleBreak')}</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl font-light">
            {t('subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 w-full sm:w-auto">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-[#25D366] text-white px-8 py-4 rounded-xl hover:bg-[#1DA851] transition-colors font-bold text-lg flex items-center justify-center gap-3 shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] min-h-[44px]">
               <MessageCircle className="w-6 h-6 shrink-0" />
               {t('contactBtn')}
            </a>
            <Link href="/services" className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl hover:bg-white/20 transition-colors font-bold text-lg flex items-center justify-center gap-2 group min-h-[44px]">
               {t('exploreBtn')}
               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform shrink-0" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
