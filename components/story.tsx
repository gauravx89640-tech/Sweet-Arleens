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
            A Family Tradition,{' '}
            <span className="italic font-light">Three-Time Champion</span>
          </h2>
        </div>

        {/* Feature: Chef portrait + narrative */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Portrait */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="overflow-hidden rounded-3xl" style={{ border: `4px solid ${colors.accentGold}` }}>
              <img
                src="/chef-julia-portrait.jpg"
                alt="Chef Julia San Bartolome holding her Food Network Cupcake Wars award"
                className="w-full object-cover"
                style={{ aspectRatio: '4 / 5', objectPosition: '50% 25%' }}
              />
            </div>
            {/* Award caption chip */}
            <div
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-5 py-2 shadow-lg"
              style={{ backgroundColor: colors.accentGold }}
            >
              <span className="font-body text-xs font-bold uppercase tracking-wider" style={{ color: colors.backgroundCard }}>
                ★ 3× Cupcake Wars Champion
              </span>
            </div>
          </div>

          {/* Narrative */}
          <div>
            <p className="font-body text-xs font-bold uppercase tracking-widest mb-4" style={{ color: colors.accentGold }}>
              Meet the Maker
            </p>
            <p className="font-body text-lg leading-relaxed mb-6" style={{ color: `${colors.foreground}cc` }}>
              Sweet Arleen&apos;s began in 2009 with a simple commitment to
              perfection and quality. Today the kitchen is led by Executive Pastry
              Chef Julia San Bartolome — who joined the bakery, fell in love with
              the craft, and now co-owns it alongside her parents, Roberto and
              Barbara.
            </p>
            <p className="font-body text-lg leading-relaxed mb-8" style={{ color: `${colors.foreground}cc` }}>
              Together with original founder Arleen Scavone, the team earned three
              victories on Food Network&apos;s Cupcake Wars — and that same care
              goes into every cake, cupcake, and pastry made today.
            </p>

            {/* Signature */}
            <div className="border-t pt-5" style={{ borderColor: `${colors.accentGold}40` }}>
              <p className="font-heading text-2xl italic" style={{ color: colors.foreground }}>
                Chef Julia San Bartolome
              </p>
              <p className="font-body text-sm mt-1" style={{ color: `${colors.foreground}99` }}>
                Executive Pastry Chef &amp; Co-Owner
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
