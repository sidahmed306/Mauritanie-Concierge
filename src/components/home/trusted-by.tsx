import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Globe2 } from 'lucide-react';
import { partnersData, type Partner } from '@/lib/data/partners';

function PartnerTile({ partner }: { partner: Partner }) {
  return (
    <div className="flex items-center justify-center h-24 px-6 rounded-2xl border border-white/10 bg-white/5 hover:border-secondary/50 transition-colors text-center">
      {partner.logoSrc ? (
        <Image
          src={partner.logoSrc}
          alt={partner.name}
          width={160}
          height={56}
          className="max-h-14 w-auto object-contain"
        />
      ) : (
        <span className="text-white font-bold text-lg leading-snug tracking-tight">{partner.name}</span>
      )}
    </div>
  );
}

export function TrustedBy() {
  const t = useTranslations('TrustedBy');
  const regions: string[] = t.raw('regions');

  const clients = partnersData.filter((p) => p.kind === 'client');
  const partners = partnersData.filter((p) => p.kind === 'partner');

  return (
    <section className="py-24 bg-primary">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">{t('tag')}</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">{t('title')}</h3>
          <p className="text-white/70 text-lg">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-1">
            <p className="text-white/50 uppercase tracking-widest text-xs font-bold mb-4">{t('clientsLabel')}</p>
            <div className="grid gap-4">
              {clients.map((p) => <PartnerTile key={p.name} partner={p} />)}
            </div>
          </div>
          <div className="lg:col-span-3">
            <p className="text-white/50 uppercase tracking-widest text-xs font-bold mb-4">{t('partnersLabel')}</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {partners.map((p) => <PartnerTile key={p.name} partner={p} />)}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-3 mt-12">
          <Globe2 className="text-secondary" size={20} />
          {regions.map((region) => (
            <span key={region} className="px-4 py-1.5 rounded-full border border-secondary/40 text-secondary text-sm font-medium">
              {region}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
