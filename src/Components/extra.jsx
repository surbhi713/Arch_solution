//  {/* Project Cards */}
//       <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 py-10 max-w-6xl w-full px-2 sm:px-4'>
//         {projects.map((project) => (
//           <div
//             key={project.id}
//             className="project-card group relative p-[1px] rounded-xl
//                      bg-gradient-to-tr from-pink-400 via-purple-400 to-indigo-400
//                      transition-transform duration-300 hover:scale-[1.03] 
//                      opacity-0 translate-y-10 shadow-xl cursor-pointer"
//             onClick={() => setSelectedProject(project)}
//           >
//             <div className="bg-white rounded-xl h-full p-4 flex flex-col gap-3 border border-gray-200">
//               <img
//                 src={project.thumbnail}
//                 alt={`${project.title} Thumbnail`}
//                 className="w-full h-40 sm:h-48 object-cover rounded-lg border border-gray-300 mb-2"
//               />
//               <h2 className="text-lg sm:text-xl font-semibold text-black text-center group-hover:text-pink-600 transition-colors">
//                 {project.title}
//               </h2>
//               <p className="text-gray-600 text-sm text-center leading-relaxed">
//                 Click to view gallery
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Modal with Carousel */}
//       {selectedProject && (
//         <div className='fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-70 p-2 sm:p-6 overflow-auto'>
//           <div className='bg-white text-black rounded-xl p-4 sm:p-6 max-w-3xl w-full relative border border-gray-300 shadow-lg'>
//             <button
//               onClick={closeModal}
//               className='absolute top-2 right-4 text-gray-600 hover:text-black text-3xl font-bold'
//             >
//               &times;
//             </button>

//             <h2 className='text-xl sm:text-2xl font-bold mb-4 text-center'>
//               {selectedProject.title} - Gallery
//             </h2>

//             <Slider {...sliderSettings}>
//               {Array.from({ length: 12 }, (_, i) => (
//                 <div key={i} className='px-2'>
//                   <img
//                     src={`/assets/project${selectedProject.id}/img${i + 1}.JPG`}
//                     alt={`Project ${selectedProject.id} Image ${i + 1}`}
//                     className='w-full h-[280px] sm:h-[350px] md:h-[400px] object-cover rounded-lg border border-gray-300'
//                     loading='lazy'
//                   />
//                 </div>
//               ))}
//             </Slider>
//           </div>
//         </div>
//       )}
 

  // const closeModal = () => setSelectedProject(null);

  // const sliderSettings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: true
  // };

  //  gsap.to('.project-card', {
  //     opacity: 1,
  //     y: 0,
  //     duration: 0.8,
  //     delay: 1,
  //     stagger: 0.1
  //   });



//   herosection contact page 



      {/* CONTACT US SECTION */}
      {/* <div className="relative w-full px-4 sm:px-8 md:px-12 py-16 bg-cover bg-center text-white" style={{ backgroundImage: `url(${bg})` }}>
        <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-center text-white mb-12">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold flex items-center"><FaMapMarkerAlt className="text-red-500 mr-3" />Address</h3>
                <p>29/6 A-1 Block, Bengali Colony, Burari, New Delhi - 110084, India</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold flex items-center"><FaPhoneAlt className="text-red-500 mr-3" />Phone</h3>
                <p>+91 9899992526, +91 9599162526</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold flex items-center"><FaEnvelope className="text-red-500 mr-3" />Email</h3>
                <p>archcs2010@gmail.com<br />manavagnihotri13@gmail.com</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-8 space-y-4 shadow-2xl">
              <h3 className="text-xl font-semibold text-white mb-4">Send us a message</h3>
              <input type="text" name="name" required onChange={handleInput} value={form.name} placeholder="Your Name" className="w-full p-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-red-500" />
              <input type="email" name="email" required onChange={handleInput} value={form.email} placeholder="Your Email" className="w-full p-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-red-500" />
              <input type="tel" name="phone" required onChange={handleInput} value={form.phone} placeholder="Your Phone" className="w-full p-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-red-500" />
              <textarea name="message" required onChange={handleInput} value={form.message} rows="4" placeholder="Your Message" className="w-full p-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-red-500"></textarea>
              <button type="submit" className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-black hover:scale-105 transition duration-300">Send Message</button>
            </form>
          </div>
        </div>
      </div> */}


    //   js



//       const [form, setForm] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: ''
//   });

//   function handleInput(e) {
//     const { name, value } = e.target;
//     setForm((prev) => ({
//       ...prev,
//       [name]: value
//     }));
//   }

//   function handleSubmit(e) {
//     e.preventDefault();

//     const serviceId = "service_ekpvvpj";
//     const publicKey = "7XjhAJlPqIRp0ZwM-";
//     const templateId_to_client = "template_d7lt29e";
//     const templateId_to_me = "template_jfw5ydv";

//     const templateParams = {
//       name: form.name,
//       email: form.email,
//       phone: form.phone,
//       message: form.message,
//       to_email: 'manavagnihotri13@gmail.com',
//     };

//     emailjs.send(serviceId, templateId_to_client, templateParams, publicKey)
//       .then(() => alert('Thank You! Your form has been submitted Successfully!'))
//       .catch((err) => alert('OOPS! Error in submitting form: ' + err.text));

//     emailjs.send(serviceId, templateId_to_me, templateParams, publicKey)
//       .then(() => console.log('Email sent to self'))
//       .catch((err) => console.log('Error sending to self:', err.text));
//   }


// PROJECT DETAILS 

// import React from 'react';
// import { useParams } from 'react-router-dom';

// function ProjectDetails() {
//   const { id } = useParams();

//   const images = Array.from({ length: 20 }, (_, i) => ({
//     src: `/assets/project${id}/img${i + 1}.JPG`, // ✅ FIXED PATH
//     alt: `Project ${id} - Image ${i + 1}`
//   }));
// // 
//   return (
//     <div className='min-h-screen px-4 py-10 flex flex-col items-center bg-black text-white'>
//       <h1 className='text-3xl md:text-4xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-fuchsia-500 to-pink-500'>
//         Project {id} Gallery
//       </h1>

//       <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-6xl w-full'>
//         {images.map((img, index) => (
//           <img
//             key={index}
//             src={img.src}
//             alt={img.alt}
//             className='w-full h-40 object-cover rounded-lg shadow border border-zinc-700'
//             loading='lazy'
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ProjectDetails;
