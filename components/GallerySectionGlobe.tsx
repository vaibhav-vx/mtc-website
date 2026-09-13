"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { GALLERY_PHOTOS } from "@/lib/data";
import { useAnimationFrame, AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

// Duplicate photos to ensure a continuous dense ribbon
const photos = [
  ...GALLERY_PHOTOS, 
  ...GALLERY_PHOTOS, 
  ...GALLERY_PHOTOS, 
  ...GALLERY_PHOTOS,
  ...GALLERY_PHOTOS
].slice(0, 32); // 32 photos for a rich ribbon

export default function GallerySectionGlobe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [time, setTime] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState<typeof GALLERY_PHOTOS[0] | null>(null);

  // Animate time continuously, but pause if a photo is selected
  useAnimationFrame((t, delta) => {
    if (!selectedPhoto) {
      setTime((prev) => prev + delta * 0.00003); // Slower infinite loop
    }
  });

  return (
    <section className="relative w-full h-225 bg-black overflow-hidden flex items-center justify-center">
      {/* Background styling for the dark gallery look */}
      <div className="absolute inset-0 z-0 bg-linear-to-b from-gray-900 via-black to-black opacity-90" />
      
      {/* Title overlay */}
      <div className="absolute top-16 left-0 w-full z-20 text-center pointer-events-none">
        <h2 className="text-4xl md:text-5xl font-display text-white mb-2 tracking-tight">
          THE MTC <span className="text-transparent bg-clip-text bg-linear-to-r from-gray-400 to-gray-600">GALLERY</span>
        </h2>
        <p className="text-gray-400 text-sm tracking-widest uppercase font-bold">
          Hover over memories to bring them to life
        </p>
      </div>

      {/* Container for the 3D ribbon */}
      <div 
        ref={containerRef} 
        className="relative z-10 w-full max-w-7xl mx-auto h-full flex items-center justify-center"
        style={{ perspective: "1200px" }}
      >
        {photos.map((photo, i) => {
           // Calculate position along the loop
           const offset = i / photos.length;
           const p = (time + offset) % 1; // 0 to 1
           
           // Apply an S-curve mapping to 'p' to distribute photos evenly 
           // (Counteracts the mathematical bunching at the top of the cubic curve)
           const mappedP = Math.sin((p - 0.5) * Math.PI) * 0.5 + 0.5;
           
           // Map to parameter 't' from -6 to 6
           const t = (mappedP - 0.5) * 12;

           // Parametric equations for the awareness ribbon
           const A = 18; 
           const x = A * (t * t * t - 12 * t);
           // Shifted down further to 400 to avoid overlapping the title completely
           const y = -600 / (1 + 0.2 * t * t) + 400; 
           const z = t * 45; // Depth to allow overlapping without z-fighting

           // Calculate derivatives to find the tangent angle
           const dy = (240 * t) / Math.pow(1 + 0.2 * t * t, 2);
           const dx = A * (3 * t * t - 12);
           let angle = Math.atan2(dy, dx) * (180 / Math.PI);
           
           // Keep photos generally upright (don't let them flip upside down)
           if (angle > 90) angle -= 180;
           if (angle < -90) angle += 180;
           
           // Dampen the rotation slightly for a more natural "floating" look
           const rotateZ = angle * 0.6;
           const rotateY = t * 4; // Slight 3D twist along the ribbon

           // Smooth fade in and out at the far edges of the ribbon
           let opacity = 1;
           if (Math.abs(t) > 4.5) {
             opacity = Math.max(0, 1 - (Math.abs(t) - 4.5) / 1.5);
           }

           // Scale down slightly as they move into the distance
           const scale = 1 + (z / 1000);

           return (
             <div
               key={`${photo.id}-${i}`}
               className="absolute top-1/2 left-1/2 group cursor-pointer"
               onClick={() => setSelectedPhoto(photo)}
               style={{
                 transform: `translate3d(calc(-50% + ${x}px), calc(-50% + ${y}px), ${z}px) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scale(${scale})`,
                 opacity,
                 zIndex: Math.round(z + 1000),
                 transition: 'opacity 0.1s linear' // Only transition opacity to avoid stuttering on frame updates
               }}
             >
                {/* Polaroid styling */}
                <div className="bg-white p-3 pb-10 shadow-2xl rounded-sm w-48 h-56 transition-transform duration-500 ease-out hover:scale-125 hover:z-9999 hover:shadow-[0_20px_50px_rgba(255,255,255,0.2)]">
                  <div className="relative w-full h-full overflow-hidden bg-gray-200 rounded-sm">
                    <Image 
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 200px"
                      className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                    />
                  </div>
                </div>
             </div>
           )
        })}
      </div>

      {/* Fullscreen Overlay for Selected Photo */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-99999 flex items-center justify-center bg-black/80 backdrop-blur-sm p-6"
            onClick={() => setSelectedPhoto(null)}
          >
            <button 
              className="absolute top-8 right-8 text-white/70 hover:text-white transition-colors"
              onClick={() => setSelectedPhoto(null)}
            >
              <X size={40} />
            </button>
            <motion.div
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white p-4 pb-16 md:p-6 md:pb-24 shadow-2xl rounded-sm max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()} // Prevent clicking the photo from closing it
            >
              <div className="relative w-full aspect-video bg-gray-100 rounded-sm overflow-hidden">
                <Image 
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-6 md:mt-8 text-center text-black font-display text-2xl md:text-3xl">
                {selectedPhoto.alt}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
