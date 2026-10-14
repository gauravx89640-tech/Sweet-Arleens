import { colors } from '@/lib/colors'

export function Story() {
  return (
    <section id="story" className="w-full py-20 sm:py-32" style={{ backgroundColor: colors.background }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Editorial two-column layout */}
        <div className="grid items-center gap-12 lg:grid-cols-[5fr_7fr] lg:gap-20">
          {/* Portrait — no border, clean edges, offset caption */}
          <div className="relative mx-auto w-full max-w-sm lg:mx-0">
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://scontent.fbho3-5.fna.fbcdn.net/v/t39.30808-6/471425449_910730567852780_2921352559614269689_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x2044&ctp=s552x414&_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=50ad20&_nc_ohc=dFSuZNwXsNQQ7kNvwE2CsZt&_nc_oc=AdrJxseP21vcDUcP0dfBVZKvXbwf4Y2zOfEQ2iNDArithdAFX3M5YkLTnmIKZMYhrfUhNau7DEGjzu_LP1T3eIq7&_nc_zt=23&_nc_ht=scontent.fbho3-5.fna&_nc_gid=bjFFN4eD7mqbNHleaiarqQ&_nc_ss=7b2a8&oh=00_AQMbZ4XpUXJN_S4NgGGxQHWMe_ni4cfvYAZfWuFRGbEkUQ&oe=6AD4AE68"
                alt="Taytlyn Greasham, owner and baker at Tayt's Cakes"
                className="w-full object-cover"
                style={{ aspectRatio: '4 / 5', objectPosition: '50% 20%' }}
              />
            </div>
          </div>

          {/* Narrative — editorial magazine style */}
          <div>
            <p className="eyebrow mb-6" style={{ color: 'rgba(30,30,30,0.5)' }}>
              Our Story
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-normal leading-tight mb-8" style={{ color: colors.foreground }}>
              A home bakery built on{' '}
              <span className="italic font-light">heart &amp; scratch.</span>
            </h2>

            <div className="space-y-5">
              <p className="font-body text-base leading-relaxed" style={{ color: 'rgba(30,30,30,0.75)' }}>
                Tayt&apos;s Cakes is a local, home-based bakery owned and
                operated by Taytlyn Greasham. What started as a passion for
                baking has grown into a go-to custom bakery serving the
                Wichita metro and surrounding communities.
              </p>
              <p className="font-body text-base leading-relaxed" style={{ color: 'rgba(30,30,30,0.75)' }}>
                From themed birthday cakes and Tres Leches to cookie packs,
                cake pops, and specialty cheesecakes — everything is made from
                scratch and tailored to your celebration. Pickup, curbside, and
                local delivery make it easy to get your sweets wherever you are.
              </p>
            </div>

            {/* Signature — understated */}
            <div className="mt-8 pt-6" style={{ borderTop: `1px solid ${colors.backgroundTaupe}50` }}>
              <p className="font-heading text-xl italic font-light" style={{ color: colors.foreground }}>
                Taytlyn Greasham
              </p>
              <p className="font-body text-xs mt-1 uppercase tracking-wider" style={{ color: 'rgba(30,30,30,0.5)' }}>
                Owner &amp; Baker
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
