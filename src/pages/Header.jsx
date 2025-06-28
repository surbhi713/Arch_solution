import React, { useState } from 'react';
import logo from "../assets/Screenshot (27).png";
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaUserCircle } from "react-icons/fa";
import { FaBars, FaXmark } from "react-icons/fa6";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { link: 'Home', path: '/herosection' },
    { link: 'About Us', path: '/about' },
    { link: 'Our Projects', path: '/pro' },
    { link: 'Services', path: '/services' },
    { link: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className='bg-white sticky top-0 z-50 shadow-md w-full'>
      <div className='flex justify-between items-center lg:px-20 px-4 py-3'>

        {/* Logo */}
        <div id='logo'>
          <img src={logo} alt="company logo" className='w-[120px] rounded-md lg:w-[150px]' />
        </div>

        {/* Desktop Nav */}
        <ul className='hidden lg:flex justify-center items-center gap-8'>
          {navItems.map(({ link, path }) => (
            <Link
              to={path}
              key={path}
              className='text-gray-800 text-[15px] font-semibold uppercase cursor-pointer
               px-3 py-2 rounded-lg hover:bg-gray-200 hover:scale-110 transition-transform duration-300'
            >
              {link}
            </Link>
          ))}
        </ul>

        {/* Desktop icons */}
        <div className='hidden lg:flex items-center gap-6'>
          <div className='flex items-center gap-4'>
            <FaPhoneAlt className='text-blue-600 text-xl' />
            <span className='text-gray-800 text-xl font-semibold'>9599162526</span>
            <FaUserCircle className='text-blue-600 text-xl' />
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className='lg:hidden'>
          <button onClick={() => setIsMenuOpen(true)}>
            <FaBars className='text-gray-800 text-2xl' />
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`fixed top-0 right-0 h-full w-[75%] max-w-xs
         bg-white shadow-lg transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} 
         transition-transform duration-300 ease-in-out z-50`}>
        <div className='flex justify-between items-center p-4 border-b border-gray-300'>
          <button onClick={() => setIsMenuOpen(false)}>
            <FaXmark className='text-gray-800 text-2xl' />
          </button>
        </div>

        <ul className='flex flex-col gap-5 p-6'>
          {navItems.map(({ link, path }) => (
            <Link
              to={path}
              key={path}
              onClick={() => setIsMenuOpen(false)}
              className='text-gray-800 text-sm font-semibold uppercase cursor-pointer px-3 py-2 rounded-lg hover:bg-gray-200 transition duration-300'
            >
              {link}
            </Link>
          ))}
        </ul>

        <div className='flex flex-col px-6 gap-4'>
          <div className='flex items-center gap-3'>
            <FaPhoneAlt className='text-blue-600' />
            <span className='text-gray-800 text-sm font-semibold'>9599162526</span>
            <FaUserCircle className='text-blue-600 text-xl' />
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </nav>
  );
}

export default Header;
