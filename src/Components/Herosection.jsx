import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import img from '../assets/interior.jpg';
import img1 from '../assets/school-work.JPG';
import Aos from 'aos';

function Herosection() {

  useEffect(()=>{
    Aos.init({
      duration:800,
      easing:'ease-in-sine',
      offset:200,
      delay:100
    })
  },[])

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
    <div className="w-full bg-white text-black flex flex-col items-center justify-center">

      {/* HERO SECTION */}
      <div
        className="relative w-full min-h-[90vh] bg-cover bg-center flex items-center justify-center px-4 sm:px-8 md:px-12"
        style={{ backgroundImage: `url(${img})` }}
      >
        {/* Optional Soft Overlay (light tint) */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl w-full mt-12 sm:mt-16 md:mt-20 px-4">
          <h1
            id="text"
            className="text-transparent bg-clip-text font-serif 
              bg-gradient-to-r from-white via-pink-500 to-white
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide drop-shadow"
          >
            Arch Complete Solution
          </h1>

          {/* Subtitle */}
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl lg:text-2xl font-serif
            bg-clip-text text-transparent bg-gradient-to-r from-white via-pink-600 to-black">
            We Create Beyond Your Imagination
          </p>

          {/* Info Box */}
          <div className="mt-8 sm:mt-10 mx-auto w-full sm:w-[90%] md:w-[70%] lg:w-[60%] 
              text-gray-700 border border-gray-300 rounded-xl p-5 sm:p-8 lg:p-10 
              bg-zinc-300 bg-opacity-90 shadow-lg">
            <p className="leading-relaxed text-sm sm:text-base font-semibold">
              At Arch Complete Solution, we specialize in delivering high-quality construction and interior design services
              that combine functionality, style, and craftsmanship. Whether you're building from the ground up or
              transforming an existing space, our team is here to bring your vision to life—on time and within budget.
            </p>
          </div>
        </div>
      </div>

      {/* WHO WE ARE SECTION */}
      <section className="w-full max-w-7xl px-4 sm:px-8 md:px-10 py-14 sm:py-20 
      grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* Text Block */}
        <div className="text-gray-800  p-6 sm:p-8 lg:p-10">
          <h2 data-aos='fade-in' className="text-2xl sm:text-3xl lg:text-5xl font-semibold font-serif 
              text-rose-500 ">
            Who We Are ?
          </h2>
          <p className="mt-5 text-sm sm:text-base leading-relaxed font-semibold">
            Founded in [Year], our team of architects, designers, engineers, and project managers brings decades of
            combined experience across residential, commercial, and hospitality projects. Whether it's a custom home, a
            modern office, or a luxurious renovation, we treat every project with meticulous attention to detail and a
            commitment to excellence.
          </p>
        </div>

        {/* Animated Image Block */}
        <div
          id="bg-cover"
          className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-full h-64 sm:h-80 md:h-[420px] 
            bg-cover bg-center rounded-3xl mx-auto shadow-2xl"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="w-full max-w-7xl px-4 sm:px-8 md:px-10 py-14 sm:py-20 
      grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div
          id="bg-cover"
          className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-full h-64 sm:h-80 md:h-[420px] 
            bg-cover bg-center rounded-3xl mx-auto shadow-2xl"
          style={{ backgroundImage: `url(${img1})` }}
        >

        </div>
        <div className="text-gray-800 rounded-2xl p-6 sm:p-8 lg:p-10">
          
          <h2 data-aos='fade-in' className="text-2xl sm:text-3xl lg:text-5xl font-semibold font-serif 
              bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500">
            Why Choose Us
          </h2>
          <p className="mt-5 text-sm sm:text-base leading-relaxed">
            End-to-end project management.
            <br />
            Transparent communication.
             <br /> 
            Design that balances aesthetics and practicality.
            <br />
            Strong supplier and contractor network.
            <br />
            Sustainable and cost-effective solutions.
            <br />
            Your space is a reflection of your story — and we're here to help you tell it beautifully.
            <br />
            Let's build something remarkable together.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Herosection;
