"use client"
import { useActiveSectionContext } from "@/context/active-section";
import { motion } from "framer-motion"
import { useEffect } from "react";
import { useInView } from "react-intersection-observer"

export function About() {
  
  const { ref, inView } = useInView({
    threshold: 0.50
  });
  const { setActiveSection, timeOfLastClick} = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("About");
    }
  }), [inView, setActiveSection, timeOfLastClick]
  

  return (
    <motion.section 
        className="text-center max-w-[45rem] mb-28 leading-8 text-black scroll-mt-28"
        initial={{ opacity:0, y: 100 }}
        animate={{ opacity:1, y: 0 }}
        transition={{ delay: 0.175  }}
        id="about"
        ref={ref}
        >
        <h2 className="text-3xl font-medium text-black mb-5">
            About Me
        </h2>
        <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Accounting</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p>
        {/* <p className="text-black mb-2">
            I am a Canadian based software developer. I recently graduated from McGill University with a Software Engineering bachelor.
        </p>
        <p className="text-black">
            I am a Canadian based software developer. I recently graduated from McGill University with a Software Engineering bachelor.
        </p> */}
    </motion.section>
  )
}

export default About