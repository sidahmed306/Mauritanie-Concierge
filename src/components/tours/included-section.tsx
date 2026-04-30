import { useTranslations } from 'next-intl';
import { Check, X } from 'lucide-react';

export function IncludedSection() {
  const t = useTranslations('Tours');
  const included: string[] = t.raw('included');
  const notIncluded: string[] = t.raw('notIncluded');

  return (
    <div className="py-20 mt-12 mb-12 border-y border-gray-100">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold text-[#0B1E2D] mb-8 flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600"><Check size={20}/></div>
               {t('includedTitle')}
            </h3>
            <ul className="space-y-4">
              {included.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                  <Check size={18} className="text-green-500 shrink-0"/> {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#0B1E2D] mb-8 flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-600"><X size={20}/></div>
               {t('notIncludedTitle')}
            </h3>
            <ul className="space-y-4">
              {notIncluded.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-600">
                  <X size={18} className="text-red-400 shrink-0"/> {item}
                </li>
              ))}
            </ul>
          </div>
       </div>
    </div>
  );
}
