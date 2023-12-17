"use client"

import Image from 'next/image'
import FaceIcon from '@/images/grad_pic_body.jpg'
import { motion } from "framer-motion"
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from "react-icons/bs"
import { HiDownload } from "react-icons/hi"
import { FaGithub } from "react-icons/fa"

const Introduction= () => {
  return (
    
    <motion.section 
        className="text-center relative"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        
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
            Hi, I'm Dan. I'am looking for jobs. Please hire me !
        </h1>
        <div 
            className="flex items-center justify-center gap-2 pt-2 font-medium"
            >
            <Link 
                className="bg-black flex items-center rounded-full gap-2 px-5 py-2 outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition" 
                href="#contact"
                >
                Contact Me <BsArrowRight />
            </Link>

            <motion.a 
                className="bg-white text-black flex items-center rounded-full gap-2 px-5 py-2 " 
                href="/Dan_Resume_2023_EN_ABB.pdf" download
                whileHover={{
                    scale: 1.1,
                  }}
                >
                Download CV <HiDownload />
            </motion.a> 
            <motion.a 
                className="bg-white text-black flex items-center rounded-full gap-2 px-2 py-2 text-[1rem]" 
                href="https://www.linkedin.com/in/dan-h-552136134/"
                whileHover={{
                    scale: 1.1,
                  }}
                >
                <BsLinkedin />
            </motion.a>
            <motion.a 
                className="bg-white text-black flex items-center rounded-full gap-2 px-2 py-2 text-[1rem]" 
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