"use client";

import { useState, useEffect } from "react";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const t = TESTIMONIALS[active];

  return (
    <section
      id="community"
      className="py-24 px-6 reveal bg-gray-50 border-b border-gray-200"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-xs font-bold uppercase tracking-widest mb-4 text-gray-500">
          What Members Say
        </div>
        <h2 className="text-4xl md:text-5xl font-display text-black mb-12">
          BUILT BY THE COMMUNITY, <br />
          <span className="text-gray-400">FOR THE COMMUNITY</span>
        </h2>

        {/* Quote */}
        <div
          key={active}
          className="relative px-8 md:px-14 py-10 rounded-2xl mb-8 transition-all duration-500 bg-white border border-gray-200 shadow-sm"
        >
          <div className="text-6xl text-left mb-2 text-gray-200 font-display leading-none">"</div>
          <p className="text-lg md:text-2xl text-black font-medium leading-relaxed mb-8 italic">
            {t.quote}
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-white bg-black shadow-md">
              {t.avatar}
            </div>
            <div className="text-left">
              <div className="font-bold text-black">{t.name}</div>
              <div className="text-xs font-bold uppercase tracking-wider text-gray-500">
                {t.role}, {t.company}
              </div>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="w-2 h-2 rounded-full transition-all duration-300"
              style={{
                background: i === active ? "black" : "#d1d5db",
                width: i === active ? "24px" : "8px",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
