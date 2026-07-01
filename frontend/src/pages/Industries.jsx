import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { INDUSTRIES, WHATSAPP_URL } from '../data/site';

export default function Industries() {
  return (
    <div data-testid="industries-page" className="bg-[#F9F9F8]">
      {/* Header */}
      <section className="border-b border-[#D5D5D0]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-20 pb-16 lg:pt-28 lg:pb-20">
          <div className="overline">Industries we serve</div>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-8xl font-black tracking-tighter leading-[0.95]">
            Five industries.<br />
            <span className="text-underline-accent">One supply partner.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#1A1A1A]/75">
            Rohit Solvents supplies bespoke solvent stacks to each of the sectors
            below — matched to their purity, safety and regulatory needs.
          </p>
        </div>
      </section>

      {/* Long-form rows */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-8">
        {INDUSTRIES.map((ind, i) => (
          <div
            key={ind.id}
            data-testid={`industry-row-${ind.id}`}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 py-16 lg:py-24 border-t border-[#D5D5D0] ${
              i % 2 === 1 ? 'lg:grid-flow-dense' : ''
            }`}
          >
            <div className={`lg:col-span-6 ${i % 2 === 1 ? 'lg:col-start-7' : ''}`}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={ind.image}
                  alt={ind.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-[#F9F9F8] text-[#1A1A1A] px-4 py-2 font-mono text-[10px] tracking-widest uppercase">
                  {ind.number} / 05
                </div>
              </div>
            </div>
            <div className={`lg:col-span-6 flex flex-col justify-center ${i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
              <div className="overline">Sector {ind.number}</div>
              <h2 className="mt-4 font-display text-4xl lg:text-6xl font-black tracking-tighter leading-[1.02]">
                {ind.name}
              </h2>
              <p className="mt-6 text-lg text-[#1A1A1A]/80 leading-relaxed">
                {ind.blurb}
              </p>
              <div className="mt-8">
                <div className="overline">Recommended solvents</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {ind.products.map((p) => (
                    <span
                      key={p}
                      className="px-3 py-2 border border-[#1A1A1A]/30 font-mono text-[11px] tracking-widest uppercase hover:bg-[#1A1A1A] hover:text-white transition-colors cursor-default"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-10 flex gap-3">
                <Link
                  to="/products"
                  data-testid={`industry-cta-catalog-${ind.id}`}
                  className="inline-flex items-center gap-2 border border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white px-5 py-3 font-mono text-[11px] tracking-widest uppercase"
                >
                  See catalogue <ArrowUpRight size={14} />
                </Link>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  data-testid={`industry-cta-whatsapp-${ind.id}`}
                  className="inline-flex items-center gap-2 bg-[#1A1A1A] hover:bg-[#E85D04] text-white px-5 py-3 font-mono text-[11px] tracking-widest uppercase"
                >
                  Request quote
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
