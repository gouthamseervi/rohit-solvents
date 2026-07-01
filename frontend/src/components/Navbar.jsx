import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import Logo from './Logo';
import { WHATSAPP_URL } from '../data/site';

const links = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/industries', label: 'Industries' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      data-testid="site-navbar"
      className={`sticky top-0 z-40 transition-all ${
        scrolled
          ? 'bg-[#F9F9F8]/85 backdrop-blur-xl border-b border-[#D5D5D0]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between">
        <Logo />

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              className={({ isActive }) =>
                `font-body text-[13px] tracking-wide link-underline ${
                  isActive
                    ? 'text-[#1A1A1A] font-semibold'
                    : 'text-[#1A1A1A]/70 hover:text-[#1A1A1A]'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            data-testid="nav-whatsapp-cta"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-[#1A1A1A] hover:bg-[#E85D04] text-white px-5 py-3 text-[12px] font-mono tracking-widest uppercase"
          >
            <MessageCircle size={14} />
            Enquire
          </a>
        </div>

        <button
          data-testid="nav-mobile-toggle"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2"
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[#F9F9F8] border-t border-[#D5D5D0]">
          <div className="px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                data-testid={`mnav-link-${l.label.toLowerCase()}`}
                className="font-display text-2xl font-bold tracking-tight"
              >
                {l.label}
              </Link>
            ))}
            <a
              data-testid="mnav-whatsapp-cta"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center justify-center gap-2 bg-[#1A1A1A] text-white px-5 py-3 text-[12px] font-mono tracking-widest uppercase"
            >
              <MessageCircle size={14} /> Enquire on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
