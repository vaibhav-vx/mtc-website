"use client";

import { useState } from "react";
import { BookOpen, Gamepad2, Laptop, Coffee, Sparkles, Palette, Coins, Calendar, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

const CATEGORIES = [
  { id: 1, name: "Books", icon: BookOpen, color: "bg-blue-100 text-blue-600" },
  { id: 2, name: "Games", icon: Gamepad2, color: "bg-purple-100 text-purple-600" },
  { id: 3, name: "Tech", icon: Laptop, color: "bg-green-100 text-green-600" },
  { id: 4, name: "Food & Drinks", icon: Coffee, color: "bg-orange-100 text-orange-600" },
  { id: 5, name: "AI", icon: Sparkles, color: "bg-red-100 text-red-600" },
  { id: 6, name: "Arts & Culture", icon: Palette, color: "bg-indigo-100 text-indigo-600" },
  { id: 7, name: "Crypto", icon: Coins, color: "bg-yellow-100 text-yellow-600" },
];

const STATES = [
  "Maharashtra",
  "Delhi",
  "Bangalore",
  "Gujrat",
  "Uttar Pradesh",
  "Andhra Pradesh"
];

// Dummy events with state property for filtering
const EVENTS = [
  {
    id: 1,
    title: "Mumbai Tech Meetup #42",
    type: "meetup",
    date: "22 Aug 2026",
    location: "WeWork, Bandra Kurla Complex",
    state: "Maharashtra",
    description: "An evening of networking, lightning talks, and demos with Mumbai's finest builders."
  },
  {
    id: 2,
    title: "AI/ML Workshop: Local LLMs",
    type: "workshop",
    date: "30 Aug 2026",
    location: "Online / Pune",
    state: "Maharashtra",
    description: "Hands-on workshop on running and fine-tuning open-source language models locally."
  },
  {
    id: 3,
    title: "Delhi Web3 Hackathon",
    type: "hackathon",
    date: "15 Sept 2026",
    location: "Connaught Place, Delhi",
    state: "Delhi",
    description: "48-hour hackathon focused on blockchain, DeFi, and decentralized applications."
  },
  {
    id: 4,
    title: "Bangalore SaaS Mixer",
    type: "meetup",
    date: "10 Oct 2026",
    location: "Koramangala, Bangalore",
    state: "Bangalore",
    description: "Connect with SaaS founders, investors, and operators."
  },
  {
    id: 5,
    title: "Ahmedabad AI Summit",
    type: "conference",
    date: "5 Nov 2026",
    location: "SG Highway, Ahmedabad",
    state: "Gujrat",
    description: "The largest gathering of AI researchers and developers in Gujrat."
  },
  {
    id: 6,
    title: "Noida Game Developers Meet",
    type: "meetup",
    date: "12 Nov 2026",
    location: "Sector 62, Noida",
    state: "Uttar Pradesh",
    description: "Showcase your indie games and network with game designers."
  },
  {
    id: 7,
    title: "Hyderabad Cloud Tech",
    type: "workshop",
    date: "20 Nov 2026",
    location: "HITEC City, Hyderabad",
    state: "Andhra Pradesh",
    description: "Deep dive into scalable cloud infrastructure and Kubernetes."
  }
];

export default function DiscoverPage() {
  const [selectedState, setSelectedState] = useState("Maharashtra");

  const filteredEvents = EVENTS.filter(event => event.state === selectedState);

  return (
    <div className="flex min-h-screen flex-col bg-gray-50/50">
      <main className="flex-1">
        <div className="flex flex-col gap-12 px-4 pt-28 pb-12 sm:px-6 sm:pt-32 sm:pb-16 lg:px-8">
          <div className="mx-auto w-full max-w-7xl">
            
            {/* Header Section */}
            <div className="animate-fade-up mb-12 max-w-2xl">
              <h1 className="font-display text-4xl font-bold tracking-tight text-black sm:text-5xl">
                Discover Events
              </h1>
              <p className="mt-4 text-lg text-gray-500">
                Discover popular events and featured calendars from the community.
              </p>
            </div>

            {/* Browse by Category */}
            <div className="animate-fade-up delay-75 mb-16">
              <h2 className="font-display text-2xl font-bold tracking-tight text-black mb-6">
                Browse by Category
              </h2>
              <div className="flex flex-wrap gap-4">
                {CATEGORIES.map((category) => (
                  <Link 
                    key={category.id} 
                    href="/events" 
                    className="flex flex-col items-center justify-center gap-3 w-32 h-32 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 transition-all hover:-translate-y-1"
                  >
                    <div className={`p-4 rounded-full ${category.color}`}>
                      <category.icon className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-semibold text-center text-gray-800">
                      {category.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Explore Local Events */}
            <div className="animate-fade-up delay-150">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                <h2 className="font-display text-2xl font-bold tracking-tight text-black">
                  Explore Local Events
                </h2>
                <Link href="/events" className="text-sm font-semibold text-gray-500 hover:text-black flex items-center gap-1 transition-colors">
                  View all
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* State Filter Pills */}
              <div className="flex overflow-x-auto gap-2 pb-4 mb-4 no-scrollbar">
                {STATES.map((state) => (
                  <button
                    key={state}
                    onClick={() => setSelectedState(state)}
                    className={`inline-flex items-center justify-center whitespace-nowrap px-4 py-2 text-sm font-medium transition-all rounded-full border ${
                      selectedState === state
                        ? "bg-black text-white border-black shadow-sm"
                        : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    {state}
                  </button>
                ))}
              </div>
              
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filteredEvents.length > 0 ? (
                  filteredEvents.map((event) => (
                    <div key={event.id} className="rounded-xl border border-gray-200 text-gray-800 shadow-sm hover:shadow-md group flex h-full flex-col bg-white transition-all hover:-translate-y-1">
                      <div className="flex flex-col space-y-1.5 p-6 flex-1 pb-3">
                        <div className="mb-3 flex items-center gap-2">
                          <div className="inline-flex items-center border border-transparent bg-gray-100 text-gray-800 px-2.5 py-0.5 text-xs font-semibold rounded-full capitalize">
                            {event.type}
                          </div>
                        </div>
                        <h3 className="font-display text-xl font-semibold tracking-tight text-black">
                          {event.title}
                        </h3>
                        <p className="mt-2 text-sm text-gray-500 line-clamp-2">
                          {event.description}
                        </p>
                      </div>
                      <div className="p-6 pt-0">
                        <div className="space-y-2 text-sm text-gray-500">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 shrink-0" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 shrink-0" />
                            <span className="truncate">{event.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full flex flex-col items-center justify-center p-12 rounded-2xl border border-dashed border-gray-300 bg-white">
                    <MapPin className="w-8 h-8 text-gray-400 mb-4" />
                    <p className="text-gray-500 font-medium text-center">
                      No events currently scheduled in {selectedState}.
                    </p>
                    <p className="text-sm text-gray-400 text-center mt-1">
                      Check back later or explore another region.
                    </p>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
