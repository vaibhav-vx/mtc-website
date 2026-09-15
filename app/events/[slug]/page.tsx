import { Calendar, MapPin, Clock, Users, ArrowRight, Share, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Event Details — Mumbai Tech Community",
  description: "Join us for an amazing event with the Mumbai Tech Community.",
};

export default function EventDetailPage({ params }: { params: { slug: string } }) {
  // Mock data for the event detail
  const event = {
    title: "Mumbai Tech Meetup #42",
    date: "Saturday, August 22, 2026",
    time: "5:00 PM - 8:00 PM IST",
    location: "WeWork, Bandra Kurla Complex",
    address: "C-20, G Block Rd, G Block BKC, Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra 400051",
    description: "Join us for the 42nd edition of the Mumbai Tech Meetup! This month, we're diving deep into the future of open-source development, community building, and local tech ecosystems.\\n\\nExpect an evening of networking, lightning talks from incredible local builders, and interactive Q&A sessions. Whether you're a seasoned engineer, a designer, or just starting your tech journey, there's something here for everyone.",
    host: "Mumbai Tech Community",
    attendees: 142,
    imageGradient: "from-blue-100/60 via-indigo-50/40 to-purple-100/60",
    status: "Registration open",
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${event.imageGradient} relative overflow-hidden`}>
      
      {/* Decorative Blur Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-300/30 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-300/30 blur-[120px]"></div>
      </div>

      <main className="mx-auto max-w-[1100px] px-4 pt-32 pb-24 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Event Details */}
          <div className="lg:col-span-7 xl:col-span-8 animate-fade-up">
            
            {/* Host info */}
            <div className="flex items-center gap-3 mb-6">
              <img src="/official_logo.jpeg" alt={event.host} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
              <div>
                <p className="text-sm font-medium text-gray-500 leading-tight">Hosted by</p>
                <p className="font-semibold text-gray-900 leading-tight">{event.host}</p>
              </div>
            </div>

            {/* Title (Luma style Serif) */}
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-8 leading-[1.1]">
              {event.title}
            </h1>

            {/* Quick Info Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-12 p-1 border-y border-gray-200/50 py-8">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm border border-gray-100">
                  <Calendar className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{event.date}</h3>
                  <p className="text-sm font-medium text-gray-500 mt-0.5">{event.time}</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm border border-gray-100">
                  <MapPin className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{event.location}</h3>
                  <p className="text-sm font-medium text-gray-500 mt-0.5 line-clamp-2">{event.address}</p>
                </div>
              </div>
            </div>

            {/* About Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About Event</h2>
              <div className="prose prose-lg prose-gray text-gray-600 max-w-none">
                {event.description.split('\\n\\n').map((paragraph, idx) => (
                  <p key={idx} className="mb-4 leading-relaxed">{paragraph}</p>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Floating Registration Card */}
          <div className="lg:col-span-5 xl:col-span-4 lg:sticky lg:top-32 animate-fade-up delay-150">
            <div className="rounded-3xl bg-white/70 backdrop-blur-xl border border-white/80 shadow-2xl p-6 sm:p-8">
              
              {/* Event Image Banner (Square/Hero) */}
              <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 mb-8 overflow-hidden relative shadow-inner">
                {/* Normally an image goes here. We'll use a gradient placeholder for now */}
                <div className="absolute inset-0 flex items-center justify-center text-white/50">
                  <span className="font-serif text-3xl font-bold italic mix-blend-overlay">MTC</span>
                </div>
              </div>

              {/* Status and Action */}
              <div className="mb-8 text-center">
                <p className="text-sm font-bold uppercase tracking-widest text-green-600 mb-4 flex items-center justify-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  {event.status}
                </p>
                
                <button className="w-full inline-flex items-center justify-center gap-2 whitespace-nowrap text-lg font-semibold transition-all bg-black text-white hover:bg-black/90 h-14 px-8 rounded-full shadow-lg hover:-translate-y-0.5 hover:shadow-xl press-scale">
                  Register for event
                </button>
              </div>

              {/* Attendees */}
              <div className="pt-6 border-t border-gray-200/50">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-gray-900">Attendees</span>
                  <span className="text-sm font-medium text-gray-500">{event.attendees} going</span>
                </div>
                <div className="flex flex-wrap gap-2">
                   {/* Dummy Avatars */}
                   {[1,2,3,4,5,6,7,8].map((i) => (
                     <div key={i} className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white shadow-sm overflow-hidden flex items-center justify-center text-xs font-medium text-gray-500">
                       {i}
                     </div>
                   ))}
                   <div className="w-10 h-10 rounded-full bg-gray-100 border-2 border-white shadow-sm flex items-center justify-center text-xs font-semibold text-gray-600">
                     +134
                   </div>
                </div>
              </div>

              {/* Action Links */}
              <div className="mt-8 flex gap-3">
                <button className="flex-1 inline-flex items-center justify-center gap-2 h-10 rounded-full bg-white border border-gray-200 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
                  <Share className="w-4 h-4" /> Share
                </button>
                <button className="flex-1 inline-flex items-center justify-center gap-2 h-10 rounded-full bg-white border border-gray-200 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
                  <Calendar className="w-4 h-4" /> Add to Cal
                </button>
              </div>

            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
