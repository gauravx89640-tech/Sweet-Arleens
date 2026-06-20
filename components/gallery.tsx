import { colors } from '@/lib/colors'
import { ArrowRightIcon } from '@/components/social-icons'

export function Gallery() {
  // Curated for consistent studio backgrounds (dropped the sky-blue coconut
  // and busy Easter shots that broke the grid's cohesion).
  const images = [
    '/cupcake2.jpg',
    '/cupcake1.jpg',
    '/cupcake7.jpg',
    '/cupcake3.jpg',
    '/community-cake.jpg',
    '/cupcake5.jpg',
    '/cupcake.jpg',
    '/cupcake6.jpg',
    '/cupcake4.jpg',
  ]

  return (
    <section className="w-full py-16 sm:py-24" style={{ backgroundColor: colors.background }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="font-body text-xs font-bold uppercase tracking-widest mb-3" style={{ color: colors.accentGold }}>
            The Work
          </p>
          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="h-px w-12" style={{ backgroundColor: colors.accentGold }} />
            <h2 className="font-heading text-4xl sm:text-5xl font-bold" style={{ color: colors.foreground }}>
              Made <span className="italic font-light">to Order</span>
            </h2>
            <div className="h-px w-12" style={{ backgroundColor: colors.accentGold }} />
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 mb-12">
          {images.map((src, i) => (
            <div
              key={i}
              className="group relative aspect-square w-full overflow-hidden rounded-2xl sm:rounded-3xl transition-all hover:shadow-xl"
              style={{ backgroundColor: colors.backgroundCard }}
            >
              <img
                src={src}
                alt={`Sweet Arleen's creation ${i + 1}`}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* Instagram Link */}
        <div className="text-center">
          <a
            href="https://instagram.com/sweetarleens"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-sm font-medium transition-all hover:gap-3"
            style={{ color: colors.accentGold }}
          >
            Follow @sweetarleens on Instagram <ArrowRightIcon size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
