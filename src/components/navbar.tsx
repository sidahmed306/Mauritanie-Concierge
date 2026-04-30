'use client';
import { useState, useEffect } from 'react';
import { Link } from '@/i18n/routing';
import { Menu, X } from 'lucide-react';
import { LanguageSwitcher } from './language-switcher';
import { useTranslations } from 'next-intl';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = useTranslations('Navbar');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        <Link href="/" className={`text-xl md:text-2xl font-bold tracking-tighter truncate max-w-[60%] shrink-0 ${isScrolled ? 'text-primary' : 'text-white'}`}>
          M<span className="text-secondary">Concierge</span>
        </Link>

        {/* Desktop Nav */}
        <div className={`hidden md:flex items-center gap-6 lg:gap-8 font-medium ${isScrolled ? 'text-primary' : 'text-white/90'}`}>
          <Link href="/" className="hover:text-secondary transition-colors py-2">{t('home')}</Link>
          <Link href="/services" className="hover:text-secondary transition-colors py-2">{t('services')}</Link>
          <Link href="/tours" className="hover:text-secondary transition-colors py-2">{t('tours')}</Link>
          <Link href="/about" className="hover:text-secondary transition-colors py-2">{t('about')}</Link>
          <Link href="/faq" className="hover:text-secondary transition-colors py-2">{t('faq')}</Link>
          
          <div className={`w-px h-6 mx-2 ${isScrolled ? 'bg-gray-200' : 'bg-white/20'}`}></div>
          
          <Link href="/contact" className="bg-secondary text-white px-6 py-2.5 rounded-full hover:bg-[#b0945a] transition-colors shrink-0 font-bold min-h-[44px] flex items-center">
            {t('contact')}
          </Link>

          <LanguageSwitcher />
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden flex items-center justify-center min-h-[44px] min-w-[44px] ${isScrolled ? 'text-primary' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg py-6 px-6 flex flex-col gap-6 md:hidden text-primary border-t border-gray-100 max-h-[80vh] overflow-y-auto">
          <Link href="/" onClick={() => setIsOpen(false)} className="font-semibold text-lg py-2 block">{t('home')}</Link>
          <Link href="/services" onClick={() => setIsOpen(false)} className="font-semibold text-lg py-2 block">{t('services')}</Link>
          <Link href="/tours" onClick={() => setIsOpen(false)} className="font-semibold text-lg py-2 block">{t('tours')}</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="font-semibold text-lg py-2 block">{t('about')}</Link>
          <Link href="/faq" onClick={() => setIsOpen(false)} className="font-semibold text-lg py-2 block">{t('faq')}</Link>
          
          <div className="w-full h-px bg-gray-100"></div>
          
          <div className="flex items-center gap-4 py-2">
             <LanguageSwitcher />
          </div>

          <Link href="/contact" onClick={() => setIsOpen(false)} className="bg-primary text-white text-center py-4 rounded-xl font-bold text-lg min-h-[44px] mt-4">
            {t('contact')}
          </Link>
        </div>
      )}
    </nav>
  );
}
