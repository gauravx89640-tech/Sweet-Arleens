import { colors } from '@/lib/colors'
import { ArrowRightIcon } from '@/components/social-icons'

export function Craft() {
  const products = [
    {
      title: 'Custom Cakes',
      image: '/cake4.jpg',
      pos: '50% 40%',
      description:
        "Two-layer classics and our signature 'Double Tall' three-layer tiers, designed around your celebration.",
    },
    {
      title: 'Cupcakes',
      image: '/cupcake2.jpg',
      pos: 'center',
      description:
        'The award-winning originals. Moist cake, silky buttercream, endlessly customizable.',
    },
    {
      title: 'Bread Pudding',
      image: '/breadpudding.jpg',
      pos: 'center',
      description:
        'Tender, spiced, and slow-baked in a rich custard — pure comfort in every spoonful.',
    },
    {
      title: 'Pastries & More',
      image: '/pastry.jpg',
      pos: 'center',
      description:
        'Fresh-baked sweet and savory treats, made daily in small batches.',
    },
  ]

  return (
    <section id="craft" className="w-full py-16 sm:py-24" style={{ backgroundColor: colors.background }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="font-body text-xs font-bold uppercase tracking-widest mb-3" style={{ color: colors.accentGold }}>
            Our Craft
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold" style={{ color: colors.foreground }}>
            The Art of{' '}
            <span className="italic font-light">Daily Baking</span>
          </h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.title}
              className="group flex flex-col overflow-hidden rounded-3xl transition-all hover:shadow-lg"
              style={{ backgroundColor: colors.backgroundCard }}
            >
              {/* Image */}
              <div className="w-full overflow-hidden" style={{ height: '300px' }}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ objectPosition: product.pos }}
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <h3 className="font-heading text-xl font-bold mb-3" style={{ color: colors.foreground }}>
                    {product.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: `${colors.foreground}b3` }}>
                    {product.description}
                  </p>
                </div>

                {/* Link */}
                <a href="mailto:sweetarleensbakery@gmail.com" className="mt-6 inline-flex items-center gap-2 font-body text-sm font-medium transition-all hover:gap-3" style={{ color: colors.accentGold }}>
                  Inquire <ArrowRightIcon size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
