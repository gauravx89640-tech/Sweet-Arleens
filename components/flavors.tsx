import { colors } from '@/lib/colors'

export function Flavors() {
  const flavors = [
    'Red Velvet',
    'Vanilla',
    'Chocolate',
    'Cookies & Cream',
    'Spice',
    'Funfetti',
    'Carrot',
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
            "url('https://images.unsplash.com/photo-1660868984987-28c21c569e7c?q=80&w=2070&auto=format&fit=crop')",
        }}
      />
      {/* Dark overlay for legibility */}
      <div
        className="absolute inset-0"
        style={{ background: `linear-gradient(${colors.foreground}d9, ${colors.backgroundTaupe}e6)` }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
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
          {flavors.map((flavor) => (
            <div key={flavor} className="flex items-center gap-4">
              <div className="h-px flex-1" style={{ backgroundColor: `${colors.backgroundCard}66` }} />
              <p className="font-body text-lg font-medium whitespace-nowrap" style={{ color: colors.backgroundCard }}>
                {flavor}
              </p>
              <div className="h-px flex-1" style={{ backgroundColor: `${colors.backgroundCard}66` }} />
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="mt-12 text-center font-body text-sm italic leading-relaxed" style={{ color: `${colors.backgroundCard}cc` }}>
          All cupcake flavors are available for cakes too. Vanilla buttercream is
          our signature icing — ask us about custom fillings.
        </p>
      </div>
    </section>
  )
}
