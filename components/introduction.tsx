"use client"

import Image from 'next/image'
import FaceIcon from '@/images/grad_pic_body.jpg'
import { motion } from "framer-motion"
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from "react-icons/bs"
import { HiDownload } from "react-icons/hi"

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
        <div className="flex justify-center">
            <Link className="relative items-center bg-gray-900 text-white gap-1 px-7 py-3 rounded-full" href="#contact">
                Contact Me <BsArrowRight />
            </Link>

            <a className="relative items-center bg-gray-900 text-white gap-1 px-7 py-3 rounded-full" href="/Dan_Resume_2023_EN_ABB.pdf" download>
                Download CV <HiDownload />
            </a>
        </div>
    </motion.section>
  )
}

export default Introduction