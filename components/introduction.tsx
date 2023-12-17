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
        <div className="flex items-center justify-center gap-2 pt-2 font-medium">
            <Link className="bg-black flex items-center rounded-full gap-2 px-5 py-2" href="#contact">
                Contact Me <BsArrowRight />
            </Link>

            <a 
                className="bg-white text-black flex items-center rounded-full gap-2 px-5 py-2" 
                href="/Dan_Resume_2023_EN_ABB.pdf" download
                >
                Download CV <HiDownload />
            </a>
            <a 
                className="bg-white text-black flex items-center rounded-full gap-2 px-2 py-2" 
                href="https://www.linkedin.com/in/dan-h-552136134/"
                >
                <BsLinkedin />
            </a>
            <a 
                className="bg-white text-black flex items-center rounded-full gap-2 px-2 py-2" 
                href="https://github.com/Danh4160"
                >
                <FaGithub />
            </a>
        </div>
    </motion.section>
  )
}

export default Introduction