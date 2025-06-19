Dark Base: bg-black, bg-zinc-900

Accent Gradients:

from-[#f6d365] (light orange)

via-[#fda085] (peach)

to-[#fcb69f] (soft coral)

Secondary Gradient:

from-red-700, via-gray-700, to-blue-500

Text: Mostly text-white, text-gray-300



🔶 1. Accent Colors – for buttons, links, highlights:
Use	Hex	Tailwind Suggestion	Comment
Gold	#FFD700	text-yellow-400	Luxurious, fits warm gradient
Rose	#FF6B81	text-rose-400	Soft contrast with black
Emerald	#34D399	text-emerald-400	Matches your current tone
Amber	#FBBF24	text-amber-400	Glowing, for buttons/headings



 2. Neutral Background Enhancers:
Use	Hex	Tailwind Suggestion	When to Use
Charcoal	#1F2937	bg-gray-800	For cards, sections
Graphite Black	#121212	bg-neutral-900	For full page background
Slate Gray	#64748B	text-slate-400	For subtle text/subheadings



<Button className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-4 py-2 rounded-xl">
  Get Started
</Button>


🔥 Warm Elegance
js
Copy
Edit
bg-gradient-to-r from-amber-400 via-orange-300 to-rose-400
🌌 Cool Contrast
js
Copy
Edit
bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
🌿 Modern Nature
js
Copy
Edit
bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400
🎯 Summary
Element	Suggested Color	Purpose
CTA Buttons	amber-500	Stands out, warm theme
Accent Text	rose-400 / emerald-400	Modern, balanced contrast
Subheadings	slate-400	Subtlety, hierarchy
Section BGs	gray-800 / neutral-900	Better separation

html


<title>Arch Complete Solution | Creative Web & Digital Services</title>
<meta name="description" content="We create digital experiences that go beyond your imagination. Learn more about our services and creative solutions.">
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="robots" content="index, follow" />


responsive herosection



import img from './path-to-image.jpg'; // Replace with your actual image path

export default function HeroSection() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center px-4">
      
      {/* Header Section */}
      <header className="text-center mt-16 max-w-3xl">
        <h1 className="text-transparent bg-clip-text font-serif
                       bg-gradient-to-r from-[#f6d365] via-[#fda085] to-[#fcb69f]
                       text-4xl sm:text-5xl lg:text-6xl font-extrabold 
                       tracking-wide drop-shadow-md">
          Arch Complete Solution
        </h1>
        <p className="mt-6 font-serif text-lg sm:text-xl lg:text-2xl 
                      bg-clip-text text-transparent bg-gradient-to-r 
                      from-red-700 via-gray-700 to-blue-500">
          We Create Beyond Your Imagination
        </p>
      </header>

      {/* Intro Box */}
      <section
        aria-label="Introduction"
        className="w-full sm:w-[90%] md:w-[70%] lg:w-[50%] text-gray-300 border
                   border-gray-700 rounded-xl mt-12 p-6 bg-zinc-900">
        <p>
          Arch Complete Solution is dedicated to delivering innovative solutions that go beyond expectations.
          We specialize in creating digital experiences that leave a lasting impression.
        </p>
      </section>

      {/* Who We Are Section */}
      <section
        aria-labelledby="who-we-are"
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-16 px-4 w-full max-w-7xl mt-12 bg-black">
        
        {/* Text Column */}
        <div className="p-6 lg:p-10 border border-black bg-zinc-800 rounded-xl">
          <h2 id="who-we-are" className="text-3xl sm:text-4xl lg:text-5xl font-semibold font-serif text-emerald-500">
            Who We Are
          </h2>
          <p className="mt-6 text-sm sm:text-base text-gray-200">
            We are a team of designers, developers, and visionaries focused on bringing your ideas to life.
            With a blend of creativity and technology, we craft tailored digital solutions that drive results.
          </p>
        </div>

        {/* Background Image Column */}
        <div
          id="bg-cover"
          role="img"
          aria-label="Company themed visual"
          className="w-full h-64 sm:h-72 md:h-96 bg-cover bg-center rounded-3xl mx-auto"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      </section>
    </main>
  );
}
