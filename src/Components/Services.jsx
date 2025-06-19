import React from 'react'
import { service } from '../constant/export'
import { useGSAP } from '@gsap/react';
import {gsap} from 'gsap'
// import bg1 from'../assets/bg.avif'

function Services() {

    useGSAP(() => {

      
      gsap.from('#head', {
        ease: 'bounce.out',
        y: -100,
        autoAlpha: 0, // fades in and handles visibility
        duration: 2,
      })

      gsap.to('#para',
        {
          ease:'sine.in',
          delay:1,
          opacity:1,
          y:0
        }
      )

      gsap.to('#card',{
        opacity:1,
        duration:2,
        delay:1.5,
        ease:'sine.in',
      })

    }, []);

  return (
   <div className="bg-black min-h-screen w-full flex flex-col px-6 
   text-center space-y-6 items-center justify-center">

    {/* heading and para */}
  <div id='box' 
      className='bg-zinc-900 bg-opacity-70 p-10 rounded-2xl mt-10
      shadow-lg w-full max-w-4xl border border-zinc-700'>

     <h1 id='head' className="text-center font-bold text-7xl bg-clip-text text-transparent mb-10
      bg-gradient-to-r from-violet-400 via-pink-500 to-yellow-50">
      Services
     </h1>
     
      <p id='para'
      className='text-gray-500 flex-col pr-10 opacity-0 translate-x-10'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste numquam tenetur praesentium deserunt laudantium tempore nobis 
        eius rem, mollitia beatae modi adipisci similique sapiente. Exercitationem dolores beatae vitae cumque nostrum!
      </p>
    </div>


  {/* cards */}

   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
    {/* Card 1 */}
    {
      service.map((items,index)=>(
        <div key={index} style={{backgroundImage: `url(${items.image})`,
       }} id='card'
    className="bg-zinc-800 p-6 rounded-xl shadow-md border border-zinc-700 py-20 my-3
     text-white cursor-pointer  hover:scale-105 transition-transform duration-300">
      <h2 className="text-2xl font-semibold mb-2">{items.name}</h2>
      <p className="text-gray-400 text-sm">
        {items.desc}
      </p>
    </div>
      ))
    }
    </div>
</div>

  )
}

export default Services