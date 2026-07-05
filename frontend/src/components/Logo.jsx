import { Link } from 'react-router-dom';

export default function Logo({ inverse = false }) {
  const ink = inverse ? '#F9F9F8' : '#1A1A1A';
  const bg = inverse ? '#F9F9F8' : '#1A1A1A';
  const fg = inverse ? '#1A1A1A' : '#F9F9F8';
  const muted = inverse ? '#F9F9F8AA' : '#1A1A1A99';

  return (
    <Link
      to="/"
      data-testid="brand-logo"
      className="flex items-center gap-3 group"
      aria-label="Rohit Solvents Home"
    >
      {/* Monogram mark */}
      <div className="relative shrink-0">
        <div
          className="w-10 h-10 flex items-center justify-center font-display font-black tracking-tighter transition-transform group-hover:-rotate-3"
          style={{ background: bg, color: fg }}
        >
          <span className="text-[19px] leading-none pt-[1px]">RS</span>
        </div>
        {/* Orange accent chip */}
        <span
          className="absolute -top-1 -right-1 w-2.5 h-2.5"
          style={{ background: '#E85D04' }}
          aria-hidden
        />
      </div>

      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span
          className="font-display font-black text-[15px] tracking-tight"
          style={{ color: ink }}
        >
          ROHIT SOLVENTS
        </span>
        <span
          className="font-mono text-[9px] tracking-[0.22em] mt-1"
          style={{ color: muted }}
        >
          EST. 1993 · BANGALORE
        </span>
      </div>
    </Link>
  );
}
