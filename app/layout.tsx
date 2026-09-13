import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";

export const metadata: Metadata = {
  title: "Mumbai Tech Community — Hackathons, Meetups & Developer Events in Mumbai",
  description:
    "Join 3,200+ developers, founders & tech enthusiasts in Mumbai. Discover hackathons, AI workshops, startup meetups, internships and tech jobs. Mumbai's #1 tech community.",
  keywords: [
    "tech community Mumbai",
    "developer meetup Mumbai",
    "hackathon Mumbai 2026",
    "Mumbai tech events",
    "AI workshop Mumbai",
    "startup networking Mumbai",
    "software engineer jobs Mumbai",
  ],
  openGraph: {
    title: "Mumbai Tech Community — Learn, Build, Connect",
    description:
      "Mumbai's #1 platform for developers, founders & designers. Real events, real opportunities, real community.",
    url: "https://www.mumbaitechcommunity.in",
    siteName: "Mumbai Tech Community",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mumbai Tech Community",
    description: "Hackathons, meetups, jobs & developer events in Mumbai.",
    site: "@mumbaitechwc",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.mumbaitechcommunity.in",
  },
};

// JSON-LD Organization schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Mumbai Tech Community",
  url: "https://www.mumbaitechcommunity.in",
  logo: "https://www.mumbaitechcommunity.in/logo.png",
  description:
    "Mumbai's premier tech community for developers, founders, and designers.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressCountry: "IN",
  },
  sameAs: [
    "https://twitter.com/mumbaitechwc",
    "https://linkedin.com/company/mumbaitechwc",
    "https://github.com/mumbaitechwc",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="antialiased min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
        <Preloader />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
