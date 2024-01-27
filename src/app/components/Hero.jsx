import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='-mt-16 h-full w-full bg-zinc-900 grid place-content-center  lg:place-content-around '>
      <div className='flex flex-col-reverse lg:flex-row lg:justify-between items-center '>
      <h1 className='text-3xl text-center lg:text-5xl lg:w-72'>Welcome to <span className='font-bold text-purple-700'>NerdBlogBytes</span></h1>
      <Image
            src="/images/hero-chip.png"
            alt="chip logo"
            width={1000}
            height={1000}
            style={{filter: "drop-shadow(2px 4px 8px #b752e2)"}}
            className="w-52 h-52 lg:w-[300px] lg:h-[300px] "
          />
      </div>
    </div>
  )
}

export default Hero
