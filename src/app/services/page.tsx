"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const slides = [
  {
    title: "Corporate Catering",
    subtitle: "CORPORATE EVENTS",
    desc: "Tailored menus for boardroom lunches, product launches, conferences and offsites.",
    image: "/services/corporate.jpg",
  },
  {
    title: "Weddings",
    subtitle: "CELEBRATE IN STYLE",
    desc: "Bespoke wedding menus, live counters, and royal presentation for grand celebrations.",
    image: "/services/wedding.jpg",
  },
  {
    title: "Private Parties",
    subtitle: "INTIMATE CELEBRATIONS",
    desc: "House parties, anniversaries, and intimate gatherings with premium catering.",
    image: "/services/pri.jpg",
  },
  {
    title: "Birthday Celebrations",
    subtitle: "PERSONALISED PARTIES",
    desc: "Thoughtfully curated menus and warm hospitality for memorable birthday celebrations of all ages.",
    image: "/services/birthday.jpg",
  },
  {
    title: "Mehendi Ceremonies",
    subtitle: "WEDDING FESTIVITIES",
    desc: "Vibrant menus and seamless service for joyful mehendi functions and pre-wedding celebrations.",
    image: "/services/mehendi.jpg",
  },
];

export default function Services() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    defaultAnimation: {
      duration: 900,
      easing: (t) => 1 - Math.pow(1 - t, 3),
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    slides: {
      perView: 1.05,
      spacing: 14,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 1.5, spacing: 18 },
      },
      "(min-width: 768px)": {
        slides: { perView: 2.1, spacing: 22 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 26 },
      },
    },
  });

  return (
    <section id="services" className="bg-white py-12 sm:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <p className="text-amber-500 tracking-wide text-sm sm:text-base">
            Experience unparalleled catering excellence.
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-950">
            Our Signature Services
          </h2>
          <div className="mx-auto mt-3 sm:mt-4 h-px w-16 sm:w-20 bg-amber-400" />
        </div>

        {/* Carousel */}
        <div ref={sliderRef} className="keen-slider">
          {slides.map((s) => (
            <div key={s.title} className="keen-slider__slide">
              <div className="group relative h-[280px] sm:h-[320px] md:h-[360px] [perspective:1200px]">
                <div className="relative h-full w-full rounded-2xl transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  
                  {/* Front */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden [backface-visibility:hidden]">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/35" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6">
                      <h3 className="text-lg sm:text-2xl font-semibold">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/80">
                        {s.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Back */}
                  <div className="absolute inset-0 rounded-2xl bg-[#0B1C2D] text-white p-5 sm:p-8 flex flex-col items-center justify-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <h3 className="text-lg sm:text-2xl font-semibold text-amber-400">
                      {s.title}
                    </h3>
                    <p className="mt-3 max-w-xs text-xs sm:text-sm text-blue-100 leading-relaxed">
                      {s.desc}
                    </p>
                    <Link
                      href="/events"
                      className="mt-4 sm:mt-5 inline-flex items-center justify-center rounded-full border border-amber-400 px-4 sm:px-5 py-2 text-xs sm:text-sm text-amber-400 hover:bg-amber-400 hover:text-[#0B1C2D] transition"
                    >
                      Enquire →
                    </Link>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows (hide on mobile) */}
        <button
          onClick={() => instanceRef.current?.prev()}
          className="hidden sm:flex absolute -left-3 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/90 p-3 shadow hover:bg-white"
        >
          ◀
        </button>
        <button
          onClick={() => instanceRef.current?.next()}
          className="hidden sm:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/90 p-3 shadow hover:bg-white"
        >
          ▶
        </button>

        {/* Dots */}
        <div className="mt-5 sm:mt-6 flex justify-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                currentSlide === idx ? "bg-amber-400" : "bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}