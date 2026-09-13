"use client";

import { useEffect, useState } from "react";
import { getCountdown, formatDate } from "@/lib/utils";
import { NEXT_EVENT } from "@/lib/data";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";

type Countdown = { days: number; hours: number; minutes: number; seconds: number };

export default function CountdownBanner() {
  const [time, setTime] = useState<Countdown | null>(null);

  useEffect(() => {
    // Only run on client to avoid hydration mismatch
    setTime(getCountdown(NEXT_EVENT.date));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getCountdown(NEXT_EVENT.date));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mx-4 md:mx-8 rounded-2xl overflow-hidden bg-gray-50 border border-gray-200">
      <div className="px-6 md:px-10 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        {/* Event info */}
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full text-black bg-gray-200 border border-gray-300">
            Next Event
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-black mb-2">
            {NEXT_EVENT.title}
          </h3>
          <div className="flex flex-wrap gap-4 text-sm text-gray-500 font-medium">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} className="text-gray-400" />
              {formatDate(NEXT_EVENT.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={14} className="text-gray-400" />
              {NEXT_EVENT.venue}
            </span>
            <span className="flex items-center gap-1.5">
              <Users size={14} className="text-gray-400" />
              {NEXT_EVENT.rsvpCount} / {NEXT_EVENT.capacity} RSVPs
            </span>
          </div>
        </div>

        {/* Countdown */}
        <div className="flex items-center gap-4">
          {[
            { val: time?.days, label: "Days" },
            { val: time?.hours, label: "Hrs" },
            { val: time?.minutes, label: "Min" },
            { val: time?.seconds, label: "Sec" },
          ].map((unit, i) => (
            <div key={i} className="text-center">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl font-bold text-black bg-white border border-gray-200 shadow-sm">
                {time == null ? "--" : String(unit.val).padStart(2, "0")}
              </div>
              <div className="text-xs mt-1 text-gray-500 font-medium">{unit.label}</div>
            </div>
          ))}

          <a
            href={`/events/${NEXT_EVENT.slug}`}
            className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white ml-2 transition-all hover:scale-105 bg-black hover:bg-gray-900 shadow-lg"
          >
            RSVP <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
