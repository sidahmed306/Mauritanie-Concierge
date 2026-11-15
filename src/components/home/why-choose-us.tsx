import { useTranslations } from 'next-intl';
import { Award, CarFront, Clock, Languages, MapPinned, ShieldCheck } from 'lucide-react';

const icons = [Award, CarFront, Clock, Languages, MapPinned, ShieldCheck];

export function WhyChooseUs() {
  const t = useTranslations('WhyChooseUs');
  const items: { title: string; desc: string }[] = t.raw('items');

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">{t('tag')}</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-primary mb-6">{t('title')}</h3>
          <p className="text-gray-600 text-lg">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={item.title} className="rounded-2xl p-8 bg-gray-50 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-secondary/10 text-secondary mb-6">
                  <Icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-primary mb-3">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
