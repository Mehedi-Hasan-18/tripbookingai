"use client";

import Image from "next/image";
import TopRatedCard from "./TopRatedCard";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

const tours = [
  {
    id: 1,
    badge: "Top Rated",
    badgeColor: "bg-orange-400 text-white",
    img: "/image4.png",
    title: "California Sunset/Twilight Boat Cruise",
    location: "Manchester, England",
    price: 48.25,
  },
  {
    id: 2,
    badge: "Best Sale",
    badgeColor: "bg-green-400 text-white",
    img: "/image9.png",
    title: "NYC: Food Tastings and Culture Tour",
    location: "Manchester, England",
    price: 17.32,
  },
  {
    id: 3,
    badge: "25% Off",
    badgeColor: "bg-yellow-400 text-white",
    img: "/image3.png",
    title: "Grand Canyon Horseshoe Bend 2 days",
    location: "Manchester, England",
    price: 15.63,
  },
  {
    id: 4,
    badge: "New",
    badgeColor: "bg-blue-400 text-white",
    img: "/image4.png",
    title: "Santorini Sunset Sailing Experience",
    location: "Santorini, Greece",
    duration: "1 day 1 night",
    guests: "2-8 guest",
    price: 89.0,
  },
];

const TopRated = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
  });

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/image56.png')" }}
    >
      {/* Overlay BELOW content */}
      <div className="absolute inset-0 bg-[#009AC533] z-0" />

      {/* Content ABOVE overlay */}
      <div className="relative z-10 mt-20 pt-20 pb-20">
        {/* Header */}
        <div className="flex max-w-5xl mx-auto items-start justify-between px-4">
          <div>
            <h1 className="text-3xl font-bold text-black">Top Rated Hotels</h1>
            <p className="text-gray-600 text-sm mt-1">
              Quality as judged by customers. Book at the ideal price!
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-2">
            <button
              onClick={scrollPrev}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition"
            >
              <Image src="/SVG.png" alt="prev" width={18} height={18} />
            </button>

            <button
              onClick={scrollNext}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition"
            >
              <Image src="/Vector (2).png" alt="next" width={12} height={12} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="mt-10">
          <div className="max-w-5xl mx-auto pr-0">
            <div
              className="overflow-hidden -mr-[calc((100vw-100%)/2)]"
              ref={emblaRef}
            >
              <div className="flex">
                {tours.map((tour) => (
                  <TopRatedCard key={tour.id} tour={tour} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopRated;
