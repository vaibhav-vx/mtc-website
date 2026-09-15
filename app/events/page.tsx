import { Calendar, MapPin, Clock, ArrowRight, User } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Events — Mumbai Tech Community",
  description: "Discover upcoming meetups, workshops, hackathons, and conferences in Mumbai's tech community.",
};

const TIMELINE_EVENTS = [
  {
    dateStr: "Saturday, August 22",
    events: [
      {
        id: 1,
        title: "Mumbai Tech Meetup #42",
        time: "5:00 PM - 8:00 PM",
        location: "WeWork, Bandra Kurla Complex",
        type: "meetup",
        image: "from-blue-100 to-blue-200",
        attendees: 142,
        status: "Event ended",
      }
    ]
  },
  {
    dateStr: "Sunday, August 30",
    events: [
      {
        id: 2,
        title: "AI/ML Workshop: Build with Local LLMs",
        time: "10:00 AM - 2:00 PM",
        location: "Online",
        type: "workshop",
        image: "from-indigo-100 to-purple-200",
        attendees: 85,
        status: "Event ended",
      }
    ]
  },
  {
    dateStr: "Tuesday, September 15",
    events: [
      {
        id: 3,
        title: "Mumbai Web3 Hackathon",
        time: "9:00 AM",
        location: "T-Hub, Powai",
        type: "hackathon",
        image: "from-yellow-100 to-orange-200",
        attendees: 300,
        status: "Registration open",
        active: true
      }
    ]
  },
  {
    dateStr: "Monday, September 28",
    events: [
      {
        id: 4,
        title: "DevOps Day Mumbai",
        time: "10:00 AM - 6:00 PM",
        location: "Godrej IT Park, Vikhroli",
        type: "conference",
        image: "from-rose-100 to-pink-200",
        attendees: 210,
        status: "Registration open",
        active: true
      }
    ]
  }
];

export default function EventsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FAFAFA]">
      <main className="flex-1">
        <div className="flex flex-col gap-12 px-4 pt-28 pb-12 sm:px-6 sm:pt-32 sm:pb-16 lg:px-8">
          <div className="mx-auto w-full max-w-[1000px]">
            
            {/* Header */}
            <div className="animate-fade-up mb-12 max-w-2xl">
              <div className="inline-flex items-center border border-transparent bg-gray-200 text-gray-800 px-2.5 py-0.5 text-xs font-semibold transition-colors hover:bg-gray-300 mb-4 rounded-full">
                Events
              </div>
              <h1 className="font-display text-4xl font-bold tracking-tight text-black sm:text-5xl">
                Upcoming events
              </h1>
              <p className="mt-4 text-lg text-gray-500">
                Discover events that help you learn new skills, build projects, and meet people who share your interests.
              </p>
            </div>

            {/* Layout Wrapper */}
            <div className="flex flex-col lg:flex-row gap-8">
              
              {/* Left Column: Filters (Sticky on desktop) */}
              <div className="lg:w-64 shrink-0">
                <div className="sticky top-28">
                  {/* Luma-style Segmented Pills Container */}
                  <div className="inline-flex h-10 items-center text-gray-500 mb-8 w-full max-w-full justify-start overflow-x-auto rounded-full bg-gray-100/80 p-1">
                    <button className="inline-flex w-1/2 items-center justify-center whitespace-nowrap px-4 py-1.5 text-sm font-semibold transition-all bg-white text-black shadow-sm rounded-full">
                      Upcoming
                    </button>
                    <button className="inline-flex w-1/2 items-center justify-center whitespace-nowrap px-4 py-1.5 text-sm font-medium transition-all hover:text-black rounded-full hover:bg-black/5">
                      Past
                    </button>
                  </div>
                  
                  {/* Additional filters could go here */}
                </div>
              </div>

              {/* Right Column: Timeline Grid */}
              <div className="flex-1">
                {/* Timeline Container */}
                <div className="relative border-l-2 border-dashed border-gray-200/60 ml-4 md:ml-0 md:pl-10 space-y-16 pb-12">
                  
                  {TIMELINE_EVENTS.map((day, i) => (
                    <div key={i} className="relative animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
                      
                      {/* Date Marker (Dot) */}
                      <div className="absolute -left-[45px] top-1.5 w-3 h-3 rounded-full bg-gray-300 border-4 border-[#FAFAFA] hidden md:block"></div>
                      
                      {/* Mobile Date Header (Visible only on mobile where dot is hidden) */}
                      <div className="absolute -left-[21px] top-2 w-2 h-2 rounded-full bg-gray-300 md:hidden"></div>
                      
                      {/* Date Header */}
                      <h3 className="text-xl font-bold text-gray-900 mb-6 pl-4 md:pl-0 tracking-tight">
                        {day.dateStr}
                      </h3>
                      
                      {/* Event Cards */}
                      <div className="grid gap-6 pl-4 md:pl-0">
                        {day.events.map((event) => (
                          <Link 
                            key={event.id} 
                            href={`/events/${event.id}`} 
                            className="group flex flex-col sm:flex-row rounded-3xl bg-white border border-gray-200/80 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 overflow-hidden"
                          >
                            {/* Left Image Banner (Square-ish on desktop, wide on mobile) */}
                            <div className={`relative aspect-[2/1] sm:aspect-square sm:w-48 bg-gradient-to-br ${event.image} shrink-0`}>
                              {/* Type Badge inside image */}
                              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur shadow-sm rounded-full px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-gray-700 border border-gray-100">
                                {event.type}
                              </div>
                            </div>
                            
                            {/* Right Content */}
                            <div className="flex flex-col p-5 sm:p-6 flex-1 justify-between">
                              <div>
                                <h4 className="font-display font-bold text-xl text-gray-900 leading-tight group-hover:text-blue-600 transition-colors">
                                  {event.title}
                                </h4>
                                <div className="mt-3 space-y-1.5 text-sm font-medium text-gray-500">
                                  <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-gray-400" />
                                    <span>{event.time}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-gray-400" />
                                    <span className="truncate">{event.location}</span>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                                {/* Attendees Stack */}
                                <div className="flex items-center gap-2.5">
                                  <div className="flex -space-x-2">
                                    <div className="w-7 h-7 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-[10px] text-gray-600 font-medium">1</div>
                                    <div className="w-7 h-7 rounded-full border-2 border-white bg-gray-300 flex items-center justify-center text-[10px] text-gray-700 font-medium">2</div>
                                    <div className="w-7 h-7 rounded-full border-2 border-white bg-gray-400 flex items-center justify-center text-[10px] text-white font-medium">3</div>
                                  </div>
                                  <span className="text-xs font-medium text-gray-500">+{event.attendees} going</span>
                                </div>
                                
                                {/* Status Pill */}
                                {event.active ? (
                                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700">
                                    {event.status}
                                  </span>
                                ) : (
                                  <span className="text-xs font-semibold text-gray-400">
                                    {event.status}
                                  </span>
                                )}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Banner Call to Action */}
                <div className="animate-fade-up mt-8 rounded-3xl bg-black px-6 py-8 text-white sm:px-8 sm:py-10 shadow-lg delay-300">
                  <div className="mx-auto max-w-2xl text-center">
                    <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                      Want to host an event with us?
                    </h2>
                    <p className="mt-3 text-white/80">
                      We partner with organizers, companies, and spaces to run great tech events in Mumbai.
                    </p>
                    <Link href="/join" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-all bg-white text-black hover:bg-gray-100 h-10 px-5 mt-6 rounded-full shadow-sm hover:-translate-y-0.5">
                      Get in touch
                    </Link>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
