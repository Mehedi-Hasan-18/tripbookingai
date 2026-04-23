import Navber from "@/components/Navber";
import SearchForm from "@/components/SearchForm";
import TrustedBy from "@/components/TrustedBy";
import Image from "next/image";
import PopularDestinations from "./PopularDestinations";
import FeaturedTours from "./FeaturedTours";
import ImageCarousel from "./ImageCarousol";
import TopRated from "./TopRated";
import Footer from "./Footer";

const Hero = () => {
  return (
    <main>
      {/* Hero Section */}
      <div
        className="relative w-full min-h-130 md:min-h-145 bg-cover bg-center bg-no-repeat flex flex-col"
        style={{ backgroundImage: "url('/Background.png')" }}
      >
        {/* Navbar */}
        <Navber />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-6 pb-16 text-center">
          {/* Explore badge */}
          <div className="flex items-center gap-2 bg-[#FAB326] text-white text-xs px-4 py-2 rounded-full mb-6 shadow-lg">
            <Image
              src="/earth.svg fill.png"
              alt="image"
              width={24}
              height={24}
            />
            Explore the world
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-4xl font-semibold text-white leading-tight max-w-5xl mb-4">
            Your Gateway to Extraordinary Adventures
          </h1>

          {/* Subtitle */}
          <p className="text-white/80 text-sm md:text-base max-w-lg leading-relaxed">
            Pack your bags and let Travila redefine your travel experience.
            Where every journey is a story waiting to be told
          </p>
        </div>

        {/* Search Form — overlapping hero and trusted section */}
        <div className="relative z-20 px-6 md:px-12 lg:px-16">
          <SearchForm />
        </div>
      </div>

      {/* Spacer to account for the overlapping card */}
      <div className=" bg-[#f5f6fa] -mt-24">
        {/* Trusted By */}
        <TrustedBy />
      </div>

      <div>
        <PopularDestinations />
      </div>

      <div>
        <FeaturedTours />
      </div>

      <div>
        <TopRated />
      </div>

    </main>
    
  );
};

export default Hero;
