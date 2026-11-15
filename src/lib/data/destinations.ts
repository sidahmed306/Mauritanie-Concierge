/**
 * Tourist expeditions (destinations), in commercial priority order.
 * Hero images: photos supplied by the company. Gallery also uses credited Wikimedia Commons photos.
 * Original illustrated posters are kept in /design/posters and as poster.jpg in each destination folder.
 * Photos: real images of each place from Wikimedia Commons, stored locally in /public/images/destinations
 * (resized/compressed) and credited as their licenses require; `sourceUrl` links to the original file page.
 * Replace with the company's own trip photos over time (keep `author`/`license` accurate).
 * Text lives in messages under `Destinations.items.<slug>`.
 */
/** `sourceUrl` is set for third-party photos (license page); omitted for the company's own illustrations. */
export type Photo = { src: string; alt: string; author: string; license: string; sourceUrl?: string };

export type Destination = {
  slug: string;
  hero: Photo;
  gallery: Photo[];
};

export const destinationsData: Destination[] = [
  {
    slug: 'adrar',
    hero: { src: "/images/destinations/adrar/chinguetti-minaret.jpg", alt: "The minaret of the Chinguetti mosque at sunset", author: "Mauritania Concierge", license: "" },
    gallery: [
      { src: "/images/destinations/adrar/old-city-aerial.jpg", alt: "Aerial view of the ancient stone city", author: "Mauritania Concierge", license: "" },
      { src: "/images/destinations/adrar/old-city-alley.jpg", alt: "A man in a blue boubou in the stone alleys of Chinguetti", author: "Michal Huniewicz", license: "" },
      { src: "/images/destinations/adrar/decorated-door.jpg", alt: "Decorated doorway of a traditional house", author: "Mauritania Concierge", license: "" },
      { src: "/images/destinations/adrar/hero.jpg", alt: "Camel caravan crossing the Amatlich dunes, Adrar", author: "Valerian Guillot from Cambridge, United Kingdom", license: "Public domain", sourceUrl: "https://commons.wikimedia.org/wiki/File:Camel_caravan_in_the_Amatlich_erg,_Mauritania_(49211220036).jpg" },
      { src: "/images/destinations/adrar/03.jpg", alt: "Ancient Quran manuscript in a Chinguetti library", author: "Dr. Ondřej Havelka (cestovatel)", license: "CC BY-SA 4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Quran_in_Chinguetti.jpg" },
      { src: "/images/destinations/adrar/04.jpg", alt: "Ruins of the ancient city of Ouadane", author: "Jah Abdul", license: "CC BY-SA 4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:L%27ancienne_ville_de_Ouadane.jpg" },
      { src: "/images/destinations/adrar/05.jpg", alt: "Palm grove of the Terjit oasis", author: "Jah Abdul", license: "CC BY-SA 4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Terjite.jpg" },
      { src: "/images/destinations/adrar/08.jpg", alt: "The mosque of Tichitt", author: "Wilson McMakin", license: "CC BY-SA 4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:The_Mosque_of_Tichitt.jpg" },
    ]
  },
  {
    slug: 'richat-structure',
    hero: { src: "/images/destinations/richat-structure/eye-from-space.jpg", alt: "The Richat Structure, the Eye of the Sahara, seen from space", author: "NASA", license: "" },
    gallery: [
      { src: "/images/destinations/richat-structure/hero.jpg", alt: "The Richat Structure seen from the International Space Station", author: "NASA", license: "Public domain", sourceUrl: "https://commons.wikimedia.org/wiki/File:Richat_Structure_ISS030-E-12516.jpg" },
      { src: "/images/destinations/richat-structure/01.jpg", alt: "Aerial view of the Richat Structure rings", author: "DHQ", license: "CC BY-SA 4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Eye_of_Africap.jpg" },
      { src: "/images/destinations/richat-structure/03.jpg", alt: "Inside the central zone of the Guelb er Richat", author: "Michel Jebrak", license: "CC BY-SA 4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:GUELB_RICHAT_Ombilic_(central_zone).jpg" },
      { src: "/images/destinations/richat-structure/04.jpg", alt: "The Richat Structure in the Sahara from orbit", author: "NASA", license: "Public domain", sourceUrl: "https://commons.wikimedia.org/wiki/File:ISS-42_Richat_Structure,_Eye_of_the_Sahara.jpg" },
    ]
  },
  {
    slug: 'banc-d-arguin',
    hero: { src: "/images/destinations/banc-d-arguin/bird-flocks.jpg", alt: "Flocks of migratory birds, spoonbills and pelicans on the Banc d'Arguin shore", author: "Mauritania Concierge", license: "" },
    gallery: [
      { src: "/images/destinations/banc-d-arguin/flamingos-aerial.jpg", alt: "Flamingos in flight over the shallows", author: "Mauritania Concierge", license: "" },
      { src: "/images/destinations/banc-d-arguin/hero.jpg", alt: "Imraguen sailing boats in the Banc d'Arguin National Park", author: "Kokopelado", license: "CC BY-SA 3.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:PNBA_43.JPG" },
      { src: "/images/destinations/banc-d-arguin/02.jpg", alt: "Tidra Island and the Banc d'Arguin seen from space", author: "Earth Science and Remote Sensing Unit, NASA Johnson Space Center", license: "Public domain", sourceUrl: "https://commons.wikimedia.org/wiki/File:ISS062-E-82362_-_View_of_Mauritania_-_Tidra_Island_-_Banc_d%27Arguin_(cropped).jpg" },
    ]
  },
  {
    slug: 'nouakchott-nouadhibou',
    hero: { src: "/images/destinations/nouakchott-nouadhibou/fishermen-sunset.jpg", alt: "Fishermen hauling a pirogue ashore at sunset in Nouakchott", author: "Michal Huniewicz", license: "" },
    gallery: [
      { src: "/images/destinations/nouakchott-nouadhibou/tea-family.jpg", alt: "A family sharing tea in front of a traditional tent", author: "Mauritania Concierge", license: "" },
      { src: "/images/destinations/nouakchott-nouadhibou/painted-pirogues.jpg", alt: "Painted pirogues on Nouakchott beach", author: "Mauritania Concierge", license: "" },
      { src: "/images/destinations/nouakchott-nouadhibou/tea-pouring.jpg", alt: "Mauritanian tea being poured, with the Adrar mesas behind", author: "Mauritania Concierge", license: "" },
      { src: "/images/destinations/nouakchott-nouadhibou/hero.jpg", alt: "Painted fishing pirogue on Nouakchott beach", author: "IssamBarhoumi", license: "CC BY-SA 4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Traditional_pirogue_in_Nouakchott.jpg" },
      { src: "/images/destinations/nouakchott-nouadhibou/02.jpg", alt: "Women at the Nouakchott fish market", author: "Uzabiaga", license: "CC BY-SA 4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Fish_market_in_Nouakchott_-_Mauritania.jpg" },
      { src: "/images/destinations/nouakchott-nouadhibou/05.jpg", alt: "The iron ore train in Nouadhibou", author: "Radosław Botev", license: "Attribution", sourceUrl: "https://commons.wikimedia.org/wiki/File:Nouadhibou_train.jpg" },
    ]
  },
  {
    slug: 'diawling-senegal-river',
    hero: { src: "/images/destinations/diawling-senegal-river/river-aerial.jpg", alt: "Aerial view of the Senegal River winding between farmland and savanna", author: "Mauritania Concierge", license: "" },
    gallery: [
      { src: "/images/destinations/diawling-senegal-river/hero.jpg", alt: "Pirogue on the Senegal River at Bababé", author: "Jacques Taberlet", license: "CC BY 3.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Babab%C3%A9.jpg" },
      { src: "/images/destinations/diawling-senegal-river/01.jpg", alt: "Wetlands of Diawling National Park from above", author: "En haut", license: "CC BY-SA 4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Bell_Sud-Ouest_PND.jpg" },
      { src: "/images/destinations/diawling-senegal-river/02.jpg", alt: "Fisherman mending nets at the Diawling basins", author: "PND", license: "CC BY-SA 4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:P%C3%AAcheur_Taghr%C3%A9dient.jpg" },
      { src: "/images/destinations/diawling-senegal-river/03.jpg", alt: "River port of Kaédi on the Senegal River", author: "Bertramz", license: "CC BY-SA 3.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Kaedi,SenegalRiver1.jpg" },
      { src: "/images/destinations/diawling-senegal-river/05.jpg", alt: "Sailing pirogue on the Senegal River", author: "Remi Jouan", license: "CC BY 3.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Fleuve_S%C3%A9n%C3%A9gal_-_Pirogue_(1).JPG" },
    ]
  },
];

export const getDestination = (slug: string) => destinationsData.find((d) => d.slug === slug);
