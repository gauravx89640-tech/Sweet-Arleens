import { colors } from '@/lib/colors'
import { HeartIllustration } from '@/components/illustrations'

export function Testimonials() {
  const testimonials = [
    {
      quote: 'The cake was absolutely beautiful AND delicious! Taytlyn brought my vision to life perfectly for my daughter\'s birthday.',
      author: 'Sarah M.',
      occasion: 'Birthday Cake',
    },
    {
      quote: 'Best cupcakes in Wichita, hands down. You can taste the love and quality in every bite. Will definitely order again!',
      author: 'Jennifer R.',
      occasion: 'Cupcakes',
    },
    {
      quote: 'Ordered a surprise reveal cake for my sister\'s baby shower — everyone was blown away. The detail was incredible!',
      author: 'Ashley K.',
      occasion: 'Reveal Cake',
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
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
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
