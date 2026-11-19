import { permanentRedirect } from 'next/navigation';

// Customer reviews were removed from the site; keep the old URL working.
export default async function LeaveReviewPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  permanentRedirect(`/${locale}`);
}
