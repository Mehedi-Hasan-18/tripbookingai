"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { TextAlignJustify , X } from "lucide-react";
import SearchBtn from "./SearchBtn";
import SignInBtn from "./SignInBtn";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Tours", href: "/tours" },
  { label: "Hotels", href: "/hotels" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Navber = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full relative">
      <nav className="flex justify-between items-center h-16 px-6 md:px-12 lg:px-20 mx-auto bg-black/30 backdrop-blur-md">
        {/* Logo */}
        <div className="shrink-0">
          <Image
            src="/logo1.png"
            alt="TripBooking.AI"
            width={180}
            height={40}
            className="object-cover overflow-hidden"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 lg:gap-8 items-center">
          {navLinks.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={label}
                href={href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-[#FAB326]"
                    : "text-white hover:text-[#FAB326]"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-4">
          <SearchBtn />
          <SignInBtn />
        </div>

        {/* Mobile 3-dot button */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <TextAlignJustify size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`absolute top-16 left-0 w-full bg-black/40 backdrop-blur-md transition-all duration-300 z-50 ${
          open
            ? "max-h-125 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col items-center gap-5 py-6">
          {/* Links */}
          {navLinks.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className={`text-base font-medium ${
                  isActive
                    ? "text-[#FAB326]"
                    : "text-white hover:text-[#FAB326]"
                }`}
              >
                {label}
              </Link>
            );
          })}

          {/* Divider */}
          <div className="w-10 h-px bg-gray-500 my-2"></div>

          {/* Actions */}
          <div className="flex flex-col gap-4 items-center">
            <SearchBtn />
            <SignInBtn />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navber;
