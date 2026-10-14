import { AnnouncementBar } from '@/components/announcement-bar'
import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { Marquee } from '@/components/marquee'
import { TrustStrip } from '@/components/trust-strip'
import { Craft } from '@/components/craft'
import { Flavors } from '@/components/flavors'
import { Story } from '@/components/story'
import { Gallery } from '@/components/gallery'
import { HowToOrder } from '@/components/how-to-order'
import { Testimonials } from '@/components/testimonials'
import { FAQ } from '@/components/faq'
import { Visit } from '@/components/visit'
import { Footer } from '@/components/footer'
import { ScrollReveal } from '@/components/scroll-reveal'

export default function Home() {
  return (
    <main className="w-full bg-background">
      <ScrollReveal />
      <header className="fixed left-0 right-0 top-0 z-50">
        <AnnouncementBar />
        <Navigation />
      </header>
      <Hero />
      <Marquee />
      <TrustStrip />
      <Craft />
      <Flavors />
      <HowToOrder />
      <Story />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Visit />
      <Footer />
    </main>
  )
}
