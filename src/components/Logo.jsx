import React from "react";
import logo from "../assets/nerd-logo.png";

const Logo = () => {
  return (
    <>
      <a href="/" className="hover:text-primary-accent-purple hover:transition-transform hover:scale-110 origin-center">
        <div className="font-roboto-mono flex flex-row items-center">
          <img src={logo} alt="chip logo " className="w-10 lg:w-16" />
          <h1 className="hidden lg:block text-xl font-bold text-white ml-2 " >nerdBlogBytes</h1>
        </div>
      </a>
    </>
  );
};

export default Logo;
