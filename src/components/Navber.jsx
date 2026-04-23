"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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

  return (
    <header className="w-full">
      <nav className="flex justify-between items-center h-16 px-6 md:px-12 lg:px-20 mx-auto bg-black/30 ">
        {/* Logo */}
        <div className="shrink-0">
          <Image
            src="/logo.png"
            alt="TripBooking.AI"
            width={221}
            height={49}
            className="object-cover"
          />
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex gap-6 lg:gap-8 items-center">
          {navLinks.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={label}
                href={href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-[#FAB326] pb-0.5"
                    : "text-white hover:text-[#FAB326]"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-4">
          <SearchBtn />
          <SignInBtn />
        </div>
      </nav>
    </header>
  );
};

export default Navber;