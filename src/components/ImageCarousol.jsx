"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback } from "react";

const slides = [
  {
    id: 1,
    img: "/image23.png",
    tag: "",
    heading: "We Make Every Trips Special",
    btnLabel: "View More",
    btnColor: "bg-yellow-400 text-gray-900 hover:bg-yellow-300",
    customeCSS: "text-white font-bold text-xl leading-snug mt-10 pl-26",
    btnCss:
      "mt-4 flex items-center gap-2 text-sm font-semibold ml-26 px-4 py-2 rounded-full w-fit transition-colors",
  },
  {
    id: 2,
    img: "/image21.png",
    tag: "Limited Offers",
    heading: "Buy 1, Get 1 Free Attractions",
    btnLabel: "View More",
    btnColor: "bg-[#0640C3] text-white hover:bg-[#0535a8]",
    customeCSS: "text-black font-bold text-xl leading-snug mt-1 pr-5",
    btnCss:
      "mt-4 flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full w-fit transition-colors",
  },
  {
    id: 3,
    img: "/image22.png",
    tag: "Limited Offers",
    heading: "Buy 1, Get 1 Free Attractions",
    btnLabel: "View More",
    btnColor: "bg-yellow-400 text-gray-900 hover:bg-yellow-300",
    customeCSS:
      "font-bold text-xl leading-snug mt-1 pr-5 bg-white text-black p-3 rounded rounded-xl mr-5",
    btnCss:
      "mt-4 flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full w-fit transition-colors",
  },
];

const ImageCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: "trimSnaps",
  });

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );

  return (
    <div className="relative flex items-center gap-2 sm:gap-4 max-w-6xl mx-auto mt-16 px-6 md:px-12 lg:px-4 ">
      {/* Left arrow */}
      <button
        onClick={scrollPrev}
        aria-label="Previous"
        className="hidden sm:flex w-10 h-10 rounded-full border border-gray-200 bg-gray-200 items-center justify-center hover:bg-gray-50 transition"
      >
        <Image src="/SVG.png" alt="arrow" width={18} height={18} />
      </button>

      {/* Embla viewport */}
      <div className="overflow-hidden w-full" ref={emblaRef}>
        <div className="flex gap-4">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="
                        relative shrink-0 rounded-3xl overflow-hidden
                        
                        w-[75%]      
                        sm:w-[60%]  
                        md:w-[48%]     
                        lg:w-[32%]  
                      "
            >
              {/* Image */}
              <img
                src={slide.img}
                alt={slide.heading}
                className="w-full h-auto object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6">
                <div>
                  <span className="text-black text-xs font-medium tracking-wide">
                    {slide.tag}
                  </span>

                  <h2 className={`${slide.customeCSS} mt-2`}>
                    {slide.heading}
                  </h2>
                </div>

                <button className={`${slide.btnCss} ${slide.btnColor}`}>
                  {slide.btnLabel}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M3 7h8M8 4l3 3-3 3"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right arrow */}
      <button
        onClick={scrollNext}
        aria-label="Next"
        className="hidden sm:flex w-10 h-10 rounded-full border border-gray-200 bg-gray-200 items-center justify-center hover:bg-gray-50 transition"
      >
        <Image src="/Vector (2).png" alt="arrow" width={12} height={12} />
      </button>
    </div>
  );
};

export default ImageCarousel;
