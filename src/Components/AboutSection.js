import React from 'react'

const AboutSection = () => {
  return (
    <section className="about-section">
      <div>
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment, The
          restaurant features a locally-sourced menu with daily specials.
        </p>
      </div>
      <div className='chef-images'>
        <img
          className="chef1"
          src={require('../icons_assets/Mario and Adrian A.jpg')}
          alt="chef"
        />
        <img
          className="chef2"
          src={require('../icons_assets/Mario and Adrian b.jpg')}
          alt="chef"
        />
      </div>
    </section>
  )
}

export default AboutSection
