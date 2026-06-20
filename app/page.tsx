import { AnnouncementBar } from '@/components/announcement-bar'
import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { TrustStrip } from '@/components/trust-strip'
import { Craft } from '@/components/craft'
import { Flavors } from '@/components/flavors'
import { Story } from '@/components/story'
import { Gallery } from '@/components/gallery'
import { Visit } from '@/components/visit'
import { Footer } from '@/components/footer'
import { ScrollReveal } from '@/components/scroll-reveal'

export default function Home() {
  return (
    <main className="w-full bg-background">
      <ScrollReveal />
      <AnnouncementBar />
      <Navigation />
      <Hero />
      <TrustStrip />
      <Craft />
      <Flavors />
      <Story />
      <Gallery />
      <Visit />
      <Footer />
    </main>
  )
}
