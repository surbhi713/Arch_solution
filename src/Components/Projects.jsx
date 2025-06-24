import React, { useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  title: `Project ${i + 1}`
}));

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  useGSAP(() => {
    gsap.to('#head', { duration: 1, opacity: 1, y: 0 });
    gsap.to('#para', { opacity: 1, x: 0, duration: 2, delay: 0.5 });
    gsap.to('.project-card', {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: 1,
      stagger: 0.1
    });
  }, []);

  const closeModal = () => setSelectedProject(null);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  };

  return (
    <div className='flex flex-col justify-center min-h-screen items-center px-4 py-10'>

      {/* Header */}
      <div className='bg-zinc-900 border border-zinc-700 rounded-2xl shadow-lg w-full max-w-5xl px-6 py-10 flex flex-col items-center gap-6'>
        <h1
          id='head'
          className='text-3xl sm:text-4xl md:text-5xl font-bold font-serif opacity-0 translate-y-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-200 via-pink-400 to-pink-900'
        >
          Our Projects
        </h1>
        <p
          id='para'
          className='text-sm sm:text-base md:text-lg text-gray-400 opacity-0 translate-x-10 leading-relaxed text-center px-2 sm:px-10'
        >
          Explore our top 10 projects. Click any project to view its image gallery in a slider showcasing our design creativity.
        </p>
      </div>

      {/* Project Cards */}
      <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full'>
        {projects.map((project) => (
          <div
  key={project.id}
  className="project-card group relative p-[1px] rounded-xl bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500
             transition-transform duration-300 hover:scale-[1.03] opacity-0 translate-y-10 shadow-xl"
  onClick={() => setSelectedProject(project)}
>
  <div className="bg-zinc-900 rounded-xl h-full p-5 flex flex-col gap-3">
    {/* Optional icon or image */}
    <div className="flex justify-center items-center mb-2">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
        {project.id}
      </div>
    </div>

    <h2 className="text-xl font-semibold text-white text-center group-hover:text-pink-400 transition-colors">
      {project.title}
    </h2>

    <p className="text-gray-400 text-sm text-center leading-relaxed">
      Click to view full gallery and details.
    </p>
  </div>
</div>

        ))}
      </div>

      {/* Modal with Carousel */}
      {selectedProject && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4 overflow-auto'>
          <div className='bg-zinc-900 text-white rounded-xl p-4 max-w-3xl w-full relative'>
            <button
              onClick={closeModal}
              className='absolute top-2 right-3 text-gray-400 hover:text-white text-2xl'
            >
              &times;
            </button>

            <h2 className='text-2xl font-bold mb-4 text-center'>
              {selectedProject.title} - Gallery
            </h2>

            <Slider {...sliderSettings}>
              {Array.from({ length: 20 }, (_, i) => (
                <div key={i} className='px-2'>
                  <img
                    src={`/assets/project${selectedProject.id}/img${i + 1}.jpg`}
                    alt={`Project ${selectedProject.id} Image ${i + 1}`}
                    className='w-full h-[400px] object-cover rounded-lg border border-zinc-700'
                    loading='lazy'
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
