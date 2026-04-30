'use client';
import { useState, useTransition } from 'react';
import { loginAdmin } from '@/app/actions/admin';
import { useRouter } from 'next/navigation';

export function AdminLoginForm() {
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  async function handleAction(formData: FormData) {
    setError(null);
    startTransition(async () => {
      const res = await loginAdmin(formData);
      if (res?.error) {
        setError(res.error);
      } else {
        router.refresh();
      }
    });
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-xl mb-6 text-sm border border-red-100">
          {error}
        </div>
      )}
      <form action={handleAction} className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-primary mb-2">Email</label>
          <input 
            type="email"
            name="email"
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-primary mb-2">Password</label>
          <input 
            type="password"
            name="password"
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none"
          />
        </div>
        <button 
          type="submit" 
          disabled={isPending}
          className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-[#081520] transition-colors disabled:opacity-50"
        >
          {isPending ? 'Signing in...' : 'Sign In'}
        </button>
      </form>
    </div>
  );
}
