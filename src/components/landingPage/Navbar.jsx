import React, { useState } from 'react'
import navLogo from '/src/assets/Logo.svg'
import { GoKebabVertical } from 'react-icons/go'
import { TfiClose } from 'react-icons/tfi'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [menuClosed, setMenuClosed] = useState(true)

  const menuToggle = () => {
    setMenuClosed(!menuClosed)
  }

  const scrollIntoSection = (id) => {
    const sectionView = document.getElementById(id)
    if (sectionView) {
      sectionView.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }

  return (
    <nav className=" font-karla flex relative justify-between items-center shadow-sm bg-white h-[70px] w-full lg:px-[150px] xl:px-[250px]">
      <Link to="/">
        <img src={navLogo} alt="logo" className=" ml-[15px]" loading='lazy'/>
      </Link>

      <div
        className={`navigation-links flex items-center absolute md:static w-full md:w-fit h-[250px] md:h-[70px] ${
          menuClosed && 'top-[-250px]'
        } transition-top ease-in duration-300 top-0 left-0 bg-white shadow-sm md:shadow-none`}
      >
        <div className="flex flex-col md:flex-row gap-2 md:gap-5 p-5">
          <Link onClick={() => scrollIntoSection('hero')}>Home</Link>
          <Link onClick={() => scrollIntoSection('menu')}>Menu</Link>
          <Link onClick={() => scrollIntoSection('about')}>About</Link>
          <Link to="/reservation">Reservations</Link>
          <Link to="/order">Order Online</Link>
          <Link>Login</Link>
        </div>
        <TfiClose
          className="text-2xl md:hidden absolute top-6 right-[15px] text-green-lemon"
          onClick={menuToggle}
        />
      </div>

      <div className="mr-[15px] text-2xl md:hidden text-green-lemon">
        {menuClosed && <GoKebabVertical onClick={menuToggle} />}
      </div>
    </nav>
  )
}

export default Navbar
