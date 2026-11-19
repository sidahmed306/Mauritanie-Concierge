import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { ArrowRight, Sparkles, Star } from 'lucide-react';
import { Link } from '@/i18n/routing';
import type { Destination } from '@/lib/data/destinations';

/** Card for one expedition. `featured` renders the large flagship layout. */
export function DestinationCard({
  destination,
  index,
  featured = false
}: {
  destination: Destination;
  index: number;
  featured?: boolean;
}) {
  const t = useTranslations('Destinations');
  const slug = destination.slug;

  return (
    <Link
      href={`/destinations/${slug}`}
      className={`group relative block h-full overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-shadow ${
        featured ? 'min-h-[520px] lg:min-h-[600px]' : 'min-h-[420px]'
      }`}
    >
      <Image
        src={destination.hero.src}
        alt={destination.hero.alt}
        fill
        sizes={featured ? '(max-width: 1024px) 100vw, 66vw' : '(max-width: 768px) 100vw, 33vw'}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#051017]/95 via-[#051017]/25 to-transparent"></div>

      <div className="absolute top-5 start-5 flex items-center gap-2">
        {featured && index === 0 ? (
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary text-primary text-xs font-bold uppercase tracking-wider">
            <Star size={14} className="fill-current" /> {t('flagship')}
          </span>
        ) : destination.special ? (
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-primary text-xs font-bold uppercase tracking-wider">
            <Sparkles size={14} className="text-secondary" /> {t('special')}
          </span>
        ) : (
          <span className="px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider">
            {t('expedition', { number: String(index + 1).padStart(2, '0') })}
          </span>
        )}
      </div>

      <div className="absolute bottom-0 inset-x-0 p-7 md:p-9">
        <p className="text-secondary font-semibold text-sm mb-2">{t(`items.${slug}.tagline`)}</p>
        <h3 className={`font-bold text-white mb-3 ${featured ? 'text-3xl md:text-5xl' : 'text-2xl md:text-3xl'}`}>
          {t(`items.${slug}.name`)}
        </h3>
        <p className={`text-white/80 mb-5 ${featured ? 'text-lg max-w-2xl' : 'text-sm line-clamp-2'}`}>
          {t(`items.${slug}.short`)}
        </p>
        <span className="inline-flex items-center gap-2 font-bold text-white group-hover:text-secondary group-hover:gap-3 transition-all">
          {t('discover')} <ArrowRight size={20} className="rtl:rotate-180" />
        </span>
      </div>
    </Link>
  );
}
