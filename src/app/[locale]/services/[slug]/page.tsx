import { notFound } from 'next/navigation';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { servicesData } from '@/lib/data/services';
import Image from 'next/image';
import { CheckCircle2, MessageCircle, ArrowLeft } from 'lucide-react';
import { Link } from '@/i18n/routing';

export function generateStaticParams() {
  const params: { locale: string, slug: string }[] = [];
  const locales = ['en', 'fr', 'ar'];
  locales.forEach(locale => {
    servicesData.forEach(service => {
      params.push({ locale, slug: service.slug });
    });
  });
  return params;
}

export default async function ServiceDetailsPage({
  params
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const service = servicesData.find((s) => s.slug === slug);
  if (!service) {
    notFound();
  }

  const t = await getTranslations('ServiceDetail');
  const tService = await getTranslations(`Services.${slug}`);
  
  const title = tService('title');
  const fullDesc = tService('fullDescription');
  const benefits: string[] = tService.raw('benefits');

  const phoneNumber = "22238075450"; 
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(`Hello, I would like to book the ${title} service.`)}`;

  return (
    <main className="min-h-screen pb-24 bg-white">
      {/* Hero for the service */}
      <div className="relative h-[50vh] w-full">
        <Image src={service.imageSrc} alt={`${title} in Mauritania`} fill sizes="100vw" priority className="object-cover brightness-[0.4]" />
        <div className="absolute inset-0 bg-primary/40"></div>
        <div className="absolute inset-0 flex flex-col justify-center container mx-auto px-6 md:px-12 pt-20">
          <Link href="/services" className="text-white/80 hover:text-white flex items-center gap-2 font-medium mb-6 transition-colors w-fit">
            <ArrowLeft size={20} /> {t('backToServices')}
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">{title}</h1>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 mt-16 max-w-5xl">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold text-primary mb-6">{t('overviewTitle')}</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              {fullDesc}
            </p>

            <h3 className="text-2xl font-bold text-primary mb-6">{t('benefitsTitle')}</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-secondary shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:w-1/3">
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] sticky top-32">
               <h3 className="text-2xl font-bold text-primary mb-2">{t('bookTitle')}</h3>
               <p className="text-gray-600 mb-8">{t('bookSubtitle')}</p>
               
               <a 
                 href={whatsappUrl} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="w-full bg-[#25D366] text-white py-4 px-6 rounded-xl font-bold text-lg hover:bg-[#1DA851] transition-colors flex items-center justify-center gap-3 shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)]"
               >
                 <MessageCircle size={24} />
                 {t('bookBtn')}
               </a>

               <p className="text-xs text-gray-400 mt-4 text-center">{t('replyTime')}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
