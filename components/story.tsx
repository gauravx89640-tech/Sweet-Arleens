import { colors } from '@/lib/colors'
import { WhiskIllustration, RollingPinIllustration, HeartIllustration } from '@/components/illustrations'

export function Story() {
  return (
    <section id="story" className="w-full py-16 sm:py-24" style={{ backgroundColor: colors.backgroundCard }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="reveal-item mb-14 text-center">
          <p className="font-body text-xs font-bold uppercase tracking-widest mb-3" style={{ color: colors.accentGold }}>
            Our Story
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold" style={{ color: colors.foreground }}>
            A Home Bakery Built on{' '}
            <span className="italic font-light">Heart &amp; Scratch</span>
          </h2>
        </div>

        {/* Feature: Baker portrait + narrative */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Portrait — user-provided photo of Taytlyn */}
          <div className="reveal-item relative mx-auto w-full max-w-md">
            <div className="overflow-hidden rounded-3xl transition-all duration-500 hover:shadow-2xl" style={{ border: `4px solid ${colors.accentGold}` }}>
              <img
                src="/gallery/portrait.jpg"
                alt="Taytlyn Greasham, owner and baker at Tayt's Cakes"
                className="w-full object-cover"
                style={{ aspectRatio: '4 / 5', objectPosition: '50% 20%' }}
              />
            </div>
            {/* Caption chip */}
            <div
              className="float-anim absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-5 py-2 shadow-lg"
              style={{ backgroundColor: colors.accentGold }}
            >
              <span className="font-body text-xs font-bold uppercase tracking-wider" style={{ color: colors.background }}>
                Wichita&apos;s Home Bakery
              </span>
            </div>
          </div>

          {/* Narrative */}
          <div className="reveal-item relative">
            {/* Decorative whisk */}
            <div className="float-anim absolute -top-6 -right-4 opacity-30 hidden sm:block">
              <WhiskIllustration size={56} color={colors.accentGold} />
            </div>
            <p className="font-body text-xs font-bold uppercase tracking-widest mb-4" style={{ color: colors.accentGold }}>
              Meet the Maker
            </p>
            <p className="font-body text-lg leading-relaxed mb-6" style={{ color: `${colors.foreground}cc` }}>
              Tayt&apos;s Cakes is a local, home-based bakery owned and operated
              by Taytlyn Greasham. What started in 2020 as a passion for baking
              has grown into a go-to custom bakery serving the Wichita metro and
              surrounding communities — with over 7 years of experience crafting
              memorable cakes and sweets.
            </p>
            <p className="font-body text-lg leading-relaxed mb-8" style={{ color: `${colors.foreground}cc` }}>
              From themed birthday cakes, surprise reveal cakes, and Tres Leches
              to cookie packs, cake pops, and specialty cheesecakes, everything
              is made from scratch and tailored to your celebration. Pickup,
              curbside, and local delivery make it easy to get your sweets
              wherever you are.
            </p>

            {/* Signature */}
            <div className="flex items-center gap-3 border-t pt-5" style={{ borderColor: `${colors.accentGold}40` }}>
              <HeartIllustration size={28} color={colors.accentGold} />
              <div>
                <p className="font-heading text-xl sm:text-2xl italic" style={{ color: colors.foreground }}>
                  Taytlyn Greasham
                </p>
                <p className="font-body text-sm mt-0.5" style={{ color: `${colors.foreground}99` }}>
                  Owner &amp; Baker
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
