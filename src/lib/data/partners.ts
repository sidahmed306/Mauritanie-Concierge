/**
 * Partners and reference clients shown in the "Trusted By" section.
 * Names are proper nouns and are not translated.
 * `logoSrc` is optional: add the approved logo file under /public/images/partners/ and set the path here.
 */
export type Partner = { name: string; kind: 'client' | 'partner'; logoSrc?: string };

export const partnersData: Partner[] = [
  { name: 'Deloitte US', kind: 'client' },
  { name: 'National Association of Tourism in Africa', kind: 'partner' },
  { name: 'Expat Ride', kind: 'partner' },
  { name: 'Need Guide', kind: 'partner' }
];
