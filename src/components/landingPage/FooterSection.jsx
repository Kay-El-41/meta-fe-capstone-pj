import React from 'react'
import restaurantImg from '/src/assets/restaurant.jpg'

const FooterSection = () => {
  return (
    <footer className=" bg-gray-lemon px-[15px] py-10 lg:py-20 lg:px-[150px] flex flex-col lg:flex-row lg:gap-10">
      <img src={restaurantImg} className="rounded-lg lg:w-1/2" loading="lazy" />
      <div className="flex flex-col md:flex-row md:justify-around lg:w-1/2 lg:justify-between gap-5">
        <section>
          <menu className=" font-karla flex flex-col gap-2">
            <h3 className="font-markazi text-3xl">Doormat Navigation</h3>
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
          <menu className=" font-karla flex flex-col gap-1">
            <h3 className="font-markazi text-3xl">Contact</h3>
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
          <menu className=" font-karla flex flex-col gap-2">
            <h3 className="font-markazi text-3xl">Social Media Links</h3>
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

export default FooterSection
