import React from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import img from '../assets/bg.avif'

function Herosection() {
  useGSAP(() => {
    gsap.from('#text', {
      ease: 'bounce.out',
      y: -100,
      autoAlpha: 0, // fades in and handles visibility
      duration: 2,
    });

    gsap.from('#bg-cover',{
      yoyo:true,
      repeat:-1,
      y:0,
      duration:2,
      ease:'sine.inOut',
      x:0
    })
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black px-4">
  {/* Title */}
  <h1
    id="text"
    className="text-center text-transparent bg-clip-text font-serif
               bg-gradient-to-r from-[#f6d365] via-[#fda085] to-[#fcb69f]
               text-4xl sm:text-5xl lg:text-6xl font-extrabold 
               tracking-wide drop-shadow-md mt-16">
    Arch Complete Solution   </h1>
    <p className="font-serif mt-6 text-lg sm:text-xl lg:text-2xl 
       bg-clip-text text-transparent bg-gradient-to-r from-red-700 via-gray-700 to-blue-500">
      We Create Beyond Your Imagination
    </p>


  {/* Info Box */}
  <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[50%] text-gray-300 border
                  border-gray-700 rounded-xl mt-12 lg:p-16 p-6 bg-zinc-900">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dicta sapiente maxime nihil soluta corrupti
      praesentium dolor at, officia quaerat quisquam illum maiores eaque ab nemo eius perferendis reprehenderit facilis.
    </p>
  </div>

  {/* WHO WE ARE Section */}
  <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-black py-16 px-4 w-full max-w-7xl mt-12">
    
    {/* Text Section */}
    <div className="text-gray-400 p-6 lg:p-10 border border-black bg-zinc-800 rounded-xl">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold font-serif 
      bg-clip-text text-transparent 
      bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500


">
        WHO WE ARE
      </h2>
      <p className="mt-6 text-sm  sm:text-base">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum ipsam aut nam molestias
        aliquam laudantium labore, ab odio culpa perspiciatis deleniti. Vero et dolore modi iusto eveniet animi, incidunt cum?
      </p>
    </div>

    {/* Background Image Div */}
    <div
      id="bg-cover"
      className="w-[70%] h-64 sm:h-72 md:h-96 bg-cover bg-center translate-x-10 rounded-3xl mx-auto"
      style={{ backgroundImage: `url(${img})` }}
    ></div>
  </section>
</div>

  );
}

export default Herosection;
