"use client";

import { PARTNERS } from "@/lib/data";

export default function CircularSponsors() {
  const radius = 1400; // Even more massive full-screen width radius
  // Use exactly the logos provided by the user, without duplicating them 45 times
  const partners = PARTNERS;

  return (
    <section id="sponsors" className="py-24 px-6 bg-black text-white relative flex flex-col items-center overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative z-10 mb-16">
        <div className="text-xs font-bold uppercase tracking-widest mb-4 text-gray-500">
          // PARTNERS & SPONSORS
        </div>
        <h2 className="text-5xl md:text-6xl font-display mb-6">
          OUR SPONSORS
        </h2>
        <p className="text-gray-400 font-medium max-w-2xl mx-auto">
          Collaborating with industry leaders to support innovation, leadership, and student-led initiatives.
        </p>
      </div>
      
      {/* Removed 3D Orbit Carousel Container as requested to keep space empty */}
      
      {/* College Partners Subtext */}
      <div className="max-w-3xl mx-auto text-center mt-8 mb-16 relative z-10">
        <p className="text-gray-400 font-medium tracking-wide leading-relaxed">
          Proudly partnered with <span className="text-white font-semibold">premier institutions</span> and <span className="text-white font-semibold">engineering colleges</span> across Mumbai to cultivate the next generation of builders.
        </p>
      </div>

      {/* Metrics Bar */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-center border-t border-gray-800 pt-12">
        <div>
          <div className="text-5xl font-display mb-2">50+</div>
          <div className="text-xs font-bold uppercase tracking-widest text-gray-500">SPONSORS</div>
        </div>
        <div className="md:border-l md:border-r border-gray-800">
          <div className="text-5xl font-display mb-2">5+</div>
          <div className="text-xs font-bold uppercase tracking-widest text-gray-500">YEARS RUNNING</div>
        </div>
        <div>
          <div className="text-5xl font-display mb-2">120K+</div>
          <div className="text-xs font-bold uppercase tracking-widest text-gray-500">CAMPUS REACH</div>
        </div>
      </div>

      <div className="text-center mt-12">
        <a href="mailto:sponsor@mumbaitechcommunity.in" className="inline-flex items-center gap-2 text-sm font-bold tracking-wider hover:text-gray-300 transition-colors uppercase">
          INTERESTED IN SPONSORING? GET IN TOUCH &rarr;
        </a>
      </div>


    </section>
  );
}
