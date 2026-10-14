import { colors } from '@/lib/colors'

export function TrustStrip() {
  return (
    <section className="w-full py-12 sm:py-16" style={{ backgroundColor: colors.backgroundCard }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-4 mb-6 sm:gap-12">
          {/* Stat 1 */}
          <div className="reveal-item text-center transition-all duration-500 hover:scale-105">
            <p className="font-heading text-4xl sm:text-5xl font-bold" style={{ color: colors.accentGold }}>
              100%
            </p>
            <p className="font-body text-xs sm:text-sm font-medium uppercase tracking-widest mt-2" style={{ color: `${colors.foreground}b3` }}>
              Homemade from Scratch
            </p>
          </div>

          {/* Stat 2 */}
          <div className="reveal-item text-center transition-all duration-500 hover:scale-105">
            <p className="font-heading text-4xl sm:text-5xl font-bold" style={{ color: colors.accentGold }}>
              7+
            </p>
            <p className="font-body text-xs sm:text-sm font-medium uppercase tracking-widest mt-2" style={{ color: `${colors.foreground}b3` }}>
              Years of Baking
            </p>
          </div>

          {/* Stat 3 */}
          <div className="reveal-item text-center transition-all duration-500 hover:scale-105">
            <p className="font-heading text-4xl sm:text-5xl font-bold" style={{ color: colors.accentGold }}>
              Pickup
            </p>
            <p className="font-body text-xs sm:text-sm font-medium uppercase tracking-widest mt-2" style={{ color: `${colors.foreground}b3` }}>
              Curbside &amp; Delivery
            </p>
          </div>
        </div>

        {/* Attribution */}
        <div className="reveal-item pt-6 text-center" style={{ borderTopColor: `${colors.backgroundTaupe}4d`, borderTopWidth: '1px' }}>
          <p className="font-body text-sm" style={{ color: `${colors.foreground}99` }}>
            Proudly serving Wichita, Andover, Goddard, Augusta, Derby, Topeka &amp; Hutchinson
          </p>
        </div>
      </div>
    </section>
  )
}
