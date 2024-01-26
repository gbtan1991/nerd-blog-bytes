import React from 'react'
import { RiArrowRightCircleLine } from 'react-icons/ri' 

const CallToAction = () => {
  return (
    <div >
      <button className='flex items-center justify-between lg:gap-2 lg:justify-center w-full mt-[0.8rem] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white rounded-xl  hover:scale-110 hover:transition-transform p-5 lg:p-3 '>
        <p className='text-lg'>
        Compose a Blog
        </p>
        <RiArrowRightCircleLine className='text-xl'/></button>
    </div>
  )
}

export default CallToAction
