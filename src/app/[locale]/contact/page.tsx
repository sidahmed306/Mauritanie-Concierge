import { ContactForm } from '@/components/contact-form';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default async function ContactPage({ params }: { params: Promise<{locale: string}> }) {
  const {locale} = await params;
  setRequestLocale(locale);

  const t = await getTranslations('Contact');

  return (
    <main className="min-h-screen py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">{t('tag')}</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">{t('pageTitle')}</h1>
          <p className="text-gray-600 text-lg">
             {t('pageSubtitle')}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3 space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
               <h3 className="text-xl font-bold text-primary mb-6">{t('phoneTitle')}</h3>
               <div className="flex items-center gap-4 text-gray-600 mb-4">
                  <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-full flex items-center justify-center shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">+222 38 07 54 50</p>
                    <p className="text-sm">WhatsApp Available</p>
                  </div>
               </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
               <h3 className="text-xl font-bold text-primary mb-6">{t('hoursTitle')}</h3>
               <div className="space-y-4 text-gray-600">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-full flex items-center justify-center shrink-0">
                      <Clock size={20} />
                    </div>
                    <div className="w-full">
                      <div className="flex justify-between w-full mb-2 border-b border-gray-100 pb-2">
                        <span className="font-medium text-primary">{t('hours1')}</span>
                        <span>{t('hours1Val')}</span>
                      </div>
                      <div className="flex justify-between w-full mb-2 border-b border-gray-100 pb-2">
                        <span className="font-medium text-primary">{t('hours2')}</span>
                        <span>{t('hours2Val')}</span>
                      </div>
                      <div className="flex justify-between w-full">
                        <span className="font-medium text-primary">{t('hours3')}</span>
                        <span>{t('hours3Val')}</span>
                      </div>
                    </div>
                  </div>
               </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
