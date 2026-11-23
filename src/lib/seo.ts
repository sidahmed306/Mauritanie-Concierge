/**
 * What Google shows for the company, per language.
 * Message: three equally active service lines (tourist expeditions, business delegations, intercity transport)
 * + anything else on request.
 */
/** Canonical host: the site is served on www (the bare domain redirects to it). */
export const SITE_URL = 'https://www.mauritanieconcierge.com';

export const seo: Record<string, { title: string; description: string; ogDescription: string }> = {
  en: {
    title: 'Mauritania Concierge | Nouakchott Airport Transfer, Tourism & Intercity Transport',
    description:
      'Nouakchott airport transfer (NKC), private driver, tourism and desert expeditions (Adrar, Chinguetti, iron ore train), business delegations and intercity transport across Mauritania. Book on WhatsApp.',
    ogDescription:
      'Three active service lines, the same dedication: tourist expeditions, business delegations and intercity transport in Mauritania. Anything else on request.'
  },
  fr: {
    title: 'Mauritania Concierge | Transfert aéroport Nouakchott, tourisme & transport',
    description:
      'Transfert aéroport de Nouakchott (NKC), chauffeur privé, tourisme et circuits dans le désert (Adrar, Chinguetti, train du minerai), délégations d’affaires et transport entre toutes les villes de Mauritanie.',
    ogDescription:
      'Trois lignes de services actives, le même dévouement : expéditions touristiques, délégations d’affaires et transport interurbain en Mauritanie. Tout le reste sur demande.'
  },
  ar: {
    title: 'كونسيرج موريتانيا | النقل من مطار نواكشوط، السياحة والنقل بين المدن',
    description:
      'النقل من وإلى مطار نواكشوط، سائق خاص، سياحة ورحلات في الصحراء (آدرار، شنقيط، قطار المعادن)، وفود الأعمال والنقل بين جميع مدن موريتانيا.',
    ogDescription:
      'ثلاثة خطوط خدمات نشطة بنفس التفاني: رحلات سياحية، وفود أعمال ونقل بين المدن في موريتانيا. وكل ما عدا ذلك حسب الطلب.'
  }
};

export const seoKeywords = [
  'Mauritania Concierge',
  'Nouakchott airport transfer', 'airport transport Nouakchott', 'NKC airport taxi', 'transfert aéroport Nouakchott',
  'transport aéroport Nouakchott', 'tourism Mauritania', 'tourisme Mauritanie', 'Mauritania travel agency',
  'tourist expeditions Mauritania', 'expéditions Mauritanie', 'circuits désert Mauritanie', 'Adrar Chinguetti tour',
  'iron ore train Mauritania', 'train du minerai Mauritanie', 'Richat Structure tour', "Banc d'Arguin",
  'business delegations Mauritania', 'délégations d’affaires Nouakchott', 'VIP airport reception Nouakchott',
  'interpreter Nouakchott', 'intercity transport Mauritania', 'transport interurbain Mauritanie',
  'Nouakchott Nouadhibou transport', 'car rental with driver Mauritania', 'location voiture avec chauffeur Nouakchott',
  'private driver Nouakchott', 'concierge Mauritanie'
];

export const seoFor = (locale: string) => seo[locale] ?? seo.en;

