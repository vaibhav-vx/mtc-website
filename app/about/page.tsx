import { Users, CalendarDays, Globe2, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "About Us — Mumbai Tech Community",
  description: "We are building Mumbai's thriving tech ecosystem. Learn about our mission, team, and story.",
};

const TEAM = [
  {
    name: "Satyam Pandey",
    role: "Founder & Community Lead",
    image: "bg-blue-100 text-blue-600",
    initials: "SP"
  },
  {
    name: "Suraj Sah",
    role: "Head of Events",
    image: "bg-purple-100 text-purple-600",
    initials: "SS"
  },
  {
    name: "Vaibhav Dubey",
    role: "Developer Relations",
    image: "bg-orange-100 text-orange-600",
    initials: "VD"
  },
];

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FAFAFA] overflow-hidden">
      <main className="flex-1">
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 lg:pb-32 px-4 sm:px-6 lg:px-8">
          {/* Decorative Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-400/20 blur-[120px]"></div>
            <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] rounded-full bg-purple-400/20 blur-[120px]"></div>
          </div>
          
          <div className="mx-auto max-w-[1000px] relative animate-fade-up text-center">
            <div className="inline-flex items-center border border-gray-200 bg-white/50 backdrop-blur-sm text-gray-800 px-3 py-1 text-sm font-semibold transition-colors hover:bg-white/80 mb-6 rounded-full shadow-sm">
              Our Story
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
              Building Mumbai's <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">tech ecosystem.</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg sm:text-xl text-gray-500 font-medium leading-relaxed">
              We are a collective of developers, designers, founders, and creators working together to put Mumbai on the global tech map.
            </p>
          </div>
        </section>

        {/* Mission & Stats Section */}
        <section className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="mx-auto max-w-[1000px]">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* The Mission */}
              <div className="animate-fade-up delay-75">
                <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-6">
                  Why we started MTC
                </h2>
                <div className="space-y-5 text-lg text-gray-600 leading-relaxed">
                  <p>
                    Mumbai has always been the financial capital, but the tech scene was fragmented. Builders were working in silos, struggling to find like-minded peers, co-founders, or local mentorship.
                  </p>
                  <p>
                    We started the <strong className="text-gray-900 font-semibold">Mumbai Tech Community</strong> to change that. We believe that density and serendipity are the key ingredients for innovation. By hosting regular meetups, hackathons, and bringing people together, we're building the infrastructure for Mumbai's next generation of startups.
                  </p>
                </div>
              </div>

              {/* Stats Glass Card */}
              <div className="animate-fade-up delay-150 relative">
                {/* Decorative blob behind card */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-200 to-purple-200 blur-2xl opacity-60 rounded-3xl transform rotate-3 scale-105"></div>
                
                <div className="relative rounded-3xl bg-white/70 backdrop-blur-xl border border-white shadow-xl p-8 sm:p-10">
                  <div className="grid gap-8 sm:grid-cols-2">
                    
                    <div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 mb-4">
                        <Users className="h-6 w-6" />
                      </div>
                      <h3 className="text-4xl font-bold text-gray-900 mb-1">3,200+</h3>
                      <p className="text-sm font-medium text-gray-500">Active Members</p>
                    </div>

                    <div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 text-purple-600 mb-4">
                        <CalendarDays className="h-6 w-6" />
                      </div>
                      <h3 className="text-4xl font-bold text-gray-900 mb-1">50+</h3>
                      <p className="text-sm font-medium text-gray-500">Events Hosted</p>
                    </div>

                    <div className="sm:col-span-2">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-600 mb-4">
                        <Globe2 className="h-6 w-6" />
                      </div>
                      <h3 className="text-4xl font-bold text-gray-900 mb-1">12</h3>
                      <p className="text-sm font-medium text-gray-500">Partner Communities & Spaces</p>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-white py-24 border-t border-gray-100 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1000px]">
            <div className="text-center mb-16 animate-fade-up delay-200">
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-4">
                Core Contributors
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                The volunteers and community builders who keep the lights on and the events running smoothly.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {TEAM.map((member, i) => (
                <div key={member.name} className={`flex flex-col items-center animate-fade-up text-center group`} style={{ animationDelay: `${250 + (i * 50)}ms` }}>
                  <div className={`w-28 h-28 rounded-full mb-4 flex items-center justify-center text-3xl font-bold border-4 border-white shadow-md transition-transform group-hover:-translate-y-1 ${member.image}`}>
                    {member.initials}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                  <p className="text-sm font-medium text-gray-500 mt-1">{member.role}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center animate-fade-up delay-500">
               <p className="text-gray-500 mb-6 font-medium">...and dozens of incredible volunteers.</p>
               <Link href="/join" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-all bg-gray-100 text-gray-900 hover:bg-gray-200 h-10 px-6 rounded-full shadow-sm hover:-translate-y-0.5">
                  Join the volunteer team
               </Link>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="px-4 sm:px-6 lg:px-8 py-24">
          <div className="mx-auto max-w-[1000px]">
            <div className="animate-fade-up rounded-3xl bg-black px-6 py-12 text-white sm:px-12 sm:py-16 shadow-2xl relative overflow-hidden">
              {/* Ambient Glow */}
              <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-gradient-to-l from-blue-600/20 to-transparent blur-3xl"></div>
              
              <div className="relative z-10 max-w-2xl">
                <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                  Ready to shape the future of Mumbai?
                </h2>
                <p className="text-lg text-white/80 mb-8 max-w-xl">
                  Whether you want to attend our next meetup, share an opportunity, or partner with us, we'd love to have you onboard.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/join" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-semibold transition-all bg-white text-black hover:bg-gray-100 h-12 px-8 rounded-full shadow-lg hover:-translate-y-0.5">
                    Join the Community <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                  <Link href="/events" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-semibold transition-all bg-white/10 text-white hover:bg-white/20 h-12 px-8 rounded-full border border-white/20 hover:-translate-y-0.5">
                    Browse Events
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
