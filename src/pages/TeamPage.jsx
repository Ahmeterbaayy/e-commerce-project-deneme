import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Username",
      profession: "Profession",
      image: "/src/assets/images/teamPage-img/personal1.jpg"
    },
    {
      name: "Username",
      profession: "Profession",
      image: "/src/assets/images/teamPage-img/personal2.jpg"
    },
    {
      name: "Username",
      profession: "Profession",
      image: "/src/assets/images/teamPage-img/personal3.jpg"
    },
    {
      name: "Username",
      profession: "Profession", 
      image: "/src/assets/images/teamPage-img/personal4.jpg"
    },
    {
      name: "Username",
      profession: "Profession",
      image: "/src/assets/images/teamPage-img/personal5.jpg"
    },
    {
      name: "Username",
      profession: "Profession",
      image: "/src/assets/images/teamPage-img/personal6.jpg"
    },
    {
      name: "Username",
      profession: "Profession",
      image: "/src/assets/images/teamPage-img/personal7.jpg"
    },
    {
      name: "Username",
      profession: "Profession",
      image: "/src/assets/images/teamPage-img/personal8.jpg"
    },
    {
      name: "Username",
      profession: "Profession",
      image: "/src/assets/images/teamPage-img/personal9.jpg"
    }
  ];

  return (
    <div className="main-container flex w-full flex-col items-start flex-nowrap bg-[#fff] relative overflow-hidden">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <div className="w-full h-[384px] shrink-0 bg-[#fff] relative overflow-hidden">
        <div className="h-[352px] absolute top-0 left-0 right-0 overflow-hidden z-[1]">
          <div className="bg-[rgba(255,255,255,0.5)] absolute top-0 bottom-0 left-0 right-0 overflow-hidden z-[2]" />
        </div>

        {/* Hero section yukarı alındı, boşluk azaltıldı */}
        <div className="flex w-full max-w-[1000px] h-[220px] pt-[20px] pr-0 pb-[20px] pl-0 flex-col items-center flex-nowrap absolute top-[40px] left-1/2 translate-x-[-50%] translate-y-0 z-[29]">
          <div className="flex w-full items-center shrink-0 flex-nowrap relative z-30">
            <div className="flex w-full flex-col gap-[16px] items-center shrink-0 flex-nowrap relative z-[31]">
              <span className="flex w-[111px] h-[24px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[16px] font-bold leading-[24px] text-[#727272] tracking-[0.1px] relative text-center whitespace-nowrap z-[32]">
                WHAT WE DO
              </span>
              <span className="flex w-full px-4 min-h-[80px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[58px] font-bold leading-[80px] text-[#252b42] tracking-[0.2px] relative text-center whitespace-nowrap z-[33]">
                Innovation tailored for you
              </span>
              <div className="flex w-[122px] pt-[10px] pr-0 pb-[10px] pl-0 gap-[15px] items-center shrink-0 flex-nowrap relative overflow-hidden z-[34]">
                <span className="flex w-[43px] h-[24px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#252b42] tracking-[0.2px] relative text-center whitespace-nowrap z-[35]">
                  Home
                </span>
                <div className="w-[9px] h-[16px] shrink-0 relative overflow-hidden z-[36]">
                  <svg className="w-full h-full" viewBox="0 0 9 16" fill="none">
                    <path d="M0.5 0L8.5 8L0.5 16" stroke="#BDBDBD" strokeWidth="2"/>
                  </svg>
                </div>
                <span className="flex w-[40px] h-[24px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#727272] tracking-[0.2px] relative text-center whitespace-nowrap z-[37]">
                  Team
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery Section */}
      <div className="w-full h-[530px] shrink-0 bg-[#fff] relative overflow-hidden z-[38]">
        <div className="h-[530px] absolute top-0 left-0 right-0 overflow-hidden z-[39]">
          <div className="w-[1440px] h-[530px] absolute top-0 left-1/2 translate-x-[-50%] overflow-hidden z-40">
            <div className="w-[700px] h-[530px] bg-[url(/src/assets/images/teamPage-img/teamleft.jpg)] bg-cover bg-no-repeat absolute top-0 left-0 z-[41] transition-all duration-300 hover:shadow-2xl hover:scale-105 active:shadow-2xl active:scale-100 focus:shadow-2xl focus:scale-100 cursor-pointer outline-none" tabIndex={0} />
            <div className="w-[361px] h-[260px] bg-[url(/src/assets/images/teamPage-img/teamright1.jpg)] bg-cover bg-no-repeat absolute top-0 left-[709px] z-[42] transition-all duration-300 hover:shadow-2xl hover:scale-105 active:shadow-2xl active:scale-100 focus:shadow-2xl focus:scale-100 cursor-pointer outline-none" tabIndex={0} />
            <div className="w-[361px] h-[260px] bg-[url(/src/assets/images/teamPage-img/teamright2.jpg)] bg-cover bg-no-repeat absolute top-0 left-[1079px] z-[44] transition-all duration-300 hover:shadow-2xl hover:scale-105 active:shadow-2xl active:scale-100 focus:shadow-2xl focus:scale-100 cursor-pointer outline-none" tabIndex={0} />
            <div className="w-[361px] h-[260px] bg-[url(/src/assets/images/teamPage-img/teamright3.jpg)] bg-cover bg-no-repeat absolute top-[270px] left-[709px] z-[43] transition-all duration-300 hover:shadow-2xl hover:scale-105 active:shadow-2xl active:scale-100 focus:shadow-2xl focus:scale-100 cursor-pointer outline-none" tabIndex={0} />
            <div className="w-[361px] h-[260px] bg-[url(/src/assets/images/teamPage-img/teamright4.jpg)] bg-cover bg-no-repeat absolute top-[270px] left-[1079px] z-[45] transition-all duration-300 hover:shadow-2xl hover:scale-105 active:shadow-2xl active:scale-100 focus:shadow-2xl focus:scale-100 cursor-pointer outline-none" tabIndex={0} />
          </div>
        </div>
      </div>

      {/* Team Members Section */}
      <div className="w-full shrink-0 bg-[#fff] relative overflow-hidden z-[46] py-[112px]">
        <div className="flex w-full max-w-[1050px] px-4 flex-col gap-[112px] items-center flex-nowrap relative overflow-hidden z-[47] mx-auto">
          {/* Section Title */}
          <div className="flex w-full max-w-[607px] flex-col items-center shrink-0 flex-nowrap relative overflow-hidden z-[48]">
            <div className="flex w-full flex-col gap-[10px] items-center shrink-0 flex-nowrap relative overflow-hidden z-[49]">
              <span className="h-[50px] shrink-0 basis-auto font-['Montserrat'] text-[40px] font-bold leading-[50px] text-[#252b42] tracking-[0.2px] relative text-left whitespace-nowrap z-50">
                Meet Our Team
              </span>
            </div>
          </div>

          {/* Team Grid - Dynamic Hover Cards */}
          <div className="flex w-full max-w-[1034px] gap-[30px] items-center shrink-0 flex-wrap justify-center relative overflow-hidden z-[51]">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex w-full md:w-[316px] flex-col items-start shrink-0 flex-nowrap relative overflow-hidden z-[52]">
                <div className="flex w-full flex-col items-center shrink-0 flex-nowrap bg-[#fff] relative overflow-hidden z-[53] group transition-all duration-300 shadow hover:shadow-2xl hover:scale-105">
                  <div className="h-[231px] self-stretch shrink-0 relative overflow-hidden z-[54]">
                    <div className="w-full h-[231px] bg-cover bg-no-repeat bg-center absolute top-0 left-0 z-[55]"
                         style={{backgroundImage: `url(${member.image})`}} />
                  </div>
                  <div className="flex w-full pt-[30px] pr-[30px] pb-[30px] pl-[30px] flex-col gap-[10px] items-center shrink-0 flex-nowrap relative overflow-hidden z-[56]">
                    <span className="flex h-[24px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[16px] font-bold leading-[24px] text-[#252b42] tracking-[0.1px] relative text-center whitespace-nowrap z-[57]">
                      {member.name}
                    </span>
                    <span className="flex h-[24px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#727272] tracking-[0.2px] relative text-center whitespace-nowrap z-[58]">
                      {member.profession}
                    </span>
                    <div className="flex w-[112px] gap-[20px] justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[59] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <a href="#" tabIndex={-1}><Twitter className="w-[24px] h-[19.765px] text-[#23a6f0] hover:text-[#1a8cd8] transition-colors" /></a>
                      <a href="#" tabIndex={-1}><Facebook className="w-[24px] h-[24px] text-[#23a6f0] hover:text-[#1a8cd8] transition-colors" /></a>
                      <a href="#" tabIndex={-1}><Instagram className="w-[24px] h-[24px] text-[#23a6f0] hover:text-[#1a8cd8] transition-colors" /></a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ...statik gridler kaldırıldı... */}
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full h-[442px] shrink-0 bg-[#fff] relative overflow-hidden z-[180]">
        <div className="flex w-full pt-[80px] pr-0 pb-[80px] pl-0 flex-col gap-[96px] items-center flex-nowrap relative z-[181] mt-0 mr-0 mb-0 ml-0">
          <div className="flex w-full max-w-[800px] flex-col gap-[36px] items-center shrink-0 flex-nowrap relative z-[182]">
            <div className="flex w-full flex-col gap-[30px] items-center shrink-0 flex-nowrap relative z-[183]">
              <span className="flex w-full px-4 h-[50px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[40px] font-bold leading-[50px] text-[#252b42] tracking-[0.2px] relative text-center whitespace-nowrap z-[184]">
                Start your 14 days free trial
              </span>
              <span className="flex w-full max-w-[411px] h-[40px] justify-center items-start shrink-0 font-['Montserrat'] text-[14px] font-normal leading-[20px] text-[#727272] tracking-[0.2px] relative text-center overflow-hidden z-[185]">
                Met minim Mollie non desert Alamo est sit cliquey dolor <br />
                do met sent. RELIT official consequent.
              </span>
              <div className="flex w-[186px] gap-[10px] items-start shrink-0 flex-nowrap relative z-[186]">
                <button
                  className="flex w-[186px] h-[52px] pt-[15px] pr-[40px] pb-[15px] pl-[40px] flex-col gap-[10px] items-center shrink-0 flex-nowrap bg-[#23a6f0] rounded-[5px] relative overflow-hidden z-[187] hover:bg-[#1a8cd8] transition-colors focus:outline-none"
                  type="button"
                >
                  <span className="flex w-[106px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[14px] font-bold leading-[22px] text-[#fff] tracking-[0.2px] relative text-center whitespace-nowrap z-[188]">
                    Try it free now
                  </span>
                </button>
              </div>
              <div className="flex w-[242px] pt-[10px] pr-[10px] pb-[10px] pl-[10px] gap-[34px] items-start shrink-0 flex-nowrap relative overflow-hidden z-[189]">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="w-[30px] h-[30px] text-[#23a6f0] hover:text-[#1a8cd8] transition-colors cursor-pointer" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook className="w-[30px] h-[24px] text-[#23a6f0] hover:text-[#1a8cd8] transition-colors cursor-pointer" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="w-[30px] h-[30px] text-[#23a6f0] hover:text-[#1a8cd8] transition-colors cursor-pointer" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="w-[30px] h-[30px] text-[#23a6f0] hover:text-[#1a8cd8] transition-colors cursor-pointer" />
                </a>
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
