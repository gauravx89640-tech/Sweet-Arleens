type IconProps = { size?: number; className?: string; color?: string }

/* Hand-drawn-style SVG illustrations for Tayt's Cakes.
   Each uses a wobbly stroke to evoke a sketchbook feel. */

export function CakeIllustration({ size = 80, className, color = '#C77B5C' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
      {/* Plate */}
      <path d="M15 82 Q50 86 85 82" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      {/* Cake body */}
      <path d="M25 82 V58 Q25 54 29 54 H71 Q75 54 75 58 V82" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Frosting drips */}
      <path d="M25 58 Q28 64 31 58 Q34 64 37 58 Q40 64 43 58 Q46 64 49 58 Q52 64 55 58 Q58 64 61 58 Q64 64 67 58 Q70 64 73 58 Q75 61 75 58"
        stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Top layer */}
      <path d="M35 54 V42 Q35 38 39 38 H61 Q65 38 65 42 V54" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M35 42 Q38 47 41 42 Q44 47 47 42 Q50 47 53 42 Q56 47 59 42 Q62 47 65 42"
        stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Candle */}
      <line x1="50" y1="38" x2="50" y2="28" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      {/* Flame */}
      <path d="M50 28 Q47 24 50 20 Q53 24 50 28" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Decorative dots */}
      <circle cx="38" cy="68" r="2" fill={color} />
      <circle cx="52" cy="70" r="2" fill={color} />
      <circle cx="64" cy="66" r="2" fill={color} />
    </svg>
  )
}

export function CupcakeIllustration({ size = 80, className, color = '#C77B5C' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
      {/* Wrapper */}
      <path d="M30 52 L36 82 H64 L70 52 Z" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Wrapper lines */}
      <line x1="38" y1="58" x2="40" y2="78" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="46" y1="58" x2="48" y2="78" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="54" y1="58" x2="56" y2="78" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="62" y1="58" x2="64" y2="78" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      {/* Frosting swirl */}
      <path d="M28 52 Q24 44 30 38 Q26 32 34 28 Q32 22 40 20 Q44 14 50 16 Q56 14 60 20 Q68 22 66 28 Q74 32 70 38 Q76 44 72 52"
        stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Cherry on top */}
      <circle cx="50" cy="14" r="4" stroke={color} strokeWidth="2" />
      <path d="M50 10 Q52 6 56 8" stroke={color} strokeWidth="2" strokeLinecap="round" />
      {/* Sprinkles */}
      <line x1="36" y1="34" x2="40" y2="36" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="58" y1="32" x2="62" y2="30" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="44" y1="26" x2="42" y2="30" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function WhiskIllustration({ size = 80, className, color = '#C77B5C' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
      {/* Handle */}
      <path d="M62 10 L54 30" stroke={color} strokeWidth="3" strokeLinecap="round" />
      {/* Whisk wires */}
      <path d="M54 30 Q40 40 36 60 Q34 72 42 78" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M54 30 Q48 42 48 60 Q48 72 50 80" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M54 30 Q60 42 62 60 Q62 72 58 80" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M54 30 Q68 40 70 60 Q70 72 62 78" stroke={color} strokeWidth="2" strokeLinecap="round" />
      {/* Connection point */}
      <circle cx="54" cy="30" r="3" stroke={color} strokeWidth="2" />
    </svg>
  )
}

export function RollingPinIllustration({ size = 80, className, color = '#C77B5C' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
      {/* Main barrel */}
      <rect x="20" y="42" width="55" height="16" rx="8" stroke={color} strokeWidth="2.5" />
      {/* Handles */}
      <path d="M20 50 L10 50" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <path d="M75 50 L85 50" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <circle cx="8" cy="50" r="4" stroke={color} strokeWidth="2.5" />
      <circle cx="87" cy="50" r="4" stroke={color} strokeWidth="2.5" />
      {/* Wood grain lines */}
      <line x1="30" y1="46" x2="65" y2="46" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <line x1="28" y1="50" x2="68" y2="50" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <line x1="32" y1="54" x2="62" y2="54" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.5" />
    </svg>
  )
}

export function CookieIllustration({ size = 80, className, color = '#C77B5C' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
      {/* Cookie outline — slightly wobbly circle */}
      <path d="M50 18 Q72 18 80 38 Q86 58 74 74 Q58 86 40 80 Q22 74 18 54 Q16 34 34 22 Q42 18 50 18"
        stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Chocolate chips */}
      <ellipse cx="38" cy="38" rx="4" ry="3" fill={color} />
      <ellipse cx="58" cy="34" rx="4" ry="3" fill={color} />
      <ellipse cx="64" cy="56" rx="4" ry="3" fill={color} />
      <ellipse cx="42" cy="60" rx="4" ry="3" fill={color} />
      <ellipse cx="52" cy="48" rx="3" ry="2.5" fill={color} />
      <ellipse cx="34" cy="52" rx="3" ry="2.5" fill={color} />
    </svg>
  )
}

export function HeartIllustration({ size = 80, className, color = '#C77B5C' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
      <path d="M50 82 Q20 60 20 40 Q20 24 36 24 Q46 24 50 34 Q54 24 64 24 Q80 24 80 40 Q80 60 50 82"
        stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function PhoneIllustration({ size = 80, className, color = '#C77B5C' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
      {/* Phone body */}
      <rect x="32" y="14" width="36" height="72" rx="6" stroke={color} strokeWidth="2.5" />
      {/* Screen */}
      <rect x="36" y="22" width="28" height="50" rx="2" stroke={color} strokeWidth="1.5" />
      {/* Home button */}
      <circle cx="50" cy="80" r="3" stroke={color} strokeWidth="2" />
      {/* Earpiece */}
      <line x1="44" y1="18" x2="56" y2="18" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function BagIllustration({ size = 80, className, color = '#C77B5C' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
      {/* Bag body */}
      <path d="M28 30 L72 30 L68 82 Q68 86 64 86 H36 Q32 86 32 82 Z"
        stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Handles */}
      <path d="M38 30 Q38 18 50 18 Q62 18 62 30" stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Fold line */}
      <path d="M28 30 Q50 36 72 30" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      {/* Decorative dot */}
      <circle cx="50" cy="55" r="3" fill={color} />
    </svg>
  )
}
