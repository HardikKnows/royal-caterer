"use client";

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

export default function GalleryPage() {
  return (
    <div className="bg-white min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-8 sm:mb-10 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
            Our Gallery
          </h1>
          <p className="mt-2 sm:mt-3 text-slate-600 text-sm sm:text-base">
            Explore moments from our events, venues, and celebrations.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          {images.map((src, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl sm:rounded-2xl shadow-sm"
            >
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                className="h-32 sm:h-40 md:h-48 w-full object-cover transition-transform hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}