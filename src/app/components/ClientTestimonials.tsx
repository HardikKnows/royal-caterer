export function ClientTestimonials() {
  return (
    <section className="bg-[#0B1C2D] text-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <p className="text-amber-400 tracking-widest uppercase text-xs sm:text-sm mb-2">
            What Our Clients Say
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            Trusted by Our Clients
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">

          {/* Testimonial 1 */}
          <div className="bg-white/5 backdrop-blur rounded-2xl p-5 sm:p-6 lg:p-8 border border-white/10">
            <p className="text-zinc-200 mb-4 sm:mb-6 text-sm sm:text-base">
              “Many thanks to Royal Tourism and Caterer Pvt. Ltd. for their wonderful catering
              service. They customized as per the occasion and needs. Every person at the event
              commented on the magnificence of the arrangements. I sincerely appreciate your time
              and effort!”
            </p>
            <div className="mt-3 sm:mt-4">
              <p className="font-semibold">Mr. Puneet Kansal</p>
              <p className="text-xs sm:text-sm text-zinc-400">IAS, JS I&B</p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white/5 backdrop-blur rounded-2xl p-5 sm:p-6 lg:p-8 border border-white/10">
            <p className="text-zinc-200 mb-4 sm:mb-6 text-sm sm:text-base">
              “We’ve always had really wonderful experiences when using Royal’s services for catering,
              but this time they really outdid themselves! Everything went wonderful at the wedding.
              We loved Royal Tourism and Caterer. Outstanding! I will definitely recommend your
              catering services to others and I look forward to working with you again.”
            </p>
            <div className="mt-3 sm:mt-4">
              <p className="font-semibold">Mr. Deo Mani</p>
              <p className="text-xs sm:text-sm text-zinc-400">GM – RLDA</p>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white/5 backdrop-blur rounded-2xl p-5 sm:p-6 lg:p-8 border border-white/10">
            <p className="text-zinc-200 mb-4 sm:mb-6 text-sm sm:text-base">
              “Excellent food quality and professional service. The entire team was well-coordinated
              and ensured our corporate event went smoothly.”
            </p>
            <div className="mt-3 sm:mt-4">
              <p className="font-semibold">Corporate Client</p>
              <p className="text-xs sm:text-sm text-zinc-400">Delhi NCR</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}