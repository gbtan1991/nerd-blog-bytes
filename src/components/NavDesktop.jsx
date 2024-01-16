import React from "react";
import { routes } from "../routes";
import CallToAction from "./CallToAction";

const NavDesktop = () => {
  return (
    <>
      <ul className="hidden lg:flex lg:items-center gap-5 text-sm">
        {routes.map(({ id, urlName, url, icon }) => (
          <li key={id}>
            <a
              href={url}
              className="flex items-center gap-1 text-zinc-50 text-lg hover:text-primary-accent-purple hover:transition-transform hover:rotate-6 origin-center hover:ease-out"
            >
              {icon}
              {urlName}
            </a>
          </li>
        ))}
        <li><CallToAction /> </li>
      </ul>
    </>
  );
};

export default NavDesktop;
