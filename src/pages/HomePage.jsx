import React from "react";
import staticImg from "../assets/images/featured-img/static.png";
import carouselCaptions1 from "../assets/images/header-img/carouselCaptions1.png";
import carouselCaptions2 from "../assets/images/header-img/carouselCaptions2.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import ProductCard from "../components/ProductCard";


export default function HomePage() {
  const products = [
    {
      image: "/src/assets/images/product-img/product9.jpg",
      title: "Graphic Design",
      department: "English Department",
      originalPrice: "16.48",
      salePrice: "6.48",
      colors: [
        "/src/assets/images/product-img/mavi.png",
        "/src/assets/images/product-img/yesil.png",
        "/src/assets/images/product-img/turuncu.png",
        "/src/assets/images/product-img/koyu.png"
      ]
    },
    {
      image: "/src/assets/images/product-img/product10.jpg",
      title: "Graphic Design",
      department: "English Department",
      originalPrice: "16.48",
      salePrice: "6.48",
      colors: [
        "/src/assets/images/product-img/mavi.png",
        "/src/assets/images/product-img/yesil.png",
        "/src/assets/images/product-img/turuncu.png",
        "/src/assets/images/product-img/koyu.png"
      ]
    },
    {
      image: "/src/assets/images/product-img/product11.jpg",
      title: "Graphic Design",
      department: "English Department",
      originalPrice: "16.48",
      salePrice: "6.48",
      colors: [
        "/src/assets/images/product-img/mavi.png",
        "/src/assets/images/product-img/yesil.png",
        "/src/assets/images/product-img/turuncu.png",
        "/src/assets/images/product-img/koyu.png"
      ]
    },
    {
      image: "/src/assets/images/product-img/product12.jpg",
      title: "Graphic Design",
      department: "English Department",
      originalPrice: "16.48",
      salePrice: "6.48",
      colors: [
        "/src/assets/images/product-img/mavi.png",
        "/src/assets/images/product-img/yesil.png",
        "/src/assets/images/product-img/turuncu.png",
        "/src/assets/images/product-img/koyu.png"
      ]
    },
    {
      image: "/src/assets/images/product-img/product13.jpg",
      title: "Graphic Design",
      department: "English Department",
      originalPrice: "16.48",
      salePrice: "6.48",
      colors: [
        "/src/assets/images/product-img/mavi.png",
        "/src/assets/images/product-img/yesil.png",
        "/src/assets/images/product-img/turuncu.png",
        "/src/assets/images/product-img/koyu.png"
      ]
    },
    {
      image: "/src/assets/images/product-img/product14.jpg",
      title: "Graphic Design",
      department: "English Department",
      originalPrice: "16.48",
      salePrice: "6.48",
      colors: [
        "/src/assets/images/product-img/mavi.png",
        "/src/assets/images/product-img/yesil.png",
        "/src/assets/images/product-img/turuncu.png",
        "/src/assets/images/product-img/koyu.png"
      ]
    },
    {
      image: "/src/assets/images/product-img/product8.jpg",
      title: "Graphic Design",
      department: "English Department",
      originalPrice: "16.48",
      salePrice: "6.48",
      colors: [
        "/src/assets/images/product-img/mavi.png",
        "/src/assets/images/product-img/yesil.png",
        "/src/assets/images/product-img/turuncu.png",
        "/src/assets/images/product-img/koyu.png"
      ]
    },
    {
      image: "/src/assets/images/product-img/product15.jpg",
      title: "Graphic Design",
      department: "English Department",
      originalPrice: "16.48",
      salePrice: "6.48",
      colors: [
        "/src/assets/images/product-img/mavi.png",
        "/src/assets/images/product-img/yesil.png",
        "/src/assets/images/product-img/turuncu.png",
        "/src/assets/images/product-img/koyu.png"
      ]
    }
  ];

  return (
    <div className="flex w-full flex-col items-start flex-nowrap bg-[#fff] relative overflow-hidden">
      {/* Hero Carousel Section */}
      {/* Masaüstü için eski web görünümü, mobil için referans uyarlaması */}
      <div className="w-full md:h-[852px] shrink-0 bg-[#f9f9f9] relative overflow-hidden">
        {/* Masaüstü (md ve üzeri) */}
        <div className="hidden md:block w-full h-[747px] absolute top-0 left-0 overflow-hidden z-[1]">
          <div className="bg-[url(/src/assets/images/header-img/summer-banner1.png)] bg-cover bg-no-repeat absolute top-0 bottom-0 left-0 right-0 z-[2]" />
          <div className="bg-[rgba(0,0,0,0.5)] absolute top-0 bottom-0 left-0 right-0 overflow-hidden z-[3]" />
        </div>
        <div className="h-[60px] sm:h-[136px] bg-[#fff] absolute top-0 left-0 right-0 z-[150]">
          <Header />
        </div>
        {/* Masaüstü için eski carousel yapısı */}
        <div className="hidden md:block h-[716px] bg-[#fff] rounded-[5px] border-solid border border-[#dedede] absolute top-[136px] left-px right-0 z-[73]">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{
              el: '.swiper-pagination-custom',
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="h-full"
          >
            <SwiperSlide>
              <div className="h-[500px] md:h-[716px] relative overflow-hidden">
                <div className="w-full h-full absolute top-0 left-0 right-0 overflow-hidden z-[75]">
                  <div className="flex w-full max-w-[1044px] px-4 md:px-0 pt-[50px] md:pt-[112px] pr-0 pb-[50px] md:pb-[112px] pl-0 flex-col gap-[40px] md:gap-[80px] items-center flex-nowrap relative overflow-hidden z-[77] mt-[24px] md:mt-[48px] mx-auto">
                    <div className="flex w-full flex-col md:flex-row pt-[24px] md:pt-[48px] pr-0 pb-[24px] md:pb-[48px] pl-0 gap-[30px] items-center md:items-center shrink-0 flex-nowrap relative overflow-hidden z-[78]">
                      <div className="flex w-full md:w-[599px] flex-col gap-[20px] md:gap-[35px] items-start shrink-0 flex-nowrap relative overflow-hidden z-[79]">
                        <span className="h-auto md:h-[24px] shrink-0 basis-auto font-['Montserrat'] text-[14px] md:text-[16px] font-bold leading-[20px] md:leading-[24px] text-[#fff] tracking-[0.1px] relative text-left whitespace-nowrap z-[80]">
                          SUMMER 2020
                        </span>
                        <span className="h-auto md:h-[80px] shrink-0 basis-auto font-['Montserrat'] text-[36px] md:text-[58px] font-bold leading-[44px] md:leading-[80px] text-[#fff] tracking-[0.2px] relative text-left z-[81]">
                          NEW COLLECTION
                        </span>
                        <span className="flex w-full md:w-[376px] h-auto md:h-[60px] justify-start items-start shrink-0 font-['Montserrat'] text-[16px] md:text-[20px] font-normal leading-[24px] md:leading-[30px] text-[#f9f9f9] tracking-[0.2px] relative text-left overflow-hidden z-[82]">
                          We know how large objects will act, <br />
                          but things on a small scale.
                        </span>
                        <div className="flex w-full md:w-[221px] gap-[10px] items-start shrink-0 flex-nowrap relative z-[83]">
                          <div className="flex w-[221px] pt-[15px] pr-[40px] pb-[15px] pl-[40px] flex-col gap-[10px] items-center shrink-0 flex-nowrap bg-[#2cc070] rounded-[5px] relative overflow-hidden z-[84]">
                            <span className="flex w-[141px] h-[32px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[24px] font-bold leading-[32px] text-[#fff] tracking-[0.1px] relative text-center whitespace-nowrap z-[85] hover:opacity-80 hover:scale-105 transition-all duration-200 cursor-pointer">
                              SHOP NOW
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="hidden md:flex w-[415px] h-[280px] pt-0 pr-0 pb-0 pl-0 flex-col items-start shrink-0 flex-nowrap relative overflow-hidden z-[86]" />
                    </div>
                  </div>
                  <div className="bg-[url(/src/assets/images/header-img/home-banner.jpg)] bg-cover bg-no-repeat bg-[position:center_-80px] absolute top-0 bottom-0 left-0 right-0 overflow-hidden z-[76]" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="w-[126px] h-[10px] bg-[url(/src/assets/images/featured-img/static.png)] bg-cover bg-no-repeat absolute bottom-[59px] left-[63px] z-[87] swiper-pagination-custom" />
          <div className="absolute bottom-[59px] left-1/2 -translate-x-1/2 z-[88] flex flex-row items-end">
            <img src={carouselCaptions2} alt="carouselCaptions2" className="w-[63px] h-[10px] m-0 p-0" />
            <img src={carouselCaptions1} alt="carouselCaptions1" className="w-[63px] h-[10px] m-0 p-0" />
          </div>
          <div className="w-[24px] h-[44.471px] absolute top-[282px] right-[39px] overflow-hidden z-[88] swiper-button-next-custom cursor-pointer">
            <div className="w-[24px] h-[44.471px] bg-[url(/src/assets/images/featured-img/arrow-right.png)] bg-cover bg-no-repeat absolute top-1/2 right-0 translate-x-0 translate-y-[-50%] overflow-hidden z-[89]" />
          </div>
          <div className="w-[24px] h-[44.471px] absolute top-[282px] left-[39px] overflow-hidden z-[90] swiper-button-prev-custom cursor-pointer">
            <div className="w-[24px] h-[44.471px] bg-[url(/src/assets/images/featured-img/arrow-left.png)] bg-cover bg-no-repeat relative overflow-hidden z-[91] mt-0 mr-0 mb-0 ml-0" />
          </div>
        </div>
        {/* Mobil için referans projeye uygun swipe edilebilir banner */}
        <div className="block md:hidden w-full h-[500px] bg-[#fff] rounded-[5px] border-solid border border-[#dedede] mt-[180px] flex items-center justify-center relative z-[73] overflow-hidden">
          <div className="w-full h-full relative flex items-center justify-center">
            {/* Banner arka planı sağdan model görünecek şekilde */}
            <div className="absolute inset-0 w-full h-full bg-cover bg-no-repeat" style={{backgroundImage: 'url(/src/assets/images/header-img/home-banner.jpg)', backgroundPosition: '35% center'}}></div>
            {/* Slider okları */}
            <button className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-transparent border-none p-0 m-0">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" fill="rgba(0,0,0,0.15)"/>
                <path d="M24 12L16 20L24 28" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-transparent border-none p-0 m-0">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" fill="rgba(0,0,0,0.15)"/>
                <path d="M16 12L24 20L16 28" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {/* İçerik */}
            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-white text-center px-4">
              <span className="font-bold uppercase tracking-wide text-base mt-4 mb-2">SUMMER 2020</span>
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight">NEW<br/>COLLECTION</h2>
              <span className="mt-4 text-base max-w-[280px] text-white block">
                We know how large objects will act, but things on a small scale.
              </span>
              <button className="bg-[#2cc070] text-white font-bold mt-6 px-10 py-3 rounded hover:bg-green-600 transition cursor-pointer text-lg">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Editor's Pick Section - Mobil ve Masaüstü için ayrı */}
      <>
        {/* Mobil */}
        <div className="block md:hidden w-full bg-white pb-8">
          <div className="flex flex-col items-center w-full px-0 pt-8 pb-4">
            <span className="font-bold text-xl text-[#252b42] tracking-[0.1px] text-center" style={{letterSpacing: 0.5}}>EDITOR'S PICK</span>
            <span className="text-[#727272] text-base text-center mt-2 mb-4 font-medium">Problems trying to resolve<br/>the conflict between</span>
          </div>
          {/* MEN */}
          <div className="w-full bg-white flex flex-col items-center justify-center relative mb-4">
            <img src="/src/assets/images/shopping-img/men.jpg" alt="MEN" className="w-full h-auto object-cover" />
            <div className="absolute left-1/2 -translate-x-1/2 bottom-6 bg-white px-8 py-2 rounded-none shadow text-center">
              <span className="text-[#252b42] font-bold text-lg tracking-widest uppercase">MEN</span>
            </div>
          </div>
          {/* WOMEN */}
          <div className="w-full bg-white flex flex-col items-center justify-center relative mb-4">
            <img src="/src/assets/images/shopping-img/women.jpg" alt="WOMEN" className="w-full h-auto object-cover" />
            <div className="absolute left-1/2 -translate-x-1/2 bottom-6 bg-white px-8 py-2 rounded-none shadow text-center">
              <span className="text-[#252b42] font-bold text-lg tracking-widest uppercase">WOMEN</span>
            </div>
          </div>
          {/* ACCESSORIES */}
          <div className="w-full bg-white flex flex-col items-center justify-center relative mb-4">
            <img src="/src/assets/images/shopping-img/accessories.jpg" alt="ACCESSORIES" className="w-full h-auto object-cover" />
            <div className="absolute left-1/2 -translate-x-1/2 bottom-6 bg-white px-8 py-2 rounded-none shadow text-center">
              <span className="text-[#252b42] font-bold text-lg tracking-widest uppercase">ACCESSORIES</span>
            </div>
          </div>
          {/* KIDS */}
          <div className="w-full bg-white flex flex-col items-center justify-center relative mb-4">
            <img src="/src/assets/images/shopping-img/kids.jpg" alt="KIDS" className="w-full h-auto object-cover" />
            <div className="absolute left-1/2 -translate-x-1/2 bottom-6 bg-white px-8 py-2 rounded-none shadow text-center">
              <span className="text-[#252b42] font-bold text-lg tracking-widest uppercase">KIDS</span>
            </div>
          </div>
        </div>
        {/* Masaüstü (orijinal grid ve görsel düzeni) */}
        <div className="hidden md:block w-full bg-[#f9f9f9] relative overflow-hidden py-[50px] md:py-0">
          <div className="flex w-full max-w-[1050px] px-4 md:px-0 pt-[50px] md:pt-[80px] pr-0 pb-[50px] md:pb-[80px] pl-0 flex-col gap-[48px] items-center flex-nowrap relative overflow-hidden mx-auto">
            <div className="flex w-full max-w-[607px] flex-col items-center shrink-0 flex-nowrap relative overflow-hidden px-4 md:px-0">
              <div className="flex w-full flex-col gap-[10px] items-center shrink-0 flex-nowrap relative overflow-hidden">
                <span className="h-[32px] shrink-0 basis-auto font-['Montserrat'] text-[24px] font-bold leading-[32px] text-[#252b42] tracking-[0.1px] relative text-center whitespace-nowrap">
                  EDITOR'S PICK
                </span>
                <span className="flex w-full max-w-[347px] h-auto md:h-[20px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[14px] font-normal leading-[20px] text-[#727272] tracking-[0.2px] relative text-center px-4 md:px-0">
                  Problems trying to resolve the conflict between{" "}
                </span>
              </div>
            </div>
            <div className="grid w-full max-w-[1050px] gap-[15px] md:gap-[30px] grid-cols-2 md:grid-cols-[510px_240px_240px] grid-rows-2 items-start relative overflow-hidden px-4 md:px-0">
              {/* MEN */}
              <div className="row-span-2 col-span-1 w-[510px] h-[500px] shrink-0 relative overflow-hidden">
                <div className="w-full h-full bg-[#fff] absolute top-0 left-0 overflow-hidden group cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg">
                  <div className="w-[170px] h-[48px] bg-[#fff] relative overflow-hidden z-10 mt-[426px] mr-0 mb-0 ml-[31px]">
                    <span className="flex w-[40px] h-[24px] justify-center items-start font-['Montserrat'] text-[16px] font-bold leading-[24px] text-[#252b42] tracking-[0.1px] absolute top-[calc(50%-12px)] left-[calc(50%-21px)] text-center whitespace-nowrap">
                      MEN
                    </span>
                  </div>
                  <div className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden">
                    <div className="w-full h-full bg-[rgba(33,33,33,0.05)] bg-[url(/src/assets/images/shopping-img/men.jpg)] bg-cover bg-no-repeat relative overflow-hidden mt-0 mr-0 mb-0 ml-px" />
                    <div className="bg-[url(/src/assets/images/shopping-img/men.jpg)] bg-cover bg-no-repeat absolute top-0 bottom-0 left-0 right-0 overflow-hidden" />
                  </div>
                </div>
              </div>
              {/* WOMEN */}
              <div className="row-span-2 col-span-1 w-[240px] h-[500px] shrink-0 relative overflow-hidden">
                <div className="w-full h-full bg-[#fff] absolute top-0 left-0 overflow-hidden">
                  <div className="flex w-[136px] pt-[12px] pr-[48px] pb-[12px] pl-[48px] gap-[10px] justify-center items-center flex-nowrap bg-[#fff] relative overflow-hidden z-10 mt-[434px] mr-0 mb-0 ml-[21px]">
                    <span className="flex w-[69px] h-[24px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[16px] font-bold leading-[24px] text-[#252b42] tracking-[0.1px] relative text-center whitespace-nowrap">
                      WOMEN
                    </span>
                  </div>
                  <div className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden">
                    <div className="w-full h-full bg-[rgba(33,33,33,0.05)] bg-[url(/src/assets/images/shopping-img/women.jpg)] bg-cover bg-top bg-no-repeat relative overflow-hidden mt-0 mr-0 mb-0 ml-px" />
                    <div className="bg-[url(/src/assets/images/shopping-img/women.jpg)] bg-cover bg-top bg-no-repeat absolute top-0 bottom-0 left-0 right-0 overflow-hidden group cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg" />
                  </div>
                </div>
              </div>
              {/* ACCESSORIES */}
              <div className="row-span-1 col-span-1 w-[240px] h-[245px] shrink-0 relative overflow-hidden">
                <div className="w-full h-full bg-[#fff] absolute top-0 left-0 overflow-hidden">
                  <div className="flex w-[118px] pt-[12px] pr-[40px] pb-[12px] pl-[40px] gap-[10px] justify-center items-center flex-nowrap bg-[#fff] relative overflow-hidden z-10 mt-[161px] mr-0 mb-0 ml-[21px]">
                    <span className="flex w-[69px] h-[24px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[16px] font-bold leading-[24px] text-[#252b42] tracking-[0.1px] relative text-center whitespace-nowrap">
                      ACCESSORIES
                    </span>
                  </div>
                  <div className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden">
                    <div className="w-full h-full bg-[rgba(33,33,33,0.05)] bg-[url(/src/assets/images/shopping-img/accessories.jpg)] bg-cover bg-no-repeat relative overflow-hidden mt-0 mr-0 mb-0 ml-px" />
                    <div className="bg-[url(/src/assets/images/shopping-img/accessories.jpg)] bg-cover bg-no-repeat absolute top-0 bottom-0 left-0 right-0 overflow-hidden group cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg" />
                  </div>
                </div>
              </div>
              {/* KIDS */}
              <div className="row-span-1 col-span-1 w-[240px] h-[245px] shrink-0 relative overflow-hidden">
                <div className="w-full h-full bg-[#fff] absolute top-0 left-0 overflow-hidden">
                  <div className="flex w-[69px] pt-[12px] pr-[40px] pb-[12px] pl-[40px] gap-[10px] justify-center items-center flex-nowrap bg-[#fff] relative overflow-hidden z-10 mt-[161px] mr-0 mb-0 ml-[21px]">
                    <span className="flex w-[69px] h-[24px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[16px] font-bold leading-[24px] text-[#252b42] tracking-[0.1px] relative text-center whitespace-nowrap">
                      KIDS
                    </span>
                  </div>
                  <div className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden">
                    <div className="w-full h-full bg-[rgba(33,33,33,0.05)] bg-[url(/src/assets/images/shopping-img/kids.jpg)] bg-cover bg-no-repeat relative overflow-hidden mt-0 mr-0 mb-0 ml-px" />
                    <div className="bg-[url(/src/assets/images/shopping-img/kids.jpg)] bg-cover bg-no-repeat absolute top-0 bottom-0 left-0 right-0 overflow-hidden group cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>

        {/* Bestseller Products Section */}
        <div className="w-full h-auto md:h-[1652px] shrink-0 bg-[#fff] relative overflow-hidden">
          <div className="flex w-full max-w-[1124px] px-4 md:px-0 pt-[50px] md:pt-[80px] pr-0 pb-[50px] md:pb-[80px] pl-0 flex-col gap-[50px] md:gap-[80px] items-center flex-nowrap relative overflow-hidden mx-auto">
            <div className="flex w-full max-w-[692px] flex-col items-center shrink-0 flex-nowrap relative overflow-hidden px-4 md:px-0">
              <div className="flex w-full flex-col gap-[10px] items-center shrink-0 flex-nowrap relative overflow-hidden">
                <span className="flex w-auto h-auto md:h-[30px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[20px] font-normal leading-[30px] text-[#727272] tracking-[0.2px] relative text-center whitespace-nowrap">
                  Featured Products
                </span>
                <span className="flex w-auto h-auto md:h-[32px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[24px] font-bold leading-[32px] text-[#252b42] tracking-[0.1px] relative text-center whitespace-nowrap">
                  BESTSELLER PRODUCTS
                </span>
                <span className="flex w-full max-w-[347px] h-auto md:h-[20px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[14px] font-normal leading-[20px] text-[#727272] tracking-[0.2px] relative text-center px-4 md:px-0">
                  Problems trying to resolve the conflict between{" "}
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-[24px] w-full px-2 md:grid-cols-2 lg:grid-cols-4 md:gap-[30px] max-w-[1049px] md:px-0">
              {products.slice(0, 4).map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] w-full max-w-[1049px] px-4 md:px-0">
              {products.slice(4, 8).map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </div>
        </div>

        {/* Vita Classic Product Section - Mobil ve Web Ayrımı */}
        {/* Mobil (md:hidden) - Referans görseldeki gibi */}
        <div className="block md:hidden w-full h-[900px] relative bg-[#219177] overflow-hidden rounded-[5px] border-solid border border-[#dedede] my-8">
          <div className="flex flex-col items-center w-full pt-12 px-6 pb-0 relative z-10" style={{minHeight:'520px'}}>
            <span className="text-xs text-white tracking-widest mb-4 mt-2">SUMMER 2020</span>
            <span className="text-3xl font-bold text-white text-center leading-tight mb-4">Vita Classic<br/>Product</span>
            <span className="text-white text-center text-base mb-6 max-w-[260px]">We know how large objects will act, but things on a small scale.</span>
            <span className="text-white text-2xl font-bold mb-4">$16.48</span>
            <div className="flex items-center justify-center w-full mb-4 gap-4">
              <button className="text-white text-3xl p-2">&#60;</button>
              <button className="bg-[#3CCB7F] text-white font-semibold px-8 py-2 rounded">ADD TO CART</button>
              <button className="text-white text-3xl p-2">&#62;</button>
            </div>
            <div className="h-[80px] md:h-[120px]" />
          </div>
          <div className="w-full flex justify-center absolute left-0 right-0" style={{bottom:0}}>
            <img src="/src/assets/images/header-img/summer-banner.png" alt="model" className="w-[320px] h-auto z-0" style={{maxWidth:'90vw'}} />
          </div>
        </div>

        {/* Web (md:block) - Orijinal kod */}
        <div className="hidden md:block w-full h-auto md:h-[709px] shrink-0 bg-[#fff] rounded-[5px] border-solid border border-[#dedede] relative">
          <div className="h-auto md:h-[709px] relative md:absolute top-0 md:top-[-1px] left-0 md:left-[-1px] right-0 md:right-[-1px] overflow-hidden">
            <div className="w-[126px] h-[10px] bg-[url(/src/assets/images/featured-img/static.png)] bg-cover bg-no-repeat hidden md:block relative overflow-hidden mt-[650px] mr-0 mb-0 ml-[657px]" />
            <div className="w-[126px] h-[10px] bg-[url(/src/assets/images/featured-img/static.png)] bg-cover bg-no-repeat absolute bottom-[59px] left-[63px] z-[87] swiper-pagination-custom" />
            <div className="absolute bottom-[59px] left-1/2 -translate-x-1/2 z-[88] flex flex-row items-end">
              <img src={carouselCaptions2} alt="carouselCaptions2" className="w-[63px] h-[10px] m-0 p-0" />
              <img src={carouselCaptions1} alt="carouselCaptions1" className="w-[63px] h-[10px] m-0 p-0" />
            </div>
            <div className="w-full h-auto md:h-[709px] relative md:absolute top-0 left-0 right-0 overflow-hidden">
              <div className="w-full h-auto md:h-[711px] bg-[#23856d] relative md:absolute top-0 left-0 right-0 overflow-hidden z-[1]" />
              <div className="flex w-full max-w-[1036px] px-4 md:px-0 h-auto md:h-[711px] pt-[50px] md:pt-[112px] pr-0 pb-[50px] md:pb-[112px] pl-0 flex-col gap-[50px] md:gap-[80px] items-start flex-nowrap relative overflow-hidden mx-auto z-[2]">
                <div className="flex w-full flex-col md:flex-row h-auto md:h-[599px] gap-[30px] items-start shrink-0 flex-nowrap relative overflow-hidden">
                  <div className="flex w-full md:w-[509px] pt-[30px] md:pt-[60px] pr-0 pb-0 pl-0 flex-col gap-[20px] md:gap-[30px] items-start shrink-0 flex-nowrap relative overflow-hidden">
                    <span className="h-auto md:h-[30px] shrink-0 basis-auto font-['Montserrat'] text-[18px] md:text-[20px] font-normal leading-[26px] md:leading-[30px] text-[#fff] tracking-[0.2px] relative text-left whitespace-nowrap">
                      SUMMER 2020
                    </span>
                    <span className="flex w-full md:w-[509px] h-auto md:h-[160px] justify-start items-start shrink-0 font-['Montserrat'] text-[36px] md:text-[58px] font-bold leading-[44px] md:leading-[80px] text-[#fff] tracking-[0.2px] relative text-left">
                      Vita Classic Product
                    </span>
                    <span className="flex w-full md:w-[341px] h-auto md:h-[40px] justify-start items-start shrink-0 font-['Montserrat'] text-[14px] font-normal leading-[20px] text-[#fff] tracking-[0.2px] relative text-left">
                      We know how large objects will act, We know how are objects will act, We know
                    </span>
                    <div className="flex w-full md:w-[295px] gap-[20px] md:gap-[34px] items-center shrink-0 flex-col md:flex-row flex-nowrap relative">
                      <span className="flex w-[77px] h-[32px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[24px] font-bold leading-[32px] text-[#fff] tracking-[0.1px] relative text-center whitespace-nowrap">
                        ₺16.48
                      </span>
                      <button className="flex w-[184px] pt-[15px] pr-[40px] pb-[15px] pl-[40px] flex-col gap-[10px] items-center shrink-0 flex-nowrap bg-[#2cc070] rounded-[5px] relative overflow-hidden">
                        <span className="flex w-[104px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[14px] font-bold leading-[22px] text-[#fff] tracking-[0.2px] relative text-center whitespace-nowrap hover:opacity-80 hover:scale-105 transition-all duration-200 cursor-pointer">
                          ADD TO CART
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="flex w-full md:w-[510px] flex-col items-center shrink-0 flex-nowrap relative overflow-hidden">
                    <div className="w-full md:w-[443px] h-[400px] md:h-[685px] shrink-0 bg-[url(/src/assets/images/header-img/summer-banner.png)] bg-cover bg-center md:bg-top bg-no-repeat relative" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[24px] h-[44.471px] absolute top-[401px] left-[40px] overflow-hidden z-[3]">
              <div className="w-[24px] h-[44.471px] bg-[url(/src/assets/images/featured-img/arrow-left.png)] bg-cover bg-no-repeat relative overflow-hidden mt-0 mr-0 mb-0 ml-0" />
            </div>
            <div className="w-[24px] h-[44.471px] absolute top-[401px] right-[40px] overflow-hidden z-[3]">
              <div className="w-[24px] h-[44.471px] bg-[url(/src/assets/images/featured-img/arrow-right.png)] bg-cover bg-no-repeat absolute top-1/2 right-0 translate-x-0 translate-y-[-50%] overflow-hidden" />
            </div>
          </div>
        </div>

        {/* Part of the Neural Universe Section */}
        <div className="w-full h-auto md:h-[682px] shrink-0 bg-[#fff] relative overflow-hidden">
            <div className="block md:hidden w-full bg-white pt-10 pb-0 flex flex-col items-center relative overflow-hidden">
              <span className="text-base font-bold text-[#bdbdbd] mb-4">SUMMER 2020</span>
              <h2 className="text-2xl font-bold text-[#252b42] text-center mb-4 leading-tight">Part of the<br/>Neural Universe</h2>
              <span className="text-[#727272] text-center text-base mb-6 max-w-[300px]">We know how large objects will act, but things on a small scale.</span>
              <button className="w-[180px] h-[48px] bg-[#23a6f0] rounded-[7px] text-white font-bold text-base mb-3">BUY NOW</button>
              <button className="w-[180px] h-[48px] border border-[#23a6f0] rounded-[7px] text-[#23a6f0] font-bold text-base mb-6">Learn More</button>
              <img src="/src/assets/images/header-img/neural-banner.png" alt="neural" className="w-[320px] h-auto object-contain mb-0" style={{maxWidth:'90vw'}} />
            </div>
            <div className="hidden md:block w-full h-auto md:h-[682px] shrink-0 bg-[#fff] relative overflow-hidden">
              <div className="flex w-full items-center flex-col md:flex-row flex-nowrap relative overflow-hidden">
                <div className="w-full md:w-[50%] h-[400px] md:h-[682px] shrink-0 relative overflow-hidden">
                  <img src="/src/assets/images/header-img/neural-banner.png" alt="" className="w-full h-full object-cover object-center" />
                </div>
                <div className="flex flex-1 flex-col gap-[20px] md:gap-[30px] justify-center items-start flex-nowrap relative px-[24px] md:px-[80px] py-[50px] md:py-0">
                  <span className="h-[24px] shrink-0 basis-auto font-['Montserrat'] text-[16px] font-bold leading-[24px] text-[#bdbdbd] tracking-[0.1px] relative text-left whitespace-nowrap">
                    SUMMER 2020
                  </span>
                  <h2 className="font-['Montserrat'] text-[28px] md:text-[40px] font-bold leading-[38px] md:leading-[50px] text-[#252b42] tracking-[0.2px] relative text-left">
                    Part of the Neural<br />Universe
                  </h2>
                  <span className="flex w-full max-w-[376px] h-auto md:h-[60px] justify-start items-start shrink-0 font-['Montserrat'] text-[18px] md:text-[20px] font-normal leading-[28px] md:leading-[30px] text-[#727272] tracking-[0.2px] relative text-left overflow-hidden">
                    We know how large objects will act, <br />
                    but things on a small scale.
                  </span>
                  <div className="flex w-full md:w-[339px] gap-[10px] items-start shrink-0 flex-col md:flex-row flex-nowrap relative">
                    <button className="flex w-[156px] pt-[15px] pr-[40px] pb-[15px] pl-[40px] flex-col gap-[10px] items-center shrink-0 flex-nowrap bg-[#2cc070] rounded-[5px] relative overflow-hidden">
                      <span className="flex w-[76px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[14px] font-bold leading-[22px] text-[#fff] tracking-[0.2px] relative text-center whitespace-nowrap hover:opacity-80 hover:scale-105 transition-all duration-200 cursor-pointer">
                        BUY NOW
                      </span>
                    </button>
                    <button className="flex w-[173px] pt-[15px] pr-[40px] pb-[15px] pl-[40px] flex-col gap-[10px] items-center shrink-0 flex-nowrap rounded-[5px] border-solid border border-[#2cc070] relative overflow-hidden">
                      <span className="flex w-[93px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[14px] font-bold leading-[22px] text-[#2cc070] tracking-[0.2px] relative text-center whitespace-nowrap hover:opacity-80 hover:scale-105 transition-all duration-200 cursor-pointer">
                        READ MORE
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
        </div>

        {/* Featured Posts Section */}
        <div className="w-full h-auto md:h-[1044px] shrink-0 bg-[#fff] relative overflow-hidden">
          <div className="flex w-full max-w-[1050px] px-4 md:px-0 pt-[60px] md:pt-[112px] pr-0 pb-[60px] md:pb-[112px] pl-0 flex-col gap-[50px] md:gap-[80px] items-center flex-nowrap relative overflow-hidden mx-auto">
            <div className="flex w-full max-w-[692px] flex-col items-center shrink-0 flex-nowrap relative overflow-hidden px-4 md:px-0">
              <div className="flex w-full flex-col gap-[10px] items-center shrink-0 flex-nowrap relative overflow-hidden">
                <span className="flex w-auto h-auto md:h-[24px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#23a6f0] tracking-[0.2px] relative text-center whitespace-nowrap">
                  Practice Advice
                </span>
                <span className="flex w-auto h-auto md:h-[50px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[28px] md:text-[40px] font-bold leading-[38px] md:leading-[50px] text-[#252b42] tracking-[0.2px] relative text-center whitespace-nowrap">
                  Featured Posts
                </span>
                <span className="flex w-full max-w-[469px] h-auto md:h-[40px] justify-center items-start shrink-0 font-['Montserrat'] text-[14px] font-normal leading-[20px] text-[#727272] tracking-[0.2px] relative text-center px-4 md:px-0">
                  Problems trying to resolve the conflict between <br />
                  the two major realms of Classical physics: Newtonian mechanics{" "}
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] w-full max-w-[1045px] px-4 md:px-0 justify-center items-center">
              {/* Blog Card 1 */}
              <div className="flex w-full max-w-[348px] mx-auto flex-col items-center shrink-0 flex-nowrap relative group cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg">
                <div className="flex w-full max-w-[348px] flex-col items-start shrink-0 flex-nowrap bg-[#fff] relative overflow-hidden shadow-[0_2px_4px_0_rgba(0,0,0,0.1)] group-hover:shadow-lg group-hover:scale-105 transition-all duration-200">
                  <div className="h-[300px] self-stretch shrink-0 relative overflow-hidden">
                    <div className="flex w-[58px] pt-0 pr-[10px] pb-0 pl-[10px] items-center flex-nowrap bg-[#e64040] rounded-[3px] relative overflow-hidden shadow-[0_2px_4px_0_rgba(0,0,0,0.1)] z-[303] mt-[20px] mr-0 mb-0 ml-[20px]">
                      <span className="flex w-[38px] h-[24px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#fff] tracking-[0.2px] relative text-center whitespace-nowrap z-[304]">
                        NEW
                      </span>
                    </div>
                                      <div className="bg-[url(/src/assets/images/featured-img/featured1.jpg)] bg-cover bg-no-repeat absolute top-0 bottom-0 left-0 right-0 overflow-hidden" />
                  </div>
                  <div className="flex pt-[25px] pr-[25px] pb-[35px] pl-[25px] flex-col gap-[10px] items-start self-stretch shrink-0 flex-nowrap relative overflow-hidden">
                    <div className="flex w-[159px] gap-[15px] items-center shrink-0 flex-nowrap relative overflow-hidden">
                      <span className="h-[16px] shrink-0 basis-auto font-['Montserrat'] text-[12px] font-normal leading-[16px] text-[#8ec2f2] tracking-[0.2px] relative text-left whitespace-nowrap">
                        Google
                      </span>
                      <span className="h-[16px] shrink-0 basis-auto font-['Montserrat'] text-[12px] font-normal leading-[16px] text-[#727272] tracking-[0.2px] relative text-left whitespace-nowrap">
                        Trending
                      </span>
                      <span className="h-[16px] shrink-0 basis-auto font-['Montserrat'] text-[12px] font-normal leading-[16px] text-[#727272] tracking-[0.2px] relative text-left whitespace-nowrap">
                        New
                      </span>
                    </div>
                    <span className="flex w-[247px] h-[60px] justify-start items-start shrink-0 font-['Montserrat'] text-[20px] font-normal leading-[30px] text-[#252b42] tracking-[0.2px] relative text-left overflow-hidden">
                      Loudest à la Madison #1 <br />
                      (L'integral)
                    </span>
                    <span className="flex w-[280px] h-[60px] justify-start items-start shrink-0 font-['Montserrat'] text-[14px] font-normal leading-[20px] text-[#727272] tracking-[0.2px] relative text-left overflow-hidden">
                      We focus on ergonomics and meeting <br />
                      you where you work. It's only a <br />
                      keystroke away.
                    </span>
                    <div className="flex pt-[15px] pr-0 pb-[15px] pl-0 justify-between items-center self-stretch shrink-0 flex-nowrap relative overflow-hidden">
                      <div className="flex w-[98px] gap-[5px] items-center shrink-0 flex-nowrap relative overflow-hidden">
                        <div className="w-[16px] h-[16px] shrink-0 relative overflow-hidden">
                                                  <div className="w-[16px] h-[16px] bg-[url(/src/assets/images/featured-img/clock.png)] bg-cover bg-no-repeat absolute top-0 left-0 overflow-hidden" />
                        </div>
                        <span className="h-[16px] shrink-0 basis-auto font-['Montserrat'] text-[12px] font-normal leading-[16px] text-[#727272] tracking-[0.2px] relative text-left whitespace-nowrap">
                          22 April 2021
                        </span>
                      </div>
                      <div className="flex w-[105px] gap-[5px] items-center shrink-0 flex-nowrap relative overflow-hidden">
                        <img
                          src={staticImg}
                          alt="static"
                          className="w-[16px] h-[16px] shrink-0 relative overflow-hidden"
                          style={{ display: 'inline-block', verticalAlign: 'middle' }}
                        />
                        <span className="h-[16px] shrink-0 basis-auto font-['Montserrat'] text-[12px] font-normal leading-[16px] text-[#727272] tracking-[0.2px] relative text-left whitespace-nowrap">
                          10 comments
                        </span>
                      </div>
                    </div>
                    <div className="flex w-[104px] gap-[10px] items-center shrink-0 flex-nowrap relative overflow-hidden">
                      <span className="h-[24px] shrink-0 basis-auto font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#727272] tracking-[0.2px] relative text-left whitespace-nowrap group-hover:opacity-80 group-hover:scale-110 transition-all duration-200 cursor-pointer">
                        Learn More
                      </span>
                                          <div className="w-[9px] h-[16px] shrink-0 bg-[url(/src/assets/images/featured-img/arrow.png)] bg-[length:100%_100%] bg-no-repeat relative overflow-hidden group-hover:opacity-80 group-hover:scale-110 transition-all duration-200" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Blog Card 2 */}
              <div className="flex w-full max-w-[348px] mx-auto flex-col items-center shrink-0 flex-nowrap relative group cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg">
                <div className="flex w-full max-w-[348px] flex-col items-start shrink-0 flex-nowrap bg-[#fff] relative overflow-hidden shadow-[0_2px_4px_0_rgba(0,0,0,0.1)] group-hover:shadow-lg group-hover:scale-105 transition-all duration-200">
                  <div className="h-[300px] self-stretch shrink-0 relative overflow-hidden">
                    <div className="flex w-[58px] pt-0 pr-[10px] pb-0 pl-[10px] items-center flex-nowrap bg-[#e64040] rounded-[3px] relative overflow-hidden shadow-[0_2px_4px_0_rgba(0,0,0,0.1)] z-[327] mt-[20px] mr-0 mb-0 ml-[20px]">
                      <span className="flex w-[38px] h-[24px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#fff] tracking-[0.2px] relative text-center whitespace-nowrap z-[328]">
                        NEW
                      </span>
                    </div>
                                      <div className="bg-[url(/src/assets/images/featured-img/featured2.jpg)] bg-cover bg-no-repeat absolute top-0 bottom-0 left-0 right-0 overflow-hidden" />
                  </div>
                  <div className="flex pt-[25px] pr-[25px] pb-[35px] pl-[25px] flex-col gap-[10px] items-start self-stretch shrink-0 flex-nowrap relative overflow-hidden">
                    <div className="flex w-[159px] gap-[15px] items-center shrink-0 flex-nowrap relative overflow-hidden">
                      <span className="h-[16px] shrink-0 basis-auto font-['Montserrat'] text-[12px] font-normal leading-[16px] text-[#8ec2f2] tracking-[0.2px] relative text-left whitespace-nowrap">
                        Google
                      </span>
                      <span className="h-[16px] shrink-0 basis-auto font-['Montserrat'] text-[12px] font-normal leading-[16px] text-[#727272] tracking-[0.2px] relative text-left whitespace-nowrap">
                        Trending
                      </span>
                      <span className="h-[16px] shrink-0 basis-auto font-['Montserrat'] text-[12px] font-normal leading-[16px] text-[#727272] tracking-[0.2px] relative text-left whitespace-nowrap">
                        New
                      </span>
                    </div>
                    <span className="flex w-[247px] h-[60px] justify-start items-start shrink-0 font-['Montserrat'] text-[20px] font-normal leading-[30px] text-[#252b42] tracking-[0.2px] relative text-left overflow-hidden">
                      Loudest à la Madison #1 <br />
                      (L'integral)
                    </span>
                    <span className="flex w-[280px] h-[60px] justify-start items-start shrink-0 font-['Montserrat'] text-[14px] font-normal leading-[20px] text-[#727272] tracking-[0.2px] relative text-left overflow-hidden">
                      We focus on ergonomics and meeting <br />
                      you where you work. It's only a <br />
                      keystroke away.
                    </span>
                    <div className="flex pt-[15px] pr-0 pb-[15px] pl-0 justify-between items-center self-stretch shrink-0 flex-nowrap relative overflow-hidden">
                      <div className="flex w-[98px] gap-[5px] items-center shrink-0 flex-nowrap relative overflow-hidden">
                        <div className="w-[16px] h-[16px] shrink-0 relative overflow-hidden">
                                                  <div className="w-[16px] h-[16px] bg-[url(/src/assets/images/featured-img/clock.png)] bg-cover bg-no-repeat absolute top-0 left-0 overflow-hidden" />
                        </div>
                        <span className="h-[16px] shrink-0 basis-auto font-['Montserrat'] text-[12px] font-normal leading-[16px] text-[#727272] tracking-[0.2px] relative text-left whitespace-nowrap">
                          22 April 2021
                        </span>
                      </div>
                      <div className="flex w-[105px] gap-[5px] items-center shrink-0 flex-nowrap relative overflow-hidden">
                        <img
                          src={staticImg}
                          alt="static"
                          className="w-[16px] h-[16px] shrink-0 relative overflow-hidden"
                          style={{ display: 'inline-block', verticalAlign: 'middle' }}
                        />
                        <span className="h-[16px] shrink-0 basis-auto font-['Montserrat'] text-[12px] font-normal leading-[16px] text-[#727272] tracking-[0.2px] relative text-left whitespace-nowrap">
                          10 comments
                        </span>
                      </div>
                    </div>
                    <div className="flex w-[104px] gap-[10px] items-center shrink-0 flex-nowrap relative overflow-hidden">
                      <span className="h-[24px] shrink-0 basis-auto font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#727272] tracking-[0.2px] relative text-left whitespace-nowrap group-hover:opacity-80 group-hover:scale-110 transition-all duration-200 cursor-pointer">
                        Learn More
                      </span>
                                          <div className="w-[9px] h-[16px] shrink-0 bg-[url(/src/assets/images/featured-img/arrow.png)] bg-[length:100%_100%] bg-no-repeat relative overflow-hidden group-hover:opacity-80 group-hover:scale-110 transition-all duration-200" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Blog Card 3 */}
              <div className="flex w-full max-w-[348px] mx-auto flex-col items-center shrink-0 flex-nowrap relative group cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg">
                <div className="flex w-full max-w-[348px] flex-col items-start shrink-0 flex-nowrap bg-[#fff] relative overflow-hidden shadow-[0_2px_4px_0_rgba(0,0,0,0.1)] group-hover:shadow-lg group-hover:scale-105 transition-all duration-200">
                  <div className="h-[300px] self-stretch shrink-0 relative overflow-hidden">
                    <div className="flex w-[58px] pt-0 pr-[10px] pb-0 pl-[10px] items-center flex-nowrap bg-[#e64040] rounded-[3px] relative overflow-hidden shadow-[0_2px_4px_0_rgba(0,0,0,0.1)] z-[351] mt-[20px] mr-0 mb-0 ml-[20px]">
                      <span className="flex w-[38px] h-[24px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#fff] tracking-[0.2px] relative text-center whitespace-nowrap z-[352]">
                        NEW
                      </span>
                    </div>
                                      <div className="bg-[url(/src/assets/images/featured-img/featured3.jpg)] bg-cover bg-no-repeat absolute top-0 bottom-0 left-0 right-0 overflow-hidden" />
                  </div>
                  <div className="flex pt-[25px] pr-[25px] pb-[35px] pl-[25px] flex-col gap-[10px] items-start self-stretch shrink-0 flex-nowrap relative overflow-hidden">
                    <div className="flex w-[159px] gap-[15px] items-center shrink-0 flex-nowrap relative overflow-hidden">
                      <span className="h-[16px] shrink-0 basis-auto font-['Montserrat'] text-[12px] font-normal leading-[16px] text-[#8ec2f2] tracking-[0.2px] relative text-left whitespace-nowrap">
                        Google
                      </span>
                      <span className="h-[16px] shrink-0 basis-auto font-['Montserrat'] text-[12px] font-normal leading-[16px] text-[#727272] tracking-[0.2px] relative text-left whitespace-nowrap">
                        Trending
                      </span>
                      <span className="h-[16px] shrink-0 basis-auto font-['Montserrat'] text-[12px] font-normal leading-[16px] text-[#727272] tracking-[0.2px] relative text-left whitespace-nowrap">
                        New
                      </span>
                    </div>
                    <span className="flex w-[247px] h-[60px] justify-start items-start shrink-0 font-['Montserrat'] text-[20px] font-normal leading-[30px] text-[#252b42] tracking-[0.2px] relative text-left overflow-hidden">
                      Loudest à la Madison #1 <br />
                      (L'integral)
                    </span>
                    <span className="flex w-[280px] h-[60px] justify-start items-start shrink-0 font-['Montserrat'] text-[14px] font-normal leading-[20px] text-[#727272] tracking-[0.2px] relative text-left overflow-hidden">
                      We focus on ergonomics and meeting <br />
                      you where you work. It's only a <br />
                      keystroke away.
                    </span>
                    <div className="flex pt-[15px] pr-0 pb-[15px] pl-0 justify-between items-center self-stretch shrink-0 flex-nowrap relative overflow-hidden">
                      <div className="flex w-[98px] gap-[5px] items-center shrink-0 flex-nowrap relative overflow-hidden">
                        <div className="w-[16px] h-[16px] shrink-0 relative overflow-hidden">
                                                  <div className="w-[16px] h-[16px] bg-[url(/src/assets/images/featured-img/clock.png)] bg-cover bg-no-repeat absolute top-0 left-0 overflow-hidden" />
                        </div>
                        <span className="h-[16px] shrink-0 basis-auto font-['Montserrat'] text-[12px] font-normal leading-[16px] text-[#727272] tracking-[0.2px] relative text-left whitespace-nowrap">
                          22 April 2021
                        </span>
                      </div>
                      <div className="flex w-[105px] gap-[5px] items-center shrink-0 flex-nowrap relative overflow-hidden">
                        <img
                          src={staticImg}
                          alt="static"
                          className="w-[16px] h-[16px] shrink-0 relative overflow-hidden"
                          style={{ display: 'inline-block', verticalAlign: 'middle' }}
                        />
                        <span className="h-[16px] shrink-0 basis-auto font-['Montserrat'] text-[12px] font-normal leading-[16px] text-[#727272] tracking-[0.2px] relative text-left whitespace-nowrap">
                          10 comments
                        </span>
                      </div>
                    </div>
                    <div className="flex w-[104px] gap-[10px] items-center shrink-0 flex-nowrap relative overflow-hidden">
                      <span className="h-[24px] shrink-0 basis-auto font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#727272] tracking-[0.2px] relative text-left whitespace-nowrap group-hover:opacity-80 group-hover:scale-110 transition-all duration-200 cursor-pointer">
                        Learn More
                      </span>
                                          <div className="w-[9px] h-[16px] shrink-0 bg-[url(/src/assets/images/featured-img/arrow.png)] bg-[length:100%_100%] bg-no-repeat relative overflow-hidden group-hover:opacity-80 group-hover:scale-110 transition-all duration-200" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      

      
      {/* Footer */}
      <Footer />
    </div>
  );
}
