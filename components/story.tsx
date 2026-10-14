import { colors } from '@/lib/colors'

export function Story() {
  return (
    <section id="story" className="w-full py-16 sm:py-24" style={{ backgroundColor: colors.backgroundCard }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 text-center">
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
          {/* Portrait */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="overflow-hidden rounded-3xl" style={{ border: `4px solid ${colors.accentGold}` }}>
              <img
                src="https://scontent.fbho3-5.fna.fbcdn.net/v/t39.30808-6/471425449_910730567852780_2921352559614269689_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x2044&ctp=s552x414&_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=50ad20&_nc_ohc=dFSuZNwXsNQQ7kNvwE2CsZt&_nc_oc=AdrJxseP21vcDUcP0dfBVZKvXbwf4Y2zOfEQ2iNDArithdAFX3M5YkLTnmIKZMYhrfUhNau7DEGjzu_LP1T3eIq7&_nc_zt=23&_nc_ht=scontent.fbho3-5.fna&_nc_gid=bjFFN4eD7mqbNHleaiarqQ&_nc_ss=7b2a8&oh=00_AQMbZ4XpUXJN_S4NgGGxQHWMe_ni4cfvYAZfWuFRGbEkUQ&oe=6AD4AE68"
                alt="Taytlyn Greasham, owner and baker at Tayt's Cakes"
                className="w-full object-cover"
                style={{ aspectRatio: '4 / 5', objectPosition: '50% 20%' }}
              />
            </div>
            {/* Caption chip */}
            <div
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-5 py-2 shadow-lg"
              style={{ backgroundColor: colors.accentGold }}
            >
              <span className="font-body text-xs font-bold uppercase tracking-wider" style={{ color: colors.backgroundCard }}>
                Wichita&apos;s Home Bakery
              </span>
            </div>
          </div>

          {/* Narrative */}
          <div>
            <p className="font-body text-xs font-bold uppercase tracking-widest mb-4" style={{ color: colors.accentGold }}>
              Meet the Maker
            </p>
            <p className="font-body text-lg leading-relaxed mb-6" style={{ color: `${colors.foreground}cc` }}>
              Tayt&apos;s Cakes is a local, home-based bakery owned and operated
              by Taytlyn Greasham. What started as a passion for baking has grown
              into a go-to custom bakery serving the Wichita metro and surrounding
              communities.
            </p>
            <p className="font-body text-lg leading-relaxed mb-8" style={{ color: `${colors.foreground}cc` }}>
              From themed birthday cakes and Tres Leches to cookie packs, cake
              pops, and specialty cheesecakes, everything is made from scratch and
              tailored to your celebration. Pickup, curbside, and local delivery
              make it easy to get your sweets wherever you are.
            </p>

            {/* Signature */}
            <div className="border-t pt-5" style={{ borderColor: `${colors.accentGold}40` }}>
              <p className="font-heading text-2xl italic" style={{ color: colors.foreground }}>
                Taytlyn Greasham
              </p>
              <p className="font-body text-sm mt-1" style={{ color: `${colors.foreground}99` }}>
                Owner &amp; Baker
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
