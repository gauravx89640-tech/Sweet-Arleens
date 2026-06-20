'use client'

import { colors } from '@/lib/colors'
import { InstagramIcon, FacebookIcon, XIcon, LinkedInIcon, ArrowRightIcon } from '@/components/social-icons'

export function Visit() {
  const socialLinks = [
    { Icon: InstagramIcon, href: 'https://instagram.com/sweetarleens', label: 'Instagram' },
    { Icon: FacebookIcon, href: 'https://www.facebook.com/SweetArleens', label: 'Facebook' },
    { Icon: XIcon, href: 'https://twitter.com/sweetarleens', label: 'Twitter' },
    { Icon: LinkedInIcon, href: 'https://www.linkedin.com/company/sweet-arleen', label: 'LinkedIn' },
  ]

  return (
    <section id="visit" className="w-full py-16 sm:py-24" style={{ backgroundColor: colors.backgroundTaupe, color: colors.backgroundCard }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="font-body text-xs font-bold uppercase tracking-widest mb-3 opacity-90" style={{ color: colors.backgroundCard }}>
            Visit Us
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold" style={{ color: colors.backgroundCard }}>
            Find Us. <span className="italic font-light">Order Yours.</span>
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Column - Contact */}
          <div>
            <p className="font-body text-lg mb-8 leading-relaxed" style={{ color: `${colors.backgroundCard}e6` }}>
              Planning a celebration or just craving something sweet? Reach out
              and we&apos;ll take care of the rest.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div>
                <p className="font-body text-sm font-medium mb-1" style={{ color: `${colors.backgroundCard}b3` }}>
                  CALL
                </p>
                <a
                  href="tel:+18053737373"
                  className="font-body text-lg font-medium transition-colors"
                  style={{ color: colors.backgroundCard }}
                >
                  (805) 373-7373
                </a>
              </div>
              <div>
                <p className="font-body text-sm font-medium mb-1" style={{ color: `${colors.backgroundCard}b3` }}>
                  EMAIL
                </p>
                <a
                  href="mailto:sweetarleensbakery@gmail.com"
                  className="font-body text-lg font-medium transition-colors break-all"
                  style={{ color: colors.accentGold }}
                >
                  sweetarleensbakery@gmail.com
                </a>
              </div>
            </div>

            {/* Email Button */}
            <a
              href="mailto:sweetarleensbakery@gmail.com"
              className="inline-block rounded-full px-6 py-3 font-body text-xs font-bold uppercase tracking-wider transition-all hover:scale-105 mb-8"
              style={{ backgroundColor: colors.accentGold, color: colors.background }}
            >
              Email Us to Order
            </a>

            {/* Social Icons */}
            <div className="flex gap-4 mb-8">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="rounded-full p-3 transition-all hover:scale-110"
                  style={{ border: `2px solid ${colors.backgroundCard}`, color: colors.backgroundCard }}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>

            {/* Google Map */}
            <div className="overflow-hidden rounded-3xl mb-4">
              <iframe
                title="Sweet Arleen's location map"
                width="100%"
                height="300"
                style={{ border: 0, display: 'block' }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=960%20S%20Westlake%20Blvd%20Suite%204%2C%20Westlake%20Village%2C%20CA%2091361&t=&z=15&ie=UTF8&iwloc=&output=embed"
              />
            </div>

            {/* Maps Link */}
            <a
              href="https://maps.google.com/?q=960+S+Westlake+Blvd+Suite+4+Westlake+Village+CA+91361"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm font-medium transition-all hover:gap-3"
              style={{ color: colors.accentGold }}
            >
              Open in Google Maps <ArrowRightIcon size={16} />
            </a>
          </div>

          {/* Right Column - Storefront & Location */}
          <div>
            {/* Storefront photo — large */}
            <div className="overflow-hidden rounded-3xl">
              <img
                src="/shopoutside2.jpg"
                alt="Sweet Arleen's storefront inside the Westlake Village center"
                className="w-full object-cover"
                style={{ height: '440px' }}
              />
            </div>
            <p className="mt-3 px-1 font-body text-xs italic" style={{ color: `${colors.backgroundCard}cc` }}>
              Find us at 960 South Westlake Blvd, Suite #4 — Westlake Village, CA
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <p className="font-body text-sm font-medium mb-2" style={{ color: `${colors.backgroundCard}b3` }}>
                  ADDRESS
                </p>
                <p className="font-body text-base font-medium leading-relaxed" style={{ color: colors.backgroundCard }}>
                  960 South Westlake Blvd, Suite #4<br />
                  Westlake Village, CA 91361
                </p>
              </div>
              <div>
                <p className="font-body text-sm font-medium mb-2" style={{ color: `${colors.backgroundCard}b3` }}>
                  HOURS
                </p>
                <p className="font-body text-base font-medium" style={{ color: colors.backgroundCard }}>
                  Tue – Sat: 10:00am – 6:00pm<br />
                  Sun &amp; Mon: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
