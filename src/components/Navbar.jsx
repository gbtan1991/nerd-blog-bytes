import React from "react";
import CallToAction from "./CallToAction";
import { routes } from "../routes";

const Navbar = () => {
  
  return (
    <>
    <ul className="hidden lg:flex lg:items-center gap-5 text-sm">
      {routes.map(() ={
        const { id, urlName, url, icon }
        return (
          <li>
            <a href={url} className="flex items-center gap-1 hover:text-primary-accent-purple hover:transition-transform hover:rotate-6 origin-center hover:ease-out"
        )
      })}
    </ul>
    </>




//     <div className="font-roboto-mono">
//       <nav>
//         <ul className="flex items-center gap-5">
//         {routes.map((route) => {
//           const { id, urlName, url, icon } = route;
//           return (
            
//             <li
//               key={id}
//               className="text-xl text-neutral-light-gray"
//             >
//               <a
//                 href={url}
//                 className="flex items-center gap-1 hover:text-primary-accent-purple hover:transition-transform hover:rotate-6 origin-center hover:ease-out"
//               >
//                 {icon}
//                 <h2>{urlName}</h2>
//               </a>
//             </li>
//           );
            
// })}
//           <CallToAction />
//         </ul>
        
//       </nav>
//     </div>
  );
};

export default Navbar;
