import React from "react";
import CallToAction from "./CallToAction";
import NavLinks from "./NavLinks";


const NavDesktop = () => {
  return (
    <>
      <ul className="hidden lg:flex lg:flex-row lg:items-baseline gap-10 text-sm">
        
        <NavLinks />
       
      </ul>
    </>
  );
};

export default NavDesktop;
