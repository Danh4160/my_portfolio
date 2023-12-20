"use client"
import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section";
import { motion } from "framer-motion"
import Divider from './divider';


export default function Experience() {

  const { ref, inView } = useInView({
    threshold: 0.4
  });
  const { setActiveSection, timeOfLastClick} = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Experience");
    }
  }), [inView, setActiveSection, timeOfLastClick]

  return (
    <section ref={ref} id="experience" className="scroll-mt-28">
      <h3 className="text-3xl font-medium text-black mb-10 text-center">
        Experience
      </h3>
      <VerticalTimeline lineColor="black" animate={inView}>
        {
          experiencesData.map((item, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
              visible={true} 
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#f3f4f6",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #9ca3af",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:"white",
                fontSize: "1.5rem",
              }}
            >
              <div 
                > 
                <h3 className="font-semibold capitalize">{item.title}</h3>
                <p className="font-normal !mt-0">{item.location}</p>
                <p className="!mt-1 !font-normal text-gray-700">
                  {item.description}
                </p>
              </div>
            </VerticalTimelineElement>
            </React.Fragment>
          ))
        }
      </VerticalTimeline>
    </section>
  );
}
