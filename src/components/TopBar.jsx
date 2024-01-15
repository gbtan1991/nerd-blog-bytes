import React from 'react'
import Logo from "./Logo"

const TopBar = () => {
  return (
    <div className='fixed top-0 left-0 right-0 bg-zinc-900 border-b border-zinc-700'>
        <nav className='contianer flex items-center justify-between py-1 lg:py-5'>
            <Logo />

        </nav>

      
    </div>
  )
}

export default TopBar
