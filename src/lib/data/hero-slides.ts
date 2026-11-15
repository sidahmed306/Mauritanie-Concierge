import type { Photo } from './destinations';

/**
 * Homepage background slideshow: real photos of travelers and business visitors, to build credibility.
 * Captions are translated in messages under `Hero.slides`, in the same order. Photos not taken in
 * Mauritania are captioned with the service they illustrate, never with a Mauritanian place name.
 */
export const heroSlides: Photo[] = [
  { src: '/images/hero/arrival.jpg', alt: 'An airliner landing at dusk', author: 'Unsplash', license: '' },
  { src: '/images/destinations/adrar/chinguetti-minaret.jpg', alt: 'The minaret of the Chinguetti mosque at sunset', author: 'Mauritania Concierge', license: '' },
  { src: '/images/hero/executive.jpg', alt: 'A business executive in a suit', author: 'Unsplash', license: '' },
  { src: '/images/hero/caravan.jpg', alt: 'A camel caravan crossing the dunes', author: 'Unsplash', license: '' },
  { src: '/images/hero/tourist-terjit.jpg', alt: 'A traveler in the palm grove of the Terjit oasis', author: 'Ammar Hassan', license: 'CC BY 2.0', sourceUrl: "https://commons.wikimedia.org/wiki/File:Don't_Fall_In_(15143778006).jpg" },
  { src: '/images/hero/handshake.jpg', alt: 'Business partners shaking hands', author: 'Unsplash', license: '' },
  { src: '/images/hero/traveler-dunes.jpg', alt: 'A traveler walking through the dunes of Mauritania', author: 'LBM1948', license: 'CC BY-SA 4.0', sourceUrl: 'https://commons.wikimedia.org/wiki/File:1997-03_Mauritania_29.jpg' }
];
