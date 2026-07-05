import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { COMPANY, STATS, CERTIFICATIONS, WHATSAPP_URL } from '../data/site';

const FACILITY_IMG =
  'https://images.pexels.com/photos/34718922/pexels-photo-34718922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';

const VALUES = [
  {
    n: '01',
    title: 'Purity is non-negotiable',
    body: 'Every drum we ship carries its own analytical fingerprint — CoA, MSDS, batch traceability. No black boxes.',
  },
  {
    n: '02',
    title: 'Relationships over transactions',
    body: 'We supply the same manufacturers year after year because we treat their production lines like our own.',
  },
  {
    n: '03',
    title: 'Safety before speed',
    body: 'Trained handlers, audited storage, licensed transport. Corners cut in chemistry become disasters downstream.',
  },
  {
    n: '04',
    title: 'Chemistry is a conversation',
    body: 'We help you pick, substitute or blend the right grade — technical support without the price tag.',
  },
];

export default function About() {
  return (
    <div data-testid="about-page" className="bg-[#F9F9F8]">
      {/* Header */}
      <section className="border-b border-[#D5D5D0]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-20 pb-16 lg:pt-28 lg:pb-24">
          <div className="overline">About Rohit Solvents</div>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-8xl font-black tracking-tighter leading-[0.95] max-w-5xl">
            Three decades of moving<br />
            the <span className="text-underline-accent">right chemistry</span><br />
            to the right place.
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="overline">§ Our story</div>
          <h2 className="mt-6 font-display text-3xl lg:text-5xl font-black tracking-tighter leading-tight">
            From a two-tank<br />warehouse in Bangalore<br />to a trusted South-India<br />solvent supplier.
          </h2>
        </div>
        <div className="lg:col-span-7 space-y-6 text-lg leading-relaxed text-[#1A1A1A]/85">
          <p>
            Rohit Solvents began in 1993 with a simple thesis — the paints and pharma
            manufacturers of Karnataka deserved a solvent supplier who understood
            their formulations as well as their timelines. Three decades on, that thesis
            has scaled into a full-industry distribution business, but the discipline
            has not changed.
          </p>
          <p>
            Today we source, store and ship over 40 grades of industrial and reagent
            solvents across five industries. Our warehouse in Sukadkatte, Bangalore,
            operates to ISO safety and environmental standards, and our team includes
            trained chemists who help clients pick the right molecule for the right job.
          </p>
          <p>
            We are unglamorous about our work. Chemistry is not marketing — it is
            precision, paperwork, and being on the phone at 6 AM when a plant needs a
            tanker. That is the business we have always been in.
          </p>
        </div>
      </section>

      {/* Image + Stats */}
      <section className="border-y border-[#D5D5D0] bg-[#EFEFEA]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={FACILITY_IMG}
              alt="Facility floor"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-[#1A1A1A] text-white px-4 py-3 font-mono text-[10px] tracking-widest uppercase">
              Sukadkatte, Bangalore 560091
            </div>
          </div>
          <div>
            <div className="overline">By the numbers</div>
            <div className="grid grid-cols-2 gap-6 mt-8">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  data-testid={`about-stat-${s.label.replace(/\s+/g, '-').toLowerCase()}`}
                  className="border-t border-[#1A1A1A] pt-6"
                >
                  <div className="font-display text-5xl lg:text-6xl font-black tracking-tighter">
                    {s.value}
                  </div>
                  <div className="mt-2 overline">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="overline">§ Principles</div>
        <h2 className="mt-6 font-display text-4xl lg:text-6xl font-black tracking-tighter leading-[1.02]">
          Four principles.<br />Zero exceptions.
        </h2>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4">
          {VALUES.map((v) => (
            <div
              key={v.n}
              className="group border border-[#D5D5D0] p-8 lg:p-10 bg-[#F9F9F8] hover:bg-[#1A1A1A] hover:text-[#F9F9F8] transition-colors"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[11px] tracking-widest">{v.n}</span>
                <CheckCircle2 size={20} className="opacity-40 group-hover:text-[#E85D04] group-hover:opacity-100 transition" />
              </div>
              <h3 className="mt-8 font-display text-2xl lg:text-3xl font-bold tracking-tight">
                {v.title}
              </h3>
              <p className="mt-4 leading-relaxed opacity-80">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="border-y border-[#D5D5D0] bg-[#EFEFEA] py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="overline">§ Certifications & Compliance</div>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-10">
            {CERTIFICATIONS.map((c) => (
              <div key={c.code} className="border-t border-[#1A1A1A] pt-4">
                <div className="font-display text-xl font-black tracking-tight">
                  {c.code}
                </div>
                <div className="font-mono text-[10px] tracking-widest uppercase text-[#1A1A1A]/60 mt-1">
                  {c.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row gap-10 justify-between items-start lg:items-end">
          <h2 className="font-display text-4xl lg:text-6xl font-black tracking-tighter leading-[1.02] max-w-2xl">
            Ready to talk<br /> chemistry & logistics?
          </h2>
          <div className="flex gap-4">
            <Link
              data-testid="about-view-products"
              to="/products"
              className="inline-flex items-center gap-2 border border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white px-6 py-4 font-mono text-[12px] tracking-widest uppercase"
            >
              View catalogue <ArrowUpRight size={14} />
            </Link>
            <a
              data-testid="about-whatsapp"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#1A1A1A] hover:bg-[#E85D04] text-white px-6 py-4 font-mono text-[12px] tracking-widest uppercase"
            >
              WhatsApp {COMPANY.phone.replace('+91 ', '')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
