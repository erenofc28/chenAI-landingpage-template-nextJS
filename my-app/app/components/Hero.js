// import { Button } from "@/components/ui/button";

export default function Hero({title,content,imgSrc}) {
  return (
    <section className="w-full bg-white">
      <div className="flex flex-col lg:flex-row items-stretch min-h-[calc(100vh-72px)]">
        {/* Left Column - Content */}
        <div className="flex-1 flex flex-col justify-center items-end px-6 md:px-12 lg:px-20 lg:pr-20 py-12 lg:py-0">
          <div className="w-full max-w-[560px]">
            <div className="flex flex-col gap-6 mb-8 pt-13">
              {/* Headline */}
              <h1 className="text-4xl md:text-6xl lg:text-[60px] font-bold leading-[120%] text-black">
                {title}
              </h1>

              {/* Description */}
              <p className="text-base md:text-lg text-black leading-[150%]">
     {content}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-start gap-4">
              <button className="px-6 py-3 rounded-lg bg-blue-500 text-white text-base font-normal leading-[150%] hover:bg-brand-blue/90">
                Button
              </button>
              <button
                variant="outline"
                className="px-6 py-3 rounded-lg border border-black text-black text-base font-normal leading-[150%] hover:bg-gray-50"
              >
                Button
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="flex-1 bg-[#D3D3D3] flex items-center justify-center min-h-[400px] lg:min-h-full">
{imgSrc}
        </div>
      </div>
    </section>
  );
}