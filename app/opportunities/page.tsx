import { Briefcase, Trophy, Calendar, Users, CodeXml, Search, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Opportunities — Mumbai Tech Community",
  description: "Browse hackathons, internships, jobs, meetups, and open-source opportunities curated for Mumbai's tech community.",
};

export default function OpportunitiesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50/50">
      <main className="flex-1">
        <div className="flex flex-col gap-12 px-4 pt-28 pb-12 sm:px-6 sm:pt-32 sm:pb-16 lg:px-8">
          <div className="mx-auto w-full max-w-7xl">
            
            {/* Header Section */}
            <div className="animate-fade-up mb-10 max-w-2xl">
              <div className="inline-flex items-center border border-transparent bg-gray-200 text-gray-800 px-2.5 py-0.5 text-xs font-semibold transition-colors hover:bg-gray-300 mb-4 rounded-full">
                Opportunities
              </div>
              <h1 className="font-display text-4xl font-bold tracking-tight text-black sm:text-5xl">
                Hackathons, internships, and more
              </h1>
              <p className="mt-4 text-lg text-gray-500">
                A curated feed of opportunities for developers, designers, students, and founders in Mumbai.
              </p>
            </div>

            {/* Filters & Search */}
            <div className="animate-fade-up mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between delay-75">
              <div className="-mx-1 flex flex-wrap gap-2 px-1">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-transform hover:-translate-y-0.5 bg-black text-white hover:bg-black/90 h-8 px-3 text-xs rounded-full shadow-sm">
                  <Briefcase className="h-3.5 w-3.5" />
                  All
                </button>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-transform hover:-translate-y-0.5 border border-gray-200 bg-white text-black hover:bg-gray-50 h-8 px-3 text-xs rounded-full shadow-sm">
                  <Trophy className="h-3.5 w-3.5" />
                  Hackathons
                </button>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-transform hover:-translate-y-0.5 border border-gray-200 bg-white text-black hover:bg-gray-50 h-8 px-3 text-xs rounded-full shadow-sm">
                  <Calendar className="h-3.5 w-3.5" />
                  Internships
                </button>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-transform hover:-translate-y-0.5 border border-gray-200 bg-white text-black hover:bg-gray-50 h-8 px-3 text-xs rounded-full shadow-sm">
                  <Briefcase className="h-3.5 w-3.5" />
                  Jobs
                </button>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-transform hover:-translate-y-0.5 border border-gray-200 bg-white text-black hover:bg-gray-50 h-8 px-3 text-xs rounded-full shadow-sm">
                  <Users className="h-3.5 w-3.5" />
                  Meetups
                </button>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-transform hover:-translate-y-0.5 border border-gray-200 bg-white text-black hover:bg-gray-50 h-8 px-3 text-xs rounded-full shadow-sm">
                  <CodeXml className="h-3.5 w-3.5" />
                  Open Source
                </button>
              </div>
              <div className="relative w-full lg:w-80">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input 
                  className="flex h-9 w-full rounded-full border border-gray-300 bg-white px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black focus:border-transparent pl-9"
                  placeholder="Search opportunities..." 
                  type="text" 
                />
              </div>
            </div>

            {/* Opportunities Grid */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              
              {/* Opportunity Card 1 */}
              <div className="animate-fade-up">
                <div className="rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 group flex h-full flex-col">
                  <div className="flex flex-col space-y-1.5 p-6 flex-1 pb-3">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="inline-flex items-center border border-transparent bg-gray-100 text-gray-800 px-2.5 py-0.5 text-xs font-semibold rounded-full capitalize">
                        <Users className="mr-1 h-3 w-3" /> meetup
                      </div>
                      <span className="text-xs text-gray-500">Closed</span>
                    </div>
                    <h3 className="font-display text-xl font-semibold tracking-tight text-black">Product Manager Meetup</h3>
                    <p className="mt-1 text-sm font-medium text-gray-600">Product Folks Mumbai</p>
                    <p className="mt-2 text-sm text-gray-500">Networking evening for product managers, designers, and founders.</p>
                  </div>
                  <div className="p-6 pt-0">
                    <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">
                      <MapPin className="h-4 w-4" />
                      <span>Bandra</span>
                    </div>
                    <Link href="#" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors border border-gray-200 bg-white text-black hover:bg-gray-50 h-9 px-4 py-2 w-full rounded-full shadow-sm">
                      Apply now
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Opportunity Card 2 */}
              <div className="animate-fade-up delay-75">
                <div className="rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 group flex h-full flex-col">
                  <div className="flex flex-col space-y-1.5 p-6 flex-1 pb-3">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="inline-flex items-center border border-transparent bg-gray-100 text-gray-800 px-2.5 py-0.5 text-xs font-semibold rounded-full capitalize">
                        <Briefcase className="mr-1 h-3 w-3" /> job
                      </div>
                      <span className="text-xs text-gray-500">Closed</span>
                    </div>
                    <h3 className="font-display text-xl font-semibold tracking-tight text-black">Senior Frontend Engineer</h3>
                    <p className="mt-1 text-sm font-medium text-gray-600">Fintech Startup</p>
                    <p className="mt-2 text-sm text-gray-500">Join a high-growth fintech team building next-gen payments with React and TypeScript.</p>
                  </div>
                  <div className="p-6 pt-0">
                    <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">
                      <MapPin className="h-4 w-4" />
                      <span>Mumbai</span>
                    </div>
                    <Link href="#" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors border border-gray-200 bg-white text-black hover:bg-gray-50 h-9 px-4 py-2 w-full rounded-full shadow-sm">
                      Apply now
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Opportunity Card 3 */}
              <div className="animate-fade-up delay-150">
                <div className="rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 group flex h-full flex-col">
                  <div className="flex flex-col space-y-1.5 p-6 flex-1 pb-3">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="inline-flex items-center border border-transparent bg-gray-100 text-gray-800 px-2.5 py-0.5 text-xs font-semibold rounded-full capitalize">
                        <Calendar className="mr-1 h-3 w-3" /> internship
                      </div>
                      <span className="text-xs text-gray-500">Closed</span>
                    </div>
                    <h3 className="font-display text-xl font-semibold tracking-tight text-black">Summer Tech Internship Program</h3>
                    <p className="mt-1 text-sm font-medium text-gray-600">Mumbai Tech Community Partners</p>
                    <p className="mt-2 text-sm text-gray-500">6-month internship across engineering, design, and product roles at fast-growing startups.</p>
                  </div>
                  <div className="p-6 pt-0">
                    <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">
                      <MapPin className="h-4 w-4" />
                      <span>Mumbai / Hybrid</span>
                    </div>
                    <Link href="#" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors border border-gray-200 bg-white text-black hover:bg-gray-50 h-9 px-4 py-2 w-full rounded-full shadow-sm">
                      Apply now
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Opportunity Card 4 */}
              <div className="animate-fade-up delay-200">
                <div className="rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 group flex h-full flex-col">
                  <div className="flex flex-col space-y-1.5 p-6 flex-1 pb-3">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="inline-flex items-center border border-transparent bg-gray-100 text-gray-800 px-2.5 py-0.5 text-xs font-semibold rounded-full capitalize">
                        <Trophy className="mr-1 h-3 w-3" /> hackathon
                      </div>
                      <span className="text-xs text-gray-500">Closed</span>
                    </div>
                    <h3 className="font-display text-xl font-semibold tracking-tight text-black">Build for India Hackathon</h3>
                    <p className="mt-1 text-sm font-medium text-gray-600">Mumbai Tech x NGOs</p>
                    <p className="mt-2 text-sm text-gray-500">Build tools for local NGOs solving education, health, and sustainability challenges.</p>
                  </div>
                  <div className="p-6 pt-0">
                    <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">
                      <MapPin className="h-4 w-4" />
                      <span>T-Hub, Powai</span>
                    </div>
                    <Link href="#" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors border border-gray-200 bg-white text-black hover:bg-gray-50 h-9 px-4 py-2 w-full rounded-full shadow-sm">
                      Apply now
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Opportunity Card 5 */}
              <div className="animate-fade-up delay-300">
                <div className="rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 group flex h-full flex-col">
                  <div className="flex flex-col space-y-1.5 p-6 flex-1 pb-3">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="inline-flex items-center border border-transparent bg-gray-100 text-gray-800 px-2.5 py-0.5 text-xs font-semibold rounded-full capitalize">
                        <CodeXml className="mr-1 h-3 w-3" /> open-source
                      </div>
                      <span className="text-xs text-gray-500">30 Sept 2026</span>
                    </div>
                    <h3 className="font-display text-xl font-semibold tracking-tight text-black">Open Source Fellowship</h3>
                    <p className="mt-1 text-sm font-medium text-gray-600">Community OSS Initiative</p>
                    <p className="mt-2 text-sm text-gray-500">Mentored contributions to open-source projects with stipends and certificates.</p>
                  </div>
                  <div className="p-6 pt-0">
                    <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">
                      <MapPin className="h-4 w-4" />
                      <span>Remote</span>
                    </div>
                    <Link href="#" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors border border-gray-200 bg-white text-black hover:bg-gray-50 h-9 px-4 py-2 w-full rounded-full shadow-sm">
                      Apply now
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Opportunity Card 6 */}
              <div className="animate-fade-up delay-500">
                <div className="rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 group flex h-full flex-col">
                  <div className="flex flex-col space-y-1.5 p-6 flex-1 pb-3">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="inline-flex items-center border border-transparent bg-gray-100 text-gray-800 px-2.5 py-0.5 text-xs font-semibold rounded-full capitalize">
                        <Calendar className="mr-1 h-3 w-3" /> internship
                      </div>
                      <span className="text-xs text-gray-500">5 Oct 2026</span>
                    </div>
                    <h3 className="font-display text-xl font-semibold tracking-tight text-black">AI Research Residency</h3>
                    <p className="mt-1 text-sm font-medium text-gray-600">Mumbai AI Lab</p>
                    <p className="mt-2 text-sm text-gray-500">Research residency in generative AI and applied machine learning.</p>
                  </div>
                  <div className="p-6 pt-0">
                    <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">
                      <MapPin className="h-4 w-4" />
                      <span>Powai</span>
                    </div>
                    <Link href="#" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors border border-gray-200 bg-white text-black hover:bg-gray-50 h-9 px-4 py-2 w-full rounded-full shadow-sm">
                      Apply now
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Call to Action */}
            <div className="animate-fade-up delay-700 mt-12 rounded-2xl border border-transparent bg-black px-6 py-8 sm:px-8 sm:py-10 shadow-lg">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Have an opportunity to share?
                </h2>
                <p className="mt-3 text-white/80">
                  Post hackathons, internships, jobs, and events that would help the community grow.
                </p>
                <Link href="/join" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors border border-transparent bg-white text-black hover:bg-gray-100 h-9 px-4 py-2 mt-6 rounded-full shadow-sm">
                  Submit an opportunity
                </Link>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
