import Image from "next/image";

const TopRatedCard = ({ tour }) => (
  console.log(tour),
  (
    <div
      className="embla__slide relative rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-shadow shrink-0 mr-5"
      style={{ flex: "0 0 calc(28% - 14px)", minHeight: "420px" }}
    >
      {/* Full-card background image */}
      <Image src={tour.img} alt={tour.title} fill className="object-cover" />

      {/* Badge — sits above the white panel */}
      <span
        className={`absolute top-4 left-4 z-10 text-xs font-semibold px-3 py-1 rounded-full ${tour.badgeColor}`}
      >
        {tour.badge}
      </span>

      {/* White overlay panel anchored to the bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border border-gray-300 rounded-3xl p-5 z-10">
        <h3 className="text-lg font-bold text-gray-900 leading-snug">
          {tour.title}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-2 mt-2 text-gray-400 text-sm">
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <path
              d="M6.5 1C4.567 1 3 2.567 3 4.5C3 7.25 6.5 12 6.5 12C6.5 12 10 7.25 10 4.5C10 2.567 8.433 1 6.5 1Z"
              stroke="#9CA3AF"
              strokeWidth="1.2"
            />
            <circle cx="6.5" cy="4.5" r="1.2" fill="#9CA3AF" />
          </svg>
          {tour.location}
          <div className="flex">
            <Image src="/star.png" alt="star" width={14} height={14} />
            <Image src="/star.png" alt="star" width={14} height={14} />
            <Image src="/star.png" alt="star" width={14} height={14} />
            <Image src="/star.png" alt="star" width={14} height={14} />
            <Image src="/star.png" alt="star" width={14} height={14} />
          </div>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between mt-5">
          <div>
            <span className="text-xl font-bold text-gray-900">
              ${tour.price.toFixed(2)}
            </span>
            <span className="text-gray-400 text-sm ml-1">/ person</span>
          </div>
          <button className="bg-[#0640C3] hover:bg-[#0535a8] transition-colors text-white text-sm px-3 py-2 rounded-full">
            Book Now
          </button>
        </div>
      </div>
    </div>
  )
);

export default TopRatedCard;
