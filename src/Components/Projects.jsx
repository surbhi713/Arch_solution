import React, { use } from 'react'
import { useGSAP } from '@gsap/react'
import {gsap} from 'gsap'

function Projects() {

  useGSAP(()=>{
    gsap.to('#para',{
      opacity:1,
      x:0,
      duration:2,
      delay:1
    })

    gsap.to('#head',{
      duration:1,
      opacity:1,
      y:0
    })

  },[])
  return (
    <div className='flex flex-col justify-center min-h-screen items-center '>
      
      <div className=' bg-zinc-900 border border-zinc-700 
       lg:py-20 rounded-2xl px-10 flex flex-col lg:w-[60%]  
       justify-center items-center gap-10 shadow-lg '>

        <h1 id='head' className='text-5xl font-bold flex font-serif opacity-0 translate-y-10
         bg-clip-text text-transparent bg-gradient-to-r from-pink-200 via-pink-400 to-pink-900  '>
        Our Projects
      </h1>
      <p className=' flex-col px-10 opacity-0 translate-x-10
      text-gray-400 ' id='para'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Omnis iure provident rem repellendus voluptatum incidunt reprehenderit vitae tempora impedit
          doloremque minima maxime labore nobis, quam molestias corrupti ullam blanditiis fuga.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Omnis iure provident rem repellendus voluptatum incidunt reprehenderit vitae tempora impedit
          doloremque minima maxime labore nobis, quam molestias corrupti ullam blanditiis fuga.
      </p>
      </div>

    </div>
  )
}

export default Projects