import { Link } from 'react-router-dom';

export default function Logo({ inverse = false }) {
  const ink = inverse ? '#F9F9F8' : '#1A1A1A';
  return (
    <Link
      to="/"
      data-testid="brand-logo"
      className="flex items-center gap-3 group"
      aria-label="Rohit Solvents Home"
    >
      <svg width="34" height="34" viewBox="0 0 40 40" fill="none" aria-hidden>
        <circle cx="20" cy="20" r="19" stroke={ink} strokeWidth="1.5" />
        <circle cx="14" cy="17" r="3" fill="#E85D04" />
        <circle cx="26" cy="17" r="3" stroke={ink} strokeWidth="1.5" />
        <circle cx="20" cy="26" r="3" stroke={ink} strokeWidth="1.5" />
        <path d="M14 17L20 26L26 17" stroke={ink} strokeWidth="1.2" />
      </svg>
      <div className="flex flex-col leading-none">
        <span
          className="font-display font-black text-[15px] tracking-tight"
          style={{ color: ink }}
        >
          ROHIT SOLVENTS
        </span>
        <span
          className="font-mono text-[9px] tracking-[0.22em] mt-1"
          style={{ color: inverse ? '#F9F9F8AA' : '#1A1A1A99' }}
        >
          EST. 2005 · BANGALORE
        </span>
      </div>
    </Link>
  );
}
