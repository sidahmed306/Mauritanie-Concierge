import { useTranslations } from 'next-intl';
import {
  BedDouble, Building2, CalendarDays, CarFront, Clock, Compass, Languages, MapPin, MessageCircle,
  PlaneLanding, Presentation, Route, Settings2, Smartphone, Tent, Users
} from 'lucide-react';
import Image from 'next/image';
import { whatsappLink } from '@/lib/data/services';
import { vehicleExamples } from '@/lib/data/vehicles';
import { PhotoCredits } from '@/components/destinations/photo-credits';

const icons = [Users, MapPin, CalendarDays, Settings2];
const requestIcons = [PlaneLanding, CarFront, Route, Languages, BedDouble, Smartphone, Presentation, Tent, Compass, Building2, Users, Clock];

/** "Any vehicle, on request": we don't present a fleet, the client tells us what they need. */
export function OnRequestSection() {
  const t = useTranslations('Fleet');
  const steps: { title: string; desc: string }[] = t.raw('steps');
  const requests: string[] = t.raw('requests');

  return (
    <section id="on-request" className="py-24 bg-gray-50 scroll-mt-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">{t('tag')}</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-primary mb-6">{t('title')}</h3>
            <p className="text-gray-600 text-lg mb-6">{t('subtitle')}</p>
            <p className="text-primary font-medium text-lg border-s-4 border-secondary ps-5 mb-10">{t('examples')}</p>
            <a
              href={whatsappLink(t('whatsappMessage'))}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-xl hover:bg-[#1DA851] transition-colors font-bold text-lg shadow-lg min-h-[44px]"
            >
              <MessageCircle className="w-6 h-6" />
              {t('onRequestCta')}
            </a>
          </div>

          <div className="rounded-3xl bg-primary p-8 md:p-10">
            <p className="text-white font-bold text-xl mb-8">{t('stepsTitle')}</p>
            <ul className="space-y-7">
              {steps.map((step, i) => {
                const Icon = icons[i % icons.length];
                return (
                  <li key={step.title} className="flex gap-5">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-secondary/15 text-secondary shrink-0">
                      <Icon size={24} />
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg">{step.title}</p>
                      <p className="text-white/70">{step.desc}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* a few common vehicle types, as examples only */}
        <div className="mt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <h4 className="text-2xl font-bold text-primary">{t('examplesTitle')}</h4>
            <p className="text-gray-500 text-sm max-w-xl">{t('examplesNote')}</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {vehicleExamples.map(({ id, photo }) => (
              <figure key={id} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                <div className="relative aspect-[4/3] bg-gray-100">
                  <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
                </div>
                <figcaption className="p-4">
                  <p className="font-bold text-primary">{t(`vehicles.${id}.name`)}</p>
                  <p className="text-gray-500 text-sm">{t(`vehicles.${id}.use`)}</p>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-6">
            <PhotoCredits title={t('creditsTitle')} photos={vehicleExamples.map((v) => v.photo)} />
          </div>
        </div>

        {/* beyond transport: anything the client needs */}
        <div className="mt-20 rounded-3xl bg-primary px-6 py-12 md:p-14">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <p className="text-secondary font-bold tracking-widest uppercase text-sm mb-3">{t('requestsTag')}</p>
            <h4 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('requestsTitle')}</h4>
            <p className="text-white/70 text-lg">{t('requestsSubtitle')}</p>
          </div>
          <ul className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto mb-10">
            {requests.map((r, i) => {
              const Icon = requestIcons[i % requestIcons.length];
              return (
                <li key={r} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-white/90 text-sm md:text-base">
                  <Icon size={18} className="text-secondary shrink-0" /> {r}
                </li>
              );
            })}
            <li className="inline-flex items-center gap-2 rounded-full border border-secondary/60 px-4 py-2.5 text-secondary text-sm md:text-base font-semibold">
              {t('requestsMore')}
            </li>
          </ul>
          <div className="text-center">
            <a
              href={whatsappLink(t('requestsWhatsapp'))}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-secondary text-primary px-8 py-4 rounded-xl hover:bg-[#d6ba80] transition-colors font-bold text-lg min-h-[44px]"
            >
              <MessageCircle className="w-6 h-6" /> {t('requestsCta')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
