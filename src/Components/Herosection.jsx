import React from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import img from '../assets/sbi-board.JPG';

function Herosection() {
  useGSAP(() => {
    gsap.from('#text', {
      ease: 'bounce.out',
      y: -100,
      autoAlpha: 0,
      duration: 2,
    });

    gsap.from('#bg-cover', {
      yoyo: true,
      repeat: -1,
      y: 10,
      duration: 2,
      ease: 'sine.inOut',
    });
  }, []);

  return (
    <div className="h-[1000px] w-full bg-black text-white flex flex-col items-center justify-center">   
      {/* Hero Title */}
       <div
      className="relative h-[1000px] bg-cover w-full bg-center flex items-center justify-center px-6"
      style={{ backgroundImage: `url(${img})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center text-white max-w-4xl">
        {/* Title */}
        <h1
          id="text"
          className="text-transparent bg-clip-text font-serif sm:mt-10 md:mt-10
            bg-gradient-to-r from-[#f6d365] via-[#fda085] to-[#fcb69f]
            text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-wide drop-shadow-md mt-12"
        >
          Arch Complete Solution
        </h1>

        {/* Subtitle */}
        <p className="font-serif mt-6 text-lg
         sm:text-xl lg:text-2xl bg-clip-text text-transparent 
         bg-gradient-to-r from-red-700 via-gray-700 to-blue-500">
          We Create Beyond Your Imagination
        </p>

        {/* Info Box */}
        <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[60%] mb-10
         text-gray-300 border border-gray-700 rounded-xl mt-10 lg:p-10 
          p-6 bg-zinc-900 bg-opacity-80 shadow-lg">
          <p className="leading-relaxed text-sm sm:text-base">
            We are an innovative architectural firm dedicated to turning your dreams into structural reality.
            From concept to creation, we blend creativity with technical expertise to build spaces that inspire.
          </p>
        </div>
      </div>
      </div>

      {/* WHO WE ARE Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-16 px-4 w-full max-w-7xl mt-12 items-center">

        {/* Text Block */}
        <div className="text-gray-400 p-6 lg:p-10 border border-zinc-700 bg-zinc-800 rounded-2xl shadow-md">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold font-serif
          bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            WHO WE ARE
          </h2>
          <p className="mt-6 text-sm sm:text-base leading-relaxed">
            At Arch Complete Solution, we specialize in delivering cutting-edge architectural and design services tailored to your vision.
            Our team of expert architects and designers is committed to excellence and innovation — ensuring each project is unique, functional, and visually captivating.
          </p>
        </div>

        {/* Animated Background Image */}
        <div
          id="bg-cover"
          className="w-[80%] h-64 sm:h-72 md:h-96 bg-cover bg-center translate-x-4 rounded-3xl mx-auto shadow-2xl"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      </section>
    </div>
  );
}

export default Herosection;
