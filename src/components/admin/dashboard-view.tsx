import { createClient } from '@/lib/supabase/server';
import { logoutAdmin, updateRequestStatus, deleteRequest } from '@/app/actions/admin';
import { LogOut, Trash2, CheckCircle, Clock } from 'lucide-react';

export async function AdminDashboardView() {
  const supabase = await createClient();
  const { data: requests } = await supabase
    .from('contact_requests')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <div className="w-full space-y-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h1 className="text-2xl font-bold text-primary">Admin Dashboard</h1>
        <form action={logoutAdmin}>
          <button type="submit" className="flex items-center gap-2 text-gray-500 hover:text-red-500 transition-colors font-medium">
            <LogOut size={18} /> Logout
          </button>
        </form>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-lg font-bold text-primary">Contact Requests</h2>
          <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{requests?.length || 0} Total</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Client</th>
                <th className="px-6 py-4">Service</th>
                <th className="px-6 py-4">Contact</th>
                <th className="px-6 py-4">Date / Message</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {(!requests || requests.length === 0) ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-gray-500">No requests found.</td>
                </tr>
              ) : requests.map((req: any) => (
                <tr key={req.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4">
                    {req.status === 'pending' ? (
                      <span className="flex items-center gap-1.5 text-orange-600 bg-orange-50 px-2.5 py-1 rounded-md text-xs font-semibold w-max border border-orange-100">
                        <Clock size={14} /> Pending
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5 text-green-600 bg-green-50 px-2.5 py-1 rounded-md text-xs font-semibold w-max border border-green-100">
                        <CheckCircle size={14} /> Completed
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-bold text-primary">{req.full_name}</div>
                    <div className="text-xs text-gray-500 mt-1">{req.country}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-700 bg-gray-100 px-2 py-1 rounded w-max">{req.service_type}</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <div>WA: {req.whatsapp}</div>
                    {req.email && <div>{req.email}</div>}
                  </td>
                  <td className="px-6 py-4 max-w-xs">
                    <div className="text-xs text-gray-400 mb-1">{new Date(req.created_at).toLocaleDateString()}</div>
                    {req.arrival_date && <div className="text-xs font-medium text-secondary mb-1">Arr: {req.arrival_date}</div>}
                    <div className="text-sm text-gray-600 truncate" title={req.message}>{req.message || '-'}</div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2 text-gray-400">
                      {req.status === 'pending' && (
                        <form action={async () => { 'use server'; await updateRequestStatus(req.id, 'completed'); }}>
                           <button type="submit" title="Mark as completed" className="p-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors">
                             <CheckCircle size={18} />
                           </button>
                        </form>
                      )}
                      {req.status === 'completed' && (
                        <form action={async () => { 'use server'; await updateRequestStatus(req.id, 'pending'); }}>
                           <button type="submit" title="Mark as pending" className="p-2 bg-orange-50 text-orange-600 rounded-lg hover:bg-orange-100 transition-colors">
                             <Clock size={18} />
                           </button>
                        </form>
                      )}
                      
                      <form action={async () => { 'use server'; await deleteRequest(req.id); }}>
                         <button type="submit" title="Delete request" className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
                           onClick={(e) => {
                             if (!confirm('Are you sure you want to delete this request?')) e.preventDefault();
                           }}
                         >
                           <Trash2 size={18} />
                         </button>
                      </form>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
