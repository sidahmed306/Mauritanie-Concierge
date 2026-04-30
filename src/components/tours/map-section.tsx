import { MapPin } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function MapSection() {
  const t = useTranslations('Tours');
  
  const destinations = [
    { name: "Nouakchott", type: "Capital / Hub", color: "bg-[#0B1E2D]" },
    { name: "Banc d'Arguin", type: "Coast / UNESCO", color: "bg-blue-500" },
    { name: "Atar", type: "Oasis Hub", color: "bg-[#C8A96B]" },
    { name: "Chinguetti", type: "UNESCO / Desert", color: "bg-orange-400" },
    { name: "Terjit", type: "Oasis / Springs", color: "bg-green-500" },
    { name: "Richat Structure", type: "Geological Wonder", color: "bg-red-400" },
    { name: "Ouadane", type: "Ancient City", color: "bg-amber-600" },
    { name: "Tidjikja", type: "Caravan Route", color: "bg-yellow-600" }
  ];

  return (
    <div className="bg-[#0B1E2D] rounded-3xl p-10 md:p-16 my-20 text-white relative overflow-hidden">
       <div className="absolute top-0 right-0 w-96 h-96 bg-[#C8A96B] rounded-full blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/3"></div>
       <div className="relative z-10">
         <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Discover The Territory</h2>
            <p className="text-gray-400">Our tours cover the most profound and historic locations across the Mauritanian Sahara and Coastal ecosystems.</p>
         </div>
         
         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {destinations.map((dest, i) => (
               <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors flex flex-col items-center text-center group cursor-default">
                 <div className={`w-12 h-12 rounded-full ${dest.color} flex items-center justify-center mb-4 text-white shadow-lg`}>
                   <MapPin size={20} />
                 </div>
                 <h4 className="font-bold text-lg mb-1">{dest.name}</h4>
                 <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">{dest.type}</p>
               </div>
            ))}
         </div>
       </div>
    </div>
  );
}
