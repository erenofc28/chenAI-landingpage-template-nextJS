import { ChevronRight } from "lucide-react";

export default function FeaturesWhite() {
  return (
    <section className="w-full bg-white py-20 md:py-28 px-4 md:px-16">
      <div className="max-w-[1280px] mx-auto flex flex-col items-start gap-12 md:gap-20">
        {/* Section Title */}
        <div className="max-w-[768px] w-full flex flex-col items-start gap-4">
          {/* Tagline */}
          <div className="flex items-center">
            <p className="text-black font-semibold text-base leading-[150%]">
              Tagline
            </p>
          </div>

          {/* Content */}
          <div className="flex flex-col items-start gap-6 w-full">
            <h2 className="text-black font-bold text-3xl md:text-5xl leading-[120%]">
              Medium length section heading goes here
            </h2>
            <p className="text-black text-lg leading-[150%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              varius enim in eros elementum tristique. Duis cursus, mi quis viverra
              ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
            </p>
          </div>
        </div>

        {/* Three Column Row */}
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12 w-full">
          {/* Column 1 */}
          <div className="flex flex-col items-start gap-6 flex-1">
            {/* Icon */}
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M41.46 14.24L41.18 13.74C40.8188 13.1354 40.3094 12.6329 39.7 12.28L26.28 4.54C25.6724 4.1875 24.9826 4.00124 24.28 4H23.7C22.9974 4.00124 22.3076 4.1875 21.7 4.54L8.28 12.3C7.67394 12.6505 7.17052 13.1539 6.82 13.76L6.54 14.26C6.1875 14.8677 6.00124 15.5575 6 16.26V31.76C6.00124 32.4626 6.1875 33.1524 6.54 33.76L6.82 34.26C7.17958 34.859 7.68098 35.3604 8.28 35.72L21.72 43.46C22.3246 43.8198 23.0164 44.0066 23.72 44H24.28C24.9826 43.9988 25.6724 43.8126 26.28 43.46L39.7 35.7C40.312 35.3574 40.8174 34.852 41.16 34.24L41.46 33.74C41.8082 33.1306 41.9942 32.442 42 31.74V16.24C41.9988 15.5375 41.8126 14.8477 41.46 14.24ZM23.7 8H24.28L36 14.76L24 21.68L12 14.76L23.7 8ZM26 39L37.7 32.24L38 31.74V18.22L26 25.16V39Z"
                fill="black"
              />
            </svg>

            <h3 className="text-black font-bold text-2xl md:text-[32px] leading-[130%]">
              Medium length section heading goes here
            </h3>
            <p className="text-black text-base leading-[150%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              varius enim in eros elementum tristique. Duis cursus, mi quis viverra
              ornare, eros dolor interdum nulla.
            </p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col items-start gap-6 flex-1">
            {/* Icon */}
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M41.46 14.24L41.18 13.74C40.8188 13.1354 40.3094 12.6329 39.7 12.28L26.28 4.54C25.6724 4.1875 24.9826 4.00124 24.28 4H23.7C22.9974 4.00124 22.3076 4.1875 21.7 4.54L8.28 12.3C7.67394 12.6505 7.17052 13.1539 6.82 13.76L6.54 14.26C6.1875 14.8677 6.00124 15.5575 6 16.26V31.76C6.00124 32.4626 6.1875 33.1524 6.54 33.76L6.82 34.26C7.17958 34.859 7.68098 35.3604 8.28 35.72L21.72 43.46C22.3246 43.8198 23.0164 44.0066 23.72 44H24.28C24.9826 43.9988 25.6724 43.8126 26.28 43.46L39.7 35.7C40.312 35.3574 40.8174 34.852 41.16 34.24L41.46 33.74C41.8082 33.1306 41.9942 32.442 42 31.74V16.24C41.9988 15.5375 41.8126 14.8477 41.46 14.24ZM23.7 8H24.28L36 14.76L24 21.68L12 14.76L23.7 8ZM26 39L37.7 32.24L38 31.74V18.22L26 25.16V39Z"
                fill="black"
              />
            </svg>

            <h3 className="text-black font-bold text-2xl md:text-[32px] leading-[130%]">
              Medium length section heading goes here
            </h3>
            <p className="text-black text-base leading-[150%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              varius enim in eros elementum tristique. Duis cursus, mi quis viverra
              ornare, eros dolor interdum nulla.
            </p>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col items-start gap-6 flex-1">
            {/* Icon */}
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M41.46 14.24L41.18 13.74C40.8188 13.1354 40.3094 12.6329 39.7 12.28L26.28 4.54C25.6724 4.1875 24.9826 4.00124 24.28 4H23.7C22.9974 4.00124 22.3076 4.1875 21.7 4.54L8.28 12.3C7.67394 12.6505 7.17052 13.1539 6.82 13.76L6.54 14.26C6.1875 14.8677 6.00124 15.5575 6 16.26V31.76C6.00124 32.4626 6.1875 33.1524 6.54 33.76L6.82 34.26C7.17958 34.859 7.68098 35.3604 8.28 35.72L21.72 43.46C22.3246 43.8198 23.0164 44.0066 23.72 44H24.28C24.9826 43.9988 25.6724 43.8126 26.28 43.46L39.7 35.7C40.312 35.3574 40.8174 34.852 41.16 34.24L41.46 33.74C41.8082 33.1306 41.9942 32.442 42 31.74V16.24C41.9988 15.5375 41.8126 14.8477 41.46 14.24ZM23.7 8H24.28L36 14.76L24 21.68L12 14.76L23.7 8ZM26 39L37.7 32.24L38 31.74V18.22L26 25.16V39Z"
                fill="black"
              />
            </svg>

            <h3 className="text-black font-bold text-2xl md:text-[32px] leading-[130%]">
              Medium length section heading goes here
            </h3>
            <p className="text-black text-base leading-[150%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              varius enim in eros elementum tristique. Duis cursus, mi quis viverra
              ornare, eros dolor interdum nulla.
            </p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap items-center gap-6">
          <button
            variant="outline"
            className="px-6 py-3 rounded-lg border border-black text-black hover:bg-gray-50"
          >
            button
          </button>
          <button className="flex items-center gap-2 text-black text-base font-normal leading-[150%] hover:opacity-70 transition-opacity">
            button
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}