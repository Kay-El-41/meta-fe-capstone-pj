import React from 'react'
import logo from '../icons_assets/Logo.svg'
import Nav from './Nav'

const Header = () => {
  return (
    <header className="header-section">
      <img src={logo} alt="logo" />
      <Nav />
    </header>
  )
}

export default Header
