import React from 'react';
import { service } from '../constant/export';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

function Services() {
  useGSAP(() => {
    gsap.from('#head', {
      ease: 'bounce.out',
      y: -100,
      autoAlpha: 0,
      duration: 1.5,
    });

    gsap.to('#para', {
      ease: 'sine.in',
      delay: 0.5,
      opacity: 1,
      y: 0,
      duration: 1,
    });

    gsap.from('.card', {
      opacity: 0,
      duration: 1.5,
      delay: 1,
      stagger: 0.2,
      ease: 'power2.out',
      y: 50,
    });
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen w-full
     flex flex-col mb-10 px-6 py-10 text-center space-y-6 items-center
    justify-center">

      {/* Heading & Description */}
      <div className="bg-white p-10 rounded-2xl mt-10 shadow-md w-full max-w-4xl border border-indigo-100">
        <h1
          id="head"
          className="text-center font-bold text-5xl sm:text-6xl bg-clip-text text-transparent mb-8
         bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400"
        >
          Our Services
        </h1>

        <p
          id="para"
          className="text-slate-600 text-base sm:text-lg opacity-0 translate-y-10 transition-all duration-700"
        >
          We offer expert interior, branding, signage, and renovation solutions tailored to your needs.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-10 max-w-6xl">
        {service.map((item, index) => (
          <div
          key={index}
          className="card bg-white rounded-xl shadow-sm border 
          border-indigo-100 hover:shadow-xl cursor-pointer transition-transform
          hover:scale-105 duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              className="w-full h-52 object-cover rounded-t-xl "
            />
          
            <div className="p-5">
              <h2 className="text-xl font-semibold text-slate-800 mb-2">{item.name}</h2>
              <p className="text-slate-600 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
