import React from "react";
import facebookIcon from "../assets/images/footer-img/facebook.png";
import instagramIcon from "../assets/images/footer-img/instagram.png";
import twitterIcon from "../assets/images/footer-img/twitter.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="h-auto md:h-[488px] w-full shrink-0 bg-[#fff] relative overflow-hidden">
      <div className="w-full h-auto md:h-[272px] bg-[#fff] relative overflow-hidden mt-[50px] md:mt-[142px]">
        <div className="flex w-full max-w-[1050px] pt-[50px] pr-[24px] md:pr-0 pb-[50px] pl-[24px] md:pl-0 flex-col items-start flex-nowrap relative overflow-hidden mx-auto">
          <div className="flex w-full flex-col md:flex-row gap-[30px] items-start shrink-0 flex-wrap md:flex-nowrap relative overflow-hidden">
            <div className="flex w-[148px] flex-col gap-[20px] items-start shrink-0 flex-nowrap relative overflow-hidden">
              <span className="h-[24px] shrink-0 basis-auto font-['Montserrat'] text-[16px] font-bold leading-[24px] text-[#252b42] tracking-[0.1px] relative text-left whitespace-nowrap">
                Company Info
              </span>
              <div className="flex w-[97px] flex-col gap-[10px] items-start shrink-0 flex-nowrap relative">
                <Link to="/about" className="h-[24px] shrink-0 basis-auto font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#727272] tracking-[0.2px] relative text-left whitespace-nowrap">
                  About Us
                </Link>
                <Link to="/carrier" className="h-[24px] shrink-0 basis-auto font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#727272] tracking-[0.2px] relative text-left whitespace-nowrap">
                  Carrier
                </Link>
                <Link to="/hiring" className="h-[24px] shrink-0 basis-auto font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#727272] tracking-[0.2px] relative text-left whitespace-nowrap">
                  We are hiring
                </Link>
                <Link to="/blog" className="h-[24px] shrink-0 basis-auto font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#727272] tracking-[0.2px] relative text-left whitespace-nowrap">
                  Blog
                </Link>
              </div>
            </div>
            <div className="flex w-[152px] flex-col gap-[20px] items-start shrink-0 flex-nowrap relative overflow-hidden">
              <span className="h-[24px] shrink-0 basis-auto font-['Montserrat'] text-[16px] font-bold leading-[24px] text-[#252b42] tracking-[0.1px] relative text-left whitespace-nowrap">
                Legal
              </span>
              <div className="flex w-[97px] flex-col gap-[10px] items-start shrink-0 flex-nowrap relative">
                <Link to="/about" className="h-[24px] shrink-0 basis-auto font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#727272] tracking-[0.2px] relative text-left whitespace-nowrap">
                  About Us
                </Link>
                <Link to="/carrier" className="h-[24px] shrink-0 basis-auto font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#727272] tracking-[0.2px] relative text-left whitespace-nowrap">
                  Carrier
                </Link>
                <Link to="/hiring" className="h-[24px] shrink-0 basis-auto font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#727272] tracking-[0.2px] relative text-left whitespace-nowrap">
                  We are hiring
                </Link>
                <Link to="/blog" className="h-[24px] shrink-0 basis-auto font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#727272] tracking-[0.2px] relative text-left whitespace-nowrap">
                  Blog
                </Link>
              </div>
            </div>
            <div className="flex w-[148px] flex-col gap-[20px] items-start shrink-0 flex-nowrap relative overflow-hidden">
              <span className="h-[24px] shrink-0 basis-auto font-['Montserrat'] text-[16px] font-bold leading-[24px] text-[#252b42] tracking-[0.1px] relative text-left whitespace-nowrap">
                Features
              </span>
              <div className="flex w-[142px] flex-col gap-[10px] items-start shrink-0 flex-nowrap relative">
                <span className="h-[24px] shrink-0 basis-auto font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#727272] tracking-[0.2px] relative text-left whitespace-nowrap">
                  Business Marketing
                </span>
                <span className="h-[24px] shrink-0 basis-auto font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#727272] tracking-[0.2px] relative text-left whitespace-nowrap">
                  User Analytic
                </span>
                <span className="h-[24px] shrink-0 basis-auto font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#727272] tracking-[0.2px] relative text-left whitespace-nowrap">
                  Live Chat
                </span>
                <span className="h-[24px] shrink-0 basis-auto font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#727272] tracking-[0.2px] relative text-left whitespace-nowrap">
                  Unlimited Support
                </span>
              </div>
            </div>
            <div className="flex w-[152px] flex-col gap-[20px] items-start shrink-0 flex-nowrap relative overflow-hidden">
              <span className="h-[24px] shrink-0 basis-auto font-['Montserrat'] text-[16px] font-bold leading-[24px] text-[#252b42] tracking-[0.1px] relative text-left whitespace-nowrap">
                Resources
              </span>
              <div className="flex w-[106px] flex-col gap-[10px] items-start shrink-0 flex-nowrap relative">
                <span className="h-[24px] shrink-0 basis-auto font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#727272] tracking-[0.2px] relative text-left whitespace-nowrap">
                  IOS & Android
                </span>
                <span className="h-[24px] shrink-0 basis-auto font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#727272] tracking-[0.2px] relative text-left whitespace-nowrap">
                  Watch a Demo
                </span>
                <span className="h-[24px] shrink-0 basis-auto font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#727272] tracking-[0.2px] relative text-left whitespace-nowrap">
                  Customers
                </span>
                <span className="h-[24px] shrink-0 basis-auto font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#727272] tracking-[0.2px] relative text-left whitespace-nowrap">
                  API
                </span>
              </div>
            </div>
            <div className="flex w-[321px] flex-col gap-[20px] items-start shrink-0 flex-nowrap relative overflow-hidden">
              <span className="h-[24px] shrink-0 basis-auto font-['Montserrat'] text-[16px] font-bold leading-[24px] text-[#252b42] tracking-[0.1px] relative text-left whitespace-nowrap">
                Get In Touch
              </span>
              <div className="w-[321px] h-[87px] shrink-0 relative">
                <div className="w-[321px] h-[58px] relative overflow-hidden mt-0 mr-0 mb-0 ml-0">
                  <input 
                    type="email" 
                    placeholder="Your Email"
                    className="bg-[#f8f8f8] rounded-[5px] border-solid border border-[#e6e6e6] absolute top-0 bottom-0 left-0 right-0 overflow-hidden px-[19px] font-['Montserrat'] text-[14px] font-normal leading-[28px] text-[#727272] tracking-[0.2px] z-[1]"
                  />
                  <div className="w-[117px] h-[58px] relative overflow-hidden mt-0 mr-0 mb-0 ml-[204px] z-[2]">
                    <button className="bg-[#23a6f0] rounded-tl-none rounded-tr-[5px] rounded-br-[5px] rounded-bl-none border-solid border border-[#e6e6e6] absolute top-0 bottom-0 left-0 right-0 overflow-hidden hover:opacity-80 hover:scale-105 transition-all duration-200">
                      <span className="flex w-[72px] h-[28px] justify-center items-start font-['Montserrat'] text-[14px] font-normal leading-[28px] text-[#fff] tracking-[0.2px] absolute top-[calc(50%-15px)] left-[calc(50%-37px)] text-center whitespace-nowrap cursor-pointer">
                        Subscribe
                      </span>
                    </button>
                  </div>
                </div>
                <span className="block h-[28px] font-['Montserrat'] text-[12px] font-normal leading-[28px] text-[#727272] tracking-[0.2px] relative text-left whitespace-nowrap mt-px mr-0 mb-0 ml-[2px]">
                  Lore imp sum dolor Amit
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[74px] bg-[#f9f9f9] relative overflow-hidden">
        <div className="flex w-[1050px] pt-[25px] pr-0 pb-[25px] pl-0 flex-col items-start flex-nowrap relative overflow-hidden mx-auto">
          <div className="flex w-[600px] gap-[213px] items-center shrink-0 flex-nowrap relative overflow-hidden">
            <div className="flex w-[600px] flex-col items-start shrink-0 flex-nowrap relative overflow-hidden">
              <span className="h-[24px] shrink-0 basis-auto font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#727272] tracking-[0.2px] relative text-left whitespace-nowrap">
                Made With Love By Finland All Right Reserved{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[142px] bg-[#f9f9f9] absolute top-0 left-0 right-0 overflow-hidden">
        <div className="flex w-[1050px] pt-[40px] pr-0 pb-[40px] pl-0 flex-col items-start flex-nowrap relative overflow-hidden mx-auto">
          <div className="flex w-full justify-between items-center shrink-0 flex-nowrap relative overflow-hidden">
            <div className="flex w-[236px] flex-col gap-[10px] items-start shrink-0 flex-nowrap relative overflow-hidden">
              <div className="w-[187px] h-auto shrink-0 flex flex-col items-start justify-start ml-4">
                <Link to="/" className="h-[32px] font-['Montserrat'] text-[24px] font-bold leading-[32px] text-[#252b42] tracking-[0.1px] text-left whitespace-nowrap mb-2">
                  Bandage
                </Link>
                <div className="flex gap-4 mt-2 md:hidden">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-[24px] h-[24px] shrink-0 relative overflow-hidden">
                    <img src={facebookIcon} alt="Facebook" className="w-[24px] h-[24px] object-cover cursor-pointer transition-all duration-200 hover:opacity-80" />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-[24px] h-[24px] shrink-0 relative overflow-hidden">
                    <img src={instagramIcon} alt="Instagram" className="w-[24px] h-[24px] object-cover cursor-pointer transition-all duration-200 hover:opacity-80" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-[24px] h-[24px] shrink-0 relative overflow-hidden">
                    <img src={twitterIcon} alt="Twitter" className="w-[24px] h-[24px] object-cover cursor-pointer transition-all duration-200 hover:opacity-80" />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex w-[236px] flex-col items-center shrink-0 flex-nowrap relative overflow-hidden">
              <div className="flex w-[112px] gap-[20px] justify-center items-center shrink-0 flex-nowrap relative overflow-hidden">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-[24px] h-[24px] shrink-0 relative overflow-hidden">
                  <img src={facebookIcon} alt="Facebook" className="w-[24px] h-[24px] object-cover absolute top-0 left-0 cursor-pointer transition-all duration-200 hover:opacity-80" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-[24px] h-[24px] shrink-0 relative overflow-hidden">
                  <img src={instagramIcon} alt="Instagram" className="w-[24px] h-[24px] object-cover absolute top-0 left-0 cursor-pointer transition-all duration-200 hover:opacity-80" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-[24px] h-[24px] shrink-0 relative overflow-hidden">
                  <img src={twitterIcon} alt="Twitter" className="w-[24px] h-[24px] object-cover absolute top-0 left-0 cursor-pointer transition-all duration-200 hover:opacity-80" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1057px] h-px bg-[url('../assets/images/footer-img/footer-line.png')] bg-cover bg-no-repeat absolute top-[137px] left-1/2 translate-x-[-49.67%] translate-y-0" />
    </div>
  );
}
