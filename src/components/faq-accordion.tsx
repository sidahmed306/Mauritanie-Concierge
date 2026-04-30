'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

export function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  }

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
          <button
            className="w-full px-8 py-5 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
            onClick={() => toggle(index)}
          >
            <span className="font-semibold text-primary text-left text-lg pr-4">{faq.question}</span>
            <div className={`p-2 rounded-full flex-shrink-0 transition-colors ${activeIndex === index ? 'bg-secondary/10' : 'bg-gray-100'}`}>
              <ChevronDown className={`h-5 w-5 text-secondary transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`} />
            </div>
          </button>
          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="px-8 pb-6 text-gray-600 leading-relaxed text-lg border-t border-gray-50 pt-4">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
