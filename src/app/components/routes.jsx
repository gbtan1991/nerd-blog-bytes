import {
    RiHomeLine,
    RiTerminalWindowLine,
    RiUser6Line,
    RiPhoneLine,
  } from "react-icons/ri";
  
  export const routes = [
    {
      id: 1,
      name: "Home",
      url: "/",
      icon: <RiHomeLine />,
    },
    {
      id: 2,
      name: "Blogs",
      url: "/blogs",
      icon: <RiTerminalWindowLine />,
    },
    {
      id: 3,
      name: "About",
      url: "/about",
      icon: <RiUser6Line />,
    },
    {
      id: 4,
      name: "Contact",
      url: "/contact",
      icon: <RiPhoneLine />,
    },
  
  
  ];
  