import type { Photo } from './destinations';

/**
 * A few examples of common vehicle types we arrange on request (not a fleet catalogue).
 * Labels are in messages under `Fleet.vehicles.<id>`. Photos: Wikimedia Commons, credited.
 */
export const vehicleExamples: { id: string; photo: Photo }[] = [
  { id: 'sedan', photo: { src: '/images/vehicles/sedan-camry.jpg', alt: 'Toyota Camry sedan', author: 'Benespit', license: 'CC BY-SA 4.0', sourceUrl: 'https://commons.wikimedia.org/wiki/File:0_Toyota_Camry_70_3.jpg' } },
  { id: 'suv', photo: { src: '/images/vehicles/suv-4x4.jpg', alt: 'Toyota Land Cruiser Prado 4x4', author: 'EurovisionNim', license: 'CC BY-SA 4.0', sourceUrl: 'https://commons.wikimedia.org/wiki/File:2018_Toyota_Land_Cruiser_Prado_(GDJ150R)_GXL_wagon_(2018-08-06)_01.jpg' } },
  { id: 'pickup', photo: { src: '/images/vehicles/pickup-4x4.jpg', alt: 'Toyota Hilux 4x4 pickup', author: 'Vauxford', license: 'CC BY-SA 4.0', sourceUrl: 'https://commons.wikimedia.org/wiki/File:2021_Toyota_Hilux_Invincible_D-4D_4WD_2.4.jpg' } },
  { id: 'minibus', photo: { src: '/images/vehicles/minibus.jpg', alt: 'Toyota Hiace minibus', author: 'TTTNIS', license: 'CC0', sourceUrl: 'https://commons.wikimedia.org/wiki/File:2017-2020_Toyota_Hiace_Super_GL.jpg' } }
];
