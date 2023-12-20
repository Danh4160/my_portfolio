"use client"

import Image from 'next/image'
import FaceIcon from '@/images/grad_pic_body.jpg'
import { motion } from "framer-motion"
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from "react-icons/bs"
import { HiDownload } from "react-icons/hi"
import { FaGithub } from "react-icons/fa"
import { useInView } from 'react-intersection-observer'
import { useActiveSectionContext } from '@/context/active-section'
import { useEffect } from 'react'

const Introduction= () => {
    const { ref, inView } = useInView({
        threshold: 0
    });
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
          setActiveSection("Home");
        }
      }), [inView, setActiveSection, timeOfLastClick]


  return (
    
    <motion.section 
        id="home"
        className="text-center relative max-w-[50rem] scroll-mt-[30rem]"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition = {{ 
            delay: 0.2,
         }}
        ref={ref}
        >
        <div className="flex items-center justify-center">
            <div className='relative'>
                <Image 
                    src={ FaceIcon } alt="Dan Graduation Picture"
                    width="192"
                    height="192"
                    quality="90"
                    priority={true}
                    className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                />
            </div>
        </div>
        <h1 
            className="relative font-medium mt-4 text-lg text-black"
            >
            <span className="font-bold">Hello, I'm Ricardo.</span> I'm a{" "}
            <span className="font-bold">full-stack developer</span> with{" "}
            <span className="font-bold">8 years</span> of experience. I enjoy
            building <span className="italic">sites & apps</span>. My focus is{" "}
            <span className="underline">React (Next.js)</span>.
        </h1>
        <div 
            className="flex items-center justify-center gap-2 pt-2 font-medium"
            >
            <Link 
                className="group bg-black text-white flex items-center rounded-full gap-2 px-5 py-2 p-0 outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition" 
                href="#contact"
                >
                Contact me here <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
            </Link>

            <motion.a 
                className="group bg-white text-black flex items-center rounded-full gap-2 px-5 py-2 outline-none border border-black/10" 
                href="/Dan_Resume_2023_EN_ABB.pdf" download
                whileHover={{
                    scale: 1.1,
                  }}
                >
                Download CV <HiDownload className="opacity-70 group-hover:translate-y-0.5 transition"/>
            </motion.a> 
            <motion.a 
                className="bg-white text-gray-800 flex items-center rounded-full gap-2 px-2 py-2 text-[1rem] border border-black/10" 
                href="https://www.linkedin.com/in/dan-h-552136134/"
                whileHover={{
                    scale: 1.1,
                  }}
                >
                <BsLinkedin />
            </motion.a>
            <motion.a 
                className="bg-white text-gray-800 flex items-center rounded-full gap-2 px-2 py-2 text-[1rem] border border-black/10" 
                href="https://github.com/Danh4160"
                whileHover={{
                    scale: 1.1,
                  }}
                >
                <FaGithub />
            </motion.a>
        </div>
    </motion.section>
  )
}

export default Introduction