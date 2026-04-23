"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import TourCard from "./TourCard";
import ImageCarousol from "./ImageCarousol";

const tours = [
  {
    id: 1,
    badge: "Top Rated",
    badgeColor: "bg-orange-400 text-white",
    img: "/image4.png",
    title: "California Sunset/Twilight Boat Cruise",
    location: "Manchester, England",
    duration: "2 days 3 nights",
    guests: "4-6 guest",
    price: 48.25,
  },
  {
    id: 2,
    badge: "Best Sale",
    badgeColor: "bg-green-400 text-white",
    img: "/image9.png",
    title: "NYC: Food Tastings and Culture Tour",
    location: "Manchester, England",
    duration: "3 days 3 nights",
    guests: "4-6 guest",
    price: 17.32,
  },
  {
    id: 3,
    badge: "25% Off",
    badgeColor: "bg-yellow-400 text-white",
    img: "/image3.png",
    title: "Grand Canyon Horseshoe Bend 2 days",
    location: "Manchester, England",
    duration: "7 days 6 nights",
    guests: "4-6 guest",
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

const FeaturedTours = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
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
    <>
      <div className="max-w-5xl mx-auto mt-20">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold">Our Featured Tours</h1>
            <p className="text-gray-500 text-sm mt-1">
              Favorite destinations based on customer reviews
            </p>
          </div>

          {/* Arrow controls */}
          <div className="flex gap-2 mt-2">
            <button
              onClick={scrollPrev}
              aria-label="Previous"
              className="w-10 h-10 rounded-full border border-gray-200 bg-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <Image src="/SVG.png" alt="arrow" width={18} height={18} />
            </button>
            <button
              onClick={scrollNext}
              aria-label="Next"
              className="w-10 h-10 rounded-full border border-gray-200 bg-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <Image src="/Vector (2).png" alt="arrow" width={12} height={12} />
            </button>
          </div>
        </div>

        {/* Embla Carousel */}
        <div className="embla overflow-hidden mt-10" ref={emblaRef}>
          <div className="embla__container flex">
            {tours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </div>
      <ImageCarousol />
    </>
  );
};

export default FeaturedTours;
