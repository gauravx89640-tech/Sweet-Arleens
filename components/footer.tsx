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
    <footer className="w-full" style={{ backgroundColor: colors.backgroundCard, color: colors.foreground }}>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {/* Top Section */}
        <div className="mb-10 grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-xl font-medium mb-2" style={{ color: colors.foreground }}>
              Tayt&apos;s Cakes
            </h3>
            <p className="font-body text-sm" style={{ color: 'rgba(30,30,30,0.55)' }}>
              Homemade custom cakes &amp; sweets in Wichita, Kansas
            </p>
          </div>

          {/* Nav Links */}
          <div>
            <p className="eyebrow mb-4" style={{ color: 'rgba(30,30,30,0.4)' }}>
              Navigation
            </p>
            <div className="space-y-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block font-body text-sm transition-opacity hover:opacity-60"
                  style={{ color: colors.foreground }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact + Social */}
          <div>
            <p className="eyebrow mb-4" style={{ color: 'rgba(30,30,30,0.4)' }}>
              Contact
            </p>
            <div className="space-y-1 mb-4">
              <p className="font-body text-sm" style={{ color: colors.foreground }}>
                (316) 300-1171
              </p>
              <p className="font-body text-sm" style={{ color: colors.foreground }}>
                taytlyngreasham@yahoo.com
              </p>
            </div>
            <a
              href="https://www.facebook.com/profile.php?id=61573446252959"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="inline-flex rounded-full p-2 transition-all duration-300 hover:scale-105"
              style={{ border: `1px solid ${colors.backgroundTaupe}66`, color: 'rgba(30,30,30,0.6)' }}
            >
              <FacebookIcon size={16} />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-6" style={{ borderTop: `1px solid ${colors.backgroundTaupe}40` }}>
          <p className="font-body text-xs" style={{ color: 'rgba(30,30,30,0.4)' }}>
            © 2026 Tayt&apos;s Cakes · Wichita, KS
          </p>
        </div>
      </div>
    </footer>
  )
}
