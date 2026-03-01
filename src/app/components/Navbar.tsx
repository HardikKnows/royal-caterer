"use client";
import { useState } from "react";
import Link from "next/link";

type NavbarProps = {
  onPlanEvent: () => void;
};

export default function Navbar({ onPlanEvent }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white/80 backdrop-blur-md border-b border-gray-100 fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        
        {/* Brand / Logo */}
        <Link
          href="/"
          className="font-semibold text-lg sm:text-xl tracking-wide text-black hover:text-yellow-500 transition"        >
          Royal Tourism & Caterer
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="#services">Services</Link>
          <Link href="#menu">Menu</Link>
          <Link href="/clients">Our clients</Link>
          <Link href="/events">Events</Link>

          <button
            onClick={onPlanEvent}
            className="px-4 py-2 text-sm rounded-full border border-gray-300 hover:bg-gray-50"
          >
            Plan Your Event
          </button>

          <Link
            href="/events"
            className="px-5 py-2.5 text-sm rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 font-semibold text-black"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200"
        >
          <span className="sr-only">Toggle menu</span>
          <div className="space-y-1.5">
            <span className="block w-5 h-0.5 bg-black"></span>
            <span className="block w-5 h-0.5 bg-black"></span>
            <span className="block w-5 h-0.5 bg-black"></span>
          </div>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 px-6 py-4 space-y-4">
          <Link href="#services" onClick={() => setOpen(false)} className="block">
            Services
          </Link>
          <Link href="#menu" onClick={() => setOpen(false)} className="block">
            Menu
          </Link>
          <Link href="/clients" onClick={() => setOpen(false)} className="block">
            Our clients
          </Link>
          <Link href="/events" onClick={() => setOpen(false)} className="block">
            Events
          </Link>

          <button
            onClick={() => {
              setOpen(false);
              onPlanEvent();
            }}
            className="w-full px-4 py-2 text-sm rounded-full border border-gray-300 hover:bg-gray-50"
          >
            Plan Your Event
          </button>

          <Link
            href="/events"
            onClick={() => setOpen(false)}
            className="block text-center px-5 py-2.5 text-sm rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 font-semibold text-black"
          >
            Book Now
          </Link>
        </div>
      )}
    </nav>
  );
}