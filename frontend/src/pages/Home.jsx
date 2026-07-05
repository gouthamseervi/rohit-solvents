import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Beaker, ShieldCheck, Truck, FlaskConical, MessageCircle, Phone } from 'lucide-react';
import {
  COMPANY,
  INDUSTRIES,
  STATS,
  PRODUCTS,
  CERTIFICATIONS,
  WHATSAPP_URL,
} from '../data/site';

const HERO_IMG =
  'https://images.unsplash.com/photo-1634166802891-02961f17139c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGxpcXVpZCUyMG1hY3JvfGVufDB8fHx8MTc4Mjg3MjUxOHww&ixlib=rb-4.1.0&q=85';

export default function Home() {
  return (
    <div data-testid="home-page" className="bg-[#F9F9F8]">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[#D5D5D0]">
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="Solvent liquid macro"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F9F9F8] via-[#F9F9F8]/85 to-[#F9F9F8]/30" />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 pt-20 lg:pt-28 pb-24 lg:pb-32">
          {/* <div className="flex items-center gap-4 mb-10">
            <span className="h-px w-16 bg-[#1A1A1A]" />
            <span className="overline">Precision Solvents · Est. 2005</span>
          </div> */}

          <h1 className="font-display text-5xl sm:text-6xl lg:text-[92px] font-black tracking-tighter leading-[0.95] text-[#1A1A1A] max-w-5xl fade-up">
            High-purity solvents<br />
            for the industries that<br />
            <span className="text-underline-accent">demand precision.</span>
          </h1>

          <p className="mt-10 max-w-xl text-base lg:text-lg text-[#1A1A1A]/75 leading-relaxed fade-up">
            Rohit Solvents supplies laboratory- and industrial-grade chemical
            solvents to paints, inks, pharmaceuticals, printing, home care and personal care
            manufacturers across South India.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Link
              data-testid="hero-catalog-cta"
              to="/products"
              className="group inline-flex items-center gap-3 bg-[#1A1A1A] hover:bg-[#E85D04] text-white px-7 py-5 text-[12px] font-mono tracking-widest uppercase"
            >
              View catalogue
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <a
              data-testid="hero-whatsapp-cta"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 border border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white px-7 py-5 text-[12px] font-mono tracking-widest uppercase"
            >
              <MessageCircle size={14} /> Enquire via WhatsApp
            </a>
          </div>

          <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 border-t border-[#1A1A1A]/20">
            {STATS.map((s) => (
              <div
                key={s.label}
                data-testid={`stat-${s.label.replace(/\s+/g, '-').toLowerCase()}`}
                className="py-8 pr-4 border-r last:border-r-0 border-[#1A1A1A]/10"
              >
                <div className="font-display text-4xl lg:text-6xl font-black tracking-tighter">
                  {s.value}
                </div>
                <div className="mt-2 overline">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="bg-[#1A1A1A] text-[#F9F9F8] overflow-hidden py-6 border-y border-[#1A1A1A]">
        <div className="marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-16 pr-16 shrink-0">
              {['Toluene', 'Isopropyl Alcohol', 'MEK', 'Xylene', 'Acetone', 'Ethyl Acetate', 'MDC', 'MIBK', 'n-Hexane', 'Butyl Acetate', 'Perchloroethylene'].map((n) => (
                <span key={n + i} className="font-display text-3xl font-black tracking-tighter">
                  {n} <span className="text-[#E85D04]">·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="overline">§ 01 — What we do</div>
            <h2 className="mt-6 font-display text-4xl lg:text-6xl font-black tracking-tighter leading-[1.02]">
              Chemistry you can<br />trust. Delivered<br />on schedule.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-6">
            {[
              { icon: Beaker, title: 'Verified Purity', body: 'Every batch is tested and shipped with a Certificate of Analysis (CoA), Safety Data Sheet (MSDS) and traceability documentation.' },
              { icon: Truck, title: 'Reliable Logistics', body: 'From 25L carboys to bulk tankers — dispatch across Karnataka and pan-India through vetted hazardous-goods carriers.' },
              { icon: ShieldCheck, title: 'Safety First', body: 'Storage and handling according to safety standards. Trained staff. Compliant transport. No shortcuts on safety.' },
            ].map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="group flex gap-6 py-6 border-b border-[#D5D5D0] hover:pl-3 transition-all"
              >
                <div className="shrink-0 w-14 h-14 bg-[#1A1A1A] text-[#F9F9F8] flex items-center justify-center group-hover:bg-[#E85D04] transition-colors">
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold tracking-tight">{title}</h3>
                  <p className="mt-2 text-[#1A1A1A]/75 leading-relaxed max-w-xl">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES BENTO */}
      <section className="border-t border-[#D5D5D0] bg-[#EFEFEA]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
            <div>
              <div className="overline">§ 02 — Industries served</div>
              <h2 className="mt-6 font-display text-4xl lg:text-6xl font-black tracking-tighter leading-[1.02]">
                Five industries.<br />One supplier.
              </h2>
            </div>
            <Link
              data-testid="industries-see-all"
              to="/industries"
              className="inline-flex items-center gap-2 font-mono text-[12px] tracking-widest uppercase hover:text-[#E85D04]"
            >
              See all industries <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4">
            {INDUSTRIES.map((ind, i) => {
              const spans = [
                'md:col-span-6 lg:col-span-7 lg:row-span-2',
                'md:col-span-6 lg:col-span-5',
                'md:col-span-3 lg:col-span-5',
                'md:col-span-3 lg:col-span-4',
                'md:col-span-6 lg:col-span-8',
              ];
              const h = i === 0 ? 'min-h-[420px]' : 'min-h-[240px]';
              return (
                <Link
                  key={ind.id}
                  to="/industries"
                  data-testid={`industry-card-${ind.id}`}
                  className={`group relative overflow-hidden border border-[#D5D5D0] bg-[#F9F9F8] ${spans[i]} ${h}`}
                >
                  <img
                    src={ind.image}
                    alt={ind.name}
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/20 to-transparent" />
                  <div className="relative h-full flex flex-col justify-between p-6 lg:p-8 text-[#F9F9F8]">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] tracking-widest">{ind.number}</span>
                      <ArrowUpRight size={18} className="opacity-60 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                    </div>
                    <div>
                      <h3 className="font-display text-3xl lg:text-4xl font-black tracking-tighter">
                        {ind.name}
                      </h3>
                      {i === 0 && (
                        <p className="mt-3 text-sm text-[#F9F9F8]/80 max-w-md">
                          {ind.blurb}
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRODUCTS PREVIEW */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <div className="overline">§ 03 — Featured solvents</div>
            <h2 className="mt-6 font-display text-4xl lg:text-6xl font-black tracking-tighter leading-[1.02]">
              A working index<br />of everyday grades.
            </h2>
          </div>
          <Link
            data-testid="products-see-all"
            to="/products"
            className="inline-flex items-center gap-2 font-mono text-[12px] tracking-widest uppercase hover:text-[#E85D04]"
          >
            Full catalogue <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PRODUCTS.slice(0, 6).map((p) => (
            <div
              key={p.cas}
              data-testid={`product-card-${p.cas}`}
              className="group border border-[#D5D5D0] bg-[#F9F9F8] hover:bg-[#1A1A1A] hover:text-[#F9F9F8] transition-colors duration-500 p-8"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-widest uppercase opacity-70">
                  {p.category}
                </span>
                <span className="font-mono text-[10px] tracking-widest uppercase opacity-70">
                  {p.formula}
                </span>
              </div>
              <h3 className="mt-8 font-display text-2xl lg:text-3xl font-bold tracking-tight leading-tight">
                {p.name}
              </h3>
              <div className="mt-8 pt-6 border-t border-current/20 flex items-center justify-between font-mono text-[11px] tracking-widest uppercase">
                <span>CAS {p.cas}</span>
                <span className="text-[#E85D04] group-hover:text-[#E85D04]">
                  {p.purity}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="border-y border-[#D5D5D0] bg-[#EFEFEA]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
          <div className="flex flex-col md:flex-row md:items-center gap-10">
            <div className="overline shrink-0">Compliance & Certifications</div>
            <div className="hairline hidden md:block flex-1" />
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-10">
              {CERTIFICATIONS.map((c) => (
                <div key={c.code} className="flex flex-col">
                  <span className="font-display text-xl font-black tracking-tight">
                    {c.code}
                  </span>
                  <span className="font-mono text-[10px] tracking-widest uppercase text-[#1A1A1A]/60 mt-1">
                    {c.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      {/* <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="overline">§ 04 — Trusted by</div>
        <h2 className="mt-6 font-display text-4xl lg:text-6xl font-black tracking-tighter leading-[1.02] max-w-3xl">
          Two decades of<br /> keeping production lines running.
        </h2>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-4">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="border border-[#D5D5D0] p-8 lg:p-10 bg-[#F9F9F8] hover:border-[#1A1A1A] transition-colors"
            >
              <div className="font-display text-5xl text-[#E85D04] leading-none">&ldquo;</div>
              <p className="mt-4 text-[#1A1A1A] leading-relaxed">{t.quote}</p>
              <div className="mt-8 pt-6 border-t border-[#D5D5D0]">
                <div className="font-semibold text-sm">{t.author}</div>
                <div className="font-mono text-[10px] tracking-widest uppercase text-[#1A1A1A]/60 mt-1">
                  {t.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* CTA */}
      <section className="bg-[#1A1A1A] text-[#F9F9F8]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <div className="overline text-[#F9F9F8]/60">Talk to a chemist</div>
            <h2 className="mt-6 font-display text-5xl lg:text-7xl font-black tracking-tighter leading-[0.95]">
              Need a grade,<br />
              blend, or bulk quote?<br />
              <span className="text-[#E85D04]">We&apos;re one message away.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-4">
            <a
              data-testid="cta-whatsapp"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-between gap-3 bg-[#E85D04] hover:bg-[#F9F9F8] hover:text-[#1A1A1A] text-white px-6 py-5 text-[12px] font-mono tracking-widest uppercase"
            >
              WhatsApp us <MessageCircle size={16} />
            </a>
            <a
              data-testid="cta-phone"
              href={`tel:${COMPANY.phoneRaw}`}
              className="inline-flex items-center justify-between gap-3 border border-[#F9F9F8]/30 hover:bg-[#F9F9F8] hover:text-[#1A1A1A] px-6 py-5 text-[12px] font-mono tracking-widest uppercase"
            >
              {COMPANY.phone} <Phone size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
