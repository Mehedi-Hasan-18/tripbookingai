import Navber from "@/components/Navber";
import SearchForm from "@/components/SearchForm";
import TrustedBy from "@/components/TrustedBy";
import Image from "next/image";
import PopularDestinations from "./PopularDestinations";
import FeaturedTours from "./FeaturedTours";
import ImageCarousel from "./ImageCarousol";
import TopRated from "./TopRated";
import Footer from "./Footer";
import PaymentMethod from "./PaymentMethod";

const Main = () => {
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
          <div className="flex items-center gap-2 bg-[#FAB326] text-white text-xs px-4 py-2 mt-5 rounded-full mb-6 shadow-lg">
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

      <PopularDestinations />

      <FeaturedTours />

      <TopRated />

      {/* Find The Best Travel Deals */}
      <div className="m-5">
        <div className="bg-[#0640C3] px-20 py-14">
          <div className="max-w-5xl mx-auto text-center sm:text-left">
            {/* Heading */}
            <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug">
              Find The Best Travel <br className="hidden sm:block" />
              Deals Instantly With AI!
            </h1>

            {/* Description */}
            <p className="mt-4 text-white/80 text-sm sm:text-base leading-relaxed max-w-2xl">
              No more endless searching! Our AI scans thousands of travel
              packages to find you the best deals - Whether it’s a budget
              getaway or a luxury escape, we’ll match you with the best deal —
              instantly!
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mt-8">
              {/* Apple Button */}
              <button className="flex items-center gap-3 bg-white text-black px-5 py-3 rounded-xl hover:bg-gray-100 transition w-full sm:w-auto justify-center">
                <Image src="/appstore.png" alt="apple" width={24} height={24} />
                <div className="text-left">
                  <p className="text-xs">Download on the</p>
                  <p className="text-sm font-semibold">Apple Store</p>
                </div>
              </button>

              {/* Google Play Button */}
              <button className="flex items-center gap-3 bg-white text-black px-5 py-3 rounded-xl hover:bg-gray-100 transition w-full sm:w-auto justify-center">
                <Image
                  src="/playstore.png"
                  alt="apple"
                  width={24}
                  height={24}
                />
                <div className="text-left">
                  <p className="text-xs">Get it on</p>
                  <p className="text-sm font-semibold">Google Play</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Method */}
      <PaymentMethod />
    </main>
  );
};

export default Main;
