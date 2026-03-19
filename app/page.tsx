import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import WhyBrand from '@/components/WhyBrand'
import Method from '@/components/Method'
import WhatYouGet from '@/components/WhatYouGet'
import Community from '@/components/Community'
import LeadForm from '@/components/LeadForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyBrand />
        <Method />
        <WhatYouGet />
        <Community />
        <LeadForm />
      </main>
      <Footer />
    </>
  )
}
