import { MessageCircle } from 'lucide-react';
import { whatsappLink } from '@/lib/data/services';

/** Floating WhatsApp button, on every page. Pure CSS (no animation library) to keep pages light. */
export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink('Hello, I need assistance in Mauritania.')}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:bg-[#1DA851] hover:scale-110 active:scale-90 transition-all duration-200 z-[100] flex items-center justify-center"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  );
}
