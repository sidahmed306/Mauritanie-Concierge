'use server';
import { createClient } from '@supabase/supabase-js';

export async function submitTestimonial(formData: FormData) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const data = {
    name: formData.get('name'),
    country: formData.get('country'),
    tour_name: formData.get('tour_name'),
    rating: parseInt(formData.get('rating') as string) || 5,
    review: formData.get('review'),
    approved: false, // Default to false for moderation
  };

  if (!data.name || !data.country || !data.review) {
    return { success: false, error: 'Missing required fields' };
  }

  const { error } = await supabase.from('testimonials').insert([data]);

  if (error) {
    console.error('Supabase Error:', error);
    return { success: false, error: 'Failed to submit testimonial' };
  }

  return { success: true };
}
