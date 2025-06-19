import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import Header from './pages/Header'
import Herosection from './Components/Herosection'
import Contact from './Components/Contact'
import { BrowserRouter,Routes,Route} from "react-router-dom";
import About from './Components/About';
import Services from './Components/Services';
import Footer from './pages/Footer';
import Projects from './Components/Projects';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/herosection' Component={Herosection}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' Component={Contact}/>
      <Route path='/pro' Component={Projects}/>
      <Route path='/services' Component={Services}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App