'use server';
import { createClient } from '@supabase/supabase-js';

export async function submitContactRequest(formData: FormData) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const data = {
    full_name: formData.get('fullName'),
    country: formData.get('country'),
    whatsapp: formData.get('whatsapp'),
    email: formData.get('email') || null,
    service_type: formData.get('serviceType'),
    arrival_date: formData.get('arrivalDate') || null,
    message: formData.get('message'),
  };

  if (!data.full_name || !data.whatsapp || !data.service_type) {
    return { success: false, error: 'Missing required fields' };
  }

  const { error } = await supabase.from('contact_requests').insert([data]);

  if (error) {
    console.error('Supabase Error:', error);
    return { success: false, error: 'Failed to submit request' };
  }

  return { success: true };
}
