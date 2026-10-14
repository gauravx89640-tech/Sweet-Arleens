'use client'

import { colors } from '@/lib/colors'
import { FacebookIcon, ArrowRightIcon } from '@/components/social-icons'

export function Visit() {
  return (
    <section id="visit" className="w-full py-16 sm:py-24" style={{ backgroundColor: colors.backgroundTaupe, color: colors.backgroundCard }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="reveal-item mb-16 text-center">
          <p className="font-body text-xs font-bold uppercase tracking-widest mb-3 opacity-90" style={{ color: colors.backgroundCard }}>
            Order Yours
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold" style={{ color: colors.backgroundCard }}>
            Get in Touch.{' '}
            <span className="italic font-light">Place Your Order.</span>
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Column - Contact & Fulfillment */}
          <div className="reveal-item">
            <p className="font-body text-lg mb-8 leading-relaxed" style={{ color: `${colors.backgroundCard}e6` }}>
              Planning a celebration or just craving something sweet? Reach out
              and we&apos;ll bring your vision to life — homemade, from scratch,
              and made just for you.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div>
                <p className="font-body text-sm font-medium mb-1" style={{ color: `${colors.backgroundCard}b3` }}>
                  CALL
                </p>
                <a
                  href="tel:+13163001171"
                  className="font-body text-lg font-medium transition-colors hover:text-[#E8B4A0]"
                  style={{ color: colors.backgroundCard }}
                >
                  (316) 300-1171
                </a>
              </div>
              <div>
                <p className="font-body text-sm font-medium mb-1" style={{ color: `${colors.backgroundCard}b3` }}>
                  EMAIL
                </p>
                <a
                  href="mailto:taytlyngreasham@yahoo.com"
                  className="font-body text-lg font-medium transition-colors break-all hover:text-[#E8B4A0]"
                  style={{ color: colors.background }}
                >
                  taytlyngreasham@yahoo.com
                </a>
              </div>
            </div>

            {/* Email Button */}
            <a
              href="mailto:taytlyngreasham@yahoo.com"
              className="inline-block rounded-full px-6 py-3 font-body text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 mb-8"
              style={{ backgroundColor: colors.background, color: colors.foreground }}
            >
              Email Us to Order
            </a>

            {/* Fulfillment Options */}
            <div className="mb-8">
              <p className="font-body text-sm font-medium mb-3" style={{ color: `${colors.backgroundCard}b3` }}>
                FULFILLMENT OPTIONS
              </p>
              <div className="flex flex-wrap gap-3">
                {['In-Store Pickup', 'Curbside Pickup', 'Local Delivery'].map((option) => (
                  <span
                    key={option}
                    className="rounded-full px-4 py-2 font-body text-sm font-medium transition-all duration-300 hover:scale-105"
                    style={{ border: `2px solid ${colors.backgroundCard}66`, color: colors.backgroundCard }}
                  >
                    {option}
                  </span>
                ))}
              </div>
            </div>

            {/* Service Areas */}
            <div className="mb-8">
              <p className="font-body text-sm font-medium mb-3" style={{ color: `${colors.backgroundCard}b3` }}>
                SERVICE AREAS
              </p>
              <p className="font-body text-base leading-relaxed" style={{ color: `${colors.backgroundCard}e6` }}>
                Wichita, Andover, Goddard, Augusta, Derby, Topeka, and Hutchinson, KS
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mb-8">
              <a
                href="https://www.facebook.com/TaytsCakes"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="rounded-full p-3 transition-all duration-300 hover:scale-110 hover:bg-[#E8B4A0]/20"
                style={{ border: `2px solid ${colors.backgroundCard}`, color: colors.backgroundCard }}
              >
                <FacebookIcon size={20} />
              </a>
            </div>
          </div>

          {/* Right Column - Baking photo & details */}
          <div className="reveal-item">
            {/* Baking photo — large */}
            <div className="overflow-hidden rounded-3xl transition-all duration-500 hover:shadow-2xl">
              <img
                src="https://images.pexels.com/photos/6223181/pexels-photo-6223181.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Baker rolling dough in a rustic kitchen"
                className="w-full object-cover"
                style={{ height: '440px' }}
              />
            </div>
            <p className="mt-3 px-1 font-body text-xs italic" style={{ color: `${colors.backgroundCard}cc` }}>
              Every order is baked fresh from scratch in our home kitchen
            </p>

            {/* Service area map */}
            <div className="mt-8 overflow-hidden rounded-3xl">
              <iframe
                title="Tayt's Cakes service area map"
                width="100%"
                height="300"
                style={{ border: 0, display: 'block' }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Wichita%2C%20Kansas&t=&z=10&ie=UTF8&iwloc=&output=embed"
              />
            </div>

            <a
              href="https://maps.google.com/?q=Wichita+Kansas"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 font-body text-sm font-medium transition-all hover:gap-3"
              style={{ color: colors.background }}
            >
              View Service Area on Google Maps <ArrowRightIcon size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
