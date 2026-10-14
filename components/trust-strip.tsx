import { colors } from '@/lib/colors'

export function TrustStrip() {
  return (
    <section className="w-full py-14 sm:py-20" style={{ backgroundColor: colors.backgroundCard }}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-4 sm:gap-8">
          {/* Stat 1 */}
          <div className="text-center">
            <p className="font-heading text-3xl sm:text-4xl font-normal" style={{ color: colors.foreground }}>
              100%
            </p>
            <p className="font-body text-xs font-medium uppercase tracking-[0.15em] mt-3" style={{ color: 'rgba(30,30,30,0.6)' }}>
              From Scratch
            </p>
          </div>

          {/* Stat 2 */}
          <div className="text-center" style={{ borderLeft: `1px solid ${colors.backgroundTaupe}55`, borderRight: `1px solid ${colors.backgroundTaupe}55` }}>
            <p className="font-heading text-3xl sm:text-4xl font-normal" style={{ color: colors.foreground }}>
              7+
            </p>
            <p className="font-body text-xs font-medium uppercase tracking-[0.15em] mt-3" style={{ color: 'rgba(30,30,30,0.6)' }}>
              Cities Served
            </p>
          </div>

          {/* Stat 3 */}
          <div className="text-center">
            <p className="font-heading text-3xl sm:text-4xl font-normal" style={{ color: colors.foreground }}>
              Pickup
            </p>
            <p className="font-body text-xs font-medium uppercase tracking-[0.15em] mt-3" style={{ color: 'rgba(30,30,30,0.6)' }}>
              Curbside &amp; Delivery
            </p>
          </div>
        </div>

        {/* Attribution */}
        <div className="mt-10 pt-6 text-center" style={{ borderTop: `1px solid ${colors.backgroundTaupe}40` }}>
          <p className="font-body text-xs tracking-wide" style={{ color: 'rgba(30,30,30,0.5)' }}>
            Wichita · Andover · Goddard · Augusta · Derby · Topeka · Hutchinson
          </p>
        </div>
      </div>
    </section>
  )
}
