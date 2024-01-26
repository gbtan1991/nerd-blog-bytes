import Image from 'next/image'
import Link from 'next/link'

 
export default function NotFound() {
  return (
    <div className='bg-zinc-900 h-screen grid place-content-center -mt-16 '> 
    <div className='flex flex-col items-center gap-2'>
      <Image
            src="/images/404.png"
            alt="chip logo"
            width={1000}
            height={1000}
            className="w-60 lg:w-[480px]"
          />

      <h2 className='text-xl'>Node not found</h2>
      <p className='font-light'>Could not find requested resource</p>
      
      <Link href="/" className='flex items-center justify-center lg:justify-center w-40 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white rounded-xl  hover:scale-110 hover:transition-transform p-3'>Return Home</Link>
      </div>   
    </div>
  )
}