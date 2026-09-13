"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Disable scrolling while loading
    document.body.style.overflow = "hidden";
    
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "unset";
    }, 2000); // 2 seconds animation

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-100 flex items-center justify-center bg-white"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0, y: -100 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="flex flex-col items-center gap-4"
          >
            <div className="w-32 h-32 md:w-48 md:h-48 relative rounded-full overflow-hidden shadow-2xl">
              <Image
                src="/official_logo.jpeg"
                alt="MTC Logo"
                fill
                sizes="(max-width: 768px) 128px, 192px"
                className="object-cover"
                priority
              />
            </div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
              className="h-0.5 bg-black mt-4"
            />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500"
            >
              Mumbai Tech Community
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
