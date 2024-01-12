import React from "react";
import {
  RiHomeLine,
  RiTerminalWindowLine,
  RiUser6Line,
  RiPhoneLine,
  RiArrowRightCircleLine,
} from "react-icons/ri";
import CallToAction from "./CallToAction";

const Navbar = () => {
  const navLinks = [
    {
      id: 1,
      urlName: "Home",
      url: "/",
      icon: <RiHomeLine />,
    },
    {
      id: 2,
      urlName: "Blogs",
      url: "/blogs",
      icon: <RiTerminalWindowLine />,
    },
    {
      id: 3,
      urlName: "About",
      url: "/about",
      icon: <RiUser6Line />,
    },
    {
      id: 4,
      urlName: "Contact",
      url: "/contact",
      icon: <RiPhoneLine />,
    },
    
  ];
  return (
    <div className="font-roboto-mono">
      <nav>
        <ul className="flex items-center gap-5">
        {navLinks.map((link) => (
            <li
              key={link.id}
              className="text-xl text-neutral-light-gray"
            >
              <a
                href={link.url}
                className="flex items-center gap-1 hover:text-primary-accent-purple hover:transition-transform hover:rotate-6 origin-center hover:ease-out"
              >
                {link.icon}
                <h2>{link.urlName}</h2>
              </a>
            </li>
          ))}
          <CallToAction />
        </ul>
        
      </nav>
    </div>
  );
};

export default Navbar;
