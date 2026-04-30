import { setRequestLocale } from 'next-intl/server';
import { createClient } from '@/lib/supabase/server';
import { AdminLoginForm } from '@/components/admin/login-form';
import { AdminDashboardView } from '@/components/admin/dashboard-view';

export default async function AdminPage({ params }: { params: Promise<{locale: string}> }) {
  const {locale} = await params;
  setRequestLocale(locale);

  // Fallback for missing env during build/dev
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    return (
      <div className="min-h-screen pt-32 pb-24 bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-12 rounded-xl text-center border border-red-200">
           <h2 className="text-red-500 font-bold mb-4">Supabase Not Configured</h2>
           <p className="text-gray-600">Please provide Supabase Environment variables.</p>
        </div>
      </div>
    );
  }

  const supabase = await createClient();
  const { data: { session } } = await supabase.auth.getSession();

  return (
    <main className="min-h-[80vh] pt-32 pb-24 bg-gray-50">
      <div className="container mx-auto px-6">
        {!session ? (
          <div className="max-w-md mx-auto">
            <h1 className="text-3xl font-bold text-primary mb-8 text-center">Admin Login</h1>
            <AdminLoginForm />
          </div>
        ) : (
          <AdminDashboardView />
        )}
      </div>
    </main>
  );
}
