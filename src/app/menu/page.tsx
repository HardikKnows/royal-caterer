import Link from "next/link";

export default function MenuSection() {
  return (
    <section id="menu" className="relative py-16 sm:py-20 lg:py-24 bg-[#0B1C2D] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <p className="text-amber-400 tracking-widest uppercase text-xs sm:text-sm mb-2">
            Royal Caterer Menu Selector
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            Explore Our Menus
          </h2>
        </div>

        {/* Menu Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">

          {/* Card 1 - North Indian */}
          <div className="group relative h-[260px] sm:h-[300px] lg:h-[340px] rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('/menus/north-indian.jpg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition" />

            <div className="relative z-10 h-full flex flex-col justify-end p-5 sm:p-6 lg:p-8">
              <p className="text-amber-400 italic mb-1 text-xs sm:text-sm">
                Starters & Main Course
              </p>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">
                North Indian Menu
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-200">
                Dal Makhani, Paneer Lababdar, Veg Kebabs, Paneer Tikka & Sea Foods
              </p>

              <Link
                href="/menu/north-indian"
                className="mt-3 sm:mt-4 w-fit rounded-full border border-amber-400 px-5 sm:px-6 py-2 text-xs sm:text-sm text-amber-400 hover:bg-amber-400 hover:text-[#0B1C2D] transition"
              >
                Explore Menu →
              </Link>
            </div>
          </div>

          {/* Card 2 - South Indian */}
          <div className="group relative h-[260px] sm:h-[300px] lg:h-[340px] rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('/menus/south-indian.jpg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition" />

            <div className="relative z-10 h-full flex flex-col justify-end p-5 sm:p-6 lg:p-8">
              <p className="text-amber-400 italic mb-1 text-xs sm:text-sm">
                Authentic South Flavours
              </p>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">
                South Indian Menu
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-200">
                Dosas, Idlis, Uttapams, Sambhar & Traditional Accompaniments
              </p>

              <Link
                href="/menu/south-indian"
                className="mt-3 sm:mt-4 w-fit rounded-full border border-amber-400 px-5 sm:px-6 py-2 text-xs sm:text-sm text-amber-400 hover:bg-amber-400 hover:text-[#0B1C2D] transition"
              >
                Explore Menu →
              </Link>
            </div>
          </div>

          {/* Card 3 - Catering Packages */}
          <div className="group relative h-[260px] sm:h-[300px] lg:h-[340px] rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('/menus/catering.jpg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition" />

            <div className="relative z-10 h-full flex flex-col justify-end p-5 sm:p-6 lg:p-8">
              <p className="text-amber-400 italic mb-1 text-xs sm:text-sm">
                Veg & Non-Veg Packages
              </p>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">
                Catering Menus
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-200">
                Premium per-plate menus starting from ₹1200 for events & celebrations
              </p>

              <Link
                href="/menu/catering"
                className="mt-3 sm:mt-4 w-fit rounded-full border border-amber-400 px-5 sm:px-6 py-2 text-xs sm:text-sm text-amber-400 hover:bg-amber-400 hover:text-[#0B1C2D] transition"
              >
                View Packages →
              </Link>
            </div>
          </div>

          {/* Card 4 - Bar */}
          <div className="group relative h-[260px] sm:h-[300px] lg:h-[340px] rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('/menus/bar.jpg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition" />

            <div className="relative z-10 h-full flex flex-col justify-end p-5 sm:p-6 lg:p-8">
              <p className="text-amber-400 italic mb-1 text-xs sm:text-sm">
                Cocktails & Mocktails
              </p>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">
                Bar & Beverages
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-200">
                Signature cocktails, premium spirits & refreshing mocktails
              </p>

              <Link
                href="/menu/bar"
                className="mt-3 sm:mt-4 w-fit rounded-full border border-amber-400 px-5 sm:px-6 py-2 text-xs sm:text-sm text-amber-400 hover:bg-amber-400 hover:text-[#0B1C2D] transition"
              >
                View Bar Menu →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}