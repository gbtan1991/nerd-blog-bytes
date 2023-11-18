import glasses from "./assets/geek-glasses.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="border-4 border-b-black ">
    <div className="flex justify-around p-2">
      <div className="flex items-center gap-5">
        <img src={glasses} alt="nerd-glasses" className="w-20 " />
        <h1 className="text-5xl font-bold font-mono">Nerd <span className="text-teal-500">Blog</span> Bytes</h1>
      </div>
      <div className="flex items-center font-mono">
        <ul className="flex flex-row gap-5 text-xl">
        <Link to="/"><li className="p-2">Home</li></Link>
        <Link to="/About"><li className="p-2">About</li></Link>
        <li className="p-2">Blogs</li>
            <li className="bg-zinc-950 text-white p-2 shadow-retro shadow-teal-500">+Add New Blog</li>
        </ul>
      </div>
      </div>
     
    </div>
  );
};

export default Header;
