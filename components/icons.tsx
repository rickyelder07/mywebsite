// SVG Icon Components

interface IconProps {
  className?: string;
}

export const TargetIcon = ({ className = "w-12 h-12" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="url(#gradient1)" strokeWidth="2"/>
    <circle cx="12" cy="12" r="6" stroke="url(#gradient1)" strokeWidth="2"/>
    <circle cx="12" cy="12" r="2" fill="url(#gradient1)"/>
    <defs>
      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f97316"/>
        <stop offset="100%" stopColor="#fbbf24"/>
      </linearGradient>
    </defs>
  </svg>
);

export const RocketIcon = ({ className = "w-12 h-12" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L4 14h8l-1 8 8-12h-8l1-8z" stroke="url(#gradient2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <defs>
      <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fb923c"/>
        <stop offset="100%" stopColor="#f97316"/>
      </linearGradient>
    </defs>
  </svg>
);

export const SparklesIcon = ({ className = "w-12 h-12" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3L13.5 7.5L18 9L13.5 10.5L12 15L10.5 10.5L6 9L10.5 7.5L12 3Z" fill="url(#gradient3)"/>
    <path d="M19 3L19.5 5L21.5 5.5L19.5 6L19 8L18.5 6L16.5 5.5L18.5 5L19 3Z" fill="url(#gradient3)"/>
    <path d="M19 16L19.5 18L21.5 18.5L19.5 19L19 21L18.5 19L16.5 18.5L18.5 18L19 16Z" fill="url(#gradient3)"/>
    <defs>
      <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f97316"/>
        <stop offset="100%" stopColor="#ea580c"/>
      </linearGradient>
    </defs>
  </svg>
);

export const UsersIcon = ({ className = "w-12 h-12" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="9" cy="7" r="4" stroke="url(#gradient4)" strokeWidth="2"/>
    <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" stroke="url(#gradient4)" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="17" cy="7" r="3" stroke="url(#gradient4)" strokeWidth="2"/>
    <path d="M21 21v-2a3 3 0 0 0-3-3" stroke="url(#gradient4)" strokeWidth="2" strokeLinecap="round"/>
    <defs>
      <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f97316"/>
        <stop offset="100%" stopColor="#fb923c"/>
      </linearGradient>
    </defs>
  </svg>
);

export const ChartIcon = ({ className = "w-12 h-12" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 3v18h18" stroke="url(#gradient5)" strokeWidth="2" strokeLinecap="round"/>
    <path d="M7 16l4-6 3 3 5-8" stroke="url(#gradient5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="7" cy="16" r="1.5" fill="url(#gradient5)"/>
    <circle cx="11" cy="10" r="1.5" fill="url(#gradient5)"/>
    <circle cx="14" cy="13" r="1.5" fill="url(#gradient5)"/>
    <circle cx="19" cy="5" r="1.5" fill="url(#gradient5)"/>
    <defs>
      <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fb923c"/>
        <stop offset="100%" stopColor="#fbbf24"/>
      </linearGradient>
    </defs>
  </svg>
);

export const LightningIcon = ({ className = "w-12 h-12" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 2L3 14h8l-2 8 10-12h-8l2-8z" fill="url(#gradient6)"/>
    <defs>
      <linearGradient id="gradient6" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24"/>
        <stop offset="100%" stopColor="#f97316"/>
      </linearGradient>
    </defs>
  </svg>
);

export const MegaphoneIcon = ({ className = "w-12 h-12" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 6v10l-7-3v7l-2 2-2-2v-7L1 10l7-3V4l11 2z" stroke="url(#gradient7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <defs>
      <linearGradient id="gradient7" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f97316"/>
        <stop offset="100%" stopColor="#fbbf24"/>
      </linearGradient>
    </defs>
  </svg>
);

export const GearIcon = ({ className = "w-12 h-12" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="3" stroke="url(#gradient8)" strokeWidth="2"/>
    <path d="M12 1v3m0 16v3M4.22 4.22l2.12 2.12m11.32 11.32l2.12 2.12M1 12h3m16 0h3M4.22 19.78l2.12-2.12m11.32-11.32l2.12-2.12" stroke="url(#gradient8)" strokeWidth="2" strokeLinecap="round"/>
    <defs>
      <linearGradient id="gradient8" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fb923c"/>
        <stop offset="100%" stopColor="#f97316"/>
      </linearGradient>
    </defs>
  </svg>
);

export const WrenchIcon = ({ className = "w-12 h-12" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="url(#gradient9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <defs>
      <linearGradient id="gradient9" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f97316"/>
        <stop offset="100%" stopColor="#fb923c"/>
      </linearGradient>
    </defs>
  </svg>
);

export const CoinIcon = ({ className = "w-12 h-12" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="url(#gradient10)" strokeWidth="2"/>
    <path d="M12 6v12M9 9h5a2 2 0 1 1 0 4h-4a2 2 0 1 0 0 4h5" stroke="url(#gradient10)" strokeWidth="2" strokeLinecap="round"/>
    <defs>
      <linearGradient id="gradient10" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24"/>
        <stop offset="100%" stopColor="#f97316"/>
      </linearGradient>
    </defs>
  </svg>
);

export const MusicIcon = ({ className = "w-12 h-12" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 18V5l12-2v13" stroke="url(#gradient11)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="6" cy="18" r="3" stroke="url(#gradient11)" strokeWidth="2"/>
    <circle cx="18" cy="16" r="3" stroke="url(#gradient11)" strokeWidth="2"/>
    <defs>
      <linearGradient id="gradient11" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fb923c"/>
        <stop offset="100%" stopColor="#ea580c"/>
      </linearGradient>
    </defs>
  </svg>
);

export const HeartIcon = ({ className = "w-12 h-12" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="url(#gradient12)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <defs>
      <linearGradient id="gradient12" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f97316"/>
        <stop offset="100%" stopColor="#dc2626"/>
      </linearGradient>
    </defs>
  </svg>
);

export const BaseballIcon = ({ className = "w-12 h-12" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="url(#gradient13)" strokeWidth="2"/>
    <path d="M8 8c1 1 1 3 1 4s0 3-1 4M16 8c-1 1-1 3-1 4s0 3 1 4" stroke="url(#gradient13)" strokeWidth="2" strokeLinecap="round"/>
    <path d="M10 6c.5 1.5 1 4 1 6s-.5 4.5-1 6M14 6c-.5 1.5-1 4-1 6s.5 4.5 1 6" stroke="url(#gradient13)" strokeWidth="2" strokeLinecap="round"/>
    <defs>
      <linearGradient id="gradient13" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24"/>
        <stop offset="100%" stopColor="#f97316"/>
      </linearGradient>
    </defs>
  </svg>
);

export const SproutIcon = ({ className = "w-12 h-12" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22v-8M12 14c4-3 6-7 6-10-4 0-6 3-6 6M12 14c-4-3-6-7-6-10 4 0 6 3 6 6" stroke="url(#gradient14)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <defs>
      <linearGradient id="gradient14" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fb923c"/>
        <stop offset="100%" stopColor="#fbbf24"/>
      </linearGradient>
    </defs>
  </svg>
);

export const HandshakeIcon = ({ className = "w-12 h-12" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 13l2-2 3 3-2 2-3-3zM7 9l2-2 3 3-2 2-3-3zM15 17l2-2 3 3-2 2-3-3z" stroke="url(#gradient15)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 12l3-3 3 3M19 12l3-3 3 3" stroke="url(#gradient15)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <defs>
      <linearGradient id="gradient15" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f97316"/>
        <stop offset="100%" stopColor="#fb923c"/>
      </linearGradient>
    </defs>
  </svg>
);

