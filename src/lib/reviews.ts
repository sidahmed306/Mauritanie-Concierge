import { cache } from 'react';
import { createClient } from '@supabase/supabase-js';

export type Review = {
  name: string;
  country: string;
  review: string;
  rating: number;
  tour_name?: string;
  photo_url?: string;
  created_at?: string;
};

/** Max time we wait for Supabase before rendering without reviews (keeps pages fast if it is down). */
const SUPABASE_TIMEOUT_MS = 3000;

/**
 * Approved customer reviews from Supabase (deduplicated per request). Empty if Supabase is unavailable.
 * Uses a cookie-less client on purpose: public data, so pages that show reviews can stay static (ISR)
 * instead of being rendered on every visit.
 */
export const getApprovedReviews = cache(async (): Promise<Review[]> => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return [];
  try {
    const supabase = createClient(url, key, {
      auth: { persistSession: false, autoRefreshToken: false },
      global: { fetch: (input, init) => fetch(input, { ...init, signal: AbortSignal.timeout(SUPABASE_TIMEOUT_MS) }) }
    });
    const { data, error } = await supabase
      .from('testimonials')
      .select('name, country, review, rating, tour_name, photo_url, created_at')
      .eq('approved', true)
      .order('created_at', { ascending: false });
    return !error && data ? (data as Review[]) : [];
  } catch (e) {
    console.error('Supabase fetch error in reviews:', e);
    return [];
  }
});

/** Real average and count, computed from approved reviews only. Null when there are none. */
export function ratingSummary(reviews: Review[]): { average: number; count: number } | null {
  const rated = reviews.filter((r) => typeof r.rating === 'number' && r.rating >= 1 && r.rating <= 5);
  if (rated.length === 0) return null;
  const average = rated.reduce((sum, r) => sum + r.rating, 0) / rated.length;
  return { average: Math.round(average * 10) / 10, count: rated.length };
}
