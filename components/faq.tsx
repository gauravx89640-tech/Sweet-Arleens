import { colors } from '@/lib/colors'
import { CakeIllustration } from '@/components/illustrations'

const faqs = [
  {
    question: 'How far in advance should I place my order?',
    answer: 'Custom cakes typically need 1–2 weeks notice. For larger or more elaborate designs, 2–3 weeks is ideal. Cookie packs and cupcakes can sometimes be accommodated with shorter notice — just ask!',
  },
  {
    question: 'Do you offer delivery?',
    answer: 'Yes! We offer local delivery within the Wichita metro and surrounding areas. Curbside pickup is also available at no extra cost. Delivery fees vary based on distance.',
  },
  {
    question: 'How much do custom cakes cost?',
    answer: 'Pricing depends on size, design complexity, and serving count. Custom cakes start around $45 and go up from there. Cupcakes start at $3 each, and cookie packs start at $20/dozen. Reach out with your idea for an exact quote!',
  },
  {
    question: 'Do you offer gluten-free or dairy-free options?',
    answer: 'We can accommodate some dietary requests on select items. Let us know your needs when you inquire and we\'ll do our best to create something delicious for you.',
  },
  {
    question: 'Can you make themed or character cakes?',
    answer: 'Absolutely! Themed birthday cakes, reveal cakes, and specialty designs are our specialty. Share your inspiration, theme, or reference photos and we\'ll bring it to life.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'We\'re based in Wichita, Kansas and serve the surrounding metro area. If you\'re unsure whether we deliver to your location, just send us a message!',
  },
]

export function FAQ() {
  return (
    <section id="faq" className="w-full py-20 sm:py-28" style={{ backgroundColor: colors.background }}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="reveal-item mb-14 text-center">
          {/* Decorative cake */}
          <div className="float-anim mb-4 flex justify-center">
            <CakeIllustration size={48} color={colors.accentGold} />
          </div>
          <p className="font-body text-xs font-bold uppercase tracking-widest mb-3" style={{ color: colors.accentGold }}>
            Good to Know
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold" style={{ color: colors.foreground }}>
            Frequently Asked{' '}
            <span className="italic font-light">Questions</span>
          </h2>
        </div>

        {/* FAQ accordion */}
        <div className="reveal-item space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        {/* Contact prompt */}
        <div className="reveal-item mt-12 text-center">
          <p className="font-body text-base" style={{ color: `${colors.foreground}99` }}>
            Still have questions?{' '}
            <a
              href="mailto:taytlyngreasham@yahoo.com"
              className="font-bold transition-colors"
              style={{ color: colors.accentGold }}
            >
              Send us a message
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details
      className="group overflow-hidden rounded-2xl transition-all duration-300"
      style={{ backgroundColor: colors.backgroundCard }}
    >
      <summary
        className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 font-heading text-lg font-medium list-none"
        style={{ color: colors.foreground }}
      >
        <span>{question}</span>
        <span
          className="shrink-0 text-2xl font-light transition-transform duration-300 group-open:rotate-45"
          style={{ color: colors.accentGold }}
        >
          +
        </span>
      </summary>
      <div className="px-6 pb-5">
        <p className="font-body text-base leading-relaxed" style={{ color: `${colors.foreground}cc` }}>
          {answer}
        </p>
      </div>
    </details>
  )
}
