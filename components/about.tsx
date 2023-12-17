"use client"
import { motion } from "framer-motion"

const About = () => {
  return (
    <motion.section 
        className="text-center leading-8"
        initial={{ opacity:0, y: 100 }}
        animate={{ opacity:1, y: 0 }}
        transition={{ delay: 0.125  }}
        >
        <h2 className="text-3xl font-medium text-black mb-5">
            About Me
        </h2>
        <p className="text-black mb-2">
            I am a Canadian based software developer. I recently graduated from McGill University with a Software Engineering bachelor.
        </p>
        <p className="text-black">
            I am a Canadian based software developer. I recently graduated from McGill University with a Software Engineering bachelor.
        </p>
    </motion.section>
  )
}

export default About