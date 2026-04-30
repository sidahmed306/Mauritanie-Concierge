import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('Footer');
  const tNav = useTranslations('Navbar');

  return (
    <footer className="bg-[#051017] text-white py-16 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h2 className="text-2xl font-bold tracking-tighter mb-6">
            M<span className="text-secondary">Concierge</span>
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            {t('description')}
          </p>
        </div>

        <div>
           <h3 className="text-lg font-bold mb-6 text-white">{t('links')}</h3>
           <ul className="flex flex-col text-gray-400 space-y-2">
             <li><Link href="/" className="hover:text-secondary transition-colors py-2 block min-h-[44px]">{tNav('home')}</Link></li>
             <li><Link href="/services" className="hover:text-secondary transition-colors py-2 block min-h-[44px]">{tNav('services')}</Link></li>
             <li><Link href="/tours" className="hover:text-secondary transition-colors py-2 block min-h-[44px]">{tNav('tours')}</Link></li>
             <li><Link href="/about" className="hover:text-secondary transition-colors py-2 block min-h-[44px]">{tNav('about')}</Link></li>
             <li><Link href="/contact" className="hover:text-secondary transition-colors py-2 block min-h-[44px]">{tNav('contact')}</Link></li>
           </ul>
        </div>

        <div>
           <h3 className="text-lg font-bold mb-6 text-white">{t('contact')}</h3>
           <ul className="flex flex-col text-gray-400 space-y-2">
             <li className="py-2 block min-h-[44px]">{t('email')}</li>
             <li className="py-2 block min-h-[44px]">{t('phone')}</li>
             <li className="py-2 block min-h-[44px]">{t('location')}</li>
           </ul>
        </div>
      </div>
      <div className="container mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} {t('rights')}
      </div>
    </footer>
  );
}
