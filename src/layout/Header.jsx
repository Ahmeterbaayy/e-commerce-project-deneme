import React, { useState } from "react";
import phoneIcon from "../assets/images/header-img/phone.png";
import faceIcon from "../assets/images/header-img/face.png";
import messageIcon from "../assets/images/header-img/message.png";
import instaIcon from "../assets/images/header-img/insta.png";
import twitterIcon from "../assets/images/header-img/twitter.png";
import youtubeIcon from "../assets/images/header-img/youtube.png";
import loginIcon from "../assets/images/header-img/profileweb.png";
import searchIcon from "../assets/images/header-img/search (2).png";
import cartIcon from "../assets/images/header-img/package.png";
import searchMobileIcon from "../assets/images/header-img/search.png";
import cartMobileIcon from "../assets/images/header-img/shopping-card.png";
import menuIcon from "../assets/images/header-img/menu.png";
import followIcon from "../assets/images/header-img/follow.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Gravatar from "react-gravatar";
import { logoutUser } from "../store/actions/clientActions";


export default function Header() {
  const user = useSelector((state) => state.client.user);
  const categories = useSelector((state) => state.product.categories);
  const cart = useSelector((state) => state.shoppingCart.cart);
  const dispatch = useDispatch();
  const isLoggedIn = user && user.email;
  const [showDropdown, setShowDropdown] = useState(false); // Shop için
  const [showUserDropdown, setShowUserDropdown] = useState(false); // Kullanıcı için
  const [showCartDropdown, setShowCartDropdown] = useState(false);

  // Sadece geçerli ürünleri say
  const cartItemCount = cart.filter(item => item && item.product).reduce((total, item) => total + item.count, 0);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

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

  // Group categories by gender
  const femaleCategories = categories.filter(cat => cat.gender === 'k');
  const maleCategories = categories.filter(cat => cat.gender === 'e');

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className="w-full h-full">
      {/* Top Bar */}
      <div className="w-full h-auto md:h-[58px] bg-[#252b42] relative overflow-hidden hidden md:block">
        <div className="w-full h-[46px] relative overflow-hidden mt-[9px]">
          <div className="flex w-full h-[46px] justify-between items-start flex-wrap md:flex-nowrap absolute top-0 left-0 overflow-hidden">
            <div className="flex w-full pt-0 px-[24px] justify-between items-start shrink-0 flex-wrap md:flex-nowrap relative">
              <div className="flex w-full md:w-[415px] h-[46px] gap-[10px] items-center shrink-0 flex-nowrap relative overflow-hidden">
                <div className="flex w-[145.001px] pt-[10px] pr-[10px] pb-[10px] pl-[10px] gap-[5px] items-center shrink-0 flex-nowrap rounded-[5px] relative overflow-hidden">
                  <img src={phoneIcon} alt="Phone" className="w-[16.001px] h-[16px] shrink-0 object-cover relative overflow-hidden" />
                  <span className="h-[24px] shrink-0 basis-auto font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#fff] tracking-[0.2px] relative text-left whitespace-nowrap">
                    (225) 555-0118
                  </span>
                </div>
                <div className="flex w-[260px] pt-[10px] pr-[10px] pb-[10px] pl-[10px] gap-[5px] items-center shrink-0 flex-nowrap rounded-[5px] relative overflow-hidden">
                  <img src={messageIcon} alt="Message" className="w-[16px] h-[16px] shrink-0 object-cover relative overflow-hidden" />
                  <span className="h-[24px] shrink-0 basis-auto font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#fff] tracking-[0.2px] relative text-left whitespace-nowrap">
                    michelle.rivera@example.com
                  </span>
                </div>
              </div>
              <div className="hidden md:flex w-[332px] pt-[10px] pr-[10px] pb-[10px] pl-[10px] gap-[10px] items-start shrink-0 flex-nowrap relative overflow-hidden">
                <span className="h-[24px] shrink-0 basis-auto font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#fff] tracking-[0.2px] relative text-left whitespace-nowrap">
                  Follow Us and get a chance to win 80% off
                </span>
              </div>
              <div className="hidden md:flex w-[233px] h-[46px] pt-[10px] pr-[10px] pb-[10px] pl-[10px] gap-[10px] items-start shrink-0 flex-nowrap relative overflow-hidden">
                <span className="h-[24px] shrink-0 basis-auto font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#fff] tracking-[0.2px] relative text-left whitespace-nowrap">
                  Follow Us :
                </span>
                <div className="flex items-center gap-2 ml-2">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src={instaIcon} alt="Instagram" className="w-[24px] h-[24px] object-cover cursor-pointer transition-all duration-200 hover:opacity-80" />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                    <img src={youtubeIcon} alt="YouTube" className="w-[24px] h-[24px] object-cover cursor-pointer transition-all duration-200 hover:opacity-80" />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src={faceIcon} alt="Facebook" className="w-[24px] h-[24px] object-cover cursor-pointer transition-all duration-200 hover:opacity-80" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src={twitterIcon} alt="Twitter" className="w-[24px] h-[24px] object-cover cursor-pointer transition-all duration-200 hover:opacity-80" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobil Header - referans gibi sade ve ikonlar sıralı */}
      <div className="md:hidden w-full bg-white z-50 border-b border-gray-200">
        <div className="flex w-full h-[60px] px-4 items-center justify-between">
          <Link to="/" className="font-['Montserrat'] text-[22px] font-bold text-[#252b42] tracking-[0.1px]">Bandage</Link>
          <div className="flex items-center gap-4">
              <Link to="/shop">
                <img src={searchMobileIcon} alt="search" className="w-6 h-6" />
              </Link>
              <Link to="/cart" className="relative flex items-center">
                <img src={cartMobileIcon} alt="cart" className="w-6 h-6" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 min-w-[16px] h-[16px] bg-[#23a6f0] text-white text-[10px] font-bold rounded-full flex items-center justify-center px-[4px] border-2 border-white">
                    {cartItemCount}
                  </span>
                )}
              </Link>
              <button onClick={() => setShowMobileMenu(v => !v)} className="focus:outline-none active:scale-95">
                {/* SVG hamburger icon */}
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Üst çizgi tam uzunluk */}
                  <rect y="5" width="24" height="2.5" rx="1.25" fill="#252b42"/>
                  {/* Orta çizgi sağ tarafı üst çizgiyle aynı hizada */}
                  <rect x="4.5" y="11" width="19.5" height="2.5" rx="1.25" fill="#252b42"/>
                  {/* Alt çizgi üsttekiyle aynı sağ hizada */}
                  <rect x="9" y="17" width="15" height="2.5" rx="1.25" fill="#252b42"/>
                </svg>
              </button>
          </div>
        </div>
        {/* Mobilde hamburger menü açıldığında menü göster */}
        {showMobileMenu && (
          <div className="flex flex-col items-center justify-center w-full pb-2 gap-2 bg-white shadow-lg z-50">
            <Link to="/" className="text-[#8c8c8c] text-base font-medium py-1 w-full text-center hover:text-[#23a6f0] active:text-[#1a8cd8] focus:underline transition-colors">Home</Link>
            <Link to="/shop" className="text-[#8c8c8c] text-base font-medium py-1 w-full text-center hover:text-[#23a6f0] active:text-[#1a8cd8] focus:underline transition-colors">Product</Link>
            <Link to="/pricing" className="text-[#8c8c8c] text-base font-medium py-1 w-full text-center hover:text-[#23a6f0] active:text-[#1a8cd8] focus:underline transition-colors">Pricing</Link>
            <Link to="/contact" className="text-[#8c8c8c] text-base font-medium py-1 w-full text-center hover:text-[#23a6f0] active:text-[#1a8cd8] focus:underline transition-colors">Contact</Link>
            <div className="w-full border-t border-[#e6e6e6] my-2"></div>
            {isLoggedIn ? (
              <>
                <div className="flex flex-col items-center w-full">
                  <span className="text-[#252b42] text-base font-semibold py-1 w-full text-center">{user.name || user.email}</span>
                  <button onClick={handleLogout} className="text-[#8c8c8c] text-base font-medium py-1 w-full text-center hover:text-red-500 active:text-red-700 focus:underline transition-colors">Logout</button>
                </div>
              </>
            ) : (
              <>
                <Link to="/login" className="text-[#23a6f0] text-base font-medium py-1 w-full text-center hover:text-[#1a8cd8] active:text-[#166fa3] focus:underline transition-colors">Login</Link>
                <Link to="/signup" className="text-[#23a6f0] text-base font-medium py-1 w-full text-center hover:text-[#1a8cd8] active:text-[#166fa3] focus:underline transition-colors">Register</Link>
              </>
            )}
          </div>
        )}
      </div>

      {/* Main Navigation */}
      <div className="w-full h-auto md:h-[58px] relative mt-0 md:mt-[12px] z-50 hidden md:block">
        <div className="w-full h-full flex flex-col md:flex-row items-center px-[4px] md:px-[48px] py-[15px] md:py-0">
          <div className="flex items-center w-auto">
            <Link to="/" className="font-['Montserrat'] text-[24px] font-bold leading-[32px] text-[#252b42] tracking-[0.1px] whitespace-nowrap ml-6">
              Bandage
            </Link>
          </div>
          <div className="hidden md:flex gap-[12px] items-center ml-54">
            <Link to="/" className="font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#727272] tracking-[0.2px] whitespace-nowrap">
              Home
            </Link>
            <div 
              className="relative"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <div className="flex items-center gap-[5px] cursor-pointer py-2">
                <Link to="/shop" className="font-['Montserrat'] text-[14px] font-medium leading-[28px] text-[#252b42] tracking-[0.2px] whitespace-nowrap">
                  Shop
                </Link>
                <svg className="w-[10px] h-[6px]" fill="currentColor" viewBox="0 0 10 6">
                  <path d="M0 0L5 5L10 0H0Z" />
                </svg>
              </div>
              
              {/* Dropdown Menu */}
              {showDropdown && categories.length > 0 && (
                <div className="absolute top-full left-0 pt-2 z-[100]">
                  <div className="bg-white shadow-lg rounded-[5px] border border-[#e6e6e6] p-[20px] min-w-[400px]">
                  <div className="grid grid-cols-2 gap-[30px]">
                    {/* Female Categories */}
                    <div className="flex flex-col gap-[10px]">
                      <h3 className="font-['Montserrat'] text-[16px] font-bold text-[#252b42] mb-[10px]">
                        Kadın
                      </h3>
                      {femaleCategories.map((category) => (
                        <Link
                          key={category.id}
                          to={`/shop/kadin/${toUrlFriendly(category.title)}/${category.id}`}
                          className="font-['Montserrat'] text-[14px] font-bold text-[#727272] hover:text-[#23a6f0] transition-colors"
                        >
                          {category.title}
                        </Link>
                      ))}
                    </div>
                    
                    {/* Male Categories */}
                    <div className="flex flex-col gap-[10px]">
                      <h3 className="font-['Montserrat'] text-[16px] font-bold text-[#252b42] mb-[10px]">
                        Erkek
                      </h3>
                      {maleCategories.map((category) => (
                        <Link
                          key={category.id}
                          to={`/shop/erkek/${toUrlFriendly(category.title)}/${category.id}`}
                          className="font-['Montserrat'] text-[14px] font-bold text-[#727272] hover:text-[#23a6f0] transition-colors"
                        >
                          {category.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                  </div>
                </div>
              )}
            </div>
            <Link to="/about" className="font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#727272] tracking-[0.2px] whitespace-nowrap">
              About
            </Link>
            <Link to="/blog" className="font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#727272] tracking-[0.2px] whitespace-nowrap">
              Blog
            </Link>
            <Link to="/contact" className="font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#727272] tracking-[0.2px] whitespace-nowrap">
              Contact
            </Link>
            <Link to="/team" className="font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#727272] tracking-[0.2px] whitespace-nowrap">
              Team
            </Link>
            <Link to="/pricing" className="font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#727272] tracking-[0.2px] whitespace-nowrap">
              Pricing
            </Link>
            <Link to="/pages" className="font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#727272] tracking-[0.2px] whitespace-nowrap">
              Pages
            </Link>
          </div>
            <div className="hidden md:flex flex-1 items-center gap-[5px] justify-end">
              {isLoggedIn ? (
                <>
                  <div className="relative">
                    <button
                      className="flex items-center gap-[10px] px-[15px] py-[10px] rounded-[5px] hover:bg-[#f5f5f5] transition-colors"
                      onClick={() => setShowUserDropdown((v) => !v)}
                    >
                      <Gravatar 
                        email={user.email} 
                        size={32} 
                        rating="pg" 
                        default="mp" 
                        className="rounded-full"
                      />
                      <span className="font-['Montserrat'] text-[14px] font-bold text-[#252b42] tracking-[0.2px]">
                        {user.name || user.email}
                      </span>
                      <svg className="w-4 h-4 ml-1 text-[#252b42]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </button>
                    {showUserDropdown && (
                      <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                        <Link
                          to="/orders"
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-700 font-semibold rounded-t-lg transition-colors"
                          onClick={() => setShowUserDropdown(false)}
                        >
                          Siparişlerim
                        </Link>
                        <button
                          onClick={() => { setShowUserDropdown(false); handleLogout(); }}
                          className="w-full text-left block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 rounded-b-lg"
                        >
                          Çıkış Yap
                        </button>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <Link to="/login" className="flex items-center gap-[5px] px-[15px] py-[15px] rounded-[37px]">
                    <img src={loginIcon} alt="Login" className="w-[12px] h-[12px] object-cover" />
                    <span className="font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#23a6f0] tracking-[0.2px] whitespace-nowrap">
                      Login
                    </span>
                  </Link>
                  <span className="font-['Montserrat'] text-[14px] text-[#23a6f0] tracking-[0.2px]">/</span>
                  <Link to="/signup" className="flex items-center gap-[5px] px-[15px] py-[15px] rounded-[37px]">
                    <span className="font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#23a6f0] tracking-[0.2px] whitespace-nowrap">
                      Register
                    </span>
                  </Link>
                </>
              )}
              {/* Yeni ikonlar işlevli */}
              <div className="flex items-center gap-[22px] ml-5">
                {/* Arama ikonu: Shop sayfasına yönlendir */}
                <Link to="/shop">
                  <img src={searchIcon} alt="Search" className="w-[15px] h-[15px] object-cover cursor-pointer" />
                </Link>
                {/* Sepet ikonu: Cart sayfasına yönlendir ve ürün sayısı badge'i */}
                <Link to="/cart" className="relative flex items-center">
                  <img src={cartIcon} alt="Cart" className="w-[15px] h-[15px] object-cover cursor-pointer" />
                  {cartItemCount > 0 && (
                    <span className="absolute -top-2 -right-3 min-w-[16px] h-[16px] bg-[#23a6f0] text-white text-[10px] font-bold rounded-full flex items-center justify-center px-[4px] border-2 border-white">
                      {cartItemCount}
                    </span>
                  )}
                </Link>
                {/* Wishlist ikonu: Wishlist sayfasına yönlendir */}
                <Link to="/wishlist">
                  <img src={followIcon} alt="Follow" className="w-[15px] h-[15px] object-cover cursor-pointer" />
                </Link>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
