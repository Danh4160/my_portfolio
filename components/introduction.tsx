import React from 'react'
import Image from 'next/image'
import FaceIcon from '@/images/grad_pic_body.jpg'

const Introduction= () => {
  return (
    
    <section className="">
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

    </section>
  )
}

export default Introduction