"use client";

import { useState } from "react";

type Item = { name: string; price: string };

const MENU = [
  {
    title: "Veg Starters",
    items: [
      { name: "Paneer Hariyali Tikka", price: "₹249" },
      { name: "Paneer Tikka Achari", price: "₹249" },
      { name: "Paneer Tikka Afghani", price: "₹249" },
      { name: "Veg Seekh Kebab", price: "₹229" },
      { name: "Dahi Ke Kabab", price: "₹220" },
      { name: "Hara Bhara Kebab", price: "₹225" },
      { name: "Afghani Soya Chaap Tikka", price: "₹225" },
    ],
  },
  {
    title: "Non-Veg Starters",
    items: [
      { name: "Tandoori Chicken (Chef’s Special)", price: "₹450" },
      { name: "Malai Chicken Tikka", price: "₹310" },
      { name: "Chicken Seekh Kebab", price: "₹310" },
      { name: "Fish Tikka", price: "₹469" },
      { name: "Jalpari Amritsari", price: "₹425" },
    ],
  },
  {
    title: "Veg Main Course",
    items: [
      { name: "Dal Makhani (Chef’s Special)", price: "₹195" },
      { name: "Paneer Butter Masala", price: "₹225" },
      { name: "Paneer Lababdar", price: "₹225" },
      { name: "Kadhai Paneer", price: "₹185" },
      { name: "Subz Jalfrezi", price: "₹195" },
    ],
  },
  {
    title: "Non-Veg Main Course",
    items: [
      { name: "Butter Chicken", price: "₹399" },
      { name: "Chicken Korma", price: "₹399" },
      { name: "Kadhai Chicken", price: "₹399" },
      { name: "Mutton Rogan Josh", price: "₹475" },
      { name: "Laal Maas", price: "₹465" },
    ],
  },
  {
    title: "Indian Breads",
    items: [
      { name: "Butter Naan", price: "₹49" },
      { name: "Garlic Naan", price: "₹79" },
      { name: "Laccha Paratha", price: "₹45" },
      { name: "Paneer Stuffed Kulcha", price: "₹99" },
    ],
  },
  {
    title: "Rice & Biryani",
    items: [
      { name: "Veg Biryani", price: "₹215" },
      { name: "Chicken Biryani", price: "₹399" },
      { name: "Hyderabadi Gosht Biryani", price: "₹499" },
      { name: "Jeera Rice", price: "₹99" },
    ],
  },
];

export default function NorthIndianMenuPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <div className="relative h-[40vh] w-full">
        <img
          src="/menu/north-indian.jpg"
          alt="North Indian cuisine"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-amber-500 uppercase tracking-widest text-sm mb-2">
              Starters & Main Course
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold text-white">
              North Indian Menu
            </h1>
            <p className="mt-3 max-w-2xl text-white/90">
              Explore our curated North Indian selections with authentic flavours and premium ingredients.
            </p>
            <div className="mt-6">
              <a
                href="/menus/north-indian.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-black hover:bg-amber-400 transition shadow-md"
              >
                Download Full Menu (PDF)
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Accordion */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {MENU.map((section, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={section.title}
              className="mb-4 rounded-xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-lg hover:bg-gray-50 transition"
              >
                <span>{section.title}</span>
                <span className="text-amber-500 text-xl">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {isOpen && (
                <div className="px-6 pb-4">
                  <ul className="divide-y">
                    {section.items.map((item) => (
                      <li
                        key={item.name}
                        className="flex justify-between py-3 text-gray-700"
                      >
                        <span>{item.name}</span>
                        <span className="font-medium">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}