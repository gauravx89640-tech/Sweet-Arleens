'use client'

import { colors } from '@/lib/colors'
import { FacebookIcon, ArrowRightIcon } from '@/components/social-icons'

export function Visit() {
  return (
    <section id="visit" className="w-full py-20 sm:py-32" style={{ backgroundColor: colors.foreground }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header — left-aligned editorial */}
        <div className="mb-16 max-w-2xl">
          <p className="eyebrow mb-4" style={{ color: 'rgba(251,250,250,0.5)' }}>
            Order Yours
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-normal leading-tight" style={{ color: colors.background }}>
            Get in touch and{' '}
            <span className="italic font-light">place your order.</span>
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Column - Contact */}
          <div>
            <p className="font-body text-base mb-10 leading-relaxed" style={{ color: 'rgba(251,250,250,0.7)' }}>
              Planning a celebration or just craving something sweet? Reach out
              and we&apos;ll bring your vision to life — homemade, from scratch,
              and made just for you.
            </p>

            {/* Contact Info — editorial layout */}
            <div className="space-y-8 mb-10">
              <div>
                <p className="eyebrow mb-2" style={{ color: 'rgba(251,250,250,0.4)' }}>
                  Phone
                </p>
                <a
                  href="tel:+13163001171"
                  className="font-heading text-2xl font-normal transition-opacity hover:opacity-70"
                  style={{ color: colors.background }}
                >
                  (316) 300-1171
                </a>
              </div>
              <div>
                <p className="eyebrow mb-2" style={{ color: 'rgba(251,250,250,0.4)' }}>
                  Email
                </p>
                <a
                  href="mailto:taytlyngreasham@yahoo.com"
                  className="font-heading text-2xl font-normal transition-opacity hover:opacity-70 break-all"
                  style={{ color: colors.background }}
                >
                  taytlyngreasham@yahoo.com
                </a>
              </div>
            </div>

            {/* Email Button */}
            <a
              href="mailto:taytlyngreasham@yahoo.com"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3 font-body text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-300 hover:gap-3 mb-12"
              style={{ backgroundColor: colors.background, color: colors.foreground }}
            >
              Email Us to Order <ArrowRightIcon size={14} />
            </a>

            {/* Fulfillment + Service Areas — two columns */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 mb-10">
              <div>
                <p className="eyebrow mb-3" style={{ color: 'rgba(251,250,250,0.4)' }}>
                  Fulfillment
                </p>
                <div className="space-y-1.5">
                  {['In-Store Pickup', 'Curbside Pickup', 'Local Delivery'].map((option) => (
                    <p key={option} className="font-body text-sm" style={{ color: 'rgba(251,250,250,0.75)' }}>
                      {option}
                    </p>
                  ))}
                </div>
              </div>
              <div>
                <p className="eyebrow mb-3" style={{ color: 'rgba(251,250,250,0.4)' }}>
                  Service Areas
                </p>
                <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(251,250,250,0.75)' }}>
                  Wichita, Andover, Goddard, Augusta, Derby, Topeka, &amp; Hutchinson, KS
                </p>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61573446252959"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="rounded-full p-2.5 transition-all duration-300 hover:scale-105"
                style={{ border: `1px solid rgba(251,250,250,0.25)`, color: 'rgba(251,250,250,0.7)' }}
              >
                <FacebookIcon size={18} />
              </a>
            </div>
          </div>

          {/* Right Column — Image + Map */}
          <div>
            {/* Photo */}
            <div className="overflow-hidden rounded-lg mb-8">
              <img
                src="https://scontent.fbho3-4.fna.fbcdn.net/v/t39.30808-6/470180387_908167684775735_1113317273288715120_n.jpg?stp=c0.169.1536.1536a_dst-jpg_tt6&cstp=mx1536x1536&ctp=s552x414&_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=50ad20&_nc_ohc=gEB5Q7Aq2ckQ7kNvwFjJ3d0&_nc_oc=AdriMYH910VzbD3JWD7FrVzNW6A-zBho5OWgNjf1genePk1OuTQm7y8DxDZstHc9oAmUD9pgbSd9sKpyO4mZbpW3&_nc_zt=23&_nc_ht=scontent.fbho3-4.fna&_nc_gid=IiKwZJqjgiRymQrvxNVpkA&_nc_ss=7b2a8&oh=00_AQNfM_1c9_nbRyxQOAfuzZeaeTJl2ewUQZ8XpGHWWx1C6A&oe=6AD4D121"
                alt="Tayt's Cakes custom baked goods"
                className="w-full object-cover"
                style={{ height: '380px' }}
              />
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-lg">
              <iframe
                title="Tayt's Cakes service area map"
                width="100%"
                height="280"
                style={{ border: 0, display: 'block', filter: 'grayscale(0.3) opacity(0.9)' }}
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
              className="mt-4 inline-flex items-center gap-2 font-body text-xs font-medium uppercase tracking-wider transition-all hover:gap-3"
              style={{ color: 'rgba(251,250,250,0.6)' }}
            >
              View Service Area <ArrowRightIcon size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
