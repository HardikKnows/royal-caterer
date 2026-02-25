export default function ExperienceSection() {
  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-24">
      {/* 40% (images) – 60% (text) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-[40%_60%] gap-10 sm:gap-12 lg:gap-16 items-start">

        {/* ================== Photos Column (40%) ================== */}
        <div className="relative w-full flex justify-center lg:justify-end items-start">
          {/* Main Image */}
          <div className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[460px] h-[220px] sm:h-[260px] lg:h-[300px] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/experience/main.jpg"
              alt="Main event"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Small Image */}
          <div className="absolute top-3 sm:top-4 left-1/2 -translate-x-1/2 sm:left-6 sm:translate-x-0 w-[120px] sm:w-[140px] lg:w-[150px] h-[80px] sm:h-[90px] lg:h-[100px] rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/experience/detail.jpg"
              alt="Small detail"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 border-2 border-dotted border-white/70 rounded-2xl pointer-events-none" />
          </div>

          {/* Soft shadow plate */}
          <div className="absolute right-1/2 lg:right-0 top-6 sm:top-8 h-[180px] sm:h-[220px] lg:h-[260px] w-full max-w-[280px] sm:max-w-[360px] lg:max-w-[420px] rounded-3xl bg-black/5 blur-2xl -z-10 -translate-x-1/2 lg:translate-x-0" />
        </div>

        {/* ================== Text Column (60%) ================== */}
        <div className="w-full">
          <p className="text-amber-500 italic tracking-wide text-base sm:text-lg">
            Experience The Sublime!
          </p>

          <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-950 leading-tight">
            The Perfect Choice for Your Next Event.
          </h2>

          <p className="mt-4 sm:mt-6 text-slate-600 leading-relaxed text-sm sm:text-[17px]">
            <span className="float-left mr-2 sm:mr-3 text-4xl sm:text-6xl font-serif leading-none text-amber-500">
              R
            </span>
            oyal Caterer guarantees outstanding food presentation, creative cuisines,
            and a wide range of service styles. With years of experience serving luxury
            events, weddings, and corporate gatherings, we bring unmatched elegance to
            every celebration.
          </p>

          <p className="mt-3 sm:mt-4 text-slate-600 leading-relaxed text-sm sm:text-[17px]">
            What sets us apart is our attention to detail — from bespoke menus and live
            counters to impeccable service standards. Every dish is crafted to impress,
            and every event is executed with royal finesse.
          </p>

          <button className="mt-8 sm:mt-10 rounded-lg bg-blue-950 px-7 sm:px-10 py-3 sm:py-4 font-medium uppercase tracking-wider text-white hover:bg-blue-900 transition">
            Read More About Us
          </button>
        </div>
      </div>

      {/* Soft background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(242,201,125,0.12),transparent_40%)]" />
    </section>
  );
}