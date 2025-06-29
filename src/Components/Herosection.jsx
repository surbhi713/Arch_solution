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

gsap.registerPlugin(ScrollTrigger);

function Herosection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  function handleInput(e) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const serviceId = "service_ekpvvpj";
    const publicKey = "7XjhAJlPqIRp0ZwM-";
    const templateId_to_client = "template_d7lt29e";
    const templateId_to_me = "template_jfw5ydv";

    const templateParams = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      message: form.message,
      to_email: 'manavagnihotri13@gmail.com',
    };

    emailjs.send(serviceId, templateId_to_client, templateParams, publicKey)
      .then(() => alert('Thank You! Your form has been submitted Successfully!'))
      .catch((err) => alert('OOPS! Error in submitting form: ' + err.text));

    emailjs.send(serviceId, templateId_to_me, templateParams, publicKey)
      .then(() => console.log('Email sent to self'))
      .catch((err) => console.log('Error sending to self:', err.text));
  }

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

    gsap.from('#bg-cover', {
      yoyo: true,
      repeat: -1,
      y: 10,
      duration: 2,
      ease: 'sine.inOut',
    });

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

        <div className="relative z-10 text-center max-w-4xl w-full mt-12 sm:mt-16 md:mt-20 px-4">
          <h1 id="text" className="text-transparent bg-clip-text font-serif bg-gradient-to-r from-white via-pink-500 to-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide drop-shadow">
            Arch Complete Solution
          </h1>
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl lg:text-2xl font-serif bg-clip-text text-transparent bg-gradient-to-r from-white via-pink-600 to-black">
            We Create Beyond Your Imagination
          </p>
          <div className="mt-8 sm:mt-10 mx-auto w-full sm:w-[90%] md:w-[70%] lg:w-[60%] text-gray-700 border border-gray-300 rounded-xl p-5 sm:p-8 lg:p-10 bg-zinc-300 bg-opacity-90 shadow-lg">
            <p className="leading-relaxed text-sm sm:text-base font-semibold">
              At Arch Complete Solution, we specialize in high-quality construction and interior design that blends style, functionality, and craftsmanship.
            </p>
          </div>
        </div>
      </div>

      {/* WHO WE ARE */}
      <section className="w-full max-w-7xl px-4 sm:px-8 md:px-10 py-14 sm:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="text-gray-800 p-6 sm:p-8 lg:p-10">
          <h2 data-aos='fade-in' className="text-2xl sm:text-3xl lg:text-5xl font-semibold font-serif text-rose-500">Who We Are?</h2>
          <p className="mt-5 text-sm sm:text-base leading-relaxed font-semibold">
            Founded in [Year], we are architects, designers, engineers, and project managers with decades of combined experience in residential, commercial, and hospitality projects. We bring excellence, creativity, and precision to every project.
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
                  src="/assets/about1.MOV"  // Use .MOV for better browser support
                  controls
                  muted
                  className="rounded-xl shadow-lg w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover"
                  data-aos="fade-up"
                ></video>

                <video
                  src="/assets/about2.MP4"
                  controls
                  muted
                  className="rounded-xl shadow-lg w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover"
                  data-aos="fade-up"
                ></video>
              </div>

     {/* PROJECTS PREVIEW SECTION */}
<div className="w-full max-w-6xl px-4 sm:px-8 md:px-12 py-14">
  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-center text-pink-600 mb-10">
    Our Projects
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {previewProjects.map((project) => (
      <div
        key={project.id}
        className="group bg-white border border-gray-300 shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
      >
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold text-gray-800 group-hover:text-pink-600 transition-colors">
            {project.title}
          </h3>
        </div>
      </div>
    ))}
  </div>
</div>


      {/* CONTACT US SECTION */}
      <div className="relative w-full px-4 sm:px-8 md:px-12 py-16 bg-cover bg-center text-white" style={{ backgroundImage: `url(${bg})` }}>
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
      </div>



    </div>
  );
}

export default Herosection;
