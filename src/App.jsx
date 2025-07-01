import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './pages/Header';
import Herosection from './Components/Herosection';
import Contact from './Components/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './Components/About';
import Services from './Components/Services';
import Footer from './pages/Footer';
import Projects from './Components/Projects';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <BrowserRouter>
        <Header />
        
        {/* Main content grows and pushes Footer down */}
        <main className="flex-grow">
          <Routes>
            <Route path='/' element={<Herosection />} />
            <Route path='/herosection' element={<Herosection />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/pro' element={<Projects />} />
            <Route path='/services' element={<Services />} />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
