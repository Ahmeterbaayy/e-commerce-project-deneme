
import React from "react";
import womanPinkSweater from "../assets/images/aboutPage-img/about-grow.jpg";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { Facebook, Instagram, Twitter } from "lucide-react";
import aboutBanner from "../assets/images/aboutPage-img/about-banner.png";
import aboutGrow from "../assets/images/aboutPage-img/about-grow.jpg";
import videoCard from "../assets/images/aboutPage-img/Video card.png";
import team1 from "../assets/images/teamPage-img/personal6.jpg";
import team2 from "../assets/images/teamPage-img/personal7.jpg";
import team3 from "../assets/images/teamPage-img/personal4.jpg";
import brand1 from "../assets/images/brands-img/brand1.png";
import brand2 from "../assets/images/brands-img/brand2.png";
import brand3 from "../assets/images/brands-img/brand3.png";
import brand4 from "../assets/images/brands-img/brand4.png";
import brand5 from "../assets/images/brands-img/brand5.png";
import brand6 from "../assets/images/brands-img/brand6.png";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Username",
      profession: "Profession",
      image: team1
    },
    {
      name: "Username",
      profession: "Profession",
      image: team2
    },
    {
      name: "Username",
      profession: "Profession",
      image: team3
    }
  ];

  return (
    <div className="main-container flex w-full flex-col items-start flex-nowrap bg-[#fff] relative overflow-hidden">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <div className="w-full h-[729px] shrink-0 bg-[#fff] relative overflow-hidden">
        <div className="flex w-full max-w-[1050px] pt-[112px] pr-0 pb-[112px] pl-0 md:pl-0 flex-col gap-[80px] items-start flex-nowrap relative overflow-hidden z-[31] mt-[13px] mx-auto" style={{marginLeft: '180px'}}>
          <div className="flex w-full gap-[30px] items-center shrink-0 flex-wrap relative overflow-hidden z-[32]">
            <div className="flex w-full md:w-[599px] flex-col gap-[35px] items-start shrink-0 flex-nowrap relative overflow-hidden z-[33]">
              <span className="h-[24px] shrink-0 basis-auto font-['Montserrat'] text-[16px] font-bold leading-[24px] text-[#252b42] tracking-[0.1px] relative text-left whitespace-nowrap z-[34]">
                ABOUT COMPANY
              </span>
              <span className="flex w-full max-w-[542px] h-[80px] justify-start items-start shrink-0 basis-auto font-['Montserrat'] text-[58px] font-bold leading-[80px] text-[#252b42] tracking-[0.2px] relative text-left whitespace-nowrap z-[35]">
                ABOUT US
              </span>
              <span className="flex w-full max-w-[376px] h-[60px] justify-start items-start shrink-0 font-['Montserrat'] text-[20px] font-normal leading-[30px] text-[#727272] tracking-[0.2px] relative text-left overflow-hidden z-[36]">
                We know how large objects will act, <br />
                but things on a small scale
              </span>
              <div className="flex w-[193px] gap-[10px] items-start shrink-0 flex-nowrap relative z-[37]">
                <button
                  className="flex w-[193px] pt-[15px] pr-[40px] pb-[15px] pl-[40px] flex-col gap-[10px] items-center shrink-0 flex-nowrap bg-[#23a6f0] rounded-[5px] relative overflow-hidden z-[38] hover:bg-[#1a8cd8] transition-colors focus:outline-none"
                  type="button"
                >
                  <span className="flex w-[113px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[14px] font-bold leading-[22px] text-[#fff] tracking-[0.2px] relative text-center whitespace-nowrap z-[39]">
                    Get Quote Now
                  </span>
                </button>
              </div>
            </div>
            <div className="flex w-full md:w-[415px] h-[280px] pt-0 pr-0 pb-0 pl-0 flex-col items-start shrink-0 flex-nowrap relative overflow-hidden z-40 md:ml-[-120px] md:mr-[-10px]" />
          </div>
        </div>
        <div className="absolute top-0 bottom-0 left-0 right-0 z-[1]">
          <div className="w-full h-[700px] relative z-[2] mt-0 mr-0 mb-0 ml-0">
            <img src={aboutBanner} alt="about banner" className="w-[632px] h-[612px] object-cover relative z-[3] mt-[117px] mr-0 mb-0 md:ml-[900px]" />
          </div>
          <div className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden z-[4]" />
        </div>
      </div>

      {/* Problems Section */}
      <div className="w-full h-[236px] shrink-0 bg-[#fff] relative overflow-hidden z-[41]">
        <div className="flex w-full h-[236px] pt-[24px] pr-0 pb-[24px] pl-0 flex-col items-center flex-nowrap overflow-hidden z-[42]">
          <div className="flex w-full max-w-[1018px] px-4 gap-[60px] justify-center items-center shrink-0 flex-wrap relative z-[43]">
            <div className="flex w-full md:w-[394px] pt-[24px] pr-0 pb-[24px] pl-0 flex-col gap-[80px] items-start shrink-0 flex-nowrap relative z-[44]">
              <div className="flex w-full flex-col gap-[24px] items-start shrink-0 flex-nowrap relative z-[45]">
                <span className="h-[20px] shrink-0 basis-auto font-['Montserrat'] text-[14px] font-normal leading-[20px] text-[#e64040] tracking-[0.2px] relative text-left whitespace-nowrap z-[46]">
                  Problems trying
                </span>
                <span className="flex w-full h-[96px] justify-start items-start shrink-0 font-['Montserrat'] text-[24px] font-bold leading-[32px] text-[#252b42] tracking-[0.1px] relative text-left z-[47]">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent.
                </span>
              </div>
            </div>
            <div className="flex w-full md:w-[529px] flex-col gap-[49px] items-start shrink-0 flex-nowrap relative overflow-hidden z-[48]">
              <span className="flex w-full h-[40px] justify-start items-start shrink-0 font-['Montserrat'] text-[14px] font-normal leading-[20px] text-[#727272] tracking-[0.2px] relative text-left z-[49]">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics{" "}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="w-full h-[264px] shrink-0 bg-[#fff] relative overflow-hidden z-50">
        <div className="flex w-full max-w-[1050px] px-4 pt-[80px] pr-0 pb-[80px] pl-0 flex-col gap-[50px] items-center flex-nowrap relative z-[51] mx-auto">
          <div className="flex w-full gap-[30px] items-start shrink-0 flex-wrap justify-center relative z-[52]">
            <div className="flex w-full md:w-[238px] flex-col items-center shrink-0 flex-nowrap relative z-[53]">
              <span className="flex w-[100px] h-[80px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[58px] font-bold leading-[80px] text-[#252b42] tracking-[0.2px] relative text-center whitespace-nowrap z-[54]">
                15K
              </span>
              <span className="flex w-[146px] h-[24px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[16px] font-bold leading-[24px] text-[#727272] tracking-[0.1px] relative text-center whitespace-nowrap z-[55]">
                Happy Customers
              </span>
            </div>
            <div className="flex w-full md:w-[241px] flex-col items-center shrink-0 flex-nowrap relative z-[56]">
              <span className="flex w-[140px] h-[80px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[58px] font-bold leading-[80px] text-[#252b42] tracking-[0.2px] relative text-center whitespace-nowrap z-[57]">
                150K
              </span>
              <span className="flex w-[134px] h-[24px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[16px] font-bold leading-[24px] text-[#727272] tracking-[0.1px] relative text-center whitespace-nowrap z-[58]">
                Monthly Visitors
              </span>
            </div>
            <div className="flex w-full md:w-[240px] flex-col items-center shrink-0 flex-nowrap relative z-[59]">
              <span className="flex w-[59px] h-[80px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[58px] font-bold leading-[80px] text-[#252b42] tracking-[0.2px] relative text-center whitespace-nowrap z-[60]">
                15
              </span>
              <span className="flex w-[177px] h-[24px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[16px] font-bold leading-[24px] text-[#727272] tracking-[0.1px] relative text-center whitespace-nowrap z-[61]">
                Countries Worldwide
              </span>
            </div>
            <div className="flex w-full md:w-[240px] flex-col items-center shrink-0 flex-nowrap relative z-[62]">
              <span className="flex w-[138px] h-[80px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[58px] font-bold leading-[80px] text-[#252b42] tracking-[0.2px] relative text-center whitespace-nowrap z-[63]">
                100+
              </span>
              <span className="flex w-[104px] h-[24px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[16px] font-bold leading-[24px] text-[#727272] tracking-[0.1px] relative text-center whitespace-nowrap z-[64]">
                Top Partners
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="w-full h-[764px] shrink-0 bg-[#fff] relative overflow-hidden z-[65] flex items-center justify-center">
        <img src={videoCard} alt="video card" className="max-w-full max-h-full object-contain" />
      </div>

      {/* Team Section */}
      <div className="w-full h-[826px] shrink-0 bg-[#fff] relative overflow-hidden z-[73]">
        <div className="flex w-full max-w-[1050px] px-4 pt-[112px] pr-0 pb-[112px] pl-0 flex-col gap-[112px] items-center flex-nowrap relative overflow-hidden z-[74] mx-auto">
          <div className="flex w-full max-w-[607px] flex-col items-center shrink-0 flex-nowrap relative overflow-hidden z-[75]">
            <div className="flex w-full flex-col gap-[10px] items-center shrink-0 flex-nowrap relative overflow-hidden z-[76]">
              <span className="h-[50px] shrink-0 basis-auto font-['Montserrat'] text-[40px] font-bold leading-[50px] text-[#252b42] tracking-[0.2px] relative text-left whitespace-nowrap z-[77]">
                Meet Our Team
              </span>
              <span className="flex w-full max-w-[469px] h-[40px] justify-center items-start shrink-0 font-['Montserrat'] text-[14px] font-normal leading-[20px] text-[#727272] tracking-[0.2px] relative text-center overflow-hidden z-[78]">
                Problems trying to resolve the conflict between <br />
                the two major realms of Classical physics: Newtonian mechanics{" "}
              </span>
            </div>
          </div>
          <div className="flex w-full max-w-[1034px] gap-[30px] items-center shrink-0 flex-wrap justify-center relative overflow-hidden z-[79]">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex w-full md:w-[316px] flex-col items-start shrink-0 flex-nowrap relative overflow-hidden z-[80]">
                <div className="flex w-full flex-col items-center shrink-0 flex-nowrap bg-[#fff] relative overflow-hidden z-[81]">
                  <div className="h-[231px] self-stretch shrink-0 relative overflow-hidden z-[82]">
                    <div className="w-full h-[231px] bg-cover bg-no-repeat bg-center absolute top-0 left-0 z-[83]"
                         style={{backgroundImage: `url(${member.image})`}} />
                  </div>
                  <div className="flex w-full pt-[30px] pr-[30px] pb-[30px] pl-[30px] flex-col gap-[10px] items-center shrink-0 flex-nowrap relative overflow-hidden z-[84]">
                    <span className="flex w-[83px] h-[24px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[16px] font-bold leading-[24px] text-[#252b42] tracking-[0.1px] relative text-center whitespace-nowrap z-[85]">
                      {member.name}
                    </span>
                    <span className="flex w-[77px] h-[24px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#727272] tracking-[0.2px] relative text-center whitespace-nowrap z-[86]">
                      {member.profession}
                    </span>
                    <div className="flex w-[112px] gap-[20px] justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[87]">
                      <Facebook className="w-[24px] h-[24px] text-[#23a6f0]" />
                      <Instagram className="w-[24px] h-[24px] text-[#23a6f0]" />
                      <Twitter className="w-[24px] h-[19.765px] text-[#23a6f0]" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Companies Section */}
      <div className="w-full h-[479px] shrink-0 bg-[#f9f9f9] relative overflow-hidden z-[122]">
        <div className="flex w-full max-w-[1050px] px-4 pt-[80px] pr-0 pb-[80px] pl-0 flex-col gap-[24px] items-center flex-nowrap relative overflow-hidden z-[123] mx-auto">
          <div className="flex w-full max-w-[864px] flex-col items-center shrink-0 flex-nowrap relative overflow-hidden z-[124]">
            <div className="flex w-full flex-col gap-[30px] items-center shrink-0 flex-nowrap relative overflow-hidden z-[125]">
              <span className="h-[50px] shrink-0 basis-auto font-['Montserrat'] text-[40px] font-bold leading-[50px] text-[#252b42] tracking-[0.2px] relative text-left whitespace-nowrap z-[126]">
                Big Companies Are Here
              </span>
              <span className="flex w-full max-w-[547px] h-[40px] justify-center items-start shrink-0 font-['Montserrat'] text-[14px] font-normal leading-[20px] text-[#727272] tracking-[0.2px] relative text-center overflow-hidden z-[127]">
                Problems trying to resolve the conflict between <br />
                the two major realms of Classical physics: Newtonian mechanics{" "}
              </span>
            </div>
          </div>
          <div className="w-full bg-[#FAFAFA] py-12 flex justify-center">
            <div className="w-[90%] flex flex-row flex-wrap justify-center items-center gap-8 md:gap-12">
              {[
                { src: brand1, alt: "Hooli" },
                { src: brand2, alt: "Lyft" },
                { src: brand3, alt: "Robinhood" },
                { src: brand4, alt: "Stripe" },
                { src: brand5, alt: "AWS" },
                { src: brand6, alt: "Reddit" }
              ].map((logo, i) => (
                <div key={i} className="flex justify-center items-center mx-4">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-12 w-auto max-w-[120px] object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer grayscale hover:grayscale-0"
                    title={logo.alt}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Work With Us Section */}
      <div className="w-full h-[636px] shrink-0 bg-[#2a7bc6] relative overflow-hidden z-[141]">
        <div className="flex w-full max-w-[1050px] px-4 pt-[112px] pr-0 pb-[112px] pl-0 flex-col items-start flex-nowrap relative overflow-hidden z-[144] mx-auto">
          <div className="flex w-full justify-between items-center shrink-0 flex-wrap relative overflow-hidden z-[145]">
            <div className="flex w-full md:w-[500px] flex-col gap-[24px] items-start shrink-0 flex-nowrap relative overflow-visible z-[146]">
              <span className="h-[24px] shrink-0 basis-auto font-['Montserrat'] text-[16px] font-bold leading-[24px] text-[#fff] tracking-[0.1px] relative text-left whitespace-nowrap z-[147]">
                WORK WITH US
              </span>
              <span className="flex w-full h-[50px] justify-start items-start shrink-0 basis-auto font-['Montserrat'] text-[40px] font-bold leading-[50px] text-[#fff] tracking-[0.2px] relative text-left z-[148]">
                Now Let's grow Yours
              </span>
              <span className="flex w-full max-w-[440px] h-[40px] justify-start items-start shrink-0 font-['Montserrat'] text-[14px] font-normal leading-[20px] text-[#fff] tracking-[0.2px] relative text-left z-[149]">
                The gradual accumulation of information about atomic and
                small-scale behavior during the first quarter of the 20th{" "}
              </span>
              <div className="flex w-[130px] pt-[15px] pr-[40px] pb-[15px] pl-[40px] flex-col gap-[10px] items-center shrink-0 flex-nowrap rounded-[5px] border-solid border border-[#f9f9f9] relative overflow-hidden z-[150]">
                <span className="flex w-[50px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[14px] font-bold leading-[22px] text-[#f9f9f9] tracking-[0.2px] relative text-center whitespace-nowrap z-[151]">
                  Button
                </span>
              </div>
            </div>
            <div className="w-full md:w-[548px] h-[412px] shrink-0 relative overflow-hidden z-[152]" />
          </div>
        </div>
        <div className="absolute top-0 bottom-[-1px] left-0 right-0 overflow-hidden z-[142]">
          <div className="w-[590px] h-[640px] bg-cover bg-no-repeat relative z-[143] mt-0 mr-0 mb-0 ml-auto" style={{backgroundImage: `url(${womanPinkSweater})`}} />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
