import { TestimonialSlider } from '@/components/testimonial-slider';
import { useTranslations } from 'next-intl';

export function TestimonialsSection() {
  const t = useTranslations('Testimonials');
  const testimonials = [
    {
      name: "Jean-Pierre Laurent",
      country: "France",
      review: "The airport pickup and VIP assistance provided a seamless experience for our entire delegation. Highly professional and deeply trustworthy.",
      rating: 5
    },
    {
      name: "Ahmed Al-Mansoori",
      country: "UAE",
      review: "Excellent service from start to finish. The private driver was punctual and the translation services made our business meetings highly successful.",
      rating: 5
    },
    {
      name: "Sarah Jenkins",
      country: "United States",
      review: "As an investor visiting Mauritania for the first time, Mauritania Concierge made everything incredibly easy and secure. The hotel assistance was top tier.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">{t('tag')}</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-primary mb-6">{t('title')}</h3>
          <p className="text-gray-600 text-lg">{t('subtitle')}</p>
        </div>

        <TestimonialSlider testimonials={testimonials} />
      </div>
    </section>
  );
}
