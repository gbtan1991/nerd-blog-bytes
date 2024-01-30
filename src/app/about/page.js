"use client"
import  { useState } from "react";
import Image from "next/image";
import next from "next";

const page = () => {

  const containerText = [
    "Welcome to NerdBlogBytes, your portal to the boundless expanse of nerd culture and the digital frontier. Dive into a realm where pixels meet prose, where bytes spark creativity, and where geeks reign supreme.",
    "At NerdBlogBytes, we are your trusty guides through the labyrinth of the digital world. From the latest in tech innovations to deep dives into the realms of science fiction, fantasy, gaming, and beyond, our  eclectic team of passionate nerds is here to entertain, inform, and inspire.",
    "Join us on a journey where we dissect the latest gadgets, review the hottest games, analyze blockbuster movies, and explore the far reaches of the internet for hidden gems and undiscovered wonders. ",
    "Whether you're a seasoned geek or just dipping your toes into the vast ocean of nerd-dom, NerdBlogBytes offers something for everyone. So grab your favorite beverage, settle into your comfiest chair, and let the adventure begin. After all, in this digital age, knowledge is power, and curiosity is our compass. Welcome to NerdBlogBytes—where nerds rule the virtual realm!"
    
  ]


  const [containerSlider, setContainerSlider] = useState(0);
  

  const handleButtonClick = (index) => {
    
    setContainerSlider(index);
    
  };
  

  return (
    <div className="bg-zinc-900 h-screen">
      <h1 className="text-white text-center text-2xl font-bold pt-10">
        nerdBlogBytes
      </h1>
      <p className="text-center">Unraveling the Digital Universe</p>
      <div>
        <Image
          src="/images/hero-chip.png"
          width={1000}
          height={1000}
          alt="ninja"
          className="w-52 mx-auto mt-10"
        />

        <div className="flex flex-col items-center">
          <p className="text-sm text-center">
           {containerText[containerSlider]}
          </p>
          <div className="button-container flex flex-row gap-2">
        <button onClick={() => handleButtonClick(0)} className="border border-zinc-600 bg-purple-700 w-5 h-5 rounded-full"></button>
        <button onClick={() => handleButtonClick(1)} className="border border-zinc-600 bg-zinc-700 w-5 h-5 rounded-full"></button>
        <button onClick={() => handleButtonClick(2)} className="border border-zinc-600 bg-zinc-700 w-5 h-5 rounded-full"></button>
        <button onClick={() => handleButtonClick(3)} className="border border-zinc-600 bg-zinc-700 w-5 h-5 rounded-full"></button>
      </div>
          

       
        </div>
      </div>
    </div>
  );
};

export default page;
