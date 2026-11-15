import { permanentRedirect } from 'next/navigation';

// The former priced tour packages were replaced by the five expeditions.
// Keep the old URL alive (bookmarks, search results) by sending visitors to /destinations.
export default async function ToursPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  permanentRedirect(`/${locale}/destinations`);
}
