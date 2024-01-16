import React, { useState, useRef } from "react";
import { routes } from '../routes';
import { useClickAway } from "react-use";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";


const NavMobile = () => {
    const [isOpen, setIsOpen ] =  useState(false);
    const ref = useRef(null);

    useClickAway(ref, () => setIsOpen(false));

  return (
    <div ref={ref} className="text-zinc-50 lg:hidden">
    <Hamburger toggled={isOpen} toggle={setIsOpen} />
      <AnimatePresence>
        {isOpen && (
            <motion.div 
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            exit={{ opacity: 0}}
            transition={{duration: 0.2}}
            className="fixed left-0 shadow-4xl right-0 top-[3.5rem] p-5 pt-0 bg-zinc-900 h-screen border-b border-zinc-700 mt-10"
            >
            <ul className="grid  gap-2 bg-zinc-900">
                {routes.map((route, idx) =>{
                    const { icon } = route;
                    return (
                        <motion.li
                        initial={{scale: 0, opacity: 0}}
                        animate={{scale: 1, opacity: 1}}
                        transition={{ type: "" , stiffness: 100, damping: 20, delay: 0.1 + idx / 10}}
                        key={route.id}
                        className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-neutral-800 via neutral-950 to neutral-700"
                        >
                        <a 
                        onClick={() => setIsOpen((prev) => !prev)}
                        className={`flex items-center justify-between -full p-5 rounded-xl bg-neutral-950`}
                        href={route.url}
                        >
                        <span className="flex gap-1 text-lg">{route.urlName}</span>
                        <span className="text-xl">{icon}</span>
                        </a>
                        </motion.li>
                    )

                })}
            </ul>


            </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavMobile;
