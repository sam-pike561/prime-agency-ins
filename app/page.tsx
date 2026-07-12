import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import NavBar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}
