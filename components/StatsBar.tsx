"use client";

import { useEffect, useRef, useState } from "react";
import { STATS } from "@/lib/data";

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <section className="py-16 px-6 bg-gray-50 border-b border-gray-200">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS.map((stat, i) => (
          <div key={i} className="text-center">
            <div className="text-4xl md:text-5xl font-display mb-2 text-black">
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
            </div>
            <div className="text-sm font-medium uppercase tracking-widest text-gray-500">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
