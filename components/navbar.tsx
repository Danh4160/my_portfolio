"use client" 

import { links } from "@/lib/data";
import { motion } from "framer-motion"
import Link from "next/link";
import { useActiveSectionContext } from "@/context/active-section";

const Header = () => {
  const { activeSection, setActiveSection } = useActiveSectionContext();
  
  return (
    <header className="z-[999] relative">
        <motion.div className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border 
        border-white border-opacity-40 shadow-lgshadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
            initial={{ y: -100, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1}}
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
              >
              <Link
                onClick={() => setActiveSection(link.name)}
                className=                
                  {activeSection === link.name ? "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-black dark:hover:text-gray-400" :
                    "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-white dark:hover:text-gray-300"}
                href={link.hash}
              >
                {activeSection === link.name && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-white  -z-10"
                    style={{
                      borderRadius: 9999,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30
                    }}
                  >
                  </motion.div>
                )}
                <span className="relative">{link.name}</span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header;