/** Per-page titles/descriptions (services, destinations), same message in every language. */
export const pageSeo: Record<'services' | 'destinations', Record<string, { title: string; description: string }>> = {
  services: {
    en: { title: 'Services | Mauritania Concierge – Business Delegations, Tourist Services & Intercity Transport', description: 'Three active service lines: business delegations in Nouakchott and nationwide, tourist services and expeditions, intercity transport between all cities of Mauritania. Anything else on request.' },
    fr: { title: 'Services | Mauritania Concierge – Délégations d\u2019affaires, services touristiques & transport interurbain', description: 'Trois lignes de services actives : délégations d\u2019affaires à Nouakchott et dans tout le pays, services et expéditions touristiques, transport entre toutes les villes de Mauritanie. Tout le reste sur demande.' },
    ar: { title: 'الخدمات | كونسيرج موريتانيا – وفود الأعمال، الخدمات السياحية والنقل بين المدن', description: 'ثلاثة خطوط خدمات نشطة: وفود الأعمال في نواكشوط وفي جميع أنحاء البلاد، الخدمات والرحلات السياحية، والنقل بين جميع مدن موريتانيا. وكل ما عدا ذلك حسب الطلب.' }
  },
  destinations: {
    en: { title: 'Tourist Expeditions in Mauritania | Mauritania Concierge', description: 'Six expeditions with Mauritania Concierge: the Adrar and its ancient cities, the iron ore train, the Richat Structure, the Banc d\u2019Arguin, Nouakchott & Nouadhibou, Diawling and the Senegal River.' },
    fr: { title: 'Expéditions touristiques en Mauritanie | Mauritania Concierge', description: 'Six expéditions avec Mauritania Concierge : l\u2019Adrar et ses cités anciennes, le train du minerai, la structure de Richat, le Banc d\u2019Arguin, Nouakchott & Nouadhibou, le Diawling et le fleuve Sénégal.' },
    ar: { title: 'رحلات سياحية في موريتانيا | كونسيرج موريتانيا', description: 'ست رحلات مع كونسيرج موريتانيا: آدرار ومدنه القديمة، قطار المعادن، بنية الريشات، حوض آرغين، نواكشوط ونواذيبو، جاولينغ ونهر السنغال.' }
  }
};

const LOCALES = ['en', 'fr', 'ar'] as const;

/**
 * Canonical + hreflang for a page (`path` without the locale, e.g. '' or '/services/airport-pickup').
 * Every page needs its own canonical, otherwise Google may treat pages as duplicates.
 * x-default points to the English page (a 200), never to "/" which only redirects.
 */
export function alternatesFor(locale: string, path = '') {
  const languages: Record<string, string> = {};
  for (const l of LOCALES) languages[l] = `${SITE_URL}/${l}${path}`;
  languages['x-default'] = `${SITE_URL}/en${path}`;
  return { canonical: `${SITE_URL}/${locale}${path}`, languages };
}

/** Hand-written titles for the pages people search for most (airport transfer, tourism). */
export const serviceSeo: Record<string, Record<string, { title: string; description: string }>> = {
  'airport-pickup': {
    en: { title: 'Nouakchott Airport Transfer (NKC) | Mauritania Concierge', description: 'Airport transfer at Nouakchott–Oumtounsy International Airport (NKC): meet & greet in arrivals, private car to your hotel, 24/7. Book in minutes on WhatsApp.' },
    fr: { title: 'Transfert aéroport Nouakchott (NKC) | Mauritania Concierge', description: 'Transport depuis et vers l’aéroport international de Nouakchott-Oumtounsy (NKC) : accueil à l’arrivée, voiture privée jusqu’à votre hôtel, 24h/24. Réservation rapide sur WhatsApp.' },
    ar: { title: 'النقل من مطار نواكشوط | كونسيرج موريتانيا', description: 'النقل من وإلى مطار نواكشوط أم التونسي الدولي: استقبال في صالة الوصول وسيارة خاصة حتى فندقك، على مدار الساعة. احجز بسرعة عبر واتساب.' }
  },
  'corporate-airport-reception': {
    en: { title: 'VIP Airport Reception Nouakchott (NKC) | Mauritania Concierge', description: 'VIP meet & greet for executives and delegations at Nouakchott airport (NKC): arrival assistance, fast track support and private transfer.' },
    fr: { title: 'Accueil VIP aéroport de Nouakchott (NKC) | Mauritania Concierge', description: 'Accueil VIP des dirigeants et délégations à l’aéroport de Nouakchott (NKC) : assistance à l’arrivée et transfert privé.' },
    ar: { title: 'استقبال كبار الشخصيات في مطار نواكشوط | كونسيرج موريتانيا', description: 'استقبال كبار الشخصيات والوفود في مطار نواكشوط مع المساعدة عند الوصول والنقل الخاص.' }
  }
};
