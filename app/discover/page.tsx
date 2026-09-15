"use client";

import { useState } from "react";
import { BookOpen, Gamepad2, Laptop, Coffee, Sparkles, Palette, Coins, MapPin } from "lucide-react";
import Link from "next/link";

const CATEGORIES = [
  { id: 1, name: "Books", icon: BookOpen, color: "bg-orange-100 text-orange-600", bg: "hover:bg-orange-50" },
  { id: 2, name: "Games", icon: Gamepad2, color: "bg-purple-100 text-purple-600", bg: "hover:bg-purple-50" },
  { id: 3, name: "Tech", icon: Laptop, color: "bg-blue-100 text-blue-600", bg: "hover:bg-blue-50" },
  { id: 4, name: "Food & Drinks", icon: Coffee, color: "bg-green-100 text-green-600", bg: "hover:bg-green-50" },
  { id: 5, name: "AI", icon: Sparkles, color: "bg-indigo-100 text-indigo-600", bg: "hover:bg-indigo-50" },
  { id: 6, name: "Arts & Culture", icon: Palette, color: "bg-pink-100 text-pink-600", bg: "hover:bg-pink-50" },
  { id: 7, name: "Crypto", icon: Coins, color: "bg-yellow-100 text-yellow-600", bg: "hover:bg-yellow-50" },
];

const STATES = [
  "Maharashtra",
  "Delhi",
  "Bangalore",
  "Gujrat",
  "Uttar Pradesh",
  "Andhra Pradesh"
];

// Dummy events with images and exact Luma-like data
const EVENTS = [
  {
    id: 1,
    title: "Mumbai Tech Meetup #42",
    dateMonth: "AUG",
    dateDay: "22",
    time: "Saturday, 5:00 PM",
    location: "WeWork, Bandra Kurla Complex",
    state: "Maharashtra",
    image: "from-blue-100 to-blue-200",
    attendees: 142
  },
  {
    id: 2,
    title: "AI/ML Workshop: Local LLMs",
    dateMonth: "AUG",
    dateDay: "30",
    time: "Sunday, 10:00 AM",
    location: "Online / Pune",
    state: "Maharashtra",
    image: "from-indigo-100 to-purple-200",
    attendees: 85
  },
  {
    id: 3,
    title: "Delhi Web3 Hackathon",
    dateMonth: "SEP",
    dateDay: "15",
    time: "Friday, 9:00 AM",
    location: "Connaught Place, Delhi",
    state: "Delhi",
    image: "from-yellow-100 to-orange-200",
    attendees: 300
  },
  {
    id: 4,
    title: "Bangalore SaaS Mixer",
    dateMonth: "OCT",
    dateDay: "10",
    time: "Saturday, 6:00 PM",
    location: "Koramangala, Bangalore",
    state: "Bangalore",
    image: "from-green-100 to-emerald-200",
    attendees: 210
  },
  {
    id: 5,
    title: "Ahmedabad AI Summit",
    dateMonth: "NOV",
    dateDay: "05",
    time: "Sunday, 9:00 AM",
    location: "SG Highway, Ahmedabad",
    state: "Gujrat",
    image: "from-rose-100 to-pink-200",
    attendees: 450
  },
  {
    id: 6,
    title: "Noida Game Developers Meet",
    dateMonth: "NOV",
    dateDay: "12",
    time: "Saturday, 4:00 PM",
    location: "Sector 62, Noida",
    state: "Uttar Pradesh",
    image: "from-violet-100 to-fuchsia-200",
    attendees: 120
  },
  {
    id: 7,
    title: "Hyderabad Cloud Tech",
    dateMonth: "NOV",
    dateDay: "20",
    time: "Friday, 10:00 AM",
    location: "HITEC City, Hyderabad",
    state: "Andhra Pradesh",
    image: "from-sky-100 to-cyan-200",
    attendees: 275
  }
];

