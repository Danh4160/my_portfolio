"use client" 

import { links } from "@/lib/data";
import { motion } from "framer-motion"
import { link } from "fs";
import Link from "next/link";

const Header = () => {
  return (
    <header className="z-[999] relative">
        <motion.div className="fixed top-6 h-[3.25rem] w-[36rem] left-1/2 rounded-full
         backdrop-blur-[0.5rem] dark:bg-slate-700 dark:border-black/40 dark:bg-opacity-80"
            initial={{ y: -100, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1}}
            transition={{  
              duration: 0.5,
            }}
            >
         </motion.div>
         <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
          <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-white sm:w-[initial] sm:flex-nowrap sm:gap-5">
            {links.map((link) => (
              <motion.li
                className="h-3/4 flex items-center justify-center relative"
                key={link.hash}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{  
                  duration: 0.5,
                }}
              >
              <Link
                className=
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-white dark:hover:text-gray-300"
                href={link.hash}
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header;