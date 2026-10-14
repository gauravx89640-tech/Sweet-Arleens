import { colors } from '@/lib/colors'
import { ArrowRightIcon } from '@/components/social-icons'

export function Gallery() {
  const images = [
    { src: 'https://images.pexels.com/photos/32191353/pexels-photo-32191353.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop', alt: 'Festive birthday cake with colorful icing' },
    { src: 'https://images.pexels.com/photos/33695614/pexels-photo-33695614.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop', alt: 'White birthday cake with gold crown' },
    { src: 'https://images.pexels.com/photos/30127916/pexels-photo-30127916.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop', alt: 'Frozen themed birthday cake' },
    { src: 'https://images.pexels.com/photos/853006/pexels-photo-853006.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop', alt: 'Pink frosted cupcakes' },
    { src: 'https://images.pexels.com/photos/10419004/pexels-photo-10419004.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop', alt: 'Decorated sugar cookies' },
    { src: 'https://images.pexels.com/photos/38495630/pexels-photo-38495630.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop', alt: 'Cheesecake slice with cherry topping' },
    { src: 'https://images.pexels.com/photos/11712500/pexels-photo-11712500.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop', alt: 'Two-tier wedding cake with roses' },
    { src: 'https://images.pexels.com/photos/28815810/pexels-photo-28815810.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop', alt: 'Cake with fresh berries and birthday icing' },
    { src: 'https://images.pexels.com/photos/10171574/pexels-photo-10171574.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop', alt: 'Pink cake pops with sprinkles' },
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
