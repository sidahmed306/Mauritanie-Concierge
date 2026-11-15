export type ServiceCategory = 'corporate' | 'tourist';

export type Service = {
  slug: string;
  category: ServiceCategory;
  iconName: string;
  imageSrc: string;
};

const unsplash = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=80`;

export const servicesData: Service[] = [
  // ── Corporate & Delegation Services ──────────────────────────────
  {
    slug: 'corporate-airport-reception',
    category: 'corporate',
    iconName: 'PlaneLanding',
    imageSrc: '/images/services/airport-transfer.png'
  },
  {
    slug: 'nouakchott-mobility',
    category: 'corporate',
    iconName: 'CarFront',
    imageSrc: unsplash('1449965408869-eaa3f722e40d')
  },
  {
    slug: 'delegation-logistics',
    category: 'corporate',
    iconName: 'Users',
    imageSrc: '/images/services/translation-service.png'
  },
  {
    slug: 'business-vip',
    category: 'corporate',
    iconName: 'Briefcase',
    imageSrc: unsplash('1450101499163-c8848c66ca85')
  },
  {
    slug: 'business-interpretation',
    category: 'corporate',
    iconName: 'Languages',
    imageSrc: unsplash('1475721027785-f74eccf877e2')
  },
  {
    slug: 'business-accommodation',
    category: 'corporate',
    iconName: 'Building2',
    imageSrc: unsplash('1566665797739-1674de7a421a')
  },
  {
    slug: 'corporate-events',
    category: 'corporate',
    iconName: 'Presentation',
    imageSrc: unsplash('1587825140708-dfaf72ae4b04')
  },

  // ── Tourist Services ─────────────────────────────────────────────
  {
    slug: 'airport-pickup',
    category: 'tourist',
    iconName: 'PlaneTakeoff',
    imageSrc: '/images/services/airport-transfer.png'
  },
  {
    slug: 'interior-transport',
    category: 'tourist',
    iconName: 'Route',
    imageSrc: '/images/destinations/adrar/hero.jpg'
  },
  {
    slug: 'local-guides',
    category: 'tourist',
    iconName: 'Compass',
    imageSrc: '/images/destinations/adrar/old-city-alley.jpg'
  },
  {
    slug: 'private-driver',
    category: 'tourist',
    iconName: 'CarFront',
    imageSrc: unsplash('1600320254374-ce2d293c324e')
  },
  {
    slug: 'hotel-assistance',
    category: 'tourist',
    iconName: 'Building',
    imageSrc: '/images/services/hotel-assistance.png'
  },
  {
    slug: 'translation',
    category: 'tourist',
    iconName: 'Languages',
    imageSrc: '/images/services/translation-service.png'
  }
];

export const corporateServices = servicesData.filter((s) => s.category === 'corporate');
export const touristServices = servicesData.filter((s) => s.category === 'tourist');

/** WhatsApp number used across the site (international format, no +). */
export const WHATSAPP_NUMBER = '22241075450';
export const CONTACT_EMAIL = 'mauritanieconcierge@gmail.com';

export const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
