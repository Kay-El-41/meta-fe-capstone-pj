import React from 'react'

const Footer = () => {
  return (
    <footer className="footer-section">
      <img src={require('../icons_assets/restaurant.jpg')} alt="resturant" />
      <div>
        <section>
          <menu>
            <h3>Doormat Navigation</h3>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Menu</a>
            </li>
            <li>
              <a href="">Reservations</a>
            </li>
            <li>
              <a href="">Order Online</a>
            </li>
            <li>
              <a href="">Login</a>
            </li>
          </menu>
        </section>

        <section>
          <menu>
            <h3>Contact</h3>
            <address>Address</address>
            <li>
              <a href="tel:000000">Phone</a>
            </li>
            <li>
              <a href="mailto:webmaster@example.com">Email</a>
            </li>
          </menu>
        </section>

        <section>
          <menu>
            <h3>Social Media Links</h3>
            <li>
              <a href="https://www.facebook.com" target="_blank">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://www.pinterest.com" target="_blank">
                Pinterest
              </a>
            </li>
            <li>
              <a href="https://www.twittter.com" target="_blank">
                Twitter
              </a>
            </li>
          </menu>
        </section>
      </div>
    </footer>
  )
}

export default Footer
