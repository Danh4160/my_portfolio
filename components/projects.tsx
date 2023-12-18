import React from 'react'
import { projectsData } from '@/lib/data'
import Project from './project'

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-28">
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

