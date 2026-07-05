import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';
import { COMPANY, INDUSTRIES, WHATSAPP_URL } from '../data/site';
import { color } from 'framer-motion';

export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="bg-[#111111] text-[#F9F9F8] mt-20"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Logo inverse />
            <p className="mt-8 font-display text-3xl lg:text-4xl font-black tracking-tighter leading-[1.05] max-w-md">
              High-purity solvents.<br />
              <span className="text-[#E85D04]">Precisely delivered.</span>
            </p>
            <a
              data-testid="footer-whatsapp-cta"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-3 border border-[#F9F9F8]/30 hover:bg-[#E85D04] hover:border-[#E85D04] px-6 py-4 text-[12px] font-mono tracking-widest uppercase"
            >
              Start enquiry <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="lg:col-span-2">
            <p className="overline text-[#F9F9F8]/60" style={{ color: "#FFFFFF"}}>Navigate</p>
            <ul className="mt-6 space-y-3 text-sm">
              <li><Link className="hover:text-[#E85D04]" to="/">Home</Link></li>
              <li><Link className="hover:text-[#E85D04]" to="/products">Products</Link></li>
              <li><Link className="hover:text-[#E85D04]" to="/industries">Industries</Link></li>
              <li><Link className="hover:text-[#E85D04]" to="/about">About</Link></li>
              <li><Link className="hover:text-[#E85D04]" to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="overline text-[#F9F9F8]/60" style={{ color: "#FFFFFF"}}>Industries</p>
            <ul className="mt-6 space-y-3 text-sm">
              {INDUSTRIES.map((i) => (
                <li key={i.id}>
                  <Link className="hover:text-[#E85D04]" to="/industries">
                    {i.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="overline text-[#F9F9F8]/60" style={{ color: "#FFFFFF"}}>Reach us</p>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin size={16} className="mt-1 text-[#E85D04] shrink-0" />
                <span data-testid="footer-address">{COMPANY.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone size={16} className="mt-1 text-[#E85D04] shrink-0" />
                <a
                  data-testid="footer-phone"
                  href={`tel:${COMPANY.phoneRaw}`}
                  className="hover:text-[#E85D04]"
                >
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={16} className="mt-1 text-[#E85D04] shrink-0" />
                <a
                  data-testid="footer-email"
                  href={`mailto:${COMPANY.email}`}
                  className="hover:text-[#E85D04]"
                >
                  {COMPANY.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-[#F9F9F8]/15 flex flex-col md:flex-row justify-between gap-4 text-xs font-mono tracking-widest uppercase text-[#F9F9F8]/50">
          <span>© {new Date().getFullYear()} Rohit Solvents · All rights reserved</span>
          <span>Chemical Distribution · Bangalore, India</span>
        </div>
      </div>
    </footer>
  );
}
