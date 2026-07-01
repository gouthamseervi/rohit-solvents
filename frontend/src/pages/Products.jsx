import { useState, useMemo } from 'react';
import { Search, ArrowUpRight } from 'lucide-react';
import { PRODUCTS, PRODUCT_CATEGORIES, WHATSAPP_URL } from '../data/site';

export default function Products() {
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchCat = category === 'All' || p.category === category;
      const q = query.trim().toLowerCase();
      const matchQ =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.cas.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.apps.some((a) => a.toLowerCase().includes(q));
      return matchCat && matchQ;
    });
  }, [category, query]);

  return (
    <div data-testid="products-page" className="bg-[#F9F9F8]">
      {/* Header */}
      <section className="border-b border-[#D5D5D0]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-20 pb-16 lg:pt-28 lg:pb-20">
          <div className="overline">Solvent catalogue</div>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-8xl font-black tracking-tighter leading-[0.95]">
            {PRODUCTS.length}+ grades.<br />
            <span className="text-underline-accent">One index.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#1A1A1A]/75">
            Search by name, CAS number or application. For custom grades,
            packaging or bulk quotes — talk to us directly on WhatsApp.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-[72px] z-30 bg-[#F9F9F8]/95 backdrop-blur border-b border-[#D5D5D0]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-4 flex flex-col lg:flex-row lg:items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1A1A1A]/50" />
            <input
              data-testid="products-search"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search Toluene, 67-63-0, Pharma..."
              className="w-full bg-[#EFEFEA] border border-[#D5D5D0] pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-[#1A1A1A]"
            />
          </div>
          <div className="flex flex-wrap gap-2 overflow-x-auto">
            {PRODUCT_CATEGORIES.map((c) => (
              <button
                key={c}
                data-testid={`filter-${c.toLowerCase()}`}
                onClick={() => setCategory(c)}
                className={`px-4 py-2 font-mono text-[11px] tracking-widest uppercase border transition-colors ${
                  category === c
                    ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                    : 'bg-transparent border-[#D5D5D0] hover:border-[#1A1A1A]'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
        {filtered.length === 0 ? (
          <div
            data-testid="products-empty-state"
            className="py-24 text-center border border-dashed border-[#D5D5D0]"
          >
            <p className="font-display text-3xl font-black tracking-tight">No match.</p>
            <p className="mt-3 text-[#1A1A1A]/70">
              Try a different filter or drop us a WhatsApp — we may still stock it.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((p) => (
              <div
                key={p.cas}
                data-testid={`product-card-${p.cas}`}
                className="group relative border border-[#D5D5D0] bg-[#F9F9F8] p-8 hover:bg-[#1A1A1A] hover:text-[#F9F9F8] transition-colors duration-500"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-widest uppercase opacity-70">
                    {p.category}
                  </span>
                  <span className="font-mono text-[10px] tracking-widest uppercase opacity-70">
                    {p.formula}
                  </span>
                </div>

                <h3 className="mt-8 font-display text-2xl font-bold tracking-tight leading-tight">
                  {p.name}
                </h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.apps.map((a) => (
                    <span
                      key={a}
                      className="text-[10px] font-mono tracking-widest uppercase px-2 py-1 border border-current/30 opacity-80"
                    >
                      {a}
                    </span>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-current/20 space-y-2">
                  <div className="flex justify-between font-mono text-[11px] tracking-widest uppercase">
                    <span className="opacity-60">CAS</span>
                    <span>{p.cas}</span>
                  </div>
                  <div className="flex justify-between font-mono text-[11px] tracking-widest uppercase">
                    <span className="opacity-60">Purity</span>
                    <span className="text-[#E85D04]">{p.purity}</span>
                  </div>
                  <div className="flex justify-between font-mono text-[11px] tracking-widest uppercase">
                    <span className="opacity-60">Pack</span>
                    <span className="text-right max-w-[60%]">{p.packaging}</span>
                  </div>
                </div>

                <a
                  data-testid={`product-enquire-${p.cas}`}
                  href={`${WHATSAPP_URL.split('?')[0]}?text=${encodeURIComponent(
                    `Hi Rohit Solvents, I would like a quote for ${p.name} (CAS ${p.cas}).`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase hover:text-[#E85D04]"
                >
                  Enquire <ArrowUpRight size={14} />
                </a>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="bg-[#1A1A1A] text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <h2 className="font-display text-3xl lg:text-5xl font-black tracking-tighter leading-tight max-w-2xl">
            Don&apos;t see the grade<br /> you need? <span className="text-[#E85D04]">Ask us.</span>
          </h2>
          <a
            data-testid="products-cta-whatsapp"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-[#E85D04] hover:bg-white hover:text-[#1A1A1A] px-6 py-4 font-mono text-[12px] tracking-widest uppercase"
          >
            Request custom quote <ArrowUpRight size={14} />
          </a>
        </div>
      </section>
    </div>
  );
}
