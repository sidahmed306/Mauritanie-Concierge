'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';

/**
 * Only the configured admin may moderate. Database RLS already requires a signed-in user;
 * this also rejects any other signed-in account (e.g. if public sign-ups are enabled in Supabase).
 */
async function requireAdmin() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const adminEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  if (!user || (adminEmail && user.email?.toLowerCase() !== adminEmail)) {
    throw new Error('Not authorized');
  }
  return supabase;
}


export async function loginAdmin(formData: FormData) {
  const supabase = await createClient();
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (!email || !password) return { error: 'Email and password are required' };

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return { error: error.message };
  }

  revalidatePath('/', 'layout');
  return { success: true };
}

export async function logoutAdmin() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  revalidatePath('/', 'layout');
}

export async function updateRequestStatus(id: string, status: string) {
  const supabase = await requireAdmin();
  await supabase.from('contact_requests').update({ status }).eq('id', id);
  revalidatePath('/admin');
}

export async function deleteRequest(id: string) {
  const supabase = await requireAdmin();
  await supabase.from('contact_requests').delete().eq('id', id);
  revalidatePath('/admin');
}
