'use client'

import { useState } from 'react'
import { colors } from '@/lib/colors'
import { FacebookIcon, ArrowRightIcon } from '@/components/social-icons'
import { supabase } from '@/lib/supabase-client'

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
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
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

          {/* Right Column - Order Form & Map */}
          <div className="reveal-item">
            <OrderForm />

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

const cakeTypes = [
  'Custom Cake',
  'Cupcakes',
  'Cookies & Cake Pops',
  'Pies & Cheesecakes',
  'Other / Not Sure Yet',
]

function OrderForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cake_type: '',
    serving_count: '',
    needed_date: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const update = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[field]
        return next
      })
    }
  }

  const validate = () => {
    const e: Record<string, string> = {}
    if (!formData.name.trim()) e.name = 'Please enter your name'
    if (!formData.email.trim()) e.email = 'Please enter your email'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = 'Please enter a valid email'
    if (!formData.message.trim()) e.message = 'Please tell us about your order'
    return e
  }

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault()
    const e = validate()
    if (Object.keys(e).length > 0) {
      setErrors(e)
      return
    }

    setStatus('submitting')
    try {
      const { error } = await supabase.from('order_inquiries').insert({
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim() || null,
        cake_type: formData.cake_type || null,
        serving_count: formData.serving_count.trim() || null,
        needed_date: formData.needed_date || null,
        message: formData.message.trim(),
      })

      if (error) throw error

      setStatus('success')
      setFormData({ name: '', email: '', phone: '', cake_type: '', serving_count: '', needed_date: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div
        className="rounded-3xl p-10 text-center"
        style={{ backgroundColor: colors.background, color: colors.foreground }}
      >
        <div className="mb-4 text-4xl" style={{ color: colors.accentGold }}>
          &#10003;
        </div>
        <h3 className="font-heading text-2xl font-bold mb-3">Thank You!</h3>
        <p className="font-body text-base leading-relaxed mb-6" style={{ color: `${colors.foreground}cc` }}>
          Your order inquiry has been sent. Taytlyn will get back to you soon — usually within 1–2 business days.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="rounded-full px-6 py-2.5 font-body text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105"
          style={{ backgroundColor: colors.accentGold, color: colors.background }}
        >
          Submit Another Request
        </button>
      </div>
    )
  }

  const inputClass = 'w-full rounded-xl px-4 py-3 font-body text-sm outline-none transition-all duration-200 focus:ring-2'
  const inputStyle = {
    backgroundColor: colors.background,
    border: `1.5px solid ${colors.foreground}22`,
    color: colors.foreground,
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl p-6 sm:p-8"
      style={{ backgroundColor: colors.background, color: colors.foreground }}
    >
      <h3 className="font-heading text-2xl font-bold mb-2">Request Your Order</h3>
      <p className="font-body text-sm mb-6" style={{ color: `${colors.foreground}99` }}>
        Fill this out and we&apos;ll get back to you with a quote and availability.
      </p>

      {/* Name & Email row */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block font-body text-xs font-bold uppercase tracking-wider" style={{ color: `${colors.foreground}b3` }}>
            Name *
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => update('name', e.target.value)}
            className={inputClass}
            style={{ ...inputStyle, borderColor: errors.name ? colors.accentGold : undefined }}
            placeholder="Jane Doe"
          />
          {errors.name && <p className="mt-1 font-body text-xs" style={{ color: colors.accentGold }}>{errors.name}</p>}
        </div>
        <div>
          <label className="mb-1.5 block font-body text-xs font-bold uppercase tracking-wider" style={{ color: `${colors.foreground}b3` }}>
            Email *
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => update('email', e.target.value)}
            className={inputClass}
            style={{ ...inputStyle, borderColor: errors.email ? colors.accentGold : undefined }}
            placeholder="jane@email.com"
          />
          {errors.email && <p className="mt-1 font-body text-xs" style={{ color: colors.accentGold }}>{errors.email}</p>}
        </div>
      </div>

      {/* Phone & Date row */}
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block font-body text-xs font-bold uppercase tracking-wider" style={{ color: `${colors.foreground}b3` }}>
            Phone
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => update('phone', e.target.value)}
            className={inputClass}
            style={inputStyle}
            placeholder="(316) 555-0123"
          />
        </div>
        <div>
          <label className="mb-1.5 block font-body text-xs font-bold uppercase tracking-wider" style={{ color: `${colors.foreground}b3` }}>
            Date Needed
          </label>
          <input
            type="date"
            value={formData.needed_date}
            onChange={(e) => update('needed_date', e.target.value)}
            className={inputClass}
            style={inputStyle}
          />
        </div>
      </div>

      {/* Cake Type & Servings row */}
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block font-body text-xs font-bold uppercase tracking-wider" style={{ color: `${colors.foreground}b3` }}>
            What Can We Make?
          </label>
          <select
            value={formData.cake_type}
            onChange={(e) => update('cake_type', e.target.value)}
            className={inputClass}
            style={inputStyle}
          >
            <option value="">Select a treat...</option>
            {cakeTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1.5 block font-body text-xs font-bold uppercase tracking-wider" style={{ color: `${colors.foreground}b3` }}>
            How Many Servings?
          </label>
          <input
            type="text"
            value={formData.serving_count}
            onChange={(e) => update('serving_count', e.target.value)}
            className={inputClass}
            style={inputStyle}
            placeholder="e.g. 20 people"
          />
        </div>
      </div>

      {/* Message */}
      <div className="mt-4">
        <label className="mb-1.5 block font-body text-xs font-bold uppercase tracking-wider" style={{ color: `${colors.foreground}b3` }}>
          Tell Us About Your Order *
        </label>
        <textarea
          rows={4}
          value={formData.message}
          onChange={(e) => update('message', e.target.value)}
          className={inputClass + ' resize-none'}
          style={{ ...inputStyle, borderColor: errors.message ? colors.accentGold : undefined }}
          placeholder="Theme, colors, flavors, occasion, any special requests..."
        />
        {errors.message && <p className="mt-1 font-body text-xs" style={{ color: colors.accentGold }}>{errors.message}</p>}
      </div>

      {/* Error message */}
      {status === 'error' && (
        <p className="mt-4 rounded-lg px-4 py-3 font-body text-sm" style={{ backgroundColor: `${colors.accentGold}15`, color: colors.accentGold }}>
          Something went wrong sending your request. Please try again or call us at (316) 300-1171.
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="mt-6 w-full rounded-full px-6 py-3.5 font-body text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
        style={{ backgroundColor: colors.accentGold, color: colors.background }}
      >
        {status === 'submitting' ? 'Sending...' : 'Submit Order Request'}
      </button>
    </form>
  )
}
