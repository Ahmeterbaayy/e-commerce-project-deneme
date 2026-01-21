
import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
// Görselleri import et
import personal1 from "../assets/images/teamPage-img/personal1.jpg";
// LinkedIn profil görseli doğrudan import edilemiyorsa, dış link olarak kullanılacak
import personal2 from "../assets/images/teamPage-img/personal2.jpg";
import personal3 from "../assets/images/teamPage-img/personal3.jpg";
import myPhoto from "../assets/images/teamPage-img/myPhoto.jpeg";
import gokhanOzdemir from "../assets/images/teamPage-img/gokhan-ozdemir.jpg";
import personal5 from "../assets/images/teamPage-img/personal5.jpg";
import personal6 from "../assets/images/teamPage-img/personal6.jpg";
import personal7 from "../assets/images/teamPage-img/personal7.jpg";
import personal8 from "../assets/images/teamPage-img/personal8.jpg";
import personal9 from "../assets/images/teamPage-img/personal9.jpg";
import teamleft from "../assets/images/teamPage-img/teamleft.jpg";
import teamright1 from "../assets/images/teamPage-img/teamright1.jpg";
import teamright2 from "../assets/images/teamPage-img/teamright2.jpg";
import teamright3 from "../assets/images/teamPage-img/teamright3.jpg";
import teamright4 from "../assets/images/teamPage-img/teamright4.jpg";

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Yalçın Kaya",
      profession: "Project Manager",
      image: gokhanOzdemir
    },
    {
      name: "Ahmet Faruk Erbay",
      profession: "Full Stack Developer",
      image: myPhoto
    },
    {
      name: "Üye 1",
      profession: "Frontend Developer",
      image: personal1
    },
    {
      name: "Üye 2",
      profession: "Backend Developer",
      image: personal2
    },
    {
      name: "Üye 3",
      profession: "UI/UX Designer",
      image: personal3
    },
    {
      name: "Üye 4",
      profession: "Mobile Developer",
      image: personal5
    },
    {
      name: "Üye 5",
      profession: "QA Engineer",
      image: personal6
    },
    {
      name: "Üye 6",
      profession: "DevOps Engineer",
      image: personal7
    },
    {
      name: "Üye 7",
      profession: "Support Specialist",
      image: personal8
    },
    {
      name: "Üye 8",
      profession: "Business Analyst",
      image: personal9
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

        {/* Mobilde hero başlık görseldeki gibi */}
        <div className="block md:hidden w-full pt-8 pb-2 flex flex-col items-center justify-center text-center relative z-[29]">
          <span className="text-[#727272] text-[15px] font-bold mb-2 tracking-wide">WHAT WE DO</span>
          <span className="text-[#252b42] text-[32px] font-extrabold leading-[38px] mb-4 block">
            Innovation<br/>tailored for you
          </span>
          <div className="flex items-center justify-center gap-2">
            <span className="text-[#252b42] text-[15px] font-extrabold">Home</span>
            <svg className="w-[9px] h-[16px]" viewBox="0 0 9 16" fill="none">
              <path d="M0.5 0L8.5 8L0.5 16" stroke="#BDBDBD" strokeWidth="2"/>
            </svg>
            <span className="text-[#727272] text-[15px] font-bold">Team</span>
          </div>
        </div>
        {/* Webde hero başlık */}
        <div className="hidden md:flex w-full max-w-[1000px] h-[220px] pt-[20px] pr-0 pb-[20px] pl-0 flex-col items-center flex-nowrap absolute top-[40px] left-1/2 translate-x-[-50%] translate-y-0 z-[29]">
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

      {/* Mobilde görsel galerisi */}
      <div className="block md:hidden w-full bg-[#fff] relative overflow-hidden z-[38] py-6">
        {/* Üstte büyük görsel */}
        <div className="w-full flex justify-center mb-0">
          <img src={teamleft} alt="Main" className="w-[90vw] max-w-[400px] h-auto rounded-lg object-cover" />
        </div>
        {/* Altta 2x2 grid küçük görseller */}
        <div className="grid grid-cols-2 gap-3 px-4">
          <img src={teamright1} alt="Alt1" className="w-full h-[120px] object-cover rounded-lg" />
          <img src={teamright2} alt="Alt2" className="w-full h-[120px] object-cover rounded-lg" />
          <img src={teamright3} alt="Alt3" className="w-full h-[120px] object-cover rounded-lg" />
          <img src={teamright4} alt="Alt4" className="w-full h-[120px] object-cover rounded-lg" />
        </div>
      </div>
      {/* Webde mevcut image gallery */}
      <div className="hidden md:block w-full h-[530px] shrink-0 bg-[#fff] relative overflow-hidden z-[38]">
        <div className="h-[530px] absolute top-0 left-0 right-0 overflow-hidden z-[39]">
          <div className="w-[1440px] h-[530px] absolute top-0 left-1/2 translate-x-[-50%] overflow-hidden z-40">
            <div className="w-[700px] h-[530px] bg-cover bg-no-repeat absolute top-0 left-0 z-[41] transition-all duration-300 hover:shadow-2xl hover:scale-105 active:shadow-2xl active:scale-100 focus:shadow-2xl focus:scale-100 cursor-pointer outline-none" tabIndex={0} style={{backgroundImage: `url(${teamleft})`}} />
            <div className="w-[361px] h-[260px] bg-cover bg-no-repeat absolute top-0 left-[709px] z-[42] transition-all duration-300 hover:shadow-2xl hover:scale-105 active:shadow-2xl active:scale-100 focus:shadow-2xl focus:scale-100 cursor-pointer outline-none" tabIndex={0} style={{backgroundImage: `url(${teamright1})`}} />
            <div className="w-[361px] h-[260px] bg-cover bg-no-repeat absolute top-0 left-[1079px] z-[44] transition-all duration-300 hover:shadow-2xl hover:scale-105 active:shadow-2xl active:scale-100 focus:shadow-2xl focus:scale-100 cursor-pointer outline-none" tabIndex={0} style={{backgroundImage: `url(${teamright2})`}} />
            <div className="w-[361px] h-[260px] bg-cover bg-no-repeat absolute top-[270px] left-[709px] z-[43] transition-all duration-300 hover:shadow-2xl hover:scale-105 active:shadow-2xl active:scale-100 focus:shadow-2xl focus:scale-100 cursor-pointer outline-none" tabIndex={0} style={{backgroundImage: `url(${teamright3})`}} />
            <div className="w-[361px] h-[260px] bg-cover bg-no-repeat absolute top-[270px] left-[1079px] z-[45] transition-all duration-300 hover:shadow-2xl hover:scale-105 active:shadow-2xl active:scale-100 focus:shadow-2xl focus:scale-100 cursor-pointer outline-none" tabIndex={0} style={{backgroundImage: `url(${teamright4})`}} />
          </div>
        </div>
      </div>

      {/* Team Members Section */}
      {/* Mobilde üstten aşağı tek kolon ve ortalanmış */}
      <div className="block md:hidden w-full bg-[#fff] relative overflow-hidden z-[46] py-8">
        <div className="flex w-full max-w-[400px] px-4 flex-col gap-12 items-center flex-nowrap relative overflow-hidden z-[47] mx-auto">
          <span className="text-[32px] font-bold leading-[40px] text-[#252b42] text-center mb-4">Meet Our<br/>Team</span>
          {teamMembers.map((member, index) => (
            <div key={index} className="flex w-full flex-col items-center bg-[#fff] rounded-lg shadow mb-8">
              <div className="w-full h-[220px] bg-cover bg-center rounded-t-lg" style={{backgroundImage: `url(${member.image})`}} />
              <div className="flex flex-col items-center gap-2 py-4">
                <span className="text-[18px] font-bold text-[#252b42]">{member.name}</span>
                <span className="text-[15px] font-normal text-[#727272]">{member.profession}</span>
                <div className="flex gap-4 mt-2">
                  <a href="#" tabIndex={-1}><Facebook className="w-6 h-6 text-[#23a6f0]" /></a>
                  <a href="#" tabIndex={-1}><Instagram className="w-6 h-6 text-[#23a6f0]" /></a>
                  <a href="#" tabIndex={-1}><Twitter className="w-6 h-6 text-[#23a6f0]" /></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Webde mevcut grid */}
      <div className="hidden md:block w-full shrink-0 bg-[#fff] relative overflow-hidden z-[46] py-[112px]">
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
        </div>
      </div>

      {/* Mobilde CTA Section */}
      <div className="block md:hidden w-full bg-[#fff] relative overflow-hidden z-[180] py-8">
        <div className="flex w-full flex-col items-center gap-6 px-4">
          <span className="text-[22px] font-bold leading-[28px] text-[#252b42] text-center mb-2">Start your 14 days free trial</span>
          <span className="text-[13px] font-normal leading-[18px] text-[#727272] text-center mb-3">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.</span>
          <button className="w-full max-w-[220px] h-[42px] px-2 py-2 bg-[#23a6f0] rounded-[5px] text-white font-bold text-[15px] leading-[22px] hover:bg-[#1a8cd8] transition-colors focus:outline-none mb-2">Try it free now</button>
          <div className="flex w-full justify-center gap-5 mt-2">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter className="w-6 h-6 text-[#23a6f0] hover:text-[#1a8cd8] transition-colors cursor-pointer" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook className="w-6 h-6 text-[#23a6f0] hover:text-[#1a8cd8] transition-colors cursor-pointer" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="w-6 h-6 text-[#23a6f0] hover:text-[#1a8cd8] transition-colors cursor-pointer" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6 text-[#23a6f0] hover:text-[#1a8cd8] transition-colors cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
      {/* Webde CTA Section */}
      <div className="hidden md:block w-full h-[442px] shrink-0 bg-[#fff] relative overflow-hidden z-[180]">
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
