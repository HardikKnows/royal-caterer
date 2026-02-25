"use client";

import { useState } from "react";

type Item = { name: string; price: string };

const BAR_MENU = [
  {
    title: "Beer",
    items: [
      { name: "Budweiser Magnum Pint (330 ml)", price: "₹164" },
      { name: "Budweiser Pint (330 ml)", price: "₹148" },
      { name: "Budweiser Can (500 ml)", price: "₹222" },
      { name: "Corona", price: "₹272" },
      { name: "Erdinger Dunkel (330 ml)", price: "₹297" },
      { name: "Medusa Strong", price: "₹182" },
    ],
  },
  {
    title: "Indian / IMFL Whisky (30 ml)",
    items: [
      { name: "Royal Challenge American Pride", price: "₹65" },
      { name: "Antiquity Blue Ultra Classic", price: "₹66" },
      { name: "Black & White", price: "₹122" },
      { name: "Teacher’s Highland Cream", price: "₹122" },
      { name: "Johnnie Walker Red Label", price: "₹105" },
      { name: "Johnnie Walker Black Label", price: "₹210" },
    ],
  },
  {
    title: "Single Malt Whisky",
    items: [
      { name: "Glenmorangie 10 Years", price: "₹227" },
      { name: "The Glenfiddich 12 Years", price: "₹274" },
      { name: "Talisker Storm Single Malt", price: "₹414" },
      { name: "Jura 10 Years", price: "₹317" },
      { name: "Laphroaig Islay 10 Years", price: "₹250" },
    ],
  },
  {
    title: "Gin (30 ml)",
    items: [
      { name: "Hapusha Gin", price: "₹245" },
      { name: "Jaisalmer Gin", price: "₹284" },
      { name: "Bombay Sapphire", price: "₹117" },
      { name: "Tanqueray London Dry", price: "₹111" },
      { name: "Roku (700 ml)", price: "₹286" },
    ],
  },
  {
    title: "Vodka",
    items: [
      { name: "Smirnoff Vodka", price: "₹54" },
      { name: "Grey Goose Vodka", price: "₹225" },
      { name: "Smoke Lab Vodka", price: "₹126" },
      { name: "Haku Vodka", price: "₹274" },
    ],
  },
  {
    title: "Rum / Tequila / Liqueur (30 ml)",
    items: [
      { name: "Old Monk (Rum)", price: "₹30" },
      { name: "Bacardi Carta Blanca", price: "₹56" },
      { name: "Patron Silver Tequila", price: "₹334" },
      { name: "Triple Sec", price: "₹86" },
      { name: "Antica Sambuca (50 ml)", price: "₹330" },
    ],
  },
  {
    title: "Wine",
    items: [
      { name: "Fratelli Cabernet Sauvignon Red (750 ml)", price: "₹1702" },
      { name: "Sula Chenin Blanc White (750 ml)", price: "₹1604" },
      { name: "Wine Celebration Chardonnay (750 ml)", price: "₹1325" },
      { name: "Sula Brut Sparkling Wine (750 ml)", price: "₹2486" },
      { name: "Four Cousins Sweet Red Wine (750 ml)", price: "₹1683" },
    ],
  },
];

export default function BarMenuPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <div className="relative h-[40vh] w-full">
      <img
  src="/menus/barB.jpg"
  alt="Bar & Beverages"
  className="absolute inset-0 h-full w-full object-cover"
  style={{ objectPosition: "center 80%" }}
/>
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-amber-500 uppercase tracking-widest text-sm mb-2">
              Cocktails, Spirits & Wines
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold text-white">
              Bar Menu
            </h1>
            <p className="mt-3 max-w-2xl text-white/90">
              Explore our curated selection of beers, whiskies, spirits and wines.
            </p>

            <div className="mt-6">
              <a
                href="/menus/bar.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-black hover:bg-amber-400 transition shadow-md"
              >
                Download Full Bar Menu (PDF)
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Accordion */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {BAR_MENU.map((section, idx) => {
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