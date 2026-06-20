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
    { label: 'Visit', href: '#visit' },
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

  return (
    <nav
      className="sticky top-0 z-40 w-full transition-shadow duration-300"
      style={{
        backgroundColor: colors.background,
        borderBottomColor: `${colors.backgroundTaupe}4d`,
        borderBottomWidth: '1px',
        boxShadow: scrolled ? `0 6px 24px -12px ${colors.foreground}59` : 'none',
      }}
    >
      <div className="mx-auto max-w-7xl px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('#')}
            className="transition-opacity hover:opacity-75"
            aria-label="Sweet Arleen's — home"
          >
            <img src="/logo.png" alt="Sweet Arleen's" style={{ height: '72px', width: 'auto' }} />
          </button>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-9 md:flex">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="nav-link font-body text-sm font-medium tracking-wide transition-colors"
                style={{ color: colors.foreground }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = colors.accentGold
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = colors.foreground
                }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <button
            onClick={() => scrollToSection('#visit')}
            className="hidden rounded-full px-6 py-2 font-body text-xs font-bold uppercase tracking-wider transition-all hover:scale-105 md:inline-block"
            style={{ backgroundColor: colors.accentGold, color: colors.background }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = colors.accentGoldDark
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = colors.accentGold
            }}
          >
            Order a Cake
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{ color: colors.accentGold }}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="mt-4 space-y-3 pt-4 md:hidden" style={{ borderTopColor: `${colors.backgroundTaupe}33`, borderTopWidth: '1px' }}>
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="block w-full py-2 text-left font-body text-sm font-medium transition-colors"
                style={{ color: colors.foreground }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = colors.accentGold
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = colors.foreground
                }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('#visit')}
              className="mt-4 w-full rounded-full px-4 py-2.5 font-body text-xs font-bold uppercase tracking-wider transition-all"
              style={{ backgroundColor: colors.accentGold, color: colors.background }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = colors.accentGoldDark
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = colors.accentGold
              }}
            >
              Order a Cake
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
