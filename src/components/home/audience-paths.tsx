import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { ArrowRight, Briefcase, CheckCircle2, Compass } from 'lucide-react';
import { Link } from '@/i18n/routing';

const paths = [
  {
    key: 'business',
    href: '/services#corporate',
    icon: Briefcase,
    imageSrc: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Business meeting handshake'
  },
  {
    key: 'tourist',
    href: '/destinations',
    icon: Compass,
    imageSrc: '/images/destinations/adrar/chinguetti-minaret.jpg',
    imageAlt: 'The minaret of the Chinguetti mosque at sunset'
  }
] as const;

export function AudiencePaths() {
  const t = useTranslations('AudiencePaths');

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">{t('tag')}</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-primary">{t('title')}</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {paths.map(({ key, href, icon: Icon, imageSrc, imageAlt }) => {
            const points: string[] = t.raw(`${key}Points`);
            return (
              <Link
                key={key}
                href={href}
                className="group relative overflow-hidden rounded-3xl min-h-[460px] flex items-end shadow-lg hover:shadow-2xl transition-shadow"
              >
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#051017] via-[#051017]/75 to-[#051017]/20"></div>

                <div className="relative z-10 p-8 md:p-10 w-full">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-secondary text-primary mb-6">
                    <Icon size={28} />
                  </div>
                  <h4 className="text-3xl md:text-4xl font-bold text-white mb-3">{t(`${key}Title`)}</h4>
                  <p className="text-white/80 text-lg mb-6 max-w-xl">{t(`${key}Desc`)}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-8">
                    {points.map((point) => (
                      <li key={point} className="flex items-center gap-2 text-white/90 text-sm">
                        <CheckCircle2 size={16} className="text-secondary shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center gap-2 font-bold text-secondary group-hover:gap-3 transition-all">
                    {t(`${key}Cta`)} <ArrowRight size={20} className="rtl:rotate-180" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
