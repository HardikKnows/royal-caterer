import Link from "next/link";

export function OurClientsPreview() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">

        <p className="text-amber-500 uppercase tracking-widest text-xs sm:text-sm mb-2">
          Our Esteemed Clients
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6">
          Trusted by Leading Government & Institutions
        </h2>

        <p className="max-w-3xl mx-auto text-gray-600 text-sm sm:text-base mb-8 sm:mb-12">
          We have proudly served prestigious government departments, PSUs, and institutions across India.
          Our long-standing partnerships reflect our commitment to quality, hygiene, and excellence.
        </p>

        {/* Highlight few names */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12 text-gray-700 font-medium text-sm sm:text-base">
          <div>Election Commission of India</div>
          <div>Delhi Legislative Assembly</div>
          <div>AIIMS Rishikesh</div>
          <div>Ministry of IT, Govt. of India</div>
        </div>

        <Link
          href="/clients"
          className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base text-white font-medium hover:bg-amber-600 transition"
        >
          View All Our Clients →
        </Link>
      </div>
    </section>
  );
}