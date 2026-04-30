'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  name: string;
  country: string;
  review: string;
  rating: number;
}

export function TestimonialSlider({ testimonials }: { testimonials: Testimonial[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  const current = testimonials[currentIndex];

  return (
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
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="flex flex-col items-center text-center"
          >
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-6 w-6 ${i < current.rating ? 'fill-secondary text-secondary' : 'fill-gray-200 text-gray-200'}`} />
              ))}
            </div>
            
            <p className="text-xl md:text-3xl text-gray-700 leading-relaxed font-medium italic mb-10">"{current.review}"</p>
            
            <div>
              <h4 className="text-xl font-bold text-primary">{current.name}</h4>
              <p className="text-gray-500 uppercase tracking-widest text-sm mt-1">{current.country}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-3 mt-8">
        {testimonials.map((_, i) => (
          <button 
            key={i} 
            onClick={() => setCurrentIndex(i)}
            className={`transition-all duration-300 rounded-full h-3 ${currentIndex === i ? 'bg-secondary w-8' : 'bg-gray-300 w-3'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
