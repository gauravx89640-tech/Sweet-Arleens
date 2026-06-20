'use client'

import { colors } from '@/lib/colors'

// Full-bleed editorial hero. Background is a stock "mood" cake shot (easy to
// swap — just change HERO_IMAGE); every photo below the hero is the real bakery.
const HERO_IMAGE =
  'https://images.unsplash.com/photo-1677840147138-72161ef2b6f5?q=80&w=2400&auto=format&fit=crop'

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
      />
      {/* Legibility scrim */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(${colors.foreground}cc, ${colors.foreground}99, ${colors.foreground}cc)`,
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-3xl px-6 py-20 text-center">
        {/* Brand name */}
        <p className="font-heading text-4xl sm:text-5xl tracking-tight" style={{ color: colors.backgroundCard }}>
          Sweet Arleen&apos;s
        </p>
        <div className="mx-auto my-5 h-px w-16" style={{ backgroundColor: `${colors.accentRose}cc` }} />

        {/* Eyebrow */}
        <p className="mb-6 font-body text-xs font-bold uppercase tracking-[0.25em]" style={{ color: colors.accentRose }}>
          Westlake Village, CA · Since 2009
        </p>

        {/* Headline */}
        <h1 className="mx-auto mb-6 max-w-2xl font-heading text-4xl font-bold leading-[1.08] sm:text-6xl xl:text-7xl" style={{ color: colors.backgroundCard }}>
          Crafted with Heart,{' '}
          <span className="italic font-light">Baked to Perfection.</span>
        </h1>

        {/* Subheading */}
        <p className="mx-auto mb-9 max-w-xl font-body text-lg leading-relaxed" style={{ color: `${colors.backgroundCard}e6` }}>
          Custom cakes, cupcakes, and pastries from a three-time Cupcake Wars
          champion — made by hand, the way they should be.
        </p>

        {/* Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            onClick={() => scrollToSection('#visit')}
            className="rounded-full px-8 py-3 font-body text-sm font-bold uppercase tracking-wider transition-all hover:scale-105"
            style={{ backgroundColor: colors.accentGold, color: colors.backgroundCard }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = colors.accentGoldDark
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = colors.accentGold
            }}
          >
            Order a Custom Cake
          </button>
          <button
            onClick={() => scrollToSection('#flavors')}
            className="rounded-full px-8 py-3 font-body text-sm font-bold uppercase tracking-wider transition-all"
            style={{ border: `2px solid ${colors.backgroundCard}`, color: colors.backgroundCard }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = `${colors.backgroundCard}1f`
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
            }}
          >
            Explore Our Flavors
          </button>
        </div>

        {/* Social proof */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <span className="text-lg tracking-tight" style={{ color: colors.accentRose }}>
            ★★★★★
          </span>
          <span className="font-body text-sm" style={{ color: `${colors.backgroundCard}cc` }}>
            Loved by Westlake Village for 15+ years
          </span>
        </div>
      </div>
    </section>
  )
}
