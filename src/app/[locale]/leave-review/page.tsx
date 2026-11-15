import { setRequestLocale } from 'next-intl/server';
import { TestimonialForm } from '@/components/testimonial-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Leave a Review | Mauritania Concierge",
  description: "Share your experience with Mauritania Concierge. We value your feedback on our services and tours.",
};

export default async function LeaveReviewPage({ params }: { params: Promise<{locale: string}> }) {
  const {locale} = await params;
  setRequestLocale(locale);

  return (
    <main className="min-h-[80vh] pt-32 pb-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <TestimonialForm />
        </div>
      </div>
    </main>
  );
}
