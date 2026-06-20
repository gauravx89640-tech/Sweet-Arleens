import { colors } from '@/lib/colors'

export function TrustStrip() {
  return (
    <section className="w-full py-12 sm:py-16" style={{ backgroundColor: colors.backgroundCard }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-4 mb-6 sm:gap-12">
          {/* Stat 1 */}
          <div className="text-center">
            <p className="font-heading text-4xl sm:text-5xl font-bold" style={{ color: colors.accentGold }}>
              2009
            </p>
            <p className="font-body text-xs sm:text-sm font-medium uppercase tracking-widest mt-2" style={{ color: `${colors.foreground}b3` }}>
              Baking Since
            </p>
          </div>

          {/* Stat 2 */}
          <div className="text-center">
            <p className="font-heading text-4xl sm:text-5xl font-bold" style={{ color: colors.accentGold }}>
              3×
            </p>
            <p className="font-body text-xs sm:text-sm font-medium uppercase tracking-widest mt-2" style={{ color: `${colors.foreground}b3` }}>
              Cupcake Wars Champion
            </p>
          </div>

          {/* Stat 3 */}
          <div className="text-center">
            <p className="font-heading text-4xl sm:text-5xl font-bold" style={{ color: colors.accentGold }}>
              100%
            </p>
            <p className="font-body text-xs sm:text-sm font-medium uppercase tracking-widest mt-2" style={{ color: `${colors.foreground}b3` }}>
              Handcrafted Daily
            </p>
          </div>
        </div>

        {/* Attribution */}
        <div className="pt-6 text-center" style={{ borderTopColor: `${colors.backgroundTaupe}4d`, borderTopWidth: '1px' }}>
          <p className="font-body text-sm" style={{ color: `${colors.foreground}99` }}>
            As seen on Food Network&apos;s Cupcake Wars
          </p>
        </div>
      </div>
    </section>
  )
}
