import type { Metadata } from 'next';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import {Inter} from 'next/font/google';
import '../globals.css';
import {Navbar} from '@/components/navbar';
import {Footer} from '@/components/footer';
import {WhatsAppButton} from '@/components/whatsapp-button';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  
  const titles: Record<string, string> = {
    en: 'Mauritania Concierge | Premium VIP Assistance & Private Drivers',
    fr: 'Mauritania Concierge | Assistance VIP, Chauffeurs Privés',
    ar: 'كونسيرج موريتانيا | مساعدة كبار الشخصيات والسائقين الخاصين'
  };
  
  const descriptions: Record<string, string> = {
    en: 'Premium concierge service in Mauritania. We provide VIP airport pickup, private drivers, hotel assistance, and business delegation support in Nouakchott.',
    fr: 'Le service de conciergerie premium en Mauritanie. Accueil aéroport VIP, chauffeurs privés, assistance hôtelière et pour les délégations d\'affaires à Nouakchott.',
    ar: 'خدمات الكونسيرج المميزة في موريتانيا. نوفر استقبال المطار لكبار الشخصيات، والسائقين الخاصين، والمساعدة الفندقية ودعم وفود الأعمال في نواكشوط.'
  };

  return {
    title: titles[locale] || titles['en'],
    description: descriptions[locale] || descriptions['en'],
    keywords: ['Mauritania airport pickup', 'Mauritania concierge', 'Private driver Mauritania', 'Nouakchott airport transfer', 'Mauritania VIP services', 'Mauritania travel assistance'],
    openGraph: {
      type: 'website',
      locale,
      url: 'https://mauritaniaconcierge.com',
      siteName: 'Mauritania Concierge',
    }
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  // Explicitly assign text direction for RTL languages (Arabic)
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir}>
      <body className={`${inter.className} min-h-screen flex flex-col bg-slate-50 text-slate-900`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Navbar />
          <div className="flex-grow pt-20">
            {children}
          </div>
          <Footer />
          <WhatsAppButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
