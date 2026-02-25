"use client";
import { useEffect, useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1400&q=80",
];

export default function Hero({ onPlanEvent }: { onPlanEvent: () => void }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        {images.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={img}
              alt="Bhalswa Golf Course Restaurant"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}
      </div>

      {/* Certification Badge */}
      <div className="absolute top-16 right-4 sm:right-6 z-20">
        <img
          src="/badges/certifications.png"
          alt="ISO & FSSAI Certifications"
          className="h-14 sm:h-20 md:h-32 w-auto rounded-xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[100svh] items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <span className="inline-block mb-3 sm:mb-4 rounded-full bg-yellow-500/20 px-3 sm:px-4 py-1 text-xs sm:text-sm text-yellow-400">
            Inside Bhalswa Golf Course
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight text-white max-w-3xl">
            An Elevated Dining Experience at{" "}
            <span className="text-yellow-400">Bhalswa Golf Course</span>
          </h1>

          <p className="mt-4 sm:mt-5 max-w-2xl text-base sm:text-lg text-zinc-200">
            Thoughtfully crafted menus, serene views, and warm hospitality.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button
              onClick={onPlanEvent}
              className="rounded-full bg-yellow-500 px-7 sm:px-8 py-3 font-semibold text-black hover:bg-yellow-400 transition"
            >
              Plan Your Event
            </button>

            <a
              href="/menu"
              className="rounded-full border border-white/30 px-7 sm:px-8 py-3 font-semibold text-white hover:bg-white/10 transition text-center"
            >
              View Menu
            </a>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full transition ${
              i === index ? "bg-yellow-400" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}