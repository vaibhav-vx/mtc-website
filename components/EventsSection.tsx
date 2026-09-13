"use client";

import { useState } from "react";
import { EVENTS, INDIAN_STATES } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import { Calendar, MapPin, Users, LayoutGrid, Map } from "lucide-react";
import EventDrawer from "./EventDrawer";
import Image from "next/image";

const CATEGORIES = [
  { id: "all", label: "All Types" },
  { id: "meetup", label: "Meetups" },
  { id: "hackathon", label: "Hackathons" },
  { id: "workshop", label: "Workshops" },
];

export default function EventsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeState, setActiveState] = useState("all");
  const [activeEvent, setActiveEvent] = useState<typeof EVENTS[0] | null>(null);

  // Filter events based on active category and active state
  const filteredEvents = EVENTS.filter((event) => {
    const matchesCategory = activeCategory === "all" || event.type === activeCategory;
    const matchesState = activeState === "all" || event.state === activeState;
    return matchesCategory && matchesState;
  });

  return (
    <section id="events" className="py-24 px-6 reveal bg-white border-b border-gray-200">
      <div className="max-w-350 mx-auto">
        <div className="mb-12">
          <div className="text-xs font-bold uppercase tracking-widest mb-3 text-gray-500">
            Discover
          </div>
          <h2 className="text-4xl md:text-5xl font-display text-black">
            EXPLORE THE ECOSYSTEM
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Sidebar */}
          <aside className="w-full lg:w-64 shrink-0 lg:sticky lg:top-32">
            {/* Categories */}
            <div className="mb-8">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 flex items-center gap-2">
                <LayoutGrid size={14} /> Categories
              </h3>
              <div className="flex flex-col gap-1">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`text-left px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                      activeCategory === cat.id
                        ? "bg-black text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Local Events (Indian States) */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 flex items-center gap-2">
                <Map size={14} /> Local Events
              </h3>
              <div className="flex flex-col gap-1">
                <button
                  onClick={() => setActiveState("all")}
                  className={`text-left px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                    activeState === "all"
                      ? "bg-black text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  All States
                </button>
                {INDIAN_STATES.map((stateName) => (
                  <button
                    key={stateName}
                    onClick={() => setActiveState(stateName)}
                    className={`text-left px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                      activeState === stateName
                        ? "bg-black text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {stateName}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content Grid */}
          <div className="flex-1 w-full">
            {filteredEvents.length === 0 ? (
              <div className="text-center py-24 bg-gray-50 rounded-2xl border border-dashed border-gray-300">
                <p className="text-gray-500 font-medium">No events found for this filter combination.</p>
                <button 
                  onClick={() => { setActiveCategory("all"); setActiveState("all"); }}
                  className="mt-4 text-sm font-bold text-black hover:underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredEvents.map((event) => {
                  const fillPct = (event.rsvpCount / event.capacity) * 100;
                  return (
                    <button
                      key={event.id}
                      onClick={() => setActiveEvent(event)}
                      className="group text-left block rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 bg-white border border-gray-200 hover:border-gray-300 hover:shadow-xl shadow-sm w-full"
                    >
                      {/* Image Thumbnail */}
                      <div className="h-48 w-full relative overflow-hidden bg-gray-100">
                        <Image 
                          src={event.image} 
                          alt={event.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-white/90 backdrop-blur-sm text-black shadow-sm">
                            {event.type}
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        {/* Title */}
                        <h3 className="text-xl font-bold text-black mb-2 group-hover:text-gray-600 transition-colors line-clamp-2">
                          {event.title}
                        </h3>
                        
                        {/* Meta */}
                        <div className="flex flex-col gap-2 text-xs mb-6 text-gray-500 font-medium mt-4">
                          <span className="flex items-center gap-2">
                            <Calendar size={14} className="text-gray-400" />
                            {formatDate(event.date)}
                          </span>
                          <span className="flex items-center gap-2">
                            <MapPin size={14} className="text-gray-400" />
                            {event.state || "Maharashtra"}
                          </span>
                        </div>

                        {/* Capacity bar */}
                        <div className="mt-auto">
                          <div className="flex justify-between text-[10px] mb-2 text-gray-500 font-bold uppercase tracking-wider">
                            <span className="flex items-center gap-1"><Users size={12} /> {event.rsvpCount}</span>
                            <span>{event.capacity - event.rsvpCount} left</span>
                          </div>
                          <div className="h-1.5 rounded-full overflow-hidden bg-gray-100">
                            <div
                              className={`h-full rounded-full transition-all ${fillPct > 80 ? 'bg-red-500' : 'bg-black'}`}
                              style={{ width: `${fillPct}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Luma-style Event Drawer */}
      <EventDrawer event={activeEvent} onClose={() => setActiveEvent(null)} />
    </section>
  );
}
