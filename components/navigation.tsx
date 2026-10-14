'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { colors } from '@/lib/colors'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Our Craft', href: '#craft' },
    { label: 'Flavors', href: '#flavors' },
    { label: 'Our Story', href: '#story' },
    { label: 'Order', href: '#visit' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToSection = (href: string) => {
    setIsOpen(false)
    if (href === '#') return
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const solid = scrolled || isOpen
  const linkColor = solid ? colors.foreground : colors.backgroundCard
  const bgColor = solid ? colors.background : 'transparent'

  return (
    <nav
      className="w-full transition-all duration-300"
      style={{
        backgroundColor: bgColor,
        borderBottom: solid ? `1px solid ${colors.accentGold}33` : '1px solid transparent',
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('#')}
            className="font-heading text-xl font-bold tracking-tight transition-opacity hover:opacity-80"
            style={{ color: linkColor }}
          >
            Tayt&apos;s Cakes
          </button>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="nav-link font-body text-xs font-medium uppercase tracking-wider transition-opacity hover:opacity-80"
                style={{ color: linkColor }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={() => scrollToSection('#visit')}
            className="hidden rounded-full px-5 py-2 font-body text-xs font-bold uppercase tracking-wider transition-all hover:scale-105 md:inline-block"
            style={{
              backgroundColor: solid ? colors.accentGold : `${colors.backgroundCard}1f`,
              color: solid ? colors.background : colors.backgroundCard,
              border: solid ? 'none' : `1px solid ${colors.backgroundCard}66`,
            }}
          >
            Order
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{ color: linkColor }}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="mt-4 space-y-3 pt-4 md:hidden" style={{ borderTop: `1px solid ${colors.accentGold}33` }}>
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="block w-full py-1.5 text-left font-body text-sm font-medium"
                style={{ color: colors.foreground }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('#visit')}
              className="mt-3 w-full rounded-full px-4 py-2.5 font-body text-xs font-bold uppercase tracking-wider"
              style={{ backgroundColor: colors.accentGold, color: colors.background }}
            >
              Order
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
