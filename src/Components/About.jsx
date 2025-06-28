import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import interior from '../assets/interior.jpg';

function About() {
  useEffect(() => {
    Aos.init({
      duration: 800,
      offset: 200,
      delay: 100,
      easing: 'ease-in-sine'
    });
  }, []);

  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${interior})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0"></div>

      {/* Content */}
      <div
        id="about_div"
        className="relative z-10 w-[90%] md:w-[75%] lg:w-[50%] bg-zinc-800 bg-opacity-60 border border-gray-700 
                   rounded-xl py-10 px-6 sm:px-10 flex flex-col justify-center items-center text-white"
        data-aos="zoom-in"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold mb-8 text-center">
          About Us
        </h2>

        <p className="text-sm sm:text-base font-serif leading-relaxed text-center text-gray-200">
          Arch Complete Solution is committed to designing spaces that inspire. 
          We bring innovation, elegance, and function together to create architectural marvels tailored to your needs.
          <br /><br />
          With a team of passionate architects and visionaries, we ensure every structure stands out—blending modern technology 
          with artistic creativity. Whether it's a residential villa, commercial hub, or conceptual structure, 
          we make your ideas come to life, beautifully and sustainably.
        </p>
      </div>
    </div>
  );
}

export default About;
