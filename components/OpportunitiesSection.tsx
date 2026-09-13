"use client";

import { useState } from "react";
import { OPPORTUNITIES } from "@/lib/data";
import { MapPin, Clock, ArrowUpRight } from "lucide-react";

const TYPE_COLORS = {
  job: { bg: "bg-gray-100", text: "text-gray-700", label: "Job" },
  internship: { bg: "bg-gray-200", text: "text-gray-800", label: "Internship" },
};

export default function OpportunitiesSection() {
  const [filter, setFilter] = useState<"all" | "job" | "internship">("all");

  const filtered =
    filter === "all" ? OPPORTUNITIES : OPPORTUNITIES.filter((o) => o.type === filter);

  return (
    <section id="opportunities" className="py-24 px-6 reveal bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest mb-3 text-gray-500">
              Opportunities Board
            </div>
            <h2 className="text-4xl md:text-5xl font-display text-black">
              MUMBAI-FIRST <br />
              <span className="text-gray-400">JOBS & INTERNSHIPS</span>
            </h2>
            <p className="mt-3 text-sm max-w-xl text-gray-600 font-medium">
              Curated listings from Mumbai's top startups and tech companies — posted by community partners.
            </p>
          </div>

          <div className="flex gap-2">
            {(["all", "job", "internship"] as const).map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 capitalize border ${
                  filter === type
                    ? "bg-black text-white border-black"
                    : "bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                {type === "all" ? "All" : type === "job" ? "Jobs" : "Internships"}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((opp) => {
            const colors = TYPE_COLORS[opp.type];
            return (
              <a
                key={opp.id}
                href={opp.applyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:border-gray-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full ${colors.bg} ${colors.text} border border-gray-200`}
                  >
                    {colors.label}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-gray-400 group-hover:text-black"
                  />
                </div>

                <h4 className="text-xl font-bold text-black mb-1 group-hover:text-gray-600 transition-colors">
                  {opp.title}
                </h4>
                <div className="text-sm font-bold mb-4 text-gray-500 uppercase tracking-wide">
                  {opp.company}
                </div>

                <div className="flex flex-wrap gap-4 text-xs mb-5 text-gray-500 font-medium">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-gray-400" /> {opp.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} className="text-gray-400" /> Deadline: {new Date(opp.deadline).toLocaleDateString("en-IN", { day: "numeric", month: "short" })}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {opp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded font-medium bg-gray-50 border border-gray-100 text-gray-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
