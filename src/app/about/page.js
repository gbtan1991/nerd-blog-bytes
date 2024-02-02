"use client";
import { useState } from "react";
import Image from "next/image";
import next from "next";

const page = () => {
  const containerText = [];

  const [containerSlider, setContainerSlider] = useState(0);
  const [buttonSelected, setButtonSelected] = useState(true);

  const handleButtonClick = (index) => {
    setContainerSlider(index);
  };

  return (
    <div className="bg-zinc-900 h-screen w-full absolute -z-10">
      
      <div className="mt-16 lg:mt-44 flex flex-col lg:flex-row justify-center lg:justify-center items-center">   
      <div className="lg:hidden">
        <h1 className="text-white text-center text-2xl font-bold pt-10">
          nerdBlogBytes
        </h1>
        <p className="text-center">Your Ultimate Nerd Haven!</p>
      </div>
      <Image
        src="/images/hero-chip.png"
        width={1000}
        height={1000}
        alt="ninja"
        className="w-52 lg:w-72 animate-pulse "
      />
          <div className="flex flex-col justify-start items-start lg:w-1/3">
          <div className="">
        <h1 className="text-white text-center text-2xl font-bold pt-10 hidden lg:block ">
          nerdBlogBytes
        </h1>
        <p className="text-center hidden lg:block ">Your Ultimate Nerd Haven!</p>
      
          <p className="block text-sm text-center py-7 px-16 lg:p-7">
             Welcome to NerdBlogBytes, your hub for geek culture and digital
             exploration! From tech innovations to gaming reviews, we've got you
             covered. Whether you're a seasoned geek or just starting out, join
             us for a nerdy adventure!"
           </p>
           </div>
           </div>
         </div>
    </div>
  );
};

export default page;


//       <div className="flex flex-col justify-center lg:flex-row items-center p-7 lg:gap-10">
//         <div className="flex flex-col lg:flex-col-reverse ">
//

//        
//       </div>
//       <div></div>
//     </div>
