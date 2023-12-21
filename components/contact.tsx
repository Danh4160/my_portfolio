"use client"
import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section";


function Contact() {

  const { ref, inView } = useInView({
    threshold: 1.0
  });
  const { setActiveSection, timeOfLastClick} = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Contact");
    }
  }), [inView, setActiveSection, timeOfLastClick]

  return (
    <section id="contact" ref={ref} className="mb-28">
      <h3 className="text-3xl font-medium text-black mb-10 text-center">
        Contact Me
      </h3> 
      <p>
        Please contact me directly at <a className="underline" href="mailto:dan.hosi@mail.mcgill.ca">dan.hosi@mail.mcgill.ca</a>
      </p>
    </section>
    
  )
}

export default Contact