import React from 'react'
import Logo from './Logo'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className='flex items-center justify-around p-5'>
      <Logo />
      <Navbar /> 
    </header>
  )
}

export default Header
