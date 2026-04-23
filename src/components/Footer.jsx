"use client";

import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#1E4DB7] text-white">
      <div className="max-w-7xl mx-auto  py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-10">
          {/* Logo + Description */}
          <div className="col-span-2 md:pr-28">
            <Image src="/logo.png" alt="logo" width={150} height={40} />
            <p className="text-sm text-gray-200 mt-4 leading-relaxed">
              Dive into local recommendations for a truly authentic experience.
            </p>

            <div className="flex items-center gap-3 mt-6">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Image
                  src="/whatapp.png"
                  alt="whatapp"
                  width={14}
                  height={14}
                />
              </div>
              <div>
                <p className="text-sm text-gray-200">Need help? Call us</p>
                <p className="font-semibold text-lg">1-800-222-8888</p>
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-200 text-sm">
              <li>About Us</li>
              <li>Community Blog</li>
              <li>Jobs & Careers</li>
              <li>Contact Us</li>
              <li>Our Awards</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-200 text-sm">
              <li>Tour Guide</li>
              <li>Tour Booking</li>
              <li>Hotel Booking</li>
              <li>Ticket Booking</li>
              <li>Rental Services</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 md:pl-14">
            <h3 className="font-semibold mb-4">Newsletter</h3>

            <div className="flex items-center bg-white rounded-full overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 text-black outline-none text-sm"
              />
              <button className="bg-yellow-400 text-white px-5 py-2 text-sm font-medium">
                Subscribe
              </button>
            </div>

            {/* Payments */}
            {/* Payments */}
            <div className="mt-6">
              <p className="mb-3 text-sm font-medium">Payments</p>

              <div className="flex gap-3">
                <div className="bg-white rounded-xl p-2 flex items-center justify-center">
                  <Image
                    src="/paypal.png"
                    alt="paypal"
                    width={60}
                    height={28}
                  />
                </div>

                <div className="bg-white rounded-xl p-2 flex items-center justify-center">
                  <Image
                    src="/stripe.png"
                    alt="stripe"
                    width={60}
                    height={28}
                  />
                </div>

                <div className="bg-white rounded-xl p-2 flex items-center justify-center">
                  <Image src="/visa.png" alt="visa" width={60} height={28} />
                </div>

                <div className="bg-white rounded-xl p-2 flex items-center justify-center">
                  <Image
                    src="/skrill.png"
                    alt="skrill"
                    width={60}
                    height={28}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-200">
            © 2024 Travila Inc. All rights reserved.
          </p>

          {/* Social */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-200">Follow us</span>

            <div className="flex gap-2">
              <div className="w-9 h-9 rounded-full border border-white flex items-center justify-center">
                <Image
                  src="/fb.png"
                  alt="facebook"
                  width={18}
                  height={18}
                />
              </div>

              <div className="w-9 h-9 rounded-full border border-white flex items-center justify-center">
                <Image
                  src="/x.png"
                  alt="twitter"
                  width={18}
                  height={18}
                />
              </div>

              <div className="w-9 h-9 rounded-full border border-white flex items-center justify-center">
                <Image
                  src="/yt.png"
                  alt="youtube"
                  width={18}
                  height={18}
                />
              </div>

              <div className="w-9 h-9 rounded-full border border-white flex items-center justify-center">
                <Image
                  src="/insta.png"
                  alt="instagram"
                  width={18}
                  height={18}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
