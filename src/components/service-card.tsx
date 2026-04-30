import Image from 'next/image';
import {ArrowRight} from 'lucide-react';
import {Link} from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export function ServiceCard({
  title,
  description,
  imageSrc,
  href
}: {
  title: string;
  description: string;
  imageSrc: string;
  href: string;
}) {
  const t = useTranslations('ServicesOverview');

  return (
    <Link href={href} className="group block bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100/50 hover:-translate-y-1">
      <div className="relative h-56 w-full overflow-hidden">
        <Image 
          src={imageSrc} 
          alt={`${title} in Mauritania`} 
          fill 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
        <h4 className="absolute bottom-4 left-6 text-2xl font-bold text-white tracking-wide">{title}</h4>
      </div>
      <div className="p-6">
        <p className="text-gray-600 line-clamp-3 mb-6 text-sm">{description}</p>
        <div className="flex items-center text-primary font-bold gap-2 group-hover:text-secondary mb-1">
          {t('ctaText')} <ArrowRight size={18} className="transform transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
