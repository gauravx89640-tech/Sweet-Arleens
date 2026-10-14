import { colors } from '@/lib/colors'
import { ArrowRightIcon } from '@/components/social-icons'

export function Craft() {
  const products = [
    {
      title: 'Custom Cakes',
      image: 'https://images.pexels.com/photos/32370565/pexels-photo-32370565.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      pos: 'center' as const,
      description:
        'Themed birthday cakes, surprise reveal cakes, Tres Leches, cinnamon roll cakes — designed around your celebration.',
    },
    {
      title: 'Cupcakes',
      image: 'https://images.pexels.com/photos/853006/pexels-photo-853006.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      pos: 'center' as const,
      description:
        'Moist, scratch-made cupcakes with silky buttercream. Perfect for parties, showers, or just because.',
    },
    {
      title: 'Cookies & Cake Pops',
      image: 'https://images.pexels.com/photos/10171574/pexels-photo-10171574.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      pos: 'center' as const,
      description:
        'Decorated sugar cookies, cookie packs, and colorful cake pops for any occasion.',
    },
    {
      title: 'Pies & Cheesecakes',
      image: 'https://images.pexels.com/photos/38495630/pexels-photo-38495630.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      pos: 'center' as const,
      description:
        'Homemade pies and specialty cheesecakes — rich, creamy, and baked fresh to order.',
    },
  ]

  return (
    <section id="craft" className="w-full py-20 sm:py-28" style={{ backgroundColor: colors.background }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="reveal-item mb-16 text-center">
          <p className="font-body text-xs font-bold uppercase tracking-widest mb-3" style={{ color: colors.accentGold }}>
            Our Craft
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold" style={{ color: colors.foreground }}>
            Everything is Baked{' '}
            <span className="italic font-light">from Scratch</span>
          </h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.title}
              className="reveal-item group flex flex-col overflow-hidden rounded-2xl sm:rounded-3xl transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
              style={{ backgroundColor: colors.backgroundCard }}
            >
              {/* Image */}
              <div className="w-full overflow-hidden rounded-t-2xl sm:rounded-t-3xl" style={{ height: '260px' }}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ objectPosition: product.pos }}
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <h3 className="font-heading text-xl font-bold mb-2 transition-colors group-hover:text-[#C77B5C]" style={{ color: colors.foreground }}>
                    {product.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: `${colors.foreground}99` }}>
                    {product.description}
                  </p>
                </div>

                <a
                  href="mailto:taytlyngreasham@yahoo.com"
                  className="mt-5 inline-flex items-center gap-1.5 font-body text-xs font-bold uppercase tracking-wider transition-all hover:gap-3"
                  style={{ color: colors.accentGold }}
                >
                  Inquire <ArrowRightIcon size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
