import { colors } from '@/lib/colors'
import { CookieIllustration, PhoneIllustration, BagIllustration } from '@/components/illustrations'

export function HowToOrder() {
  const steps = [
    {
      icon: <CookieIllustration size={64} color={colors.accentGold} />,
      title: 'Pick Your Treat',
      description: 'Browse our flavors and craft — cakes, cupcakes, cookies, cake pops, pies, and cheesecakes.',
    },
    {
      icon: <PhoneIllustration size={64} color={colors.accentGold} />,
      title: 'Call or Email',
      description: 'Reach out with your idea, date, and serving count. We\'ll quote and confirm your custom order.',
    },
    {
      icon: <BagIllustration size={64} color={colors.accentGold} />,
      title: 'Pickup or Delivery',
      description: 'Grab it curbside in Wichita or get local delivery right to your celebration.',
    },
  ]

  return (
    <section id="how-to-order" className="w-full py-20 sm:py-28" style={{ backgroundColor: colors.background }}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="reveal-item mb-16 text-center">
          <p className="font-body text-xs font-bold uppercase tracking-widest mb-3" style={{ color: colors.accentGold }}>
            Simple &amp; Sweet
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold" style={{ color: colors.foreground }}>
            How to{' '}
            <span className="italic font-light">Order</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
          {steps.map((step, i) => (
            <div key={step.title} className="reveal-item relative flex flex-col items-center text-center">
              {/* Connector line between steps (desktop only) */}
              {i < steps.length - 1 && (
                <div
                  className="absolute top-8 hidden md:block"
                  style={{
                    left: 'calc(50% + 48px)',
                    width: 'calc(100% - 96px)',
                    height: '2px',
                    backgroundImage: `linear-gradient(to right, ${colors.accentGold}55 50%, transparent 50%)`,
                    backgroundSize: '12px 2px',
                  }}
                />
              )}

              {/* Number badge */}
              <div
                className="absolute -top-2 right-1/2 translate-x-[52px] flex h-7 w-7 items-center justify-center rounded-full font-body text-xs font-bold"
                style={{ backgroundColor: colors.accentGold, color: colors.background }}
              >
                {i + 1}
              </div>

              {/* Icon */}
              <div className="float-anim mb-5 flex h-24 w-24 items-center justify-center rounded-full transition-transform duration-300 hover:scale-110" style={{ backgroundColor: colors.backgroundCard }}>
                {step.icon}
              </div>

              {/* Title & description */}
              <h3 className="font-heading text-xl font-bold mb-2" style={{ color: colors.foreground }}>
                {step.title}
              </h3>
              <p className="font-body text-sm leading-relaxed max-w-xs" style={{ color: `${colors.foreground}99` }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal-item mt-14 text-center">
          <a
            href="#visit"
            className="inline-block rounded-full px-8 py-3 font-body text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
            style={{ backgroundColor: colors.accentGold, color: colors.background }}
          >
            Start Your Order
          </a>
        </div>
      </div>
    </section>
  )
}
