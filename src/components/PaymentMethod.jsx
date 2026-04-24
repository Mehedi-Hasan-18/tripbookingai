import Image from "next/image";
import React from "react";

const PaymentMethod = () => {
  return (
    <div className="mt-20 sm:mt-24 lg:mt-32 mb-12 sm:mb-16 px-4 sm:px-6 lg:px-0">
      <div className="bg-[#D8D8D81A] border border-[#E4E6E8] rounded-xl py-8 sm:py-10">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-10">
          <Image src="/paypal.png" alt="paypal" width={100} height={20} />
          <Image src="/stripe.png" alt="stripe" width={100} height={24} />
          <Image src="/payoneer.png" alt="payoneer" width={100} height={24} />
          <Image src="/visa.png" alt="visa" width={100} height={24} />
          <Image src="/cashapp.png" alt="cashapp" width={100} height={24} />
          <Image src="/bitcoin.png" alt="bitcoin" width={100} height={24} />
          <Image src="/discover.png" alt="discover" width={100} height={24} />
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
