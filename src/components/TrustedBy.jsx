const airlines = [
  { name: "CASA", logo: "/casa.svg.png" },
  { name: "EgyptAir", logo: "/egyptair.png" },
  { name: "American Airlines", logo: "/cubana.svg fill.png" },
  { name: "Delta", logo: "/delta.svg fill.png" },
  { name: "Turkish Airlines", logo: "/ata.svg fill.png" },
  { name: "WestJet", logo: "/westJet.svg fill.png" },
  { name: "Air France", logo: "/abx.svg fill.png" },
];

const TrustedBy = () => {
  return (
    <section className="bg-[#E8ECF9] pt-32 pb-5 px-6 md:px-12 lg:px-16 relative">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-8">
        {/* Left text */}
        <div className="shrink-0 max-w-50">
          <h3 className="text-lg font-bold text-gray-800 mb-1">Trusted by</h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            We are a trusted partner of airlines, payment gateways, and travel
            services around the world.
          </p>
        </div>

        {/* Logos */}
        <div className="flex flex-wrap items-center gap-5 md:gap-5">
          {airlines.map((airline) => (
            <img
              key={airline.name}
              src={airline.logo}
              alt={airline.name}
              className=" object-contain border border-[#D6D7D8] p-1 rounded-xl bg-white"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;