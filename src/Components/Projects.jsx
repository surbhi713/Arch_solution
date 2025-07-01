import React, { useEffect, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { projectImages, service } from '../constant/export';
import Aos from 'aos';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalImage, setModalImage] = useState(null); // 👈 Track clicked image

  useEffect(() => {
    Aos.init({
      duration: 800,
      offset: 200,
      delay: 100,
      easing: 'ease-in-sine'
    });
  }, []);

  useGSAP(() => {
    gsap.to('#head', { duration: 1, opacity: 1, y: 0 });
    gsap.to('#para', { opacity: 1, x: 0, duration: 2, delay: 0.5 });
  }, []);

  // Slugify function to generate folder names
  const slugify = (str) =>
    str.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');

  return (
    <div className='flex flex-col justify-center items-center px-4 pt-16 bg-white'>

      {/* Header */}
     <div className='bg-gray-100 border border-gray-300 rounded-2xl shadow-lg w-full
         max-w-5xl px-6 sm:px-10 py-6 sm:py-8 flex flex-col items-center gap-6'>


        <h1
          id='head'
          className='text-3xl sm:text-4xl md:text-5xl font-bold font-serif opacity-0 translate-y-10 text-center 
          bg-clip-text text-transparent bg-gradient-to-r py-4 from-pink-400 via-pink-600 to-pink-800'
        >
          Our Projects
        </h1>
        
        <p
          id='para'
          className='text-sm sm:text-base md:text-lg text-gray-700 opacity-0 translate-x-10 leading-relaxed text-center px-2 sm:px-8'
        >
          Discover our diverse portfolio, showcasing everything from luxury villas to sustainable urban developments.
          Each project reflects our dedication to architectural excellence and client satisfaction.
        </p>
      </div>

      {/* Buttons */}
      <ul className='flex flex-wrap items-start justify-center gap-4 mt-10 '>
        {
          service.map((item, index) => (
            <li key={index}>
              <button
                className={`rounded-xl py-3 px-4 font-bold transition-all duration-300 ${
                  selectedProject === item.name ? 'bg-pink-600 text-white' : 'hover:bg-gray-200'
                }`}
                onClick={() => setSelectedProject(item.name)}
              >
                {item.name}
              </button>
            </li>
          ))
        }
      </ul>

      {/* Images for selected project */}
      {selectedProject && projectImages[selectedProject] && (
        <div className='w-full max-w-6xl mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4'>
          {
            projectImages[selectedProject].map((img, index) => {
              const path = `/assets/project/${slugify(selectedProject)}/${img}`;
              return (
                <img
                  data-aos="zoom-in"
                  key={index}
                  src={path}
                  alt={`${selectedProject} ${index}`}
                  className='w-full h-48 object-cover shadow-md cursor-pointer'
                  onClick={() => setModalImage(path)} // 👈 Open modal on click
                />
              );
            })
          }
        </div>
      )}

      {/* Image Modal */}
      {modalImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <div className="relative max-w-4xl w-full p-4">
            <button
              onClick={() => setModalImage(null)}
              className="absolute top-4 right-6 text-white text-4xl font-bold"
            >
              &times;
            </button>
            <img
              src={modalImage}
              alt="Full size"
              className="w-full max-h-[90vh] object-contain rounded-xl"
            />
          </div>
        </div>
      )}

    </div>
  );
}

export default Projects;
