"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, MapPin, Users, ArrowRight, Clock } from "lucide-react";
import { formatDate } from "@/lib/utils";
import Image from "next/image";

type EventType = {
  id: string;
  slug: string;
  title: string;
  type: "meetup" | "hackathon" | "workshop";
  date: string;
  venue: string;
  state?: string;
  description: string;
  tags: string[];
  capacity: number;
  rsvpCount: number;
  image: string;
  featured: boolean;
};

interface EventDrawerProps {
  event: EventType | null;
  onClose: () => void;
}

export default function EventDrawer({ event, onClose }: EventDrawerProps) {
  // Prevent scrolling on body when drawer is open
  useEffect(() => {
    if (event) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [event]);

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {event && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
            style={{ cursor: "pointer" }}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 z-50 w-full h-full md:w-[45%] lg:w-[40%] bg-white shadow-2xl flex flex-col overflow-y-auto border-l border-gray-200"
          >
            {/* Header (Sticky) */}
            <div className="sticky top-0 z-10 flex items-center justify-between p-4 bg-white/80 backdrop-blur-md border-b border-gray-100">
              <button
                onClick={onClose}
                className="p-2 text-gray-500 hover:text-black hover:bg-gray-100 rounded-full transition-colors flex items-center gap-2"
              >
                <X size={20} />
                <span className="text-sm font-semibold hidden sm:block">Close</span>
              </button>
              <div className="text-xs font-bold uppercase tracking-widest text-gray-400">
                {event.type}
              </div>
            </div>

            {/* Event Hero Image */}
            <div className="relative w-full h-64 md:h-80 bg-gray-100">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex gap-2 mb-3">
                  {event.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded bg-white/20 backdrop-blur-md border border-white/30 font-medium text-white shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-3xl md:text-4xl font-display text-white leading-tight">
                  {event.title}
                </h2>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 md:p-8 flex-1 flex flex-col gap-8">
              {/* Action/Time Card */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 flex flex-col gap-4">
                <div className="flex items-center gap-3 text-gray-800">
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white shrink-0">
                    <Calendar size={18} />
                  </div>
                  <div>
                    <div className="font-bold">{formatDate(event.date)}</div>
                    <div className="text-sm text-gray-500 font-medium flex items-center gap-1">
                      <Clock size={14} /> Evening Session
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-800">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="font-bold">{event.venue}</div>
                    <div className="text-sm text-gray-500 font-medium">{event.state || "Maharashtra, India"}</div>
                  </div>
                </div>

                <div className="pt-4 mt-2 border-t border-gray-200">
                  <div className="flex justify-between text-xs mb-2 text-gray-500 font-bold uppercase tracking-wider">
                    <span className="flex items-center gap-1.5">
                      <Users size={12} /> {event.rsvpCount} Attending
                    </span>
                    <span>{event.capacity - event.rsvpCount} spots left</span>
                  </div>
                  <div className="h-2 rounded-full overflow-hidden bg-gray-200 mb-6">
                    <div
                      className={`h-full rounded-full transition-all ${(event.rsvpCount / event.capacity) * 100 > 80 ? 'bg-red-500' : 'bg-black'}`}
                      style={{ width: `${(event.rsvpCount / event.capacity) * 100}%` }}
                    />
                  </div>
                  <button className="w-full py-4 rounded-xl font-bold text-white bg-black transition-all hover:bg-gray-900 shadow-md flex items-center justify-center gap-2 hover:scale-[1.02]">
                    Reserve Your Spot <ArrowRight size={18} />
                  </button>
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-xl font-bold mb-4">About this event</h3>
                <p className="text-gray-600 font-medium leading-relaxed whitespace-pre-wrap">
                  {event.description}
                </p>
                <p className="mt-4 text-gray-600 font-medium leading-relaxed">
                  Join the fastest-growing tech community. Connect with founders, builders, and designers who are shaping the future of technology.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
