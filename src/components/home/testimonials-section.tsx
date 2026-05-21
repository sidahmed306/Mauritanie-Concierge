'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Shield } from 'lucide-react';
import { useTranslations } from 'next-intl';

const testimonials = [
  {
    name: "Jean-Pierre Laurent",
    country: "France",
    flag: "🇫🇷",
    service: "airport",
    serviceLabel: "Airport Pickup",
    review: "The airport pickup and VIP assistance provided a seamless experience for our entire delegation. Highly professional and deeply trustworthy.",
    rating: 5
  },
  {
    name: "Ahmed Al-Mansoori",
    country: "UAE",
    flag: "🇦🇪",
    service: "driver",
    serviceLabel: "Private Driver",
    review: "Excellent service from start to finish. The private driver was punctual and the translation services made our business meetings highly successful.",
    rating: 5
  },
  {
    name: "Sarah Jenkins",
    country: "United States",
    flag: "🇺🇸",
    service: "hotel",
    serviceLabel: "Hotel Assistance",
    review: "As an investor visiting Mauritania for the first time, Mauritania Concierge made everything incredibly easy and secure. The hotel assistance was top tier.",
    rating: 5
  },
  {
    name: "Carlos Martinez",
    country: "Spain",
    flag: "🇪🇸",
    service: "tour",
    serviceLabel: "Desert Tour",
    review: "The Chinguetti desert tour was absolutely breathtaking. Our guide was knowledgeable and the logistics were perfectly handled. A life-changing experience.",
    rating: 5
  },
  {
    name: "Emma Dubois",
    country: "Belgium",
    flag: "🇧🇪",
    service: "translation",
    serviceLabel: "Translation",
    review: "The translation services during our NGO meetings were invaluable. The team speaks perfect Arabic, French and English. We will definitely use them again.",
    rating: 5
  },
  {
    name: "Michael Thompson",
    country: "United Kingdom",
    flag: "🇬🇧",
    service: "vip",
    serviceLabel: "VIP Delegation",
    review: "Coordinated our entire business delegation visit to Nouakchott. Professional, discreet, and incredibly efficient. Highly recommend for business travelers.",
    rating: 5
  }
];

const filters = [
  { key: "all", label: "All" },
  { key: "airport", label: "Airport" },
  { key: "driver", label: "Driver" },
  { key: "hotel", label: "Hotel" },
  { key: "tour", label: "Tours" },
  { key: "translation", label: "Translation" },
  { key: "vip", label: "VIP" },
];

export function TestimonialsSection() {
  const t = useTranslations('Testimonials');
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(0);

  const filtered = activeFilter === "all"
    ? testimonials
    : testimonials.filter(t => t.service === activeFilter);

  const current = filtered[currentIndex] ?? filtered[0];

  const next = () => setCurrentIndex((prev) => (prev + 1) % filtered.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + filtered.length) % filtered.length);

  const handleFilter = (key: string) => {
    setActiveFilter(key);
    setCurrentIndex(0);
  };

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">{t('tag')}</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-primary mb-6">{t('title')}</h3>
          <p className="text-gray-600 text-lg">{t('subtitle')}</p>
        </div>

        {/* Global Rating Badge */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-4 bg-white border border-yellow-200 rounded-2xl px-6 py-4 shadow-md">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="text-left">
              <p className="font-bold text-primary text-lg leading-none">4.9 / 5</p>
              <p className="text-gray-500 text-sm mt-0.5">Based on 47 reviews</p>
            </div>
            <div className="h-10 w-px bg-gray-200" />
            <div className="flex items-center gap-2 text-green-600">
              <Shield className="h-5 w-5" />
              <span className="font-semibold text-sm">Verified Clients</span>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => handleFilter(f.key)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                activeFilter === f.key
                  ? 'bg-secondary text-white shadow-md'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-secondary hover:text-secondary'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Slider */}
        {filtered.length > 0 && current && (
          <div className="relative w-full max-w-5xl mx-auto px-4 md:px-12 py-8">
            <div className="absolute top-1/2 left-0 -translate-y-1/2 z-10 hidden md:block">
              <button onClick={prev} className="p-3 rounded-full bg-white shadow-md text-primary hover:text-secondary hover:scale-110 transition-all">
                <ChevronLeft className="h-6 w-6" />
              </button>
            </div>
            <div className="absolute top-1/2 right-0 -translate-y-1/2 z-10 hidden md:block">
              <button onClick={next} className="p-3 rounded-full bg-white shadow-md text-primary hover:text-secondary hover:scale-110 transition-all">
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            <div className="overflow-hidden relative bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-8 md:p-14">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeFilter}-${currentIndex}`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Service badge */}
                  <span className="mb-4 inline-block bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    {current.serviceLabel}
                  </span>

                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-6 w-6 ${i < current.rating ? 'fill-secondary text-secondary' : 'fill-gray-200 text-gray-200'}`} />
                    ))}
                  </div>

                  <p className="text-xl md:text-3xl text-gray-700 leading-relaxed font-medium italic mb-10">"{current.review}"</p>

                  <div>
                    <h4 className="text-xl font-bold text-primary">{current.name}</h4>
                    <p className="text-gray-500 uppercase tracking-widest text-sm mt-1">
                      {current.flag} {current.country}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {filtered.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`transition-all duration-300 rounded-full h-3 ${currentIndex === i ? 'bg-secondary w-8' : 'bg-gray-300 w-3'}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          {[
            { icon: "🛡️", text: "100% Secure Service" },
            { icon: "⚡", text: "Reply in 5 minutes" },
            { icon: "🌍", text: "47 Countries Served" },
            { icon: "⭐", text: "4.9/5 Average Rating" },
          ].map((badge, i) => (
            <div key={i} className="flex items-center gap-2 bg-white border border-gray-100 rounded-xl px-4 py-3 shadow-sm">
              <span className="text-xl">{badge.icon}</span>
              <span className="text-sm font-semibold text-gray-700">{badge.text}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
