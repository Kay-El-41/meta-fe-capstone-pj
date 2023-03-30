import React from 'react'
import CTAButton from './CTAButton'

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <CTAButton text="Reserve a Table" />
      </div>
      <div className="image-container">
        <img src={require('../icons_assets/restauranfood.jpg')} alt="" />
      </div>
    </section>
  )
}

export default HeroSection
