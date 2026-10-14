import { colors } from '@/lib/colors'

export function Flavors() {
  const flavors = [
    'Red Velvet',
    'Vanilla',
    'Chocolate',
    'Tres Leches',
    'Funfetti',
    'Cinnamon Roll',
    'Carrot',
    'Cookies & Cream',
    'Lemon',
  ]

  return (
    <section
      id="flavors"
      className="relative w-full overflow-hidden py-20 sm:py-28"
      style={{ backgroundColor: colors.backgroundTaupe, color: colors.backgroundCard }}
    >
      {/* Background photo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/8477969/pexels-photo-8477969.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop')",
        }}
      />
      {/* Dark overlay for legibility */}
      <div
        className="absolute inset-0"
        style={{ background: `linear-gradient(${colors.foreground}a8, ${colors.backgroundTaupe}bf)` }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="reveal-item mb-16 text-center">
          <p className="font-body text-xs font-bold uppercase tracking-widest mb-3 opacity-90" style={{ color: colors.backgroundCard }}>
            Flavors
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold" style={{ color: colors.backgroundCard }}>
            Pick Your{' '}
            <span className="italic font-light">Favorite</span>
          </h2>
        </div>

        {/* Flavors Grid */}
        <div className="space-y-4">
          {flavors.map((flavor, i) => (
            <div
              key={flavor}
              className="reveal-item group flex items-center gap-4 transition-all duration-300 hover:scale-[1.02]"
              style={{ animationDelay: `${0.1 + i * 0.06}s` }}
            >
              <div className="h-px flex-1 transition-all duration-300 group-hover:bg-[#E8B4A0]" style={{ backgroundColor: `${colors.backgroundCard}66` }} />
              <p className="font-body text-lg font-medium whitespace-nowrap transition-colors duration-300 group-hover:text-[#E8B4A0]" style={{ color: colors.backgroundCard }}>
                {flavor}
              </p>
              <div className="h-px flex-1 transition-all duration-300 group-hover:bg-[#E8B4A0]" style={{ backgroundColor: `${colors.backgroundCard}66` }} />
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="reveal-item mt-12 text-center font-body text-sm italic leading-relaxed" style={{ color: `${colors.backgroundCard}cc` }}>
          All cupcake flavors are available as full cakes too. Don&apos;t see
          what you&apos;re craving? Just ask — custom flavors are always welcome.
        </p>
      </div>
    </section>
  )
}
