import { CodeXml, Briefcase, Calendar, Rocket, MonitorPlay, Sparkles, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Discover — Mumbai Tech Community",
  description: "Browse tech events by category and explore local meetups in Mumbai.",
};

const CATEGORIES = [
  { id: 1, name: "Startups & Pitch", icon: Rocket, color: "bg-blue-100 text-blue-600" },
  { id: 2, name: "AI & Machine Learning", icon: Sparkles, color: "bg-purple-100 text-purple-600" },
  { id: 3, name: "Web & Engineering", icon: CodeXml, color: "bg-green-100 text-green-600" },
  { id: 4, name: "Design & Product", icon: MonitorPlay, color: "bg-orange-100 text-orange-600" },
  { id: 5, name: "Founders & Investors", icon: Briefcase, color: "bg-red-100 text-red-600" },
  { id: 6, name: "Web3 & Crypto", icon: Calendar, color: "bg-indigo-100 text-indigo-600" },
];

export default function DiscoverPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50/50">
      <main className="flex-1">
        <div className="flex flex-col gap-12 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto w-full max-w-7xl">
            
            {/* Header Section */}
            <div className="animate-fade-up mb-12 max-w-2xl">
              <h1 className="font-display text-4xl font-bold tracking-tight text-black sm:text-5xl">
                Discover Events
              </h1>
              <p className="mt-4 text-lg text-gray-500">
                Discover popular events in Mumbai and featured calendars from the community.
              </p>
            </div>

            {/* Browse by Category */}
            <div className="animate-fade-up delay-75 mb-16">
              <h2 className="font-display text-2xl font-bold tracking-tight text-black mb-6">
                Browse by Category
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {CATEGORIES.map((category) => (
                  <Link 
                    key={category.id} 
                    href="/events" 
                    className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 transition-all hover:-translate-y-1"
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
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display text-2xl font-bold tracking-tight text-black">
                  Explore Local Events
                </h2>
                <Link href="/events" className="text-sm font-semibold text-gray-500 hover:text-black flex items-center gap-1 transition-colors">
                  View all
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                
                {/* Event Card 1 */}
                <div className="rounded-xl border border-gray-200 text-gray-800 shadow-sm hover:shadow-md group flex h-full flex-col bg-white transition-all hover:-translate-y-1">
                  <div className="flex flex-col space-y-1.5 p-6 flex-1 pb-3">
                    <div className="mb-3 flex items-center gap-2">
                      <div className="inline-flex items-center border border-transparent bg-gray-100 text-gray-800 px-2.5 py-0.5 text-xs font-semibold rounded-full capitalize">
                        meetup
                      </div>
                    </div>
                    <h3 className="font-display text-xl font-semibold tracking-tight text-black">
                      Mumbai Tech Meetup #42
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                      An evening of networking, lightning talks, and demos with Mumbai's finest builders.
                    </p>
                  </div>
                  <div className="p-6 pt-0">
                    <div className="space-y-2 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>22 Aug 2026</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>WeWork, Bandra Kurla Complex</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Event Card 2 */}
                <div className="rounded-xl border border-gray-200 text-gray-800 shadow-sm hover:shadow-md group flex h-full flex-col bg-white transition-all hover:-translate-y-1">
                  <div className="flex flex-col space-y-1.5 p-6 flex-1 pb-3">
                    <div className="mb-3 flex items-center gap-2">
                      <div className="inline-flex items-center border border-transparent bg-gray-100 text-gray-800 px-2.5 py-0.5 text-xs font-semibold rounded-full capitalize">
                        workshop
                      </div>
                    </div>
                    <h3 className="font-display text-xl font-semibold tracking-tight text-black">
                      AI/ML Workshop: Build with Local LLMs
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                      Hands-on workshop on running and fine-tuning open-source language models locally.
                    </p>
                  </div>
                  <div className="p-6 pt-0">
                    <div className="space-y-2 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>30 Aug 2026</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>Online</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Event Card 3 */}
                <div className="rounded-xl border border-gray-200 text-gray-800 shadow-sm hover:shadow-md group flex h-full flex-col bg-white transition-all hover:-translate-y-1">
                  <div className="flex flex-col space-y-1.5 p-6 flex-1 pb-3">
                    <div className="mb-3 flex items-center gap-2">
                      <div className="inline-flex items-center border border-transparent bg-gray-100 text-gray-800 px-2.5 py-0.5 text-xs font-semibold rounded-full capitalize">
                        hackathon
                      </div>
                    </div>
                    <h3 className="font-display text-xl font-semibold tracking-tight text-black">
                      Mumbai Web3 Hackathon
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                      48-hour hackathon focused on blockchain, DeFi, and decentralized applications.
                    </p>
                  </div>
                  <div className="p-6 pt-0">
                    <div className="space-y-2 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>15 Sept 2026</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>T-Hub, Powai</span>
                      </div>
                    </div>
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
