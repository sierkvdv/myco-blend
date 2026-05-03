import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Mushrooms } from '@/components/Mushrooms'
import { Research } from '@/components/Research'
import { About } from '@/components/About'
import { Process } from '@/components/Process'
import { CTA } from '@/components/CTA'
import { Footer } from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Mushrooms />
        <Research />
        <About />
        <Process />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
