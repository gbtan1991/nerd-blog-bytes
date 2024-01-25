import React from "react";
import NavItem from "./NavItem";
import { routes } from './routes';

const NavLinks = () => {
   return (
   
      <div className="flex flex-row gap-5 text-xl">
        {routes.map((route) => (          
          <li key={route.id}>
            
            <NavItem name={route.name} url={route.url} icon={route.icon} />

            
           </li>
        ))}
      </div>
  );
};

export default NavLinks;
