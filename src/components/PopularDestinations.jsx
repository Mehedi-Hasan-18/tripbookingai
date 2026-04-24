import Image from "next/image";
import React from "react";

const destinations = [
  { name: "Venice", tours: 356, img: "/image1.png" },
  { name: "Amsterdam", tours: 284, img: "/image1.png" },
  { name: "Budapest", tours: 198, img: "/image2.png" },
  { name: "Lisbon", tours: 421, img: "/image3.png" },
  { name: "London", tours: 312, img: "/image1.png" },
  { name: "Ottawa", tours: 267, img: "/image3.png" },
  { name: "Paris", tours: 508, img: "/image1.png" },
];

const PopularDestinations = () => {
  return (
    <div className="max-w-5xl mx-auto mt-16 px-6 md:px-12 lg:px-0">
      {/* Header */}
      <h1 className="text-2xl sm:text-3xl font-bold">Popular Destination</h1>
      <p className="text-gray-500 text-sm mt-1">
        Favourite destinations based on customer review
      </p>

      {/* Grid */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Destination Cards */}
        {destinations.map((dest) => (
          <div
            key={dest.name}
            className="rounded-3xl p-3 overflow-hidden border border-gray-200 hover:border-gray-400 transition"
          >
            <div className="relative w-full h-40 sm:h-44 md:h-40">
              <Image
                src={dest.img}
                alt={dest.name}
                fill
                className="object-cover rounded-2xl"
              />
            </div>

            <div className="p-3">
              <p className="text-base font-semibold">{dest.name}</p>

              <div className="flex justify-between items-center mt-1">
                <p className="text-gray-500 text-sm">{dest.tours} Tours</p>

                <div className="p-1.5 rounded-full bg-gray-100">
                  <Image
                    src="/Vector (2).png"
                    alt="arrow"
                    width={12}
                    height={12}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Promo Card */}
        <div className="bg-[#0640C3] rounded-3xl p-5 flex flex-col justify-between min-h-[180px] sm:min-h-[200px] lg:col-span-1 sm:col-span-2">
          <div>
            <p className="text-white font-semibold leading-snug text-lg sm:text-xl">
              Crafting Your Perfect Travel Experience
            </p>
          </div>

          <button className="mt-4 flex items-center gap-3 text-white text-sm bg-[#FAB326] hover:bg-[#e0a520] transition rounded-xl px-4 py-2 w-fit">
            Browse all Destination
            <div className="p-1.5 rounded-full bg-white">
              <Image src="/Vector (2).png" alt="arrow" width={12} height={12} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularDestinations;
