import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Events — Mumbai Tech Community",
  description: "Discover upcoming meetups, workshops, hackathons, and conferences in Mumbai's tech community.",
};

export default function EventsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50/50">
      <main className="flex-1">
        <div className="flex flex-col gap-12 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto w-full max-w-7xl">
            
            {/* Header */}
            <div className="animate-fade-up mb-10 max-w-2xl">
              <div className="inline-flex items-center border border-transparent bg-gray-200 text-gray-800 px-2.5 py-0.5 text-xs font-semibold transition-colors hover:bg-gray-300 mb-4 rounded-full">
                Events
              </div>
              <h1 className="font-display text-4xl font-bold tracking-tight text-black sm:text-5xl">
                Meetups, workshops, and hackathons
              </h1>
              <p className="mt-4 text-lg text-gray-500">
                Discover events that help you learn new skills, build projects, and meet people who share your interests.
              </p>
            </div>

            {/* Tabs & Grid */}
            <div className="w-full">
              {/* Tabs */}
              <div className="inline-flex h-10 items-center text-gray-500 mb-8 w-full max-w-full justify-start overflow-x-auto rounded-full bg-gray-100 p-1">
                <button className="inline-flex items-center justify-center whitespace-nowrap px-4 py-1.5 text-sm font-medium transition-all bg-white text-black shadow-sm rounded-full">
                  Upcoming
                </button>
                <button className="inline-flex items-center justify-center whitespace-nowrap px-4 py-1.5 text-sm font-medium transition-all hover:text-black rounded-full">
                  Past
                </button>
              </div>

              {/* Grid */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                
                {/* Event Card 1 */}
                <div className="animate-fade-up">
                  <div className="rounded-xl border border-gray-200 text-gray-800 shadow-sm hover:shadow-md group flex h-full flex-col bg-white transition-shadow">
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
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>Event ended</span>
                        </div>
                      </div>
                      <Link href="#" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors border border-gray-200 bg-white text-black hover:bg-gray-50 h-9 px-4 py-2 mt-5 w-full rounded-full shadow-sm">
                        View details
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Event Card 2 */}
                <div className="animate-fade-up delay-75">
                  <div className="rounded-xl border border-gray-200 text-gray-800 shadow-sm hover:shadow-md group flex h-full flex-col bg-white transition-shadow">
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
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>Event ended</span>
                        </div>
                      </div>
                      <Link href="#" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors border border-gray-200 bg-white text-black hover:bg-gray-50 h-9 px-4 py-2 mt-5 w-full rounded-full shadow-sm">
                        View details
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Event Card 3 */}
                <div className="animate-fade-up delay-150">
                  <div className="rounded-xl border border-gray-200 text-gray-800 shadow-sm hover:shadow-md group flex h-full flex-col bg-white transition-shadow">
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
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span className="text-black font-medium">Registration open</span>
                        </div>
                      </div>
                      <Link href="#" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors border border-transparent bg-black text-white hover:bg-black/90 h-9 px-4 py-2 mt-5 w-full rounded-full shadow-sm">
                        Register now
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Event Card 4 */}
                <div className="animate-fade-up delay-200">
                  <div className="rounded-xl border border-gray-200 text-gray-800 shadow-sm hover:shadow-md group flex h-full flex-col bg-white transition-shadow">
                    <div className="flex flex-col space-y-1.5 p-6 flex-1 pb-3">
                      <div className="mb-3 flex items-center gap-2">
                        <div className="inline-flex items-center border border-transparent bg-gray-100 text-gray-800 px-2.5 py-0.5 text-xs font-semibold rounded-full capitalize">
                          conference
                        </div>
                      </div>
                      <h3 className="font-display text-xl font-semibold tracking-tight text-black">
                        DevOps Day Mumbai
                      </h3>
                      <p className="mt-2 text-sm text-gray-500">
                        A full-day conference on SRE, platform engineering, and modern infrastructure.
                      </p>
                    </div>
                    <div className="p-6 pt-0">
                      <div className="space-y-2 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>28 Sept 2026</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>Godrej IT Park, Vikhroli</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span className="text-black font-medium">Registration open</span>
                        </div>
                      </div>
                      <Link href="#" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors border border-transparent bg-black text-white hover:bg-black/90 h-9 px-4 py-2 mt-5 w-full rounded-full shadow-sm">
                        Register now
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>

            {/* Banner Call to Action */}
            <div className="animate-fade-up mt-12 rounded-2xl bg-black px-6 py-8 text-white sm:px-8 sm:py-10 shadow-lg delay-300">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                  Want to host an event with us?
                </h2>
                <p className="mt-3 text-white/80">
                  We partner with organizers, companies, and spaces to run great tech events in Mumbai.
                </p>
                <Link href="/join" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors bg-white text-black hover:bg-gray-100 h-9 px-4 py-2 mt-6 rounded-full shadow-sm">
                  Get in touch
                </Link>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
