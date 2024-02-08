import {
    RiHomeLine,
    RiTerminalWindowLine,
    RiUser6Line,
    RiPhoneLine,
  } from "react-icons/ri";
  import { IoChatbubblesOutline } from "react-icons/io5";


  
  export const routes = [
    {
      id: 1,
      name: "Home",
      url: "/",
      icon: <RiHomeLine />,
    },
    
    {
      id: 2,
      name: "About",
      url: "/about",
      icon: <RiUser6Line />,
    },
    {
      id: 3,
      name: "Blogs",
      url: "/blogs",
      icon: <RiTerminalWindowLine />,
    },
    {
      id: 4,
      name: "Topics",
      url: "/topics",
      icon: <IoChatbubblesOutline />
    },

    {
      id: 5,
      name: "Contact",
      url: "/contact",
      icon: <RiPhoneLine />,
    },
  
  
  ];
  