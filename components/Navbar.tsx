// components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "/discover", label: "Discover" },
  { href: "/events", label: "Events" },
  { href: "/opportunities", label: "Opportunities" },
  { href: "/#community", label: "Community" },
  { href: "/#partners", label: "Partners" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";
  const applyScrolledStyle = isHome ? scrolled : true;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        applyScrolledStyle ? "bg-white/80 backdrop-blur-md border-b border-gray-200" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 transition-transform hover:scale-105">
          <img src="/official_logo.jpeg" alt="Mumbai Tech Community" className="w-10 h-10 rounded-full object-cover ring-2 ring-gray-200" />
          <span className={`font-bold text-lg leading-none tracking-tight hidden sm:block transition-colors ${applyScrolledStyle ? 'text-black' : 'text-white'}`}>
            Mumbai <span className={`font-medium transition-colors ${applyScrolledStyle ? 'text-gray-500' : 'text-white/80'}`}>Tech</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className={`text-sm font-medium transition-colors ${applyScrolledStyle ? 'text-gray-500 hover:text-black' : 'text-white/80 hover:text-white'}`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/events"
            className="press-scale inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-black shadow-sm transition-all hover:bg-gray-50 hover:-translate-y-0.5"
          >
            Browse events
          </Link>
          <Link
            href="/join"
            className="press-scale inline-flex items-center justify-center rounded-full bg-black px-4 py-2 text-sm font-medium text-white shadow transition-all hover:bg-black/90 hover:-translate-y-0.5"
          >
            Join community
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 transition-colors ${applyScrolledStyle ? 'text-gray-500 hover:text-black' : 'text-white/80 hover:text-white'}`}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 p-6 flex flex-col gap-4 shadow-xl">
          {LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-lg font-bold text-gray-600 hover:text-black"
            >
              {l.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-100">
            <Link
              href="/join"
              className="py-3 rounded-xl font-bold text-center bg-black text-white"
              onClick={() => setOpen(false)}
            >
              Join community
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
