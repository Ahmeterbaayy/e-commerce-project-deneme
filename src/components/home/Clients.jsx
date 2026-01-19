import React from "react";

import brand1 from "../../assets/images/brands-img/brand1.png";
import brand2 from "../../assets/images/brands-img/brand2.png";
import brand3 from "../../assets/images/brands-img/brand3.png";
import brand4 from "../../assets/images/brands-img/brand4.png";
import brand5 from "../../assets/images/brands-img/brand5.png";
import brand6 from "../../assets/images/brands-img/brand6.png";

const logos = [
  { src: brand1, alt: "Hooli" },
  { src: brand2, alt: "Lyft" },
  { src: brand3, alt: "Robinhood" },
  { src: brand4, alt: "Stripe" },
  { src: brand5, alt: "AWS" },
  { src: brand6, alt: "Reddit" }
];

export default function Clients() {
  return (
    <section className="w-full bg-[#FAFAFA] py-6 sm:py-12 flex justify-center">
      <div className="w-[98%] sm:w-[90%] flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-8 md:gap-12">
        {logos.map((logo, i) => (
          <div key={i} className="flex justify-center items-center">
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-8 sm:h-12 w-auto max-w-[80px] sm:max-w-[120px] object-contain opacity-70 hover:opacity-100 active:opacity-100 focus:opacity-100 transition-opacity duration-300 cursor-pointer grayscale hover:grayscale-0 active:grayscale-0 focus:grayscale-0 outline-none"
              tabIndex={0}
              title={logo.alt}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
