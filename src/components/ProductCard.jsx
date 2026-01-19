import React from "react";
import { useHistory } from "react-router-dom";

export default function ProductCard({ id = "1", image, title, department, originalPrice, salePrice, colors, category }) {
  const history = useHistory();
  // URL-friendly slug helper
  const toUrlFriendly = (text) => {
    if (!text) return '';
    return text
      .toLowerCase()
      .replace(/ğ/g, 'g')
      .replace(/ü/g, 'u')
      .replace(/ş/g, 's')
      .replace(/ı/g, 'i')
      .replace(/ö/g, 'o')
      .replace(/ç/g, 'c')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  // Create URL slug from product name
  const nameSlug = toUrlFriendly(title) || 'product';
  
  // Build product detail URL
  const productUrl = category 
    ? `/shop/${category.gender}/${toUrlFriendly(category.title)}/${category.id}/${nameSlug}/${id}`
    : `/product/${id}`;

  const handleClick = () => {
    history.push(productUrl);
  };

  return (
    <div onClick={handleClick} tabIndex={0} className="flex w-full sm:w-[90%] md:w-[238px] flex-col items-center justify-center shrink-0 flex-nowrap relative group cursor-pointer focus:outline-none active:scale-95 transition-transform">
      <div className="flex w-full sm:w-[95%] md:w-[239px] flex-col items-start shrink-0 flex-nowrap bg-[#fff] relative overflow-hidden hover:shadow-lg active:shadow-lg focus:shadow-lg focus:outline-none active:scale-95 transition-all">
        <div className="h-[370px] sm:h-[400px] md:h-[427px] aspect-[2/3] self-stretch shrink-0 relative overflow-hidden">
          <div 
              className="bg-cover bg-top bg-no-repeat absolute top-0 bottom-0 left-0 right-0 overflow-hidden group-hover:scale-105 active:scale-95 transition-transform duration-300" 
              style={{ backgroundImage: `url(${image})` }}
            />
        </div>
        <div className="flex pt-4 sm:pt-[18px] pr-4 sm:pr-[18px] pb-6 sm:pb-[28px] pl-4 sm:pl-[18px] flex-col gap-2 sm:gap-[10px] items-center self-stretch shrink-0 flex-nowrap relative overflow-hidden">
          <span className="flex w-[110px] sm:w-[131px] h-[20px] sm:h-[24px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[14px] sm:text-[16px] font-bold leading-[20px] sm:leading-[24px] text-[#252b42] tracking-[0.1px] relative text-center whitespace-nowrap">
            {title}
          </span>
          <span className="flex w-[120px] sm:w-[146px] h-[20px] sm:h-[24px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[12px] sm:text-[14px] font-bold leading-[20px] sm:leading-[24px] text-[#727272] tracking-[0.2px] relative text-center whitespace-nowrap">
            {department}
          </span>
          <div className="flex pt-1 sm:pt-[5px] pr-1 sm:pr-[3px] pb-1 sm:pb-[5px] pl-1 sm:pl-[3px] gap-1 sm:gap-[5px] items-center justify-center shrink-0 flex-nowrap relative">
            {salePrice && parseFloat(salePrice) < parseFloat(originalPrice) ? (
              <>
                <span className="h-[20px] sm:h-[24px] font-['Montserrat'] text-[14px] sm:text-[16px] font-bold leading-[20px] sm:leading-[24px] text-[#bdbdbd] tracking-[0.1px] whitespace-nowrap line-through">
                  ₺{originalPrice}
                </span>
                <span className="h-[20px] sm:h-[24px] font-['Montserrat'] text-[14px] sm:text-[16px] font-bold leading-[20px] sm:leading-[24px] text-[#23856d] tracking-[0.1px] whitespace-nowrap">
                  ₺{salePrice}
                </span>
              </>
            ) : (
              <span className="h-[20px] sm:h-[24px] font-['Montserrat'] text-[14px] sm:text-[16px] font-bold leading-[20px] sm:leading-[24px] text-[#23856d] tracking-[0.1px] whitespace-nowrap">
                ₺{originalPrice}
              </span>
            )}
          </div>
          <div className="flex w-[60px] sm:w-[82.231px] gap-1 sm:gap-[6.077px] items-center shrink-0 flex-nowrap relative">
            {colors && colors.map((color, index) => (
              <div 
                key={index}
                className="w-[13px] sm:w-[16px] h-[13px] sm:h-[16px] shrink-0 bg-cover bg-no-repeat rounded-[50%] relative" 
                style={{ backgroundImage: `url(${color})` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
