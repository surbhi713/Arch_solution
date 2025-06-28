import React, { useEffect, useState } from 'react'
import bg from '../assets/bg.avif'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Aos from "aos";
import emailjs from '@emailjs/browser';



function Contact() {


  useEffect(()=>{
    Aos.init({
      duration:800,
      offset:200,
      delay:100,
      easing:'ease-in-sine'
    })
  },[])

  const [form,setForm] = useState({
    name:'',
    email:'',
    phone:'',
    message:''
  });
  

  function handleInput(e){
    const {name,value} = e.target
    setForm((prev)=>({
      ...prev,
      [name]:value
    })
  )
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

  // Send confirmation to client
  emailjs.send(serviceId, templateId_to_client, templateParams, publicKey)
    .then((res) => {
      alert('Thank You! Your form has been submitted Successfully!');
    })
    .catch((err) => {
      alert('OOPS! There is an error in submitting form: ' + err.text);
    });

  // Send message to yourself
  emailjs.send(serviceId, templateId_to_me, templateParams, publicKey)
    .then((res) => {
      console.log('Email sent to Manav');
    })
    .catch((err) => {
      console.log('Error sending to self:', err.text);
    });
}

  return (
    <div className="relative w-full min-h-screen overflow-hidden">

      {/* 🔳 Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${bg})` }}>
        <div className="absolute inset-0 bg-black opacity-80"></div>
      </div>

      {/* 🔲 Content over background */}
      <div className="relative z-10 px-6 lg:px-20 py-10 text-white flex flex-col gap-10">

        {/* 🔴 Heading */}
        <h1 className="text-4xl font-bold mt-5">Contact Us</h1>

        {/* 🔴 Info + Form Section */}
        <div className="flex flex-col lg:flex-row gap-10 w-full">

          {/* Info Section */}
          <div className="w-full lg:w-1/2 space-y-4 ">
    
            <h3  className="text-2xl font-semibold flex"> <FaMapMarkerAlt className="text-red-500 m-2" />Address</h3>
            <p>
              29/6 A-1 Block,<br />
              Bengali Colony, Burari,<br />
              New Delhi - 110084,<br />
              India
            </p>

            <h3 className="text-2xl font-semibold flex"> <FaPhoneAlt className='text-red-500 m-2'/> Phone</h3>
            <p>+91 9899992526 ,+91 9599162526</p>
            <h3 className="text-2xl font-semibold flex"> <FaEnvelope className='text-red-500 m-2'/> Email</h3>
            <p>archcs2010@gmail.com <br /> manavagnihotri13@gmail.com</p>
          </div>

          {/* Form Section */}
          <div data-aos='fade-in' className="w-full lg:w-1/2 bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-lg shadow-lg space-y-4">
            <h3 className="text-2xl font-semibold text-white">Get in Touch</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name='name'
                value={form.name}
                onChange={handleInput}
                required
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="email"
                name='email'
                value={form.email}
                onChange={handleInput}
                required
                placeholder="Your Email"
                className="w-full p-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="phone"
                name='phone'
                value={form.phone}
                onChange={handleInput}
                required
                placeholder="Your Contact Number"
                className="w-full p-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                name='message'
                required
                onChange={handleInput}
                value={form.message}
                className="w-full p-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                type="submit"
                className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-black hover:scale-110 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact



// template_bzg77vn
// public key = '7XhjAjIPqIRp0ZwM-'
//  service id= ' service_ekpvvpj'