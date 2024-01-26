"use client"
import React from 'react'
import Logo from "./Logo"
import NavDesktop from './NavDesktop'
import NavMobile from './NavMobile'



const TopBar = () => {
  return (
    <div className=' bg-zinc-900 border-b border-zinc-700'>
        <nav className='contianer flex items-center justify-between lg:justify-evenly  px-5 py-1 lg:py-5'>
            <Logo />
            <NavMobile />
            <NavDesktop />

        </nav>

      
    </div>
  )
}

export default TopBar
