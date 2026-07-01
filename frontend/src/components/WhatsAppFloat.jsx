import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '../data/site';

export default function WhatsAppFloat() {
  return (
    <a
      data-testid="floating-whatsapp-btn"
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 left-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        <span className="absolute inset-0 rounded-full bg-[#2D6A4F] opacity-40 animate-ping" />
        <div className="relative bg-[#2D6A4F] hover:bg-[#E85D04] text-white flex items-center gap-2 px-4 py-3 rounded-full shadow-lg">
          <MessageCircle size={18} />
          <span className="hidden sm:inline font-mono text-[11px] tracking-widest uppercase">
            Chat
          </span>
        </div>
      </div>
    </a>
  );
}
