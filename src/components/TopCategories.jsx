import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function TopCategories() {
  const categories = useSelector((state) => state.product.categories);

  // Helper function to convert Turkish characters to URL-friendly format
  const toUrlFriendly = (str) => {
    const turkishMap = {
      'ç': 'c', 'Ç': 'C',
      'ğ': 'g', 'Ğ': 'G',
      'ı': 'i', 'İ': 'I',
      'ö': 'o', 'Ö': 'O',
      'ş': 's', 'Ş': 'S',
      'ü': 'u', 'Ü': 'U'
    };
    
    return str
      .split('')
      .map(char => turkishMap[char] || char)
      .join('')
      .toLowerCase()
      .replace(/\s+/g, '-');
  };

  // Get gender label
  const getGenderLabel = (gender) => {
    return gender === 'k' ? 'kadin' : 'erkek';
  };

  // Sort by rating and get top 5
  const topCategories = [...categories]
    .sort((a, b) => (b.rating || 0) - (a.rating || 0))
    .slice(0, 5);

  if (topCategories.length === 0) {
    return null;
  }

  return (
    <div className="w-full py-8 md:py-[80px] bg-white">
      <div className="max-w-[1050px] mx-auto px-4 sm:px-6">
        <h2 className="font-['Montserrat'] text-[20px] sm:text-[24px] md:text-[40px] font-bold leading-[28px] sm:leading-[32px] md:leading-[50px] text-[#252b42] text-center mb-2 sm:mb-[10px]">
          Top Categories
        </h2>
        <p className="font-['Montserrat'] text-[13px] sm:text-[14px] leading-[18px] sm:leading-[20px] text-[#727272] text-center mb-6 sm:mb-[50px]">
          Explore our most popular categories
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 md:gap-[15px]">
          {topCategories.map((category) => (
            <Link
              key={category.id}
              to={`/shop/${getGenderLabel(category.gender)}/${toUrlFriendly(category.title)}/${category.id}`}
              className="group relative overflow-hidden rounded-[5px] h-[220px] sm:h-[300px] md:h-[400px] shadow-sm hover:shadow-lg active:shadow-lg focus:outline-none active:scale-95 transition-all"
              tabIndex={0}
            >
              {/* Category Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform group-hover:scale-110"
                style={{
                  backgroundImage: category.img
                    ? `url(${category.img})`
                    : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-opacity" />
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-3 sm:p-[20px] text-center">
                <h3 className="font-['Montserrat'] text-[16px] sm:text-[20px] md:text-[24px] font-bold text-white mb-2 sm:mb-[10px]">
                  {category.title}
                </h3>
                <p className="font-['Montserrat'] text-[12px] sm:text-[14px] text-white opacity-90">
                  {category.gender === 'k' ? 'Kadın' : 'Erkek'}
                </p>
                {category.rating && (
                  <div className="flex items-center gap-1 sm:gap-[5px] mt-2 sm:mt-[10px]">
                    <span className="text-yellow-400 text-[14px] sm:text-[16px]">★</span>
                    <span className="font-['Montserrat'] text-[12px] sm:text-[14px] font-bold text-white">
                      {category.rating.toFixed(1)}
                    </span>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
