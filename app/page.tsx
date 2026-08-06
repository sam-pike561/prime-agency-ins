import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Hero from '../components/sections/Hero'
import ProviderLogoCarousel from '../components/sections/ProviderLogoCarousel'
import About from '../components/sections/About'
import Services from '../components/sections/Services'
import Testimonials from '../components/sections/Testimonials'
import CTA from '../components/sections/CTA'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProviderLogoCarousel />
        <Services />
        <About />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
