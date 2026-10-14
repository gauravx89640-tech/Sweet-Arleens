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
    <section className="relative flex min-h-[92vh] w-full items-center justify-center overflow-hidden" style={{ paddingTop: '120px' }}>
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
      />
      {/* Legibility scrim — asymmetric editorial gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, rgba(30,30,30,0.75) 0%, rgba(30,30,30,0.5) 40%, rgba(30,30,30,0.8) 100%)`,
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-2xl px-6 py-20 text-center">
        {/* Brand name — small, refined, top */}
        <p className="font-heading text-2xl sm:text-3xl tracking-[0.02em] mb-6" style={{ color: colors.background }}>
          Tayt&apos;s Cakes
        </p>

        {/* Headline — large editorial serif */}
        <h1 className="mx-auto mb-8 max-w-xl font-heading text-4xl font-normal leading-[1.1] sm:text-5xl xl:text-6xl" style={{ color: colors.background }}>
          Baked from scratch,{''}
          <span className="italic font-light"> made just for you.</span>
        </h1>

        {/* Subheading — restrained, not too wide */}
        <p className="mx-auto mb-10 max-w-md font-body text-base leading-relaxed" style={{ color: 'rgba(251,250,250,0.8)' }}>
          Custom cakes, cupcakes, cookies, pies, and cheesecakes —
          handcrafted by Taytlyn Greasham for celebrations across the
          Wichita metro.
        </p>

        {/* Buttons — clean, minimal, editorial */}
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            onClick={() => scrollToSection('#visit')}
            className="rounded-full px-7 py-3 font-body text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-300 hover:opacity-85"
            style={{ backgroundColor: colors.background, color: colors.foreground }}
          >
            Order a Custom Cake
          </button>
          <button
            onClick={() => scrollToSection('#flavors')}
            className="rounded-full px-7 py-3 font-body text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-300"
            style={{ border: `1px solid rgba(251,250,250,0.5)`, color: colors.background }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(251,250,250,0.1)'
              e.currentTarget.style.borderColor = colors.background
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.borderColor = 'rgba(251,250,250,0.5)'
            }}
          >
            Explore Flavors
          </button>
        </div>
      </div>
    </section>
  )
}
