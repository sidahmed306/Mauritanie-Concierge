'use client';
import { useState } from 'react';
import Image from 'next/image';
import { MessageCircle, MapPin, Calendar, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function TourCard({ tourId, imageSrc, imageAlt, mostPopular, locale }: any) {
  const t = useTranslations('Tours');
  const tPackage = useTranslations(`Tours.packages.${tourId}`);
  const [isExpanded, setIsExpanded] = useState(false);

  const title = tPackage('title');
  const duration = tPackage('duration');
  const route = tPackage('route');
  const price = tPackage('price');
  
  const highlights: string[] = tPackage.raw('highlights');
  
  const phoneNumber = "22238075450"; 
  const message = t('whatsAppPrefix', { tour: title, duration: duration });
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col h-full relative group">
       {mostPopular && (
          <div className="absolute top-6 right-6 bg-[#C8A96B] text-white px-4 py-1.5 rounded-full font-bold text-xs tracking-wider z-20 shadow-lg">
             {t('mostPopular')}
          </div>
       )}

       {/* Image Section */}
       <div className="relative h-[250px] shrink-0 w-full overflow-hidden">
         <Image src={imageSrc} alt={imageAlt} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
       </div>

       {/* Details Section */}
       <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
          <div>
            <div className="flex flex-col gap-4 mb-4">
              <div>
                <h3 className="text-2xl font-bold text-[#0B1E2D] mb-3">{title}</h3>
                <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-gray-500 mb-6">
                  <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100"><Calendar size={16} className="text-[#C8A96B]"/> {duration}</div>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-center w-full">
                 <p className="text-sm text-gray-500 font-semibold mb-1">{t('priceFrom', { price: price }).replace(price, '').trim()}</p> 
                 <p className="text-2xl font-bold text-[#C8A96B]">{price}</p>
                 <p className="text-xs text-gray-400 mt-1">per person</p>
              </div>
            </div>

            <div className="mb-6">
               <div className="flex items-center gap-2 text-gray-400 text-xs mb-4 font-semibold uppercase tracking-wider">
                  <MapPin size={14} className="shrink-0"/> <span className="truncate">{route}</span>
               </div>
               
               <ul className="space-y-3 mt-6">
                  {highlights.slice(0, 4).map((hl: string, i: number) => (
                    <li key={i} className="flex gap-3 text-gray-600 text-sm">
                      <CheckCircle2 size={18} className="text-[#C8A96B] shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </li>
                  ))}
               </ul>
            </div>

            {/* Accordion / Full Itinerary Toggle */}
            {highlights.length > 4 && (
               <div className="mt-4">
                 <button onClick={() => setIsExpanded(!isExpanded)} className="flex items-center gap-2 text-[#C8A96B] text-sm font-bold hover:text-[#b0945a] transition-colors min-h-[44px]">
                    {isExpanded ? 'Hide Itinerary' : t('viewDetails')} {isExpanded ? <ChevronUp size={18}/> : <ChevronDown size={18}/>}
                 </button>
                 
                 {isExpanded && (
                   <div className="mt-4 p-5 bg-gray-50 rounded-2xl border border-gray-100">
                     <h4 className="font-bold text-[#0B1E2D] mb-4 text-sm">Detailed Itinerary</h4>
                     <ul className="space-y-4">
                       {highlights.map((hl: string, i: number) => (
                          <li key={i} className="flex gap-4">
                             <div className="w-2 h-2 rounded-full bg-[#C8A96B] mt-1.5 shrink-0"></div>
                             <span className="text-gray-700 text-xs leading-relaxed">{hl}</span>
                          </li>
                       ))}
                     </ul>
                   </div>
                 )}
               </div>
            )}
          </div>

          <div className="mt-8 pt-8 border-t border-gray-100 w-full mt-auto">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full bg-[#25D366] text-white py-4 rounded-xl font-bold flex justify-center items-center gap-2 hover:bg-[#1DA851] transition-colors shadow-lg shadow-[#25D366]/20 min-h-[44px]">
               <MessageCircle size={22}/> {t('bookWhatsApp')}
            </a>
          </div>
       </div>
    </div>
  );
}
