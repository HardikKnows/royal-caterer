"use client";

import { FaInstagram, FaFacebookF, FaUtensils } from "react-icons/fa";

export default function FloatingSocials() {
  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col gap-3">

      {/* Instagram */}
      <a
        href="https://www.instagram.com/royaltourismandcaterer"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center 
        rounded-full bg-linear-to-tr from-pink-500 via-red-500 to-yellow-500 
        text-white shadow-lg hover:scale-110 transition duration-300"
      >
        <FaInstagram size={18} />
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/royalcaterer.in"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center 
        rounded-full bg-blue-600 text-white shadow-lg 
        hover:scale-110 transition duration-300"
      >
        <FaFacebookF size={18} />
      </a>

      {/* Zomato (Using Utensils Icon) */}
      <a
        href="http://zoma.to/r/22456441"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center 
        rounded-full bg-red-500 text-white shadow-lg 
        hover:scale-110 transition duration-300"
      >
        <FaUtensils size={18} />
      </a>

    </div>
  );
}