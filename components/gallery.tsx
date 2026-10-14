import { colors } from '@/lib/colors'
import { ArrowRightIcon } from '@/components/social-icons'

export function Gallery() {
  const images = [
    { src: '/gallery/work-1.jpg', alt: 'Custom cake design by Tayt\'s Cakes' },
    { src: '/gallery/work-2.jpg', alt: 'Custom cake by Tayt\'s Cakes' },
    { src: '/gallery/work-3.jpg', alt: 'Decorated cake by Tayt\'s Cakes' },
    { src: '/gallery/work-4.jpg', alt: 'Custom cake by Tayt\'s Cakes' },
    { src: '/gallery/work-5.jpg', alt: 'Specialty cake by Tayt\'s Cakes' },
    { src: '/gallery/work-6.jpg', alt: 'Custom cake by Tayt\'s Cakes' },
    { src: '/gallery/work-7.jpg', alt: 'Custom cake by Tayt\'s Cakes' },
    { src: '/gallery/work-8.jpg', alt: 'Custom cake by Tayt\'s Cakes' },
    { src: '/gallery/work-9.jpg', alt: 'Custom cake by Tayt\'s Cakes' },
    { src: '/gallery/work-10.jpg', alt: 'Custom cake by Tayt\'s Cakes' },
    { src: '/gallery/work-11.jpg', alt: 'Custom cake by Tayt\'s Cakes' },
    { src: '/gallery/work-12.jpg', alt: 'Custom cake by Tayt\'s Cakes' },
    { src: '/gallery/work-13.jpg', alt: 'Custom cake by Tayt\'s Cakes' },
    { src: '/gallery/work-14.jpg', alt: 'Custom cake by Tayt\'s Cakes' },
    { src: '/gallery/work-15.jpg', alt: 'Custom cake by Tayt\'s Cakes' },
    { src: '/gallery/work-16.jpg', alt: 'Custom cake by Tayt\'s Cakes' },
    { src: '/gallery/work-17.jpg', alt: 'Custom cake by Tayt\'s Cakes' },
    { src: '/gallery/work-18.jpg', alt: 'Custom cake by Tayt\'s Cakes' },
    { src: '/gallery/work-19.jpg', alt: 'Custom cake by Tayt\'s Cakes' },
    { src: '/gallery/work-20.jpg', alt: 'Custom cake by Tayt\'s Cakes' },
    { src: '/gallery/work-21.jpg', alt: 'Custom cake by Tayt\'s Cakes' },
    { src: '/gallery/work-22.jpg', alt: 'Custom cake by Tayt\'s Cakes' },
    { src: '/gallery/work-23.jpg', alt: 'Custom cake by Tayt\'s Cakes' },
    { src: '/gallery/work-24.jpg', alt: 'Custom cake by Tayt\'s Cakes' },
    { src: '/gallery/work-25.jpg', alt: 'Custom cake by Tayt\'s Cakes' },
    { src: '/gallery/work-26.jpg', alt: 'Custom cake by Tayt\'s Cakes' },
    { src: '/gallery/work-27.jpg', alt: 'Custom cake by Tayt\'s Cakes' },
    { src: '/gallery/work-28.jpg', alt: 'Custom cake by Tayt\'s Cakes' },
    { src: '/gallery/work-29.jpg', alt: 'Custom cake by Tayt\'s Cakes' },
    { src: '/gallery/work-30.jpg', alt: 'Custom cake by Tayt\'s Cakes' },
    { src: '/gallery/work-31.jpg', alt: 'Custom cake by Tayt\'s Cakes' },
    { src: '/gallery/work-32.jpg', alt: 'Custom cake by Tayt\'s Cakes' },
    { src: '/gallery/work-33.jpg', alt: 'Custom cake by Tayt\'s Cakes' },
    { src: '/gallery/work-34.jpg', alt: 'Custom cake by Tayt\'s Cakes' },
    { src: '/gallery/work-35.jpg', alt: 'Custom cake by Tayt\'s Cakes' },
    { src: '/gallery/work-36.jpg', alt: 'Custom cake by Tayt\'s Cakes' },
  ]

  return (
    <section className="w-full py-16 sm:py-24" style={{ backgroundColor: colors.background }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="reveal-item mb-16 text-center">
          <p className="font-body text-xs font-bold uppercase tracking-widest mb-3" style={{ color: colors.accentGold }}>
            The Work
          </p>
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-2">
            <div className="h-px w-8 sm:w-12 hidden sm:block" style={{ backgroundColor: colors.accentGold }} />
            <h2 className="font-heading text-3xl sm:text-5xl font-bold" style={{ color: colors.foreground }}>
              Made <span className="italic font-light">to Order</span>
            </h2>
            <div className="h-px w-8 sm:w-12 hidden sm:block" style={{ backgroundColor: colors.accentGold }} />
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 mb-12">
          {images.map((image, i) => (
            <div
              key={i}
              className="reveal-item group relative aspect-square w-full overflow-hidden rounded-2xl sm:rounded-3xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
              style={{ backgroundColor: colors.backgroundCard }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay caption on hover */}
              <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="pb-4 px-3 font-body text-xs font-medium text-center text-white">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Facebook Link */}
        <div className="reveal-item text-center">
          <a
            href="https://www.facebook.com/TaytsCakes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-sm font-medium transition-all hover:gap-3"
            style={{ color: colors.accentGold }}
          >
            Follow Tayt&apos;s Cakes on Facebook <ArrowRightIcon size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
