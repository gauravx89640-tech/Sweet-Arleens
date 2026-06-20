'use client'

import { useEffect } from 'react'

// Adds `in-view` to each top-level <section> as it scrolls into view.
// Pairs with the `html.js main > section` rules in globals.css.
export function ScrollReveal() {
  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll('main > section'),
    ) as HTMLElement[]

    if (!('IntersectionObserver' in window)) {
      sections.forEach((s) => s.classList.add('in-view'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  return null
}
