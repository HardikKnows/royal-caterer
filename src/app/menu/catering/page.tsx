"use client";

import { useState } from "react";

type Item = { name: string };

const VEG_MENU = [
  {
    title: "Soups (Choose 1)",
    items: ["Tomato Soup", "Sweet Corn Soup", "Hot & Sour Veg Soup"],
  },
  {
    title: "Salads (Choose 3)",
    items: ["Green Salad", "Russian Salad", "Pasta Salad", "Sprout Salad"],
  },
  {
    title: "Veg Starters (Choose 4)",
    items: [
      "Paneer Tikka",
      "Veg Seekh Kebab",
      "Hara Bhara Kebab",
      "Soya Chaap Tikka",
      "Veg Spring Rolls",
    ],
  },
  {
    title: "Veg Main Course (Choose 4)",
    items: [
      "Paneer Butter Masala",
      "Paneer Lababdar",
      "Mix Veg",
      "Dal Makhani",
      "Kadhai Paneer",
    ],
  },
  {
    title: "Rice, Dal, Breads & Desserts",
    items: [
      "Jeera Rice / Veg Biryani",
      "Dal Tadka",
      "Butter Naan / Laccha Paratha",
      "Gulab Jamun / Ice Cream",
    ],
  },
];

const NON_VEG_MENU = [
  {
    title: "Soups (Choose 2)",
    items: ["Chicken Clear Soup", "Sweet Corn Chicken Soup"],
  },
  {
    title: "Salads (Choose 4)",
    items: ["Green Salad", "Russian Salad", "Pasta Salad", "Sprout Salad"],
  },
  {
    title: "Starters (Veg + Non-Veg)",
    items: [
      "Paneer Tikka",
      "Chicken Tikka",
      "Fish Amritsari",
      "Mutton Seekh Kebab",
      "Hara Bhara Kebab",
    ],
  },
  {
    title: "Main Course (Veg + Non-Veg)",
    items: [
      "Paneer Butter Masala",
      "Dal Makhani",
      "Butter Chicken",
      "Fish Curry",
      "Mutton Rogan Josh",
    ],
  },
  {
    title: "Rice, Dal, Breads & Desserts",
    items: [
      "Jeera Rice / Chicken Biryani",
      "Dal Tadka",
      "Butter Naan / Laccha Paratha",
      "Gulab Jamun / Ice Cream",
    ],
  },
];

export default function CateringPage() {
  const [activeTab, setActiveTab] = useState<"veg" | "nonveg">("veg");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const data = activeTab === "veg" ? VEG_MENU : NON_VEG_MENU;

  return (
    <section className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <div className="relative h-[40vh] w-full">
        <img
          src="/menu/catering.jpg"
          alt="Catering service"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-amber-500 uppercase tracking-widest text-sm mb-2">
              Catering Services
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold text-white">
              Banquet Packages
            </h1>
            <p className="mt-3 max-w-2xl text-white/90">
              Choose from our carefully curated veg and non-veg per-plate catering menus.
            </p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-4xl mx-auto px-6 pt-12">
        <div className="flex rounded-full border border-gray-200 overflow-hidden w-fit mx-auto">
          <button
            onClick={() => {
              setActiveTab("veg");
              setOpenIndex(0);
            }}
            className={`px-6 py-3 text-sm font-semibold transition ${
              activeTab === "veg"
                ? "bg-amber-500 text-black"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            🟢 ₹1200 Veg Menu
          </button>
          <button
            onClick={() => {
              setActiveTab("nonveg");
              setOpenIndex(0);
            }}
            className={`px-6 py-3 text-sm font-semibold transition ${
              activeTab === "nonveg"
                ? "bg-amber-500 text-black"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            🔴 ₹1500 Non-Veg Menu
          </button>
        </div>

        <p className="mt-4 text-center text-sm text-gray-500">
          {activeTab === "veg"
            ? "Pure Vegetarian menu – no non-veg items included."
            : "Includes both vegetarian and non-vegetarian dishes."}
        </p>
      </div>

      {/* Accordion */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {data.map((section, idx) => {
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
                      <li key={item} className="py-3 text-gray-700">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* PDF CTA */}
      <div className="pb-20 text-center">
        {activeTab === "veg" ? (
          <a
            href="/menus/veg-1200.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-8 py-3 text-sm font-semibold text-black hover:bg-amber-400 transition shadow-md"
          >
            Download ₹1200 Veg Menu (PDF)
          </a>
        ) : (
          <a
            href="/menus/nonveg-1500.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-8 py-3 text-sm font-semibold text-black hover:bg-amber-400 transition shadow-md"
          >
            Download ₹1500 Non-Veg Menu (PDF)
          </a>
        )}
      </div>
    </section>
  );
}