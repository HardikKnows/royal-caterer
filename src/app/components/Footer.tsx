// components/Footer.tsx
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { SiZomato } from "react-icons/si";
import Link from "next/link";

export default function Footer({ onPlanEvent }: { onPlanEvent: () => void }) {
  return (
    <footer className="border-t bg-zinc-950 text-zinc-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12 lg:py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
        {/* Brand */}
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-white">Royal Caterer</h3>
          <p className="mt-2 sm:mt-3 text-sm text-zinc-400">
            Premium catering and bar services for corporate events, private parties,
            and celebrations inside the greens.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-white mb-2 sm:mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#menu" className="hover:text-white">Menu</a></li>
            <li><a href="/events" className="hover:text-white">Book Event</a></li>
            <li><a href="#gallery" className="hover:text-white">Gallery</a></li>
          </ul>
        </div>

        {/* Contact + Map */}
        <div>
          <h4 className="font-semibold text-white mb-2 sm:mb-3">Contact</h4>
          
<ul className="space-y-1.5 sm:space-y-2 text-sm mb-3 sm:mb-4">

<li>
  <a
    href="tel:+919818867732"
    className="hover:text-yellow-400 transition"
  >
    📞 +91 9818867732
  </a>
</li>

<li>
  <a
    href="tel:+919818513368"
    className="hover:text-yellow-400 transition"
  >
    📞 +91 9818513368
  </a>
</li>

<li>
  <a
    href="mailto:royaltcpl@gmail.com"
    className="hover:text-yellow-400 transition"
  >
    📧 royaltcpl@gmail.com
  </a>
</li>
            <div className="mt-4">
  <div className="flex gap-4">
    <a
      href="https://www.instagram.com/royaltourismandcaterer"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-pink-500 transition"
    >
      <FaInstagram size={30} />
    </a>

    <a
      href="https://www.facebook.com/royalcaterer.in"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-blue-600 transition"
    >
      <FaFacebookF size={30} />
    </a>

    <a
      href="http://zoma.to/r/22456441"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-red-500 transition"
    >
      <SiZomato size={40} />
    </a>
  </div>
</div>
            <li>📍 Inside Bhalswa Golf Course, Delhi</li>
          </ul>

          {/* Google Map */}
          <div className="w-full h-28 sm:h-32 md:h-36 rounded-lg overflow-hidden border border-white/10">
            <iframe
              src="https://www.google.com/maps?q=Bhalswa%20Golf%20Course%20Delhi&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* CTA */}
        <div>
          <h4 className="font-semibold text-white mb-2 sm:mb-3">Get a Quote</h4>
          <p className="text-sm text-zinc-400">
            Planning an event? Get a custom catering quote today.
          </p>
          <button
            onClick={onPlanEvent}
            className="mt-3 sm:mt-4 inline-block rounded-lg bg-amber-500 px-5 py-2.5 text-sm sm:text-base font-semibold text-black hover:bg-amber-400 transition"
          >
            Request Quote
          </button>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-3 sm:py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-zinc-500 text-center sm:text-left">
          <span>
            © {new Date().getFullYear()} Royal Caterer. All rights reserved.
          </span>

          <Link
            href="/admin"
            className="text-zinc-500 hover:text-zinc-300 transition"
          >
            Admin Login
          </Link>
        </div>
      </div>
    </footer>
  );
}