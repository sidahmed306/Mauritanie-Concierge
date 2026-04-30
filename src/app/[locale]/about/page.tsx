import { setRequestLocale, getTranslations } from 'next-intl/server';
import { ShieldCheck, Award, HeartHandshake } from 'lucide-react';
import Image from 'next/image';

export default async function AboutPage({ params }: { params: Promise<{locale: string}> }) {
  const {locale} = await params;
  setRequestLocale(locale);
  
  const t = await getTranslations('About');

  return (
    <main className="min-h-screen py-24 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
          <div className="lg:w-1/2">
            <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">{t('tag')}</h2>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">{t('title')}</h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {t('p1')}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
               {t('p2')}
            </p>
          </div>
          <div className="lg:w-1/2 relative w-full">
            <div className="relative h-96 w-full rounded-3xl overflow-hidden shadow-2xl">
               <Image src="https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&w=1200&q=80" alt="Mauritania Concierge team" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
               <div className="absolute inset-0 bg-primary/20"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 border-t border-gray-100 pt-16">
          <div className="text-center flex flex-col items-center">
            <div className="bg-secondary/10 p-5 rounded-full text-secondary mb-6"><ShieldCheck size={36} /></div>
            <h3 className="text-2xl font-bold text-primary mb-3">{t('f1Title')}</h3>
            <p className="text-gray-600 leading-relaxed">{t('f1Desc')}</p>
          </div>
          <div className="text-center flex flex-col items-center">
            <div className="bg-secondary/10 p-5 rounded-full text-secondary mb-6"><Award size={36} /></div>
            <h3 className="text-2xl font-bold text-primary mb-3">{t('f2Title')}</h3>
            <p className="text-gray-600 leading-relaxed">{t('f2Desc')}</p>
          </div>
          <div className="text-center flex flex-col items-center">
            <div className="bg-secondary/10 p-5 rounded-full text-secondary mb-6"><HeartHandshake size={36} /></div>
            <h3 className="text-2xl font-bold text-primary mb-3">{t('f3Title')}</h3>
            <p className="text-gray-600 leading-relaxed">{t('f3Desc')}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
