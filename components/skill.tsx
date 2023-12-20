"use client"
import { skillsData } from '@/lib/data'
import { useInView } from 'react-intersection-observer'
import { useActiveSectionContext } from "@/context/active-section"
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { AiOutlineLike } from "react-icons/ai";


const fadeAnimationVariants = {
    initial: {
        opacity: 0,
        y:100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y:0,
        transition: {
            delay: 0.05 * index,
        },
    })
};


const Skill = () => {

const { ref, inView } = useInView({
    threshold: 1.0
});
const { setActiveSection, timeOfLastClick} = useActiveSectionContext();

useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
        setActiveSection("Skills");
    }
    }), [inView, setActiveSection, timeOfLastClick]


return (
  <section ref={ref} className="text-black max-w-[45rem] items-center justify-center">
    <h2 className="text-3xl font-medium text-black mb-10 text-center">
            Skills
    </h2>
    <ul className="flex flex-wrap justify-center gap-2 text-lg">
      {skillsData.map((skills, index) => (
        <motion.li 
            className="flex items-center bg-blue-100/[0.1] border border-black/[0.1] rounded-lg px-3 py-3 gap-1"
            key={index}
            variants={fadeAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
                once: true,
            }}
            custom={index}
        >   

            {index <= 10 && (
                <AiOutlineLike />
            )}
            <span>{skills}</span>
            
        </motion.li>
      ))}
    </ul>
  </section>
  )
}

export default Skill