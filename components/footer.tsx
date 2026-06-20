'use client'

import { colors } from '@/lib/colors'
import { InstagramIcon, FacebookIcon, XIcon, LinkedInIcon } from '@/components/social-icons'

export function Footer() {
  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Our Craft', href: '#craft' },
    { label: 'Flavors', href: '#flavors' },
    { label: 'Our Story', href: '#story' },
    { label: 'Visit', href: '#visit' },
  ]

  const socialLinks = [
    {
      icon: InstagramIcon,
      href: 'https://instagram.com/sweetarleens',
      label: 'Instagram',
    },
    {
      icon: FacebookIcon,
      href: 'https://www.facebook.com/SweetArleens',
      label: 'Facebook',
    },
    {
      icon: XIcon,
      href: 'https://twitter.com/sweetarleens',
      label: 'Twitter',
    },
    {
      icon: LinkedInIcon,
      href: 'https://www.linkedin.com/company/sweet-arleen',
      label: 'LinkedIn',
    },
  ]

  return (
    <footer className="w-full" style={{ backgroundColor: colors.foreground, color: colors.backgroundCard }}>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        {/* Top Section */}
        <div className="mb-8 grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-xl font-bold mb-2" style={{ color: colors.backgroundCard }}>
              Sweet Arleen&apos;s
            </h3>
            <p className="font-body text-sm" style={{ color: `${colors.backgroundCard}b3` }}>
              Handcrafted in Westlake Village since 2009
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
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="rounded-full p-2 transition-all"
                    style={{ border: `2px solid ${colors.backgroundCard}66`, color: `${colors.backgroundCard}b3` }}
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center gap-2 pt-8 text-center sm:flex-row sm:justify-between" style={{ borderTopColor: `${colors.backgroundCard}33`, borderTopWidth: '1px' }}>
          <p className="font-body text-xs" style={{ color: `${colors.backgroundCard}99` }}>
            © 2026 Sweet Arleen&apos;s · Westlake Village, CA
          </p>
          <p className="font-body text-xs" style={{ color: `${colors.backgroundCard}80` }}>
            Designed by{' '}
            <a
              href="https://forgestudio.one"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium transition-colors hover:underline"
              style={{ color: `${colors.accentGold}` }}
            >
              Forge Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
