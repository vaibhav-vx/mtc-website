"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import StatsBar from "@/components/StatsBar";
import CircularSponsors from "@/components/CircularSponsors";
import Testimonials from "@/components/Testimonials";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

// Dynamic import with ssr: false prevents any client/server floating math hydration mismatch
const GallerySectionGlobe = dynamic(
  () => import("@/components/GallerySectionGlobe"),
  { ssr: false }
);

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function HomePage() {
  useReveal();

  return (
    <div className="bg-white">
      {/* ====== HERO ====== */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-gray-200">
        {/* Mumbai City Background with Subtle Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-100 pointer-events-none"
          style={{
            backgroundImage: `url('/hero-mumbai-bg.jpg')`,
            backgroundPosition: "center 40%",
          }}
        />
        <div className="absolute inset-0 z-0 bg-linear-to-b from-black/20 via-white/50 to-white pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Headline */}
          <h1 className="text-6xl md:text-8xl font-display text-black leading-none mb-8 max-w-5xl tracking-tight">
            WHERE MUMBAI&apos;S BUILDERS<br />
            LEARN, SHIP & CONNECT
          </h1>

          <p className="text-lg md:text-xl max-w-2xl mb-12 leading-relaxed text-gray-600 font-medium">
            From college freshers to Series B founders — 10,000+ developers, designers, and
            entrepreneurs building together. Join Mumbai&apos;s fastest-growing tech community.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-16">
            <a
              href="/contact"
              className="flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white bg-black transition-all hover:scale-105 hover:bg-gray-900 shadow-xl"
            >
              Join Free — No Cost <ArrowRight size={18} />
            </a>
            <Link
              href="/events"
              className="flex items-center gap-2 px-8 py-4 rounded-full font-bold transition-all hover:scale-105 bg-white border-2 border-gray-200 text-black hover:border-gray-300"
            >
              Browse Events
            </Link>
          </div>
        </div>
      </section>

      {/* ====== STATS ====== */}
      <StatsBar />

      {/* ====== SPONSORS ====== */}
      <CircularSponsors />



      {/* ====== TESTIMONIALS ====== */}
      <Testimonials />

      {/* ====== GALLERY (3D GLOBE) ====== */}
      <GallerySectionGlobe />
    </div>
  );
}
