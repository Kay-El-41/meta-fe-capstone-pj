import React from 'react'
import logo from "../icons_assets/Logo.svg"
import Nav from './Nav'

const Header = () => {
  return (
    <>
      <img src={logo} alt="logo" />
      <Nav/>
    </>
  )
}

export default Header

