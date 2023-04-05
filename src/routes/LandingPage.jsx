import React from 'react'
import Navbar from '../components/landingPage/Navbar'
import HeroSection from '../components/landingPage/HeroSection'
import OrderSection from '../components/landingPage/OrderSection'
import TestimonialSection from '../components/landingPage/TestimonialSection'
import AboutSection from '../components/landingPage/AboutSection'
import FooterSection from '../components/landingPage/FooterSection'

const LandingPage = () => {

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <HeroSection />
        <OrderSection />
        <TestimonialSection />
        <AboutSection />
      </main>
      <FooterSection />
    </>
  )
}

export default LandingPage
