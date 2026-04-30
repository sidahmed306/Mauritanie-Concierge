'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Send } from 'lucide-react';
import { submitContactRequest } from '@/app/actions/contact';

export function ContactForm() {
  const t = useTranslations('Contact');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function action(formData: FormData) {
    setStatus('loading');
    const result = await submitContactRequest(formData);
    
    if (result.error) {
      setStatus('error');
    } else {
      setStatus('success');
    }
  }

  return (
    <div className="bg-white p-6 md:p-10 rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-full">
      <h3 className="text-2xl font-bold text-primary mb-8">{t('title')}</h3>
      
      {status === 'success' ? (
        <div className="bg-green-50 text-green-700 p-6 rounded-2xl mb-6 font-medium">
          {t('success')}
        </div>
      ) : status === 'error' ? (
        <div className="bg-red-50 text-red-700 p-6 rounded-2xl mb-6 font-medium">
          {t('error')}
        </div>
      ) : null}

      <form action={action} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <div className="w-full">
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">{t('fullName')}</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required 
              className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors text-[16px]"
              placeholder="John Doe"
            />
          </div>
          <div className="w-full">
            <label htmlFor="country" className="block text-sm font-semibold text-gray-700 mb-2">{t('country')}</label>
            <input 
              type="text" 
              id="country" 
              name="country" 
              required 
              className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors text-[16px]"
              placeholder="e.g. United Kingdom"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <div className="w-full">
            <label htmlFor="whatsapp" className="block text-sm font-semibold text-gray-700 mb-2">{t('whatsapp')}</label>
            <input 
              type="tel" 
              id="whatsapp" 
              name="whatsapp" 
              required 
              className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors text-[16px]"
              placeholder="+44 20 7123 4567"
            />
          </div>
          <div className="w-full">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">{t('email')}</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors text-[16px]"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <div className="w-full">
            <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">{t('serviceNeeded')}</label>
            <select 
              id="service" 
              name="service"
              required
              className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors bg-white text-[16px]"
            >
              <option value="">{t('selectService')}</option>
              <option value="airport">Airport Pickup</option>
              <option value="driver">Private Driver</option>
              <option value="hotel">Hotel Assistance</option>
              <option value="translation">Translation Services</option>
              <option value="vip">VIP Delegation</option>
              <option value="tours">Desert Tours & Travels</option>
            </select>
          </div>
          <div className="w-full">
            <label htmlFor="date" className="block text-sm font-semibold text-gray-700 mb-2">{t('arrivalDate')}</label>
            <input 
              type="date" 
              id="date" 
              name="arrival_date" 
              className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors text-[16px]"
            />
          </div>
        </div>

        <div className="w-full">
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">{t('message')}</label>
          <textarea 
            id="message" 
            name="message" 
            rows={4}
            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors resize-none text-[16px]"
            placeholder="Tell us about any specific requirements..."
          ></textarea>
        </div>

        <button 
          type="submit" 
          disabled={status === 'loading'}
          className="w-full bg-secondary text-white py-4 rounded-xl font-bold flex justify-center items-center gap-2 hover:bg-[#b0945a] transition-colors disabled:opacity-70 disabled:cursor-not-allowed min-h-[44px]"
        >
          <Send size={20} />
          {status === 'loading' ? t('sending') : t('submit')}
        </button>
      </form>
    </div>
  );
}
