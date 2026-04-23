"use client";

import Image from "next/image";

const SearchBtn = () => {
  return (
    <button className="flex items-center gap-2 text-white text-sm font-medium hover:text-[#FAB326] transition-colors duration-200">
      <Image
        src="/Vector.png"
        alt="Search"
        width={14}
        height={14}
        className="object-contain"
      />
      <span className="hidden sm:inline">Search</span>
    </button>
  );
};

export default SearchBtn;