"use client"
import { projectsData } from '@/lib/data'
import Image from 'next/image'
import { motion, useScroll, useTransform} from 'framer-motion'
import { useRef } from 'react'

type ProjectProps = typeof projectsData[number]

export default function Project({title, description,tags,imageUrl}: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
      });
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

    return ( 
        <motion.div className="group mb-8 last:mb:0"
            ref={ref}
            style={{
                scale: scaleProgess,
                opacity: opacityProgess
            }}
        >
            <section 
                className=
                "relative bg-gray-100 max-w-[42rem] h-[18rem] overflow-hidden border \
                border-black/5 hover:bg-gray-200 transition rounded-lg group-even:pl-8"
             >
                <div
                    className="py-4 px-5 pl-10 pr-2 pt-10 max-w-[50%] flex flex-col group-even:ml-[18rem]"
                >
                    <h3
                        className="text-2xl font-semibold"
                    >
                        {title}
                    </h3>
                    <p className="mt-2 mb-4 text-gray-700 leading-relaxed">
                        {description}
                    </p>
                    <ul className="flex flex-wrap gap-2">
                        {tags.map((tag, index) => (
                            <li className="relative bg-black bg-opacity-70 px-3 py-1 text-[0.8rem] uppercase tracking-wide text-white rounded-full" key={index}>
                                {tag}
                            </li>
                        ))}
                    </ul>
                </div>
                <Image src={imageUrl} alt="Project I worked on" quality={95} 
                    className=
                    "absolute top-10 -right-40 h-[16rem] w-[28rem] \
                    rounded-lg shadow-2xl \
                    group-hover:-translate-x-3 \
                    group-hover:translate-y-3 \
                    group-hover:-rotate-2 \
                    group-hover:scale-[1.04] \
                    group-even:group-hover:translate-x-3 \
                    group-even:group-hover:translate-y-3 \
                    group-even:group-hover:rotate-2 \
                    group-even:right-[initial] \
                    group-even:-left-40 \
                    transition"/>
            </section>
        </motion.div>
    )
}