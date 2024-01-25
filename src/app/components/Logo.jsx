import React from "react";
import Image from "next/image";

const Logo = ({}) => {
  return (
    <>
      <a
        href="/"
        className="hover:text-primary-accent-purple hover:transition-transform hover:scale-110 origin-center"
      >
        <div className="font-roboto-mono flex flex-row items-center ">
          <Image
            src="/images/nerd-logo.png"
            alt="chip logo"
            width={1000}
            height={1000}
            className="w-14 h-14 lg:h-20 lg:w-20"
          />

          <h1 className="hidden lg:block text-3xl font-bold text-white ml-2 ">
            nerdBlogBytes
          </h1>
        </div>
      </a>
    </>
  );
};

export default Logo;
