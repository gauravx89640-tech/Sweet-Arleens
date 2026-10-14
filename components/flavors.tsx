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
            "url('https://scontent.fbho3-2.fna.fbcdn.net/v/t39.30808-6/470877951_905372628388574_2001674576296311846_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x2042&ctp=s552x414&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=50ad20&_nc_ohc=N-H3aIXVcnAQ7kNvwGN9WD7&_nc_oc=Adrv_U8K2Q_zShukX5vZa04SKLee5iHZZQIy9zabAvtbr7r54P7bFcvbdq7zWT4c8b3jF23l0JlcRld48cxqM1HW&_nc_zt=23&_nc_ht=scontent.fbho3-2.fna&_nc_gid=piU4wGYTA5Leu-R633Qylw&_nc_ss=7b2a8&oh=00_AQOY0qwbUpsJ3qJcbm6bZSdtBDFrthunxceztwQNYEZjQg&oe=6AD4D114')",
        }}
      />
      {/* Dark overlay for legibility */}
      <div
        className="absolute inset-0"
        style={{ background: `linear-gradient(${colors.foreground}a8, ${colors.backgroundTaupe}bf)` }}
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
          All cupcake flavors are available as full cakes too. Don&apos;t see
          what you&apos;re craving? Just ask — custom flavors are always welcome.
        </p>
      </div>
    </section>
  )
}
