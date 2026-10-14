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
      className="relative w-full overflow-hidden py-24 sm:py-36"
    >
      {/* Background photo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://scontent.fbho3-2.fna.fbcdn.net/v/t39.30808-6/470877951_905372628388574_2001674576296311846_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x2042&ctp=s552x414&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=50ad20&_nc_ohc=N-H3aIXVcnAQ7kNvwGN9WD7&_nc_oc=Adrv_U8K2Q_zShukX5vZa04SKLee5iHZZQIy9zabAvtbr7r54P7bFcvbdq7zWT4c8b3jF23l0JlcRld48cxqM1HW&_nc_zt=23&_nc_ht=scontent.fbho3-2.fna&_nc_gid=piU4wGYTA5Leu-R633Qylw&_nc_ss=7b2a8&oh=00_AQOY0qwbUpsJ3qJcbm6bZSdtBDFrthunxceztwQNYEZjQg&oe=6AD4D114')",
        }}
      />
      {/* Charcoal overlay for legibility */}
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(30,30,30,0.82)' }}
      />

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="eyebrow mb-4" style={{ color: 'rgba(251,250,250,0.6)' }}>
            Flavors
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-normal" style={{ color: colors.background }}>
            Pick your{' '}
            <span className="italic font-light">favorite.</span>
          </h2>
        </div>

        {/* Flavors — editorial list with thin dividers */}
        <div className="space-y-0">
          {flavors.map((flavor, i) => (
            <div
              key={flavor}
              className="flex items-center gap-4 py-4"
              style={{ borderBottom: `1px solid rgba(251,250,250,0.15)` }}
            >
              <span className="font-body text-xs tabular-nums" style={{ color: 'rgba(251,250,250,0.4)' }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="font-heading text-lg font-normal" style={{ color: colors.background }}>
                {flavor}
              </p>
              <div className="ml-auto h-px flex-1 max-w-[100px]" style={{ backgroundColor: 'rgba(251,250,250,0.15)' }} />
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="mt-12 text-center font-body text-sm italic leading-relaxed" style={{ color: 'rgba(251,250,250,0.65)' }}>
          All cupcake flavors are available as full cakes too. Don&apos;t see
          what you&apos;re craving? Just ask — custom flavors are always welcome.
        </p>
      </div>
    </section>
  )
}
