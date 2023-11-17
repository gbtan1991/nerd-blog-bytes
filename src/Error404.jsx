import React from 'react'

const Error404 = ({ error }) => {
  return (
    <div className='grid place-content-center h-[400px] font-mono'>
      <h1 className='text-9xl text-center'>Error <span className='text-teal-500'>404</span></h1>
      <h2 className='text-4xl text-center'>Oops! Page Not Found</h2>
    </div>
  )
}

export default Error404
