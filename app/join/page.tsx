import { Mail, Users, Sparkles, Send } from "lucide-react";
import Link from "next/link";

export default function JoinPage() {
  return (
    <div className="flex flex-col gap-12 px-4 pt-28 pb-12 sm:px-6 sm:pt-32 sm:pb-16 lg:px-8 bg-gray-50/50 min-h-screen">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
          
          {/* Left Column - Information */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center border border-transparent bg-gray-200 text-gray-800 px-2.5 py-0.5 text-xs font-semibold transition-colors hover:bg-gray-300 mb-4 rounded-full">
              Join
            </div>
            <h1 className="font-display text-4xl font-bold tracking-tight text-black sm:text-5xl">
              Become a member
            </h1>
            <p className="mt-4 text-lg text-gray-500">
              Join Mumbai Tech Community to get weekly updates on events, opportunities, and stories from the community.
            </p>

            <div className="mt-8 grid gap-4 lg:mt-10">
              {/* Feature 1 */}
              <div className="rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-black/5 text-black">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-black">Weekly digest</h3>
                    <p className="text-sm text-gray-500">
                      Handpicked events, opportunities, and community updates delivered to your inbox.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow delay-75">
                <div className="flex items-start gap-4 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-black/5 text-black">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-black">Member network</h3>
                    <p className="text-sm text-gray-500">
                      Connect with 10,000+ developers, designers, students, and founders in Mumbai.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow delay-150">
                <div className="flex items-start gap-4 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-black/5 text-black">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-black">Early access</h3>
                    <p className="text-sm text-gray-500">
                      Be the first to know about hackathons, internships, and exclusive community events.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="rounded-xl border border-gray-200 bg-white shadow-lg animate-fade-up delay-150">
            <div className="flex flex-col space-y-1.5 p-6 pb-4 border-b border-gray-100">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-black">
                Join the community
              </h2>
              <p className="text-sm text-gray-500">
                Fill out the form below and we'll be in touch.
              </p>
            </div>
            
            <div className="p-6">
              <form className="space-y-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none text-black" htmlFor="name">
                    Full name
                  </label>
                  <input
                    className="flex h-10 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                    id="name"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none text-black" htmlFor="email">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="flex h-10 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                    id="email"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none text-black" htmlFor="interest">
                    What are you looking for?
                  </label>
                  <input
                    className="flex h-10 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                    id="interest"
                    placeholder="e.g. Hackathons, internships, networking"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none text-black" htmlFor="message">
                    Message (optional)
                  </label>
                  <textarea
                    className="flex min-h-[80px] w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-colors resize-y"
                    id="message"
                    placeholder="Tell us a bit about yourself..."
                    rows={4}
                  />
                </div>
                
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-black/90 h-10 px-4 py-2 w-full rounded-full shadow-md hover:-translate-y-0.5 press-scale"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Join the community
                </button>
                
                <p className="text-center text-xs text-gray-500 mt-4">
                  No spam. Unsubscribe at any time.
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
