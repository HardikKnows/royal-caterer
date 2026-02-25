"use client";

import { useState } from "react";

type Item = { name: string; price: string; desc?: string };

const MENU = [
  {
    title: "South Indian Appetizers",
    items: [
      { name: "Rice Idli (2 Pcs)", price: "₹165" },
      { name: "Rava Idli (2 Pcs)", price: "₹200" },
      { name: "Vada (2 Pcs)", price: "₹195" },
      { name: "Dahi Vada", price: "₹205" },
      { name: "Ghee Idli", price: "₹195" },
      { name: "Rasam with Papad", price: "₹115" },
    ],
  },
  {
    title: "Classic Dosas",
    items: [
      { name: "Plain Dosa", price: "₹195" },
      { name: "Masala Dosa", price: "₹215" },
      { name: "Butter Plain Dosa", price: "₹225" },
      { name: "Butter Masala Dosa", price: "₹235" },
      { name: "Mysore Plain Dosa", price: "₹225" },
      { name: "Mysore Masala Dosa", price: "₹240" },
      { name: "Onion Masala Dosa", price: "₹235" },
      { name: "Ghee Roast Masala Dosa", price: "₹245" },
    ],
  },
  {
    title: "Special Dosas",
    items: [
      { name: "Rava Onion Plain Dosa", price: "₹230" },
      { name: "Rava Masala Dosa", price: "₹245" },
      { name: "Rava Coconut Masala Dosa", price: "₹250" },
      { name: "Angai Dosa", price: "₹205" },
    ],
  },
  {
    title: "Uttapams",
    items: [
      { name: "Plain Uttapam", price: "₹210" },
      { name: "Onion Uttapam", price: "₹230" },
      { name: "Coconut Uttapam", price: "₹240" },
      { name: "Tomato Onion Chilli Uttapam", price: "₹240" },
    ],
  },
  {
    title: "Curd Rice & Bowls",
    items: [
      { name: "Classic Curd Rice", price: "₹201" },
      { name: "Curd Rice with Pomegranate", price: "₹221" },
      { name: "Beetroot Curd Rice", price: "₹202" },
      { name: "Sambar Rice", price: "₹211" },
      { name: "Lemon Rice", price: "₹201" },
      { name: "Tamarind Rice", price: "₹241" },
      { name: "Tomato Rice", price: "₹221" },
    ],
  },
  {
    title: "Bangalore Style Biryani",
    items: [
      { name: "Paneer Ghee Roast Biryani", price: "₹322" },
      { name: "Pepper Paneer Biryani", price: "₹322" },
      { name: "Chettinad Paneer Biryani", price: "₹322" },
    ],
  },
  {
    title: "Beverages & Mocktails",
    items: [
      { name: "Masala Tea", price: "₹35" },
      { name: "Green Tea", price: "₹40" },
      { name: "Cold Coffee", price: "₹165" },
      { name: "Virgin Mojito", price: "₹150" },
      { name: "Blue Lagoon", price: "₹150" },
      { name: "Virgin Pina Colada", price: "₹189" },
    ],
  },
];

export default function SouthIndianMenuPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <div className="relative h-[40vh] w-full">
        <img
          src="/menu/south-indian.jpg"
          alt="South Indian cuisine"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-amber-500 uppercase tracking-widest text-sm mb-2">
              Dock Menu
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold text-white">
              South Indian Menu
            </h1>
            <p className="mt-3 max-w-2xl text-white/90">
              Authentic South Indian favourites served fresh at our dock outlet.
            </p>

            {/* PDF CTA */}
            <div className="mt-6">
              <a
                href="/menus/south-indian.docx"
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
                        className="flex flex-col sm:flex-row sm:justify-between py-3 text-gray-700"
                      >
                        <span className="font-medium">{item.name}</span>
                        <span className="sm:ml-4">{item.price}</span>
                       
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