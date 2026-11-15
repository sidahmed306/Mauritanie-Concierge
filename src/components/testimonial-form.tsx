'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Star, Send } from 'lucide-react';
import { submitTestimonial } from '@/app/actions/testimonials';

export function TestimonialForm() {
  const t = useTranslations('Testimonials');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [rating, setRating] = useState(5);
  const [hoveredRating, setHoveredRating] = useState(0);

  async function action(formData: FormData) {
    setStatus('loading');
    formData.append('rating', rating.toString());
    const result = await submitTestimonial(formData);
    
    if (result.error) {
      setStatus('error');
    } else {
      setStatus('success');
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-green-50 text-green-700 p-8 rounded-3xl mb-6 text-center shadow-sm border border-green-100">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Send size={32} />
        </div>
        <h3 className="text-2xl font-bold mb-2">Thank you for your review!</h3>
        <p className="font-medium">Your testimonial has been submitted and is pending moderation.</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 md:p-10 rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-full">
      <h3 className="text-2xl font-bold text-primary mb-2">Share Your Experience</h3>
      <p className="text-gray-500 mb-8">We value your feedback. Let other travelers know about your trip!</p>
      
      {status === 'error' && (
        <div className="bg-red-50 text-red-700 p-6 rounded-2xl mb-6 font-medium">
          An error occurred while submitting your review. Please try again.
        </div>
      )}

      <form action={action} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <div className="w-full">
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required 
              className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors text-[16px]"
              placeholder="e.g. Sophie"
            />
          </div>
          <div className="w-full">
            <label htmlFor="country" className="block text-sm font-semibold text-gray-700 mb-2">Country of Origin</label>
            <input 
              type="text" 
              id="country" 
              name="country" 
              required 
              className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors text-[16px]"
              placeholder="e.g. France"
            />
          </div>
        </div>

        <div className="w-full">
          <label htmlFor="tour_name" className="block text-sm font-semibold text-gray-700 mb-2">Circuit / Tour Taken</label>
          <input 
            type="text" 
            id="tour_name" 
            name="tour_name" 
            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors text-[16px]"
            placeholder="e.g. Circuit Désert de l'Adrar - 7 jours"
          />
        </div>

        <div className="w-full">
          <label className="block text-sm font-semibold text-gray-700 mb-3">Rating</label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                type="button"
                key={star}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                onClick={() => setRating(star)}
                className="focus:outline-none"
              >
                <Star 
                  size={32} 
                  className={`transition-colors ${(hoveredRating || rating) >= star ? 'fill-secondary text-secondary' : 'text-gray-300'}`} 
                />
              </button>
            ))}
          </div>
        </div>

        <div className="w-full">
          <label htmlFor="review" className="block text-sm font-semibold text-gray-700 mb-2">Your Testimonial</label>
          <textarea 
            id="review" 
            name="review" 
            required
            rows={5}
            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors resize-none text-[16px]"
            placeholder="Tell us about your experience..."
          ></textarea>
        </div>

        <button 
          type="submit" 
          disabled={status === 'loading'}
          className="w-full bg-primary text-white py-4 rounded-xl font-bold flex justify-center items-center gap-2 hover:bg-[#0a3123] transition-colors disabled:opacity-70 disabled:cursor-not-allowed min-h-[44px]"
        >
          <Send size={20} />
          {status === 'loading' ? 'Sending...' : 'Submit Review'}
        </button>
      </form>
    </div>
  );
}
