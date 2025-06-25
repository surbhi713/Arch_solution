import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="w-full bg-zinc-900 text-white py-6 px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left Side - Copyright */}
        <p className="text-sm text-zinc-400 text-center md:text-left">
          © 2025 All Rights Reserved 
        </p>

        {/* Right Side - Navigation Links */}
        <nav aria-label="Footer navigation">
          <ul className="flex gap-6 text-sm md:text-base">
            <li>
              <Link 
              to="/" 
              className="hover:text-fuchsia-500 duration-200">
              Home
            </Link>

            </li>
            <li>
              <Link to="/about" className="hover:text-fuchsia-500 transition-colors duration-200">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-fuchsia-500 transition-colors duration-200">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

      </div>
    </footer>
  );
}

export default Footer;
