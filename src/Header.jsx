import logo from '../public/geekGlasses.png'

const Header = () => {

  return (
    <header className="">
    <div className="flex justify-around items-baseline p-6 border-b-4 border-zinc-700">
      <div className=" flex items-center gap-4">
      <img src={ logo } alt="logo" className="w-16"/>
      <h1 className="text-5xl font-bold font-mono">Nerd Blog Bytes</h1>
      </div>
      
      <nav>
        <ul className="flex items-center gap-11 text-xl font-bold font-mono">
          <li>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 "
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900"
            >
              Contact
            </a>
          </li>

          <li>
            <a
              
              className="text-gray-700 hover:text-gray-900 cursor-pointer"
            >
              +Add New Blog
            </a>
          </li>
        </ul>
      </nav>

    





    </div>
    </header>
  )
}

export default Header
