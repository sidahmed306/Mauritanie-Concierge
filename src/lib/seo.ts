/**
 * What Google shows for the company, per language.
 * Message: three equally active service lines (tourist expeditions, business delegations, intercity transport)
 * + anything else on request.
 */
/** Canonical host: the site is served on www (the bare domain redirects to it). */
export const SITE_URL = 'https://www.mauritanieconcierge.com';

export const seo: Record<string, { title: string; description: string; ogDescription: string }> = {
  en: {
    title: 'Mauritania Concierge | Tourist Expeditions, Business Delegations & Intercity Transport',
    description:
      'Mauritania Concierge: tourist expeditions, business delegations in Nouakchott and nationwide, and intercity transport between all cities of Mauritania. Anything else on request: rentals, interpreters, guides.',
    ogDescription:
      'Three active service lines, the same dedication: tourist expeditions, business delegations and intercity transport in Mauritania. Anything else on request.'
  },
  fr: {
    title: 'Mauritania Concierge | Expéditions touristiques, délégations d’affaires & transport interurbain',
    description:
      'Mauritania Concierge : expéditions touristiques, délégations d’affaires à Nouakchott et dans tout le pays, transport entre toutes les villes de Mauritanie. Tout le reste sur demande : locations, interprètes, guides.',
    ogDescription:
      'Trois lignes de services actives, le même dévouement : expéditions touristiques, délégations d’affaires et transport interurbain en Mauritanie. Tout le reste sur demande.'
  },
  ar: {
    title: 'كونسيرج موريتانيا | رحلات سياحية، وفود الأعمال والنقل بين المدن',
    description:
      'كونسيرج موريتانيا: رحلات سياحية، ووفود أعمال في نواكشوط وفي جميع أنحاء البلاد، ونقل بين جميع مدن موريتانيا. وكل ما عدا ذلك حسب الطلب: تأجير، مترجمون، مرشدون.',
    ogDescription:
      'ثلاثة خطوط خدمات نشطة بنفس التفاني: رحلات سياحية، وفود أعمال ونقل بين المدن في موريتانيا. وكل ما عدا ذلك حسب الطلب.'
  }
};

export const seoKeywords = [
  'Mauritania Concierge',
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
