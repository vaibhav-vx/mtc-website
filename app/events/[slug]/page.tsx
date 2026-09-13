import { EVENTS } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import { notFound } from "next/navigation";
import { Calendar, MapPin, Users, ArrowLeft, Tag } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return EVENTS.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = EVENTS.find((e) => e.slug === slug);
  if (!event) return {};
  return {
    title: `${event.title} — Mumbai Tech Community`,
    description: event.description,
    openGraph: {
      title: event.title,
      description: event.description,
      url: `https://www.mumbaitechcommunity.in/events/${event.slug}`,
    },
  };
}

export default async function EventPage({ params }: Props) {
  const { slug } = await params;
  const event = EVENTS.find((e) => e.slug === slug);
  if (!event) notFound();

  const fillPct = (event.rsvpCount / event.capacity) * 100;

  // Event JSON-LD — the SEO moat
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    description: event.description,
    startDate: event.date,
    location: {
      "@type": "Place",
      name: event.venue,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mumbai",
        addressCountry: "IN",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "Mumbai Tech Community",
      url: "https://www.mumbaitechcommunity.in",
    },
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    url: `https://www.mumbaitechcommunity.in/events/${event.slug}`,
    maximumAttendeeCapacity: event.capacity,
    remainingAttendeeCapacity: event.capacity - event.rsvpCount,
    keywords: event.tags.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />

      <div className="min-h-screen pt-24 px-6 pb-24 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Back */}
          <Link
            href="/#events"
            className="inline-flex items-center gap-2 text-sm mb-8 font-bold text-gray-500 hover:text-black transition-colors"
          >
            <ArrowLeft size={16} /> Back to Events
          </Link>

          {/* Header */}
          <div className="mb-10">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider bg-gray-100 text-gray-700 border border-gray-200">
                {event.type}
              </span>
              {event.featured && (
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-black text-white">
                  ⭐ Featured
                </span>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl font-display text-black mb-6 leading-none">
              {event.title}
            </h1>

            <div className="flex flex-wrap gap-6 text-sm mb-8 text-gray-600 font-medium">
              <span className="flex items-center gap-2">
                <Calendar size={16} className="text-gray-400" />
                {formatDate(event.date)}
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={16} className="text-gray-400" />
                {event.venue}
              </span>
              <span className="flex items-center gap-2">
                <Users size={16} className="text-gray-400" />
                {event.rsvpCount} / {event.capacity} going
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {event.tags.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1.5 text-xs px-3 py-1 rounded bg-gray-50 border border-gray-100 text-gray-500 font-medium"
                >
                  <Tag size={12} /> {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Main content + sidebar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Description */}
            <div className="md:col-span-2">
              <div className="rounded-2xl p-8 mb-6 bg-white border border-gray-200 shadow-sm">
                <h2 className="text-xl font-bold text-black mb-4">About this event</h2>
                <p className="text-base leading-relaxed text-gray-600 font-medium">
                  {event.description}
                </p>
              </div>
            </div>

            {/* RSVP Card */}
            <div>
              <div className="rounded-2xl p-8 sticky top-28 bg-gray-50 border border-gray-200 shadow-sm">
                <h3 className="font-bold text-black text-lg mb-6">Reserve Your Spot</h3>

                {/* Capacity */}
                <div className="mb-6">
                  <div className="flex justify-between text-xs mb-2 text-gray-500 font-bold uppercase tracking-wider">
                    <span>{event.rsvpCount} going</span>
                    <span>{event.capacity - event.rsvpCount} left</span>
                  </div>
                  <div className="h-2 rounded-full overflow-hidden bg-gray-200">
                    <div
                      className={`h-full rounded-full transition-all ${fillPct > 80 ? 'bg-red-500' : 'bg-black'}`}
                      style={{ width: `${fillPct}%` }}
                    />
                  </div>
                </div>

                <button className="w-full py-4 rounded-xl font-bold text-white text-sm transition-all hover:scale-105 mb-4 bg-black hover:bg-gray-900 shadow-lg">
                  RSVP — It's Free
                </button>

                <p className="text-xs text-center text-gray-500 font-medium">
                  You'll receive a confirmation email
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
