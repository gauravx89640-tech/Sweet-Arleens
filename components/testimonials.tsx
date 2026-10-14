import { colors } from '@/lib/colors'
import { HeartIllustration } from '@/components/illustrations'

export function Testimonials() {
  const testimonials = [
    {
      quote: 'The best tasting cakes and frosting by the sweetest soul you\'ll ever meet. So so creative. These are cupcakes she made and delivered for my grand babies birthday.',
      author: 'Bella Boldoni',
      occasion: 'Cupcakes',
    },
    {
      quote: 'I called from Montana and asked for a custom cake I needed in three days time. She started researching that evening and personally delivered the cake. I couldn\'t be more impressed with the service. The cake itself was so delicious! Not only beautiful, but absolutely yummy. "Best cake ever" from birthday boy, everyone who had some agreed it was a perfect cake. I couldn\'t be happier. Will definitely be ordering again and highly recommend them!',
      author: 'Amy Torres',
      occasion: 'Custom Cake',
    },
    {
      quote: 'Tayts cakes has the most beautiful designs and the most amazing flavor! So much time and talent goes into them. I couldn\'t have asked for a better cake for my wedding, I will be coming back every year for our daughter\'s birthdays! Best cakes in Wichita!',
      author: 'Carolyn Koefod',
      occasion: 'Wedding Cake',
    },
    {
      quote: 'She made cupcakes for my daughters first birthday party, they were super yummy! Would definitely order from her again! The colors were perfect for her pastel Halloween theme!',
      author: 'Nichole Van',
      occasion: 'Cupcakes',
    },
  ]

  return (
    <section id="testimonials" className="w-full py-20 sm:py-28" style={{ backgroundColor: colors.backgroundCard }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="reveal-item mb-16 text-center">
          <p className="font-body text-xs font-bold uppercase tracking-widest mb-3" style={{ color: colors.accentGold }}>
            Kind Words
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold" style={{ color: colors.foreground }}>
            Loved by{' '}
            <span className="italic font-light">Wichita</span>
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="reveal-item group flex flex-col rounded-2xl sm:rounded-3xl p-7 transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
              style={{ backgroundColor: colors.background }}
            >
              {/* Heart icon */}
              <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                <HeartIllustration size={32} color={colors.accentGold} />
              </div>

              {/* Quote */}
              <p className="font-body text-base leading-relaxed mb-6 flex-1 italic" style={{ color: `${colors.foreground}cc` }}>
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="border-t pt-4" style={{ borderColor: `${colors.accentGold}33` }}>
                <p className="font-heading text-base font-bold" style={{ color: colors.foreground }}>
                  {t.author}
                </p>
                <p className="font-body text-xs uppercase tracking-wider mt-1" style={{ color: colors.accentGold }}>
                  {t.occasion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
