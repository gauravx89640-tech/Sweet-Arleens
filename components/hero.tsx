'use client'

import { colors } from '@/lib/colors'

const HERO_IMAGE =
  'https://scontent.fbho3-4.fna.fbcdn.net/v/t39.30808-6/470780243_905372785055225_834949861267358704_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x2044&ctp=s552x414&_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=50ad20&_nc_ohc=3bXCaMEA9RAQ7kNvwHoehwL&_nc_oc=AdotbeJIKmJ68bRxlUXS9ntTkZ6Ehy-wbu8RkhR5sCJzhGkscjfjTk15xNgiVc50p4SJTXwou-AH4u2mUU-KLVEg&_nc_zt=23&_nc_ht=scontent.fbho3-4.fna&_nc_gid=WO_4yf_AarPH_y1ziBfE9g&_nc_ss=7b2a8&oh=00_AQOqNOeOM7-18xHL43c_-s5913mqqye_T6Gbor-GBYC7tQ&oe=6AD4C7CE'

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden" style={{ paddingTop: '120px' }}>
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
            className="rounded-full px-8 py-3 font-body text-sm font-bold uppercase tracking-wider transition-all hover:scale-105"
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
            Homemade with love for Wichita celebrations
          </span>
        </div>
      </div>
    </section>
  )
}
