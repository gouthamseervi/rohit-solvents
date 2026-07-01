import { MapPin, Phone, Mail, MessageCircle, Clock, ArrowUpRight } from 'lucide-react';
import { COMPANY, WHATSAPP_URL } from '../data/site';

const MAP_EMBED =
  'https://www.google.com/maps?q=Sukadkatte,%20Bangalore%20560091&z=14&output=embed';

export default function Contact() {
  return (
    <div data-testid="contact-page" className="bg-[#F9F9F8]">
      {/* Header */}
      <section className="border-b border-[#D5D5D0]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-20 pb-16 lg:pt-28 lg:pb-20">
          <div className="overline">Talk to us</div>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-8xl font-black tracking-tighter leading-[0.95]">
            One call. One WhatsApp.<br />
            <span className="text-underline-accent">Straight to a chemist.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#1A1A1A]/75">
            No forms. No ticket queues. Reach a real person on our sales desk
            between 9 AM and 7 PM, Monday to Saturday.
          </p>
        </div>
      </section>

      {/* Contact grid */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* WhatsApp Card */}
          <a
            data-testid="contact-whatsapp-card"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden bg-[#1A1A1A] text-white p-10 lg:p-14 hover:bg-[#E85D04] transition-colors"
          >
            <div className="flex justify-between items-start">
              <div className="overline text-white/60">Preferred channel</div>
              <ArrowUpRight size={22} className="opacity-60 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1 transition" />
            </div>
            <MessageCircle size={48} className="mt-10" />
            <h2 className="mt-8 font-display text-4xl lg:text-5xl font-black tracking-tighter leading-tight">
              Chat on<br />WhatsApp
            </h2>
            <p className="mt-6 text-white/85 max-w-sm">
              Send us your requirement — grade, quantity, packaging — and get a
              typical response within an hour on business days.
            </p>
            <div className="mt-10 font-mono text-[12px] tracking-widest uppercase">
              {COMPANY.phone}
            </div>
          </a>

          {/* Phone Card */}
          <a
            data-testid="contact-phone-card"
            href={`tel:${COMPANY.phoneRaw}`}
            className="group relative overflow-hidden bg-[#EFEFEA] p-10 lg:p-14 hover:bg-[#1A1A1A] hover:text-white transition-colors"
          >
            <div className="flex justify-between items-start">
              <div className="overline">Direct line</div>
              <ArrowUpRight size={22} className="opacity-60 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1 transition" />
            </div>
            <Phone size={48} className="mt-10" />
            <h2 className="mt-8 font-display text-4xl lg:text-5xl font-black tracking-tighter leading-tight">
              Call the<br />sales desk
            </h2>
            <p className="mt-6 max-w-sm opacity-80">
              Prefer to talk? Speak directly to a chemist about specifications,
              blends, safety data or logistics.
            </p>
            <div className="mt-10 font-mono text-[12px] tracking-widest uppercase">
              {COMPANY.phone}
            </div>
          </a>
        </div>

        {/* Details Row */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <InfoCard
            testId="contact-address"
            icon={MapPin}
            label="Warehouse & Office"
            value={COMPANY.address}
          />
          <InfoCard
            testId="contact-email"
            icon={Mail}
            label="Email"
            value={COMPANY.email}
            href={`mailto:${COMPANY.email}`}
          />
          <InfoCard
            testId="contact-hours"
            icon={Clock}
            label="Working hours"
            value={'Mon–Sat · 09:00 – 19:00 IST'}
          />
        </div>
      </section>

      {/* Map */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 pb-24">
        <div className="overline">Find us</div>
        <h2 className="mt-6 font-display text-3xl lg:text-5xl font-black tracking-tighter leading-tight">
          Sukadkatte · Bangalore 560091
        </h2>
        <div className="mt-8 aspect-[16/8] border border-[#D5D5D0] overflow-hidden">
          <iframe
            data-testid="contact-map"
            title="Rohit Solvents location"
            src={MAP_EMBED}
            className="w-full h-full grayscale contrast-125"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
}

function InfoCard({ icon: Icon, label, value, href, testId }) {
  const Comp = href ? 'a' : 'div';
  return (
    <Comp
      href={href}
      data-testid={testId}
      className="group border border-[#D5D5D0] bg-[#F9F9F8] p-8 hover:bg-[#EFEFEA] transition-colors block"
    >
      <div className="flex items-start justify-between">
        <div className="overline">{label}</div>
        <Icon size={18} className="text-[#E85D04]" />
      </div>
      <div className="mt-8 font-display text-xl font-bold tracking-tight leading-snug">
        {value}
      </div>
    </Comp>
  );
}
