export function DirectorsMessage() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">

        {/* Left - Image */}
        <div className="w-full h-[240px] sm:h-[300px] md:h-[420px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl">
          <img
            src="/about/Director.JPG"
            alt="Director"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Right - Text */}
        <div>
          <p className="text-amber-500 uppercase tracking-widest text-xs sm:text-sm mb-2 sm:mb-3">
            Director’s Message
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6">
            A Message from Our Director
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-3 sm:mb-4">
            At Royal Caterers, our vision has always been to create unforgettable dining
            experiences for every celebration. From intimate gatherings to grand weddings,
            our team is committed to delivering exceptional taste, service, and presentation.
          </p>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-5 sm:mb-6">
            We believe food is not just about flavour, but about emotions, memories, and
            togetherness. Thank you for trusting us with your special moments.
          </p>

          <p className="font-semibold text-base sm:text-lg">
            — Anil Mishra
          </p>
          <p className="text-xs sm:text-sm text-gray-500">
            Founder & Managing Director
          </p>
        </div>

      </div>
    </section>
  );
}