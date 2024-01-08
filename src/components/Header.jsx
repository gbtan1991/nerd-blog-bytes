import React from "react";
import logo from "../assets/logo.png";
import NavMobile from "./NavMobile";
import NavDesktop from "./NavDesktop";

const Header = () => {
  console.log("Test");
  return (
    <div className="fixed top 0 left-0 right-0 bg-baseGray border-b border-outer_space-400">
      <nav className="container flex items-center justify-between py-1 lg:py-5 bg-outer_space-500">
        <div className="flex items-center text-bone">
          <img src={logo} alt="floppy disk logo" className="w-16" />
          <h1 className="text-3xl font-medium text-dutch_white-500 font-theme">
            Nerd <span className="text-mikado_yellow-500">Blog</span> <span className="text-giants_orange-500">Bytes</span>
          </h1>
        </div>
        <NavMobile />
        <NavDesktop />
      </nav>
    </div>
  );
};

export default Header;
