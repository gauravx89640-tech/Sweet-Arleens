'use client'

import { colors } from '@/lib/colors'
import { FacebookIcon } from '@/components/social-icons'

export function Footer() {
  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Our Craft', href: '#craft' },
    { label: 'Flavors', href: '#flavors' },
    { label: 'Our Story', href: '#story' },
    { label: 'Order', href: '#visit' },
  ]

  return (
    <footer className="w-full" style={{ backgroundColor: colors.foreground, color: colors.backgroundCard }}>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        {/* Top Section */}
        <div className="mb-8 grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-xl font-bold mb-2" style={{ color: colors.backgroundCard }}>
              Tayt&apos;s Cakes
            </h3>
            <p className="font-body text-sm" style={{ color: `${colors.backgroundCard}b3` }}>
              Homemade custom cakes &amp; sweets in Wichita, Kansas
            </p>
          </div>

          {/* Nav Links */}
          <div>
            <h4 className="font-body text-xs font-bold uppercase tracking-widest mb-4" style={{ color: `${colors.backgroundCard}b3` }}>
              Navigation
            </h4>
            <div className="space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block font-body text-sm transition-colors"
                  style={{ color: `${colors.backgroundCard}cc` }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-body text-xs font-bold uppercase tracking-widest mb-4" style={{ color: `${colors.backgroundCard}b3` }}>
              Follow Us
            </h4>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/TaytsCakes"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="rounded-full p-2 transition-all"
                style={{ border: `2px solid ${colors.backgroundCard}66`, color: `${colors.backgroundCard}b3` }}
              >
                <FacebookIcon size={18} />
              </a>
            </div>
            <div className="mt-4">
              <p className="font-body text-sm" style={{ color: `${colors.backgroundCard}99` }}>
                (316) 300-1171
              </p>
              <p className="font-body text-sm" style={{ color: `${colors.backgroundCard}99` }}>
                taytlyngreasham@yahoo.com
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center gap-2 pt-8 text-center sm:flex-row sm:justify-between" style={{ borderTopColor: `${colors.backgroundCard}33`, borderTopWidth: '1px' }}>
          <p className="font-body text-xs" style={{ color: `${colors.backgroundCard}99` }}>
            © 2026 Tayt&apos;s Cakes · Wichita, KS
          </p>
          <p className="font-body text-xs" style={{ color: `${colors.backgroundCard}99` }}>
            Designed by{' '}
            <a
              href="https://forgestudio.one"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold transition-colors"
              style={{ color: colors.accentGold }}
            >
              Forge Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
