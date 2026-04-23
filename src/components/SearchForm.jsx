"use client";

import Image from "next/image";
import { useState } from "react";

const SearchForm = () => {
  const [activeTab, setActiveTab] = useState("hotels");

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-7 w-full max-w-5xl mx-auto">
      {/* Tabs + Help */}
      <div className="flex justify-between items-center mb-5">
        <div className="flex gap-2 items-center">
          {/* Tours Tab */}

          <button
            onClick={() => setActiveTab("tours")}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
              activeTab === "tours"
                ? "bg-[#FAB326] text-white"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <Image src="/tours.png" alt="png" width={18} height={18} />
            Tours
          </button>

          {/* Hotels Tab */}
          <button
            onClick={() => setActiveTab("hotels")}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
              activeTab === "hotels"
                ? "bg-[#FAB326] text-white"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <Image src="/hotels.png" alt="png" width={18} height={18} />
            Hotels
          </button>
        </div>

        <p className="text-sm text-gray-400">Need some help?</p>
      </div>

      {/* Divider */}
      <hr className="border-gray-100 mb-5" />

      {/* Fields */}
      <div className="flex flex-col md:flex-row items-stretch md:items-end gap-4">
        {/* Location */}
        <div className="flex-1">
          <label className="block text-xs text-gray-600 mb-1 font-medium">
            Location
          </label>
          <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2.5 cursor-pointer hover:border-[#FAB326] transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
              className="text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="text-sm text-black flex-1 font-bold">New York, USA</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
              className="text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        {/* Vertical divider */}
        <div className="hidden md:block w-px bg-gray-200 self-stretch" />

        {/* Check In & Check Out */}
        <div className="flex-1">
          <label className="block text-xs text-gray-600 mb-1 font-medium">
            Check In &amp; Check Out
          </label>
          <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2.5 cursor-pointer hover:border-[#FAB326] transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#6b7280"
              strokeWidth={3}
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span className="text-sm text-black font-bold flex-1">
              02 January 2024
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
              className="text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        {/* Vertical divider */}
        <div className="hidden md:block w-px bg-gray-200 self-stretch" />

        {/* Guest */}
        <div className="flex-1">
          <label className="block text-xs text-gray-600 mb-1 font-medium">
            Guest
          </label>
          <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2.5 cursor-pointer hover:border-[#FAB326] transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#6b7280"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="text-sm text-black flex-1 font-bold">
              2 adults, 2 children
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
              className="text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        {/* Search Button */}
        <button className="flex items-center justify-center gap-2 bg-[#0640C3] hover:bg-[#14305a] text-white text-sm font-semibold px-6 py-2.5 rounded-3xl transition-colors duration-200 whitespace-nowrap">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <circle cx="11" cy="11" r="7" />
            <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
          </svg>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchForm;
