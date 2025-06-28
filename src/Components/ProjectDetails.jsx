import React from 'react';
import { useParams } from 'react-router-dom';

function ProjectDetails() {
  const { id } = useParams();

  const images = Array.from({ length: 20 }, (_, i) => ({
    src: `/assets/project${id}/img${i + 1}.jpg`, // ✅ FIXED PATH
    alt: `Project ${id} - Image ${i + 1}`
  }));

  return (
    <div className='min-h-screen px-4 py-10 flex flex-col items-center bg-black text-white'>
      <h1 className='text-3xl md:text-4xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-fuchsia-500 to-pink-500'>
        Project {id} Gallery
      </h1>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-6xl w-full'>
        {images.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={img.alt}
            className='w-full h-40 object-cover rounded-lg shadow border border-zinc-700'
            loading='lazy'
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectDetails;
