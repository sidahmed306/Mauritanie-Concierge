import { useTranslations } from 'next-intl';
import { Mail, MessageCircle } from 'lucide-react';
import { CONTACT_EMAIL, whatsappLink } from '@/lib/data/services';

export function HowItWorks() {
  const t = useTranslations('HowItWorks');
  const steps: { title: string; desc: string }[] = t.raw('steps');

  return (
    <section className="py-24 bg-[#051017]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">{t('tag')}</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white">{t('title')}</h3>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {steps.map((step, i) => (
            <li key={step.title} className="relative rounded-2xl p-8 border border-white/10 bg-white/5">
              <span className="block text-5xl font-bold text-secondary/80 mb-6">0{i + 1}</span>
              <h4 className="text-xl font-bold text-white mb-3">{step.title}</h4>
              <p className="text-white/70 leading-relaxed">{step.desc}</p>
            </li>
          ))}
        </ol>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={whatsappLink("Hello, I would like a proposal for my trip to Mauritania.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-xl hover:bg-[#1DA851] transition-colors font-bold text-lg min-h-[44px]"
          >
            <MessageCircle className="w-6 h-6" />
            {t('cta')}
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="flex items-center justify-center gap-3 border border-white/20 text-white px-8 py-4 rounded-xl hover:bg-white/10 transition-colors font-bold text-lg min-h-[44px]"
          >
            <Mail className="w-6 h-6" />
            {t('emailCta')}
          </a>
        </div>
      </div>
    </section>
  );
}
