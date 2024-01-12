import React from 'react'
import { RiArrowRightCircleLine } from 'react-icons/ri' 

const CallToAction = () => {
  return (
    <div className='text-xl'>
      <button className='bg-gradient-to-r px-3 py-2 from-pink-500 via-purple-500 to-indigo-500 text-white rounded-xl flex items-center gap-2 hover:scale-110 hover:transition-transform '>
        
        Compose a Blog
        <RiArrowRightCircleLine /></button>
    </div>
  )
}

export default CallToAction
