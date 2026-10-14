import { colors } from '@/lib/colors'
import { CakeIllustration, CupcakeIllustration, CookieIllustration, HeartIllustration } from '@/components/illustrations'

const items = [
  { text: 'Custom Cakes', icon: <CakeIllustration size={28} color={colors.background} /> },
  { text: 'Cupcakes', icon: <CupcakeIllustration size={28} color={colors.background} /> },
  { text: 'Cookies & Cake Pops', icon: <CookieIllustration size={28} color={colors.background} /> },
  { text: 'Made from Scratch', icon: <HeartIllustration size={28} color={colors.background} /> },
  { text: 'Pies & Cheesecakes', icon: <CakeIllustration size={28} color={colors.background} /> },
  { text: 'Serving Wichita', icon: <HeartIllustration size={28} color={colors.background} /> },
]

export function Marquee() {
  // Duplicate the list so the scroll loops seamlessly
  const loop = [...items, ...items, ...items, ...items]

  return (
    <div
      className="relative w-full overflow-hidden py-4"
      style={{ backgroundColor: colors.accentGold }}
    >
      {/* Fade edges */}
      <div
        className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20"
        style={{ background: `linear-gradient(to right, ${colors.accentGold}, transparent)` }}
      />
      <div
        className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20"
        style={{ background: `linear-gradient(to left, ${colors.accentGold}, transparent)` }}
      />

      {/* Scrolling track */}
      <div className="marquee-track flex items-center gap-8 whitespace-nowrap">
        {loop.map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="shrink-0">{item.icon}</span>
            <span
              className="font-heading text-lg sm:text-xl font-medium italic"
              style={{ color: colors.background }}
            >
              {item.text}
            </span>
            {/* Dot separator */}
            <span
              className="ml-4 inline-block h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: `${colors.background}66` }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
