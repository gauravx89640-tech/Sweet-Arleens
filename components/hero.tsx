'use client'

import { colors } from '@/lib/colors'

// Pexels hero image — elegant celebration cake
const HERO_IMAGE =
  'https://images.pexels.com/photos/32191353/pexels-photo-32191353.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop'

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden" style={{ paddingTop: '120px' }}>
      {/* Background image with slow zoom */}
      <div
        className="slow-zoom absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
      />
      {/* Legibility scrim */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(${colors.foreground}cc, ${colors.foreground}99, ${colors.foreground}cc)`,
        }}
      />

      <div className="hero-anim relative z-10 mx-auto w-full max-w-3xl px-6 py-20 text-center">
        {/* Brand name */}
        <p className="font-heading text-4xl sm:text-5xl tracking-tight" style={{ color: colors.backgroundCard }}>
          Tayt&apos;s Cakes
        </p>
        <div className="mx-auto my-5 h-px w-16" style={{ backgroundColor: `${colors.accentRose}cc` }} />

        {/* Eyebrow */}
        <p className="mb-6 font-body text-xs font-bold uppercase tracking-[0.25em]" style={{ color: colors.accentRose }}>
          Wichita, Kansas · Home-Based Bakery
        </p>

        {/* Headline */}
        <h1 className="mx-auto mb-6 max-w-2xl font-heading text-4xl font-bold leading-[1.08] sm:text-6xl xl:text-7xl" style={{ color: colors.backgroundCard }}>
          Baked from Scratch,{' '}
          <span className="italic font-light">Made Just for You.</span>
        </h1>

        {/* Subheading */}
        <p className="mx-auto mb-9 max-w-xl font-body text-lg leading-relaxed" style={{ color: `${colors.backgroundCard}e6` }}>
          Custom cakes, cupcakes, cookies, pies, cake pops, and specialty
          cheesecakes — handcrafted by Taytlyn Greasham for your celebrations
          across the Wichita metro.
        </p>

        {/* Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            onClick={() => scrollToSection('#visit')}
            className="rounded-full px-8 py-3 font-body text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
            style={{ backgroundColor: colors.accentGold, color: colors.background }}
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
            className="rounded-full px-8 py-3 font-body text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95"
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
        <div className="shimmer-anim mt-8 flex items-center justify-center gap-3">
          <span className="text-lg tracking-tight" style={{ color: colors.accentRose }}>
            ★★★★★
          </span>
          <span className="font-body text-sm" style={{ color: `${colors.backgroundCard}cc` }}>
            Homemade with love for Wichita celebrations
          </span>
        </div>
      </div>
    </section>
  )
}
