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
          I initially wanted to pursue a career in education, teaching students about the 
          laws of physics. This goal turned upside down when my college professor ignited in me a passion
          for programming. After completing college, I took the chance to enroll in McGill University's 
          <span className="font-medium"> Software Engineering</span> program. Four years have finally passed,
          and I have learned so much. 
          <span className="italic"> My favorite part of programming</span> is the <span className="font-medium">problem-solving</span> aspect. I{" "}
          <span className="underline">love</span> the feeling of finally figuring out a solution to a problem. 
          This feeling is even more satisfying when I am{" "}
          <span className="font-medium">collaborating</span> with other people !{" "}
          <span>I am familiar with <span className="font-medium">Object Oriented Programming languages</span> such as <span className="font-medium">Java and C++</span>. I extremely familiar with 
            <span className="font-medium"> Python</span> for data engineering and for creating small Articial Intelligent agents to play with.
            <span> I am currently looking for a full-time position as a <span className="font-medium">software developer.</span>
            </span>
          </span>
        </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, going to the gym, and playing with my dog. I also enjoy building
        mechanical keyboards and I am currently learning brazilian jiu-jitsu.
      </p>
    </motion.section>
  )
}

export default About