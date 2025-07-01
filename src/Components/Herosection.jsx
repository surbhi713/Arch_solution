import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import emailjs from '@emailjs/browser';
import Aos from 'aos';
import contact from '../assets/interior.jpg';
import img from '../assets/interior.jpg';
import img1 from '../assets/school-work.JPG';
import bg from '../assets/bg.avif';
import { previewProjects } from '../const/imageMap';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

function Herosection() {

  useEffect(() => {
    Aos.init({
      duration: 800,
      easing: 'ease-in-sine',
      offset: 200,
      delay: 100
    });
  }, []);

  const headingRef = useRef(null);

  useGSAP(() => {
    gsap.from('#text', {
      ease: 'bounce.out',
      y: -100,
      autoAlpha: 0,
      duration: 2,
    });

    // gsap.from('#bg-cover', {
    //   yoyo: true,
    //   repeat: -1,
    //   y: 10,
    //   duration: 2,
    //   ease: 'sine.inOut',
    // });

    gsap.from(headingRef.current, {
      y: -50,
      opacity: 0,
      duration: 1.5,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: headingRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reset',
      },
    });
  }, []);

  return (
    <div className="w-full bg-white text-black flex flex-col items-center justify-center">

      {/* HERO SECTION */}
      <div className="relative w-full min-h-[90vh] bg-cover bg-center flex items-center justify-center px-4 sm:px-8 md:px-12" style={{ backgroundImage: `url(${img})` }}>
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center max-w-4xl w-full mt-12 sm:mt-16 md:mt-20 px-4 ">
          <h1 id="text" className="text-transparent bg-clip-text font-serif py-2
           bg-gradient-to-r from-white via-pink-500 to-white text-3xl 
           sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide drop-shadow">
            Arch Complete Solution
          </h1>
          <p className="mt-4 sm:mt-6 text-lg 
          sm:text-xl lg:text-2xl font-serif bg-clip-text text-transparent bg-gradient-to-r
           from-white via-pink-600 to-black">
            We Create Beyond Your Imagination
          </p>
          <div className="mt-8 sm:mt-10 mx-auto w-full sm:w-[90%] md:w-[70%] lg:w-[60%] text-gray-700 border border-gray-300 rounded-xl p-5 sm:p-8 lg:p-10 bg-zinc-300 bg-opacity-90 shadow-lg">
            <p className="leading-relaxed text-sm sm:text-base font-semibold">
             At Arch Complete Solution, we specialize in delivering high-quality construction and interior
              design services that combine functionality, style, and craftsmanship. Whether you're building
               from the ground up or transforming an existing space, our team is here to bring your vision
                to life-on time and within budget.
            </p>
          </div>
        </div>
      </div>

      {/* WHO WE ARE */}
      <section className="w-full max-w-7xl px-4 sm:px-8 md:px-10 py-14 sm:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="text-gray-800 p-6 sm:p-8 lg:p-10">
          <h2 data-aos='fade-in' className="text-2xl sm:text-3xl lg:text-5xl font-semibold font-serif text-rose-500">Who We Are?</h2>
          <p className="mt-5 text-sm sm:text-base leading-relaxed font-semibold">
            Founded in 2005, we are architects, designers, engineers, and project managers
             with decades of combined experience in residential, commercial, and hospitality projects. 
             We bring excellence, creativity, and precision to every project.
          </p>
        </div>
        <div id="bg-cover" className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-full h-64 sm:h-80 md:h-[420px] bg-cover bg-center rounded-3xl mx-auto shadow-2xl" style={{ backgroundImage: `url(${img})` }}></div>
      </section>

      {/* WHY CHOOSE US - Desktop */}
      <section className="hidden sm:grid w-full max-w-7xl px-4 sm:px-8 md:px-10 py-14 sm:py-20 grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div id="bg-cover" className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-full h-64 sm:h-80 md:h-[420px] bg-cover bg-center rounded-3xl mx-auto shadow-2xl" style={{ backgroundImage: `url(${img1})` }}></div>
        <div className="text-gray-800 rounded-2xl p-6 sm:p-8 lg:p-10">
          <h2 data-aos='fade-in' className="text-2xl sm:text-3xl lg:text-5xl font-semibold font-serif bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500">Why Choose Us</h2>
          <ul className='list-disc ml-5 mt-5 text-sm sm:text-base leading-relaxed'>
            <li>End-to-end project management</li>
            <li>Transparent communication</li>
            <li>Balanced aesthetics and functionality</li>
            <li>Strong supplier and contractor network</li>
            <li>Sustainable and cost-effective solutions</li>
            <li>Your space reflects your story—we help you tell it beautifully</li>
          </ul>
        </div>
      </section>

      {/* WHY CHOOSE US - Mobile */}
      <section className="lg:hidden grid w-full max-w-7xl px-4 sm:px-8 md:px-10 py-14 sm:py-20 grid-cols-1 gap-10 items-center">
        <div className="text-gray-800 rounded-2xl p-6 sm:p-8 lg:p-10">
          <h2 data-aos='fade-in' className="text-2xl sm:text-3xl lg:text-5xl font-semibold font-serif bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500">Why Choose Us</h2>
          <ul className='list-disc ml-5 mt-5 text-sm sm:text-base leading-relaxed'>
            <li>End-to-end project management</li>
            <li>Transparent communication</li>
            <li>Balanced aesthetics and functionality</li>
            <li>Strong supplier and contractor network</li>
            <li>Sustainable and cost-effective solutions</li>
            <li>Your space reflects your story—we help you tell it beautifully</li>
          </ul>
        </div>
        <div id="bg-cover" className="w-full max-w-md sm:max-w-lg md:max-w-xl h-64 sm:h-80 md:h-[420px] bg-cover bg-center rounded-3xl mx-auto shadow-2xl mt-6" style={{ backgroundImage: `url(${img1})` }}></div>
      </section>

      {/* ABOUT US */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-8 flex items-center justify-center md:px-12 py-12 my-10">
        <div className="bg-zinc-100 bg-opacity-90 lg:w-[70%] rounded-3xl shadow-xl  p-6 sm:p-10 text-gray-800">
          <h2 ref={headingRef} className="text-2xl sm:text-3xl lg:text-4xl font-serif font-semibold text-center text-rose-500 mb-6">About Us</h2>
          <p className="text-sm sm:text-base lg:text-lg font-serif leading-relaxed">
            At <span className="font-bold text-black">Arch Complete Solution</span>, we’re passionate about designing inspiring environments. From cozy homes to cutting-edge offices, we focus on excellence, elegance, and function—crafted with creativity and care.
          </p>
          <p className="mt-4 text-sm sm:text-base lg:text-lg font-serif leading-relaxed">
            With years of experience and a client-first mindset, we build lasting relationships through innovation, transparency, and service that exceeds expectations.
          </p>
        </div>
      </div>

       {/* videos */}

             {/* VIDEOS SECTION */}
              <div className="w-full max-w-6xl mx-auto px-4 sm:px-8 md:px-12 
              py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                <video
                  src="/assets/project/about1.MOV"  // Use .mp4 for better browser support
                  controls
                  muted
                  className="rounded-xl shadow-lg w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover"
                  data-aos="fade-up"
                ></video>

                <video
                  src="/assets/project/about2.MOV"
                  controls
                  muted
                  className="rounded-xl shadow-lg w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover"
                  data-aos="fade-up"
                ></video>
              </div>

            {/* OUR PROJECTS AND SERVICES */}
    <section className="py-20 bg-transparent px-10 w-full rounded-2xl 
            m-10 grid grid-cols-1 lg:grid-cols-3 gap-8">

  {/* Project Box */}
  <div className="flex justify-center">
    <Link to="/pro" className="w-full max-w-[500px]">
      <div className="bg-zinc-100 bg-opacity-90 py-20
       hover:scale-105 transition-transform duration-300 cursor-pointer
        rounded-3xl shadow-xl p-6 sm:p-10 text-gray-800 w-full">
        <h1 className="bg-gradient-to-r from-pink-500 to-black 
        text-transparent font-bold bg-clip-text text-2xl sm:text-3xl md:text-4xl 
        lg:text-5xl py-10 text-center">
          Our Projects
        </h1>
      </div>
    </Link>
  </div>

  {/* Services Box */}
  <div className="flex justify-center">
    <Link to="/services" className="w-full max-w-[500px]">
      <div className="bg-zinc-100 bg-opacity-90 py-20 
      hover:scale-105 transition-transform duration-300 cursor-pointer 
      rounded-3xl shadow-xl p-6 sm:p-10 text-gray-800 w-full">
        <h1 className="bg-gradient-to-r from-pink-500 to-black 
        text-transparent font-bold bg-clip-text text-2xl sm:text-3xl md:text-4xl 
        lg:text-5xl py-10 text-center">
          Our Services
        </h1>
      </div>
    </Link>
  </div>

  <div className="flex justify-center">
    <Link to="/contact" className="w-full max-w-[500px]">
      <div className="bg-zinc-100 bg-opacity-90 py-20
       hover:scale-105 transition-transform duration-300 cursor-pointer
        rounded-3xl shadow-xl p-6 sm:p-10 text-gray-800 w-full">
        <h1 className="bg-gradient-to-r from-pink-500 to-black 
        text-transparent font-bold bg-clip-text text-2xl sm:text-3xl md:text-4xl 
        lg:text-5xl py-10 text-center">
         Contact Us
        </h1>
      </div>
    </Link>
  </div>

</section>




    </div>
  );
}

export default Herosection;
