export default function Stats() {
  return (
    <section className="w-full bg-white py-16 md:py-28 px-4 md:px-16">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12 md:gap-20">

        {/* Content Header */}
        <div className="flex flex-col lg:flex-row gap-10 md:gap-20">

          {/* Left Column - Heading */}
          <div className="flex-1 flex flex-col gap-6 text-center lg:text-left">
            <h2 className="text-black font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-[120%]">
              Long heading is what you see here in this feature section
            </h2>
          </div>

          {/* Right Column - Description */}
          <div className="flex-1 flex flex-col gap-6 text-center lg:text-left">
            <p className="text-black text-base sm:text-lg leading-[150%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              varius enim in eros elementum tristique. Duis cursus, mi quis viverra
              ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
              Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
              quis viverra ornare, eros dolor interdum nulla.
            </p>
          </div>
        </div>

        {/* Stats Row */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-12">

          {/* Stat 1 */}
          <div className="flex-1 flex flex-col gap-3 text-center md:text-left md:pl-8 md:border-l border-black">
            <div className="text-black font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[80px] leading-[130%]">
              30%
            </div>
            <div className="text-black font-bold text-lg md:text-xl leading-[140%]">
              Short heading goes here
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex-1 flex flex-col gap-3 text-center md:text-left md:pl-8 md:border-l border-black">
            <div className="text-black font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[80px] leading-[130%]">
              30%
            </div>
            <div className="text-black font-bold text-lg md:text-xl leading-[140%]">
              Short heading goes here
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex-1 flex flex-col gap-3 text-center md:text-left md:pl-8 md:border-l border-black">
            <div className="text-black font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[80px] leading-[130%]">
              30%
            </div>
            <div className="text-black font-bold text-lg md:text-xl leading-[140%]">
              Short heading goes here
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
