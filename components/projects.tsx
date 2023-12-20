"use client"
import React from 'react'
import { projectsData } from '@/lib/data'
import Project from './project'
import { useInView } from 'react-intersection-observer'
import { useActiveSectionContext } from "@/context/active-section"
import { useEffect } from 'react'

const Projects = () => {
    const { ref, inView } = useInView({
        threshold: 0.70
    });
    const { setActiveSection, timeOfLastClick} = useActiveSectionContext();

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
          setActiveSection("Projects");
        }
      }), [inView, setActiveSection, timeOfLastClick]

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
        <h2 className="text-3xl font-medium text-black mb-5 text-center">
            My Projects
        </h2>
        <div className="text-black">
            {projectsData.map((project, index) => (
                <React.Fragment key={index}>
                    <Project {...project}/>
                </React.Fragment>
            ))}

        </div>

    </section>
  )
}




export default Projects

