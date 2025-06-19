import React, { useEffect } from 'react'
import Aos from 'aos'
import bg from '../assets/bg.avif'
function About() {

  useEffect(()=>{
    Aos.init({
      duration:800,
      offset:200,
      delay:100,
      easing:'ease-in-sine'
    })
  },[])

  return (
    <div className='flex items-center justify-center bg-cover bg-center  min-h-screen' style={{backgroundImage:`url(${bg})`}}>
   <div id='about_div' 
     className='justify-center items-center 
                w-[90%] md:w-[70%] lg:w-[50%] 
                  mt-0 py-10 px-10  flex flex-col rounded-xl
                bg-zinc-800 bg-opacity-50 
                border border-gray-700' data-aos="zoom-in">

        <h2 className='lg:text-5xl md:text-4xl text-3xl
      mb-10 font-serif' >About Us</h2>
      <p className=' font-serif
        '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui impedit id atque voluptatibus
         labore earum non nemo similique, natus quo tenetur laboriosam porro itaque ipsum error ipsam unde, illum dolorum!
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, recusandae perferendis neque facere officia
          commodi sequi cupiditate deleniti maxime aut obcaecati fuga similique, voluptate repudiandae doloribus. Officia quas aliquid dignissimos?
         Nihil temporibus ea libero consequatur tempora quasi asperiores in recusandae velit quia, nulla veritatis ratione
        tempore laborum expedita unde? Voluptatem, rerum odio. Deleniti repellat quae, ipsum amet dicta saepe nesciunt!</p>
      </div>
    </div>
  )
}

export default About