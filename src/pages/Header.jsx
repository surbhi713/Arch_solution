import React, { useState } from 'react'
import logo from "../assets/Screenshot (27).png"
import {Link} from 'react-router-dom'
import {FaPhoneAlt,FaUserCircle } from "react-icons/fa";
import {FaXmark,FaBars} from "react-icons/fa6";


function Header() {
//     const [isMenuOpen,setIsMenuOpen] = useState(false);

//     const togglemenu =()=>{
//     setIsMenuOpen(!isMenuOpen)        //Toggle menu open/close
//   }

//   const closemenu =()=>{
//     setIsMenuOpen(false)              //Force menu to close
//   }


  const navItmes =[
    {
      link:'Home' , path:'/herosection'
    },
    {
      link:'About Us' , path:'/about'
    },
    {
        link:'Our Projects' , path:'/pro'
    },
    {
        link:'Services' , path:'/services'
    },
    {
        link:'Contact Us' , path:'/contact'
    },
  ]
  return (
    <nav className='flex justify-between items-center bg-black
   gap-4 lg:px-20 px-4 py-3 sticky top-0 z-30'>

    {/* logo */}
        <div id='logo'>
        <img src={logo} alt="company logo"  className='w-[120px] rounded-md lg:w-[150px]'/>
        </div>

    {/* navitems */}
        <ul className='lg:flex justify-center items-center gap-8 '>
            {
                navItmes.map(({link,path})=>(
                    <Link to={path} key={path} spy={true} smooth={true} offset={-100}
                    className='text-white text-[15px] font-semibold uppercase cursor-pointer px-3 py-2 rounded-lg
                      hover:bg-emerald-700 hover:text-white hover:scale-110 transition-transform duration-300'>
                        {link}
                    </Link>
                ))
            }
        </ul>

          {/* icons and phone number*/}
        <div className='flex  justify-center items-center lg:gap-7  gap-4'>
        <div className='flex justify-between items-center lg:gap-7 gap-3'>
          <FaPhoneAlt className='size-5 text-red-700'/>
          <h1 className='text-sm font-semibold text-white lg:text-xl'  >
            9599162526
          </h1>
        </div>
        <FaUserCircle className='size-5 text-red-700'/>
      </div>

    </nav>
  )
}

export default Header