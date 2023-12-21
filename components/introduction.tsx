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
        threshold: 0.1
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
                    className="h-52 w-52 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                />
            </div>
        </div>
        <h1 
            className="relative font-medium mt-4 text-2xl text-black leading-8"
            >
            <span className="font-bold">Hey there! I'm Dan, </span>a recent{" "}
            <span className="font-bold">graduate </span>from McGill University with a bachelor's degree in Software Engineering. I have experience in{" "}
            <span className="font-bold italic">data engineering </span> with Python and <span className="font-bold italic"> full-stack development. </span>
            My current focus is learning React (Next.js) to craft dynamic and engaging websites.
        </h1>
        <div 
            className="flex items-center justify-center gap-2 pt-6 font-medium"
            >
            <Link 
                className="group bg-black text-white flex items-center rounded-full gap-2 px-5 py-2 p-0 outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition" 
                href="#contact"
                >
                Contact me here <BsArrowRight className="opacity-80 group-hover:translate-x-1 transition" />
            </Link>

            <motion.a 
                className="group bg-white text-black flex items-center rounded-full gap-2 px-5 py-2 outline-none border border-black/10" 
                href="/Dan_Resume_2023_EN_ABB.pdf" download
                whileHover={{
                    scale: 1.1,
                  }}
                >
                Download CV <HiDownload className="opacity-80 group-hover:translate-y-0.5 transition"/>
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