export default function DiscoverPage() {
  const [selectedState, setSelectedState] = useState("Maharashtra");

  const filteredEvents = EVENTS.filter(event => event.state === selectedState);

  return (
    <div className="flex min-h-screen flex-col bg-[#FAFAFA]">
      <main className="flex-1">
        <div className="flex flex-col gap-12 px-4 pt-28 pb-12 sm:px-6 sm:pt-32 sm:pb-16 lg:px-8">
          <div className="mx-auto w-full max-w-[1000px]">
            
            {/* Discover Header */}
            <div className="animate-fade-up mb-12">
              <h1 className="font-display text-4xl font-bold tracking-tight text-black sm:text-5xl">
                Discover
              </h1>
            </div>

            {/* Browse by Category - Luma Style Grid */}
            <div className="animate-fade-up delay-75 mb-16">
              <h2 className="text-xl font-bold tracking-tight text-black mb-6">
                Browse by Category
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {CATEGORIES.map((category) => (
                  <Link 
                    key={category.id} 
                    href="/events" 
                    className={`flex flex-col items-start justify-between p-4 rounded-2xl bg-white border border-gray-200 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 hover:border-gray-300 ${category.bg} group aspect-square`}
                  >
                    <div className={`p-2.5 rounded-xl ${category.color} transition-transform group-hover:scale-110`}>
                      <category.icon className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-semibold text-gray-900 mt-4 leading-tight">
                      {category.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Explore Local Events */}
            <div className="animate-fade-up delay-150">
              <h2 className="text-xl font-bold tracking-tight text-black mb-6">
                Explore Local Events
              </h2>

              {/* State Filter Pills - Luma Style Tabs */}
              <div className="flex overflow-x-auto gap-2 pb-2 mb-6 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
                {STATES.map((state) => (
                  <button
                    key={state}
                    onClick={() => setSelectedState(state)}
                    className={`inline-flex items-center justify-center whitespace-nowrap px-4 py-2 text-sm font-semibold transition-all rounded-full ${
                      selectedState === state
                        ? "bg-gray-900 text-white shadow-sm"
                        : "bg-gray-100/80 text-gray-600 hover:bg-gray-200/80 hover:text-black"
                    }`}
                  >
                    {state}
                  </button>
                ))}
              </div>
              
              {/* Event Cards - Luma Style */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredEvents.length > 0 ? (
                  filteredEvents.map((event) => (
                    <Link key={event.id} href="/events" className="group flex flex-col rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 overflow-hidden">
                      {/* Image Banner */}
                      <div className={`relative aspect-[2/1] w-full bg-gradient-to-br ${event.image}`}>
                        {/* Floating Date Badge */}
                        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur shadow-sm rounded-lg flex flex-col items-center justify-center min-w-[3rem] px-2 py-1 border border-gray-100">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-red-500 leading-none mb-0.5">{event.dateMonth}</span>
                          <span className="text-lg font-bold text-gray-900 leading-none">{event.dateDay}</span>
                        </div>
                      </div>
                      
                      {/* Card Content */}
                      <div className="flex flex-col p-4 flex-1">
                        <h3 className="font-bold text-lg text-gray-900 line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors">
                          {event.title}
                        </h3>
                        <p className="mt-1.5 text-sm font-medium text-gray-500">
                          {event.time}
                        </p>
                        <p className="text-sm text-gray-500 truncate">
                          {event.location}
                        </p>
                        
                        <div className="mt-auto pt-4 flex items-center gap-3">
                          <div className="flex -space-x-2">
                            <div className="w-6 h-6 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-[10px] text-gray-600 font-medium">1</div>
                            <div className="w-6 h-6 rounded-full border-2 border-white bg-gray-300 flex items-center justify-center text-[10px] text-gray-700 font-medium">2</div>
                            <div className="w-6 h-6 rounded-full border-2 border-white bg-gray-400 flex items-center justify-center text-[10px] text-white font-medium">3</div>
                          </div>
                          <span className="text-xs font-medium text-gray-500">+{event.attendees} going</span>
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <div className="col-span-full flex flex-col items-center justify-center p-12 rounded-2xl border border-dashed border-gray-300 bg-white/50">
                    <MapPin className="w-8 h-8 text-gray-400 mb-3" />
                    <p className="text-gray-900 font-semibold text-center">
                      No events in {selectedState}
                    </p>
                    <p className="text-sm text-gray-500 text-center mt-1">
                      Check back later or subscribe to a calendar.
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
