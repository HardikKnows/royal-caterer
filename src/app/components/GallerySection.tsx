"use client";
import { useState } from "react";
import Link from "next/link";

const images = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
  "/gallery/6.jpg",
  "/gallery/7.jpg",
  "/gallery/8.jpg",
  "/gallery/9.jpg",
  "/gallery/10.jpg",
  "/gallery/11.jpg",
  "/gallery/12.jpg",
  "/gallery/13.jpg",
];

export default function GallerySection() {
  const [active, setActive] = useState<string | null>(null);
  const previewImages = images.slice(0, 8);

  return (
    <section id="gallery" className="bg-slate-50 py-14 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-8 sm:mb-10 text-center">
          <span className="text-amber-500 text-xs sm:text-sm font-semibold uppercase tracking-wider">
            Gallery
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
            Moments from Our Events
          </h2>
          <p className="mt-2 sm:mt-3 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            A glimpse into the experiences we create at Bhalswa Golf Course.
          </p>
        </div>

        {/* Grid - only 8 images */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
          {previewImages.map((src, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-sm cursor-pointer"
              onClick={() => setActive(src)}
            >
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                className="h-28 sm:h-36 md:h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-8 sm:mt-10 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-slate-800 hover:bg-slate-900 hover:text-white transition"
          >
            View All Photos →
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-[80] bg-black/80 flex items-center justify-center p-3 sm:p-4"
          onClick={() => setActive(null)}
        >
          <img
            src={active}
            alt="Expanded"
            className="max-h-[85vh] sm:max-h-[90vh] max-w-[90vw] rounded-lg sm:rounded-xl shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}