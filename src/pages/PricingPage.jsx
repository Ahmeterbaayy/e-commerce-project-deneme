import brand1 from "../assets/images/brands-img/brand1.png";
import arrowIcon from "../assets/images/featured-img/arrow.png";
import brand2 from "../assets/images/brands-img/brand2.png";
import brand3 from "../assets/images/brands-img/brand3.png";
import brand4 from "../assets/images/brands-img/brand4.png";
import brand5 from "../assets/images/brands-img/brand5.png";
import brand6 from "../assets/images/brands-img/brand6.png";
import React, { useState } from "react";
import Header from "../layout/Header";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import Footer from "../layout/Footer";

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);
  const pricingPlans = [
    {
      name: "FREE",
      description: "Organize across all apps by hand",
      price: "0",
      period: "Per Month",
      bgColor: "bg-[#fff]",
      textColor: "text-[#252b42]",
      textColorSecondary: "text-[#252b42]",
      buttonBg: "bg-[#252b42]",
      padding: "pt-[50px] pr-[40px] pb-[50px] pl-[40px]",
      features: [
        { text: "Unlimited product updates", enabled: true },
        { text: "Unlimited product updates", enabled: true },
        { text: "Unlimited product updates", enabled: true },
        { text: "1GB Cloud storage", enabled: false },
        { text: "Email and community support", enabled: false, multiline: true }
      ]
    },
    {
      name: "STANDARD",
      description: "Organize across all apps by hand",
      price: "9.99",
      period: "Per Month",
      bgColor: "bg-[#252b42]",
      textColor: "text-[#fff]",
      textColorSecondary: "text-[#fff]",
      buttonBg: "bg-[#23a6f0]",
      padding: "pt-[70px] pr-[40px] pb-[70px] pl-[40px]",
      features: [
        { text: "Unlimited product updates", enabled: true },
        { text: "Unlimited product updates", enabled: true },
        { text: "Unlimited product updates", enabled: true },
        { text: "1GB Cloud storage", enabled: false },
        { text: "Email and community support", enabled: false, multiline: true }
      ]
    },
    {
      name: "PREMIUM",
      description: "Organize across all apps by hand",
      price: "19.99",
      period: "Per Month",
      bgColor: "bg-[#fff]",
      textColor: "text-[#252b42]",
      textColorSecondary: "text-[#252b42]",
      buttonBg: "bg-[#23a6f0]",
      padding: "pt-[50px] pr-[40px] pb-[50px] pl-[40px]",
      features: [
        { text: "Unlimited product updates", enabled: true },
        { text: "Unlimited product updates", enabled: true },
        { text: "Unlimited product updates", enabled: true },
        { text: "1GB Cloud storage", enabled: false },
        { text: "Email and community support", enabled: false, multiline: true }
      ]
    }
  ];

  const faqs = [
    {
      question: "the quick fox jumps over the lazy dog",
      answer: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
    },
    {
      question: "the quick fox jumps over the lazy dog",
      answer: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
    },
    {
      question: "the quick fox jumps over the lazy dog",
      answer: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
    },
    {
      question: "the quick fox jumps over the lazy dog",
      answer: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
    },
    {
      question: "the quick fox jumps over the lazy dog",
      answer: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
    },
    {
      question: "the quick fox jumps over the lazy dog",
      answer: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
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
        <div className="flex w-full h-[280px] pt-[50px] pr-0 pb-[50px] pl-0 flex-col items-center flex-nowrap absolute top-[104px] left-1/2 translate-x-[-50%] translate-y-0 overflow-hidden z-[29]">
          <div className="flex w-full items-center shrink-0 flex-nowrap relative overflow-hidden z-30">
            <div className="flex w-full flex-col gap-[16px] items-center shrink-0 flex-nowrap relative overflow-hidden z-[31]">
              <span className="flex w-[71px] h-[24px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[16px] font-bold leading-[24px] text-[#727272] tracking-[0.1px] relative text-center whitespace-nowrap z-[32]">
                PRICING
              </span>
              <span className="flex w-full h-[80px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[58px] font-bold leading-[80px] text-[#252b42] tracking-[0.2px] relative text-center whitespace-nowrap z-[33]">
                Simple Pricing
              </span>
              <div className="flex w-[134px] pt-[10px] pr-0 pb-[10px] pl-0 gap-[15px] items-center shrink-0 flex-nowrap relative overflow-hidden z-[34]">
                <span className="flex w-[43px] h-[24px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#252b42] tracking-[0.2px] relative text-center whitespace-nowrap z-[35]">
                  Home
                </span>
                <div className="w-[9px] h-[16px] shrink-0 relative overflow-hidden z-[36]">
                  <svg className="w-full h-full" viewBox="0 0 9 16" fill="none">
                    <path d="M0.5 0L8.5 8L0.5 16" stroke="#BDBDBD" strokeWidth="2"/>
                  </svg>
                </div>
                <span className="flex w-[52px] h-[24px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#727272] tracking-[0.2px] relative text-center whitespace-nowrap z-[37]">
                  Pricing
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Plans Section */}
      <div className="w-full h-auto shrink-0 bg-[#f9f9f9] relative overflow-hidden z-[38] py-[112px]">
        <div className="flex w-full max-w-[1050px] px-4 flex-col gap-[48px] items-center flex-nowrap relative overflow-hidden z-[39] mx-auto">
          <div className="flex w-full max-w-[633px] flex-col items-center shrink-0 flex-nowrap relative overflow-hidden z-40">
            <div className="flex w-full max-w-[625px] flex-col gap-[10px] items-center shrink-0 flex-nowrap relative overflow-hidden z-[41]">
              <span className="h-[50px] shrink-0 basis-auto font-['Montserrat'] text-[40px] font-bold leading-[50px] text-[#252b42] tracking-[0.2px] relative text-left whitespace-nowrap z-[42]">
                Pricing
              </span>
              <span className="flex w-full max-w-[469px] h-[40px] justify-center items-start shrink-0 font-['Montserrat'] text-[14px] font-normal leading-[20px] text-[#727272] tracking-[0.2px] relative text-center overflow-hidden z-[43]">
                Problems trying to resolve the conflict between <br />
                the two major realms of Classical physics: Newtonian mechanics{" "}
              </span>
            </div>
          </div>

          {/* Monthly/Yearly Toggle */}
          <div className="flex w-[310px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[44]">
            <div className="w-[186px] h-[28px] shrink-0 relative z-[45] flex items-center">
              <span
                className={`flex h-[24px] justify-start items-center font-['Montserrat'] text-[16px] font-bold leading-[24px] tracking-[0.1px] absolute top-0 left-0 text-left whitespace-nowrap z-[46] cursor-pointer transition-colors duration-300 ${!isYearly ? 'text-[#23a6f0]' : 'text-[#252b42]'}`}
                onClick={() => setIsYearly(false)}
              >
                Monthly
              </span>
              <span
                className={`flex h-[24px] justify-start items-center font-['Montserrat'] text-[16px] font-bold leading-[24px] tracking-[0.1px] absolute top-0 left-[135px] text-left whitespace-nowrap z-[48] cursor-pointer transition-colors duration-300 ${isYearly ? 'text-[#23a6f0]' : 'text-[#252b42]'}`}
                onClick={() => setIsYearly(true)}
              >
                Yearly
              </span>
              <div
                className="w-[45px] h-[25px] bg-[#b2e3ff] rounded-[16px] absolute top-px left-[80px] z-[47] cursor-pointer flex items-center"
                onClick={() => setIsYearly((v) => !v)}
              >
                <div
                  className={`w-[21px] h-[21px] bg-[#23a6f0] rounded-full shadow transition-all duration-300`}
                  style={{ transform: isYearly ? 'translateX(24px)' : 'translateX(0)' }}
                />
              </div>
            </div>
            <div className="flex w-[108px] pt-[10px] pr-[20px] pb-[10px] pl-[20px] flex-col gap-[10px] items-center shrink-0 flex-nowrap bg-[#b2e3ff] rounded-[37px] relative overflow-hidden z-[49]">
              <span className="flex w-[68px] h-[24px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#23a6f0] tracking-[0.2px] relative text-center whitespace-nowrap z-50">
                Save 25%
              </span>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="flex w-full max-w-[985px] items-end shrink-0 flex-wrap md:flex-nowrap justify-center relative z-[51]">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`flex w-full md:w-[327px] flex-col items-center shrink-0 flex-nowrap relative overflow-hidden z-[52] transition-all duration-300 hover:shadow-2xl hover:scale-105`}>
                <div className={`flex w-full ${plan.padding} flex-col gap-[35px] items-center shrink-0 flex-nowrap ${plan.bgColor} rounded-[10px] border-solid border border-[#23a6f0] relative z-[53]`}>
                  <span className={`h-[32px] shrink-0 basis-auto font-['Montserrat'] text-[24px] font-bold leading-[32px] ${plan.textColor} tracking-[0.1px] relative text-left whitespace-nowrap z-[54]`}>
                    {plan.name}
                  </span>
                  <span className={`flex w-[160px] h-[48px] justify-center items-start shrink-0 font-['Montserrat'] text-[16px] font-bold leading-[24px] ${plan.textColor} tracking-[0.1px] relative text-center overflow-hidden z-[55]`}>
                    {plan.description.split(' ').slice(0, 3).join(' ')} <br />
                    {plan.description.split(' ').slice(3).join(' ')}
                  </span>
                  <div className="flex gap-[10px] items-center shrink-0 flex-nowrap relative overflow-hidden z-[56]">
                    <span className="h-[50px] shrink-0 basis-auto font-['Montserrat'] text-[40px] font-bold leading-[50px] text-[#23a6f0] tracking-[0.2px] relative text-left whitespace-nowrap z-[57]">
                      {plan.price}
                    </span>
                    <div className="flex w-[76px] flex-col items-start shrink-0 flex-nowrap relative z-[58]">
                      <span className="h-[32px] shrink-0 basis-auto font-['Montserrat'] text-[24px] font-bold leading-[32px] text-[#23a6f0] tracking-[0.1px] relative text-left whitespace-nowrap z-[59]">
                        $
                      </span>
                      <span className="h-[24px] shrink-0 basis-auto font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#8ec2f2] tracking-[0.2px] relative text-left whitespace-nowrap z-[60]">
                        {plan.period}
                      </span>
                    </div>
                  </div>
                  <div className="flex w-[247px] flex-col gap-[15px] items-start shrink-0 flex-nowrap relative overflow-hidden z-[61]">
                    {plan.features.map((feature, fIndex) => (
                      <div key={fIndex} className={`flex ${feature.multiline ? 'w-[210px]' : 'w-[247px]'} gap-[10px] ${feature.multiline ? 'items-start' : 'items-center'} shrink-0 flex-nowrap relative overflow-hidden z-[62]`}>
                        <div className={`w-[32px] h-[32px] shrink-0 ${feature.enabled ? 'bg-[#2cc070]' : 'bg-[#bdbdbd]'} rounded-[200px] relative overflow-hidden z-[63]`}>
                          <div className="w-[16px] h-[11px] bg-cover bg-no-repeat relative overflow-hidden z-[64] mt-[10px] mr-0 mb-0 ml-[8px]" style={{ backgroundImage: `url(${arrowIcon})` }} />
                        </div>
                        <span className={`flex ${feature.multiline ? 'w-[168px] h-[48px]' : 'w-[205px] h-[29.25px]'} justify-start items-start shrink-0 ${feature.multiline ? '' : 'basis-auto'} font-['Montserrat'] text-[14px] font-bold leading-[24px] ${plan.textColorSecondary} tracking-[0.2px] relative text-left ${feature.multiline ? 'overflow-hidden' : 'whitespace-nowrap'} z-[65]`}>
                          {feature.multiline ? (
                            <>
                              Email and community <br />
                              support{" "}
                            </>
                          ) : (
                            `${feature.text} `
                          )}
                        </span>
                      </div>
                    ))}
                  </div>
                  <button className={`flex w-[246px] pt-[15px] pr-[40px] pb-[15px] pl-[40px] flex-col gap-[10px] items-center shrink-0 flex-nowrap ${plan.buttonBg} rounded-[5px] relative overflow-hidden z-[82] transition-all duration-300 hover:bg-[#1a8cd8] focus:outline-none`} type="button">
                    <span className="flex w-[82px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[14px] font-bold leading-[22px] text-[#fff] tracking-[0.2px] relative text-center whitespace-nowrap z-[83]">
                      Try for free
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Companies Section */}
      <div className="w-full h-[365px] shrink-0 bg-[#f9f9f9] relative overflow-hidden z-[148]">
        <div className="flex w-full max-w-[1050px] px-4 pt-[80px] pr-0 pb-[80px] pl-0 flex-col items-center flex-nowrap relative overflow-hidden z-[149] mx-auto">
          <span className="flex w-full max-w-[385px] h-[30px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[20px] font-normal leading-[30px] text-[#252b42] tracking-[0.2px] relative text-center whitespace-nowrap z-[150]">
            Trusted By Over 4000 Big Companies
          </span>
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

      {/* FAQ Section */}
      <div className="w-full h-auto shrink-0 bg-[#fff] relative overflow-hidden z-[164] py-[80px]">
        <div className="flex w-full max-w-[1056px] px-4 flex-col gap-[50px] items-center flex-nowrap relative z-[165] mx-auto">
          <div className="flex w-full max-w-[1050px] pt-[45px] pr-0 pb-[45px] pl-0 flex-col items-center shrink-0 flex-nowrap relative overflow-hidden z-[166]">
            <div className="flex w-full max-w-[651px] flex-col items-center shrink-0 flex-nowrap relative overflow-hidden z-[167]">
              <div className="flex w-full max-w-[607px] flex-col gap-[10px] items-center shrink-0 flex-nowrap relative overflow-hidden z-[168]">
                <span className="h-[50px] shrink-0 basis-auto font-['Montserrat'] text-[40px] font-bold leading-[50px] text-[#252b42] tracking-[0.2px] relative text-left whitespace-nowrap z-[169]">
                  Pricing FAQs
                </span>
                <span className="flex w-full max-w-[552px] h-[60px] justify-center items-start shrink-0 font-['Montserrat'] text-[20px] font-normal leading-[30px] text-[#727272] tracking-[0.2px] relative text-center overflow-hidden z-[170]">
                  Problems trying to resolve the conflict between <br />
                  the two major realms of Classical physics
                </span>
              </div>
            </div>
          </div>
          <div className="flex w-full gap-[30px] items-start shrink-0 flex-wrap md:flex-nowrap justify-center relative z-[171]">
            {/* Left Column - First 3 FAQs */}
            <div className="flex w-full md:w-1/2 flex-col gap-[30px] items-start shrink-0 flex-nowrap relative z-[172]">
              {faqs.slice(0, 3).map((faq, index) => (
                <div key={index} className="flex w-full flex-col items-start shrink-0 flex-nowrap relative overflow-hidden z-[173]">
                  <div className="flex w-full pt-[25px] pr-[25px] pb-[25px] pl-[25px] flex-col items-start shrink-0 flex-nowrap rounded-[9px] relative overflow-hidden z-[174]">
                    <div className="flex w-full gap-[20px] items-start shrink-0 flex-nowrap relative overflow-hidden z-[175]">
                      <div className="w-[9px] h-[16px] shrink-0 relative overflow-hidden z-[176]">
                        <svg className="w-full h-full" viewBox="0 0 9 16" fill="none">
                          <path d="M0.5 0L8.5 8L0.5 16" stroke="#23A6F0" strokeWidth="2"/>
                        </svg>
                      </div>
                      <div className="flex flex-1 flex-col gap-[5px] items-start shrink-0 flex-nowrap relative z-[177]">
                        <span className="h-[24px] shrink-0 basis-auto font-['Montserrat'] text-[16px] font-bold leading-[24px] text-[#252b42] tracking-[0.1px] relative text-left whitespace-nowrap z-[178]">
                          {faq.question}
                        </span>
                        <span className="flex w-full justify-start items-start shrink-0 font-['Montserrat'] text-[14px] font-normal leading-[20px] text-[#727272] tracking-[0.2px] relative text-left overflow-hidden z-[179]">
                          {faq.answer.split('. ').map((sentence, i) => (
                            <span key={i}>
                              {sentence}
                              {i < faq.answer.split('. ').length - 1 && '. '}
                              {i < faq.answer.split('. ').length - 1 && <br />}
                            </span>
                          ))}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Right Column - Last 3 FAQs */}
            <div className="flex w-full md:w-1/2 flex-col gap-[30px] items-start shrink-0 flex-nowrap relative z-[180]">
              {faqs.slice(3, 6).map((faq, index) => (
                <div key={index} className="flex w-full flex-col items-start shrink-0 flex-nowrap relative overflow-hidden z-[181]">
                  <div className="flex w-full pt-[25px] pr-[25px] pb-[25px] pl-[25px] flex-col items-start shrink-0 flex-nowrap rounded-[9px] relative overflow-hidden z-[182]">
                    <div className="flex w-full gap-[20px] items-start shrink-0 flex-nowrap relative overflow-hidden z-[183]">
                      <div className="w-[9px] h-[16px] shrink-0 relative overflow-hidden z-[184]">
                        <svg className="w-full h-full" viewBox="0 0 9 16" fill="none">
                          <path d="M0.5 0L8.5 8L0.5 16" stroke="#23A6F0" strokeWidth="2"/>
                        </svg>
                      </div>
                      <div className="flex flex-1 flex-col gap-[5px] items-start shrink-0 flex-nowrap relative z-[185]">
                        <span className="h-[24px] shrink-0 basis-auto font-['Montserrat'] text-[16px] font-bold leading-[24px] text-[#252b42] tracking-[0.1px] relative text-left whitespace-nowrap z-[186]">
                          {faq.question}
                        </span>
                        <span className="flex w-full justify-start items-start shrink-0 font-['Montserrat'] text-[14px] font-normal leading-[20px] text-[#727272] tracking-[0.2px] relative text-left overflow-hidden z-[187]">
                          {faq.answer.split('. ').map((sentence, i) => (
                            <span key={i}>
                              {sentence}
                              {i < faq.answer.split('. ').length - 1 && '. '}
                              {i < faq.answer.split('. ').length - 1 && <br />}
                            </span>
                          ))}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <span className="flex w-full max-w-[552px] h-[30px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[20px] font-normal leading-[30px] text-[#727272] tracking-[0.2px] relative text-center whitespace-nowrap z-[217]">
            Haven't got your answer? Contact our support
          </span>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full h-[582px] shrink-0 bg-[#fff] relative overflow-hidden z-[218]">
        <div className="flex w-full max-w-[1050px] px-4 pt-[160px] pr-0 pb-[160px] pl-0 flex-col gap-[96px] items-center flex-nowrap relative overflow-hidden z-[219] mx-auto">
          <div className="flex w-full flex-col gap-[36px] items-center shrink-0 flex-nowrap relative z-[220]">
            <div className="flex w-full flex-col gap-[30px] items-center shrink-0 flex-nowrap relative overflow-hidden z-[221]">
              <span className="flex w-full h-[50px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[40px] font-bold leading-[50px] text-[#252b42] tracking-[0.2px] relative text-center whitespace-nowrap z-[222]">
                Start your 14 days free trial
              </span>
              <span className="flex w-full max-w-[411px] h-[40px] justify-center items-start shrink-0 font-['Montserrat'] text-[14px] font-normal leading-[20px] text-[#727272] tracking-[0.2px] relative text-center overflow-hidden z-[223]">
                Met minim Mollie non desert Alamo est sit cliquey dolor <br />
                do met sent. RELIT official consequent.
              </span>
              <div className="flex w-[186px] gap-[10px] items-start shrink-0 flex-nowrap relative z-[224]">
                <button
                  className="flex w-[186px] h-[52px] pt-[15px] pr-[40px] pb-[15px] pl-[40px] flex-col gap-[10px] items-center shrink-0 flex-nowrap bg-[#23a6f0] rounded-[5px] relative overflow-hidden z-[225] hover:bg-[#1a8cd8] transition-colors focus:outline-none"
                  type="button"
                >
                  <span className="flex w-[106px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[14px] font-bold leading-[22px] text-[#fff] tracking-[0.2px] relative text-center whitespace-nowrap z-[226]">
                    Try it free now
                  </span>
                </button>
              </div>
              <div className="flex w-[242px] pt-[10px] pr-[10px] pb-[10px] pl-[10px] gap-[34px] items-start shrink-0 flex-nowrap relative overflow-hidden z-[227]">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="w-[30px] h-[30px] text-[#23a6f0] hover:text-[#1a8cd8] transition-colors cursor-pointer" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook className="w-[30px] h-[30px] text-[#23a6f0] hover:text-[#1a8cd8] transition-colors cursor-pointer" />
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
