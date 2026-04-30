'use client';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <div className="flex items-center gap-2 bg-gray-100/10 hover:bg-gray-100/20 transition-colors px-3 py-1.5 rounded-full border border-gray-200/20 backdrop-blur-sm">
      <Globe size={16} className="text-primary opacity-80" />
      <select 
        value={locale} 
        onChange={handleLanguageChange}
        className="bg-transparent text-sm font-bold text-primary outline-none cursor-pointer appearance-none uppercase pr-2 z-10 relative"
      >
        <option value="en" className="text-black bg-white">EN</option>
        <option value="fr" className="text-black bg-white">FR</option>
        <option value="ar" className="text-black bg-white">AR</option>
      </select>
    </div>
  );
}
