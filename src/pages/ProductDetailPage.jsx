import brand1 from "../assets/images/brands-img/brand1.png";
import brand2 from "../assets/images/brands-img/brand2.png";
import brand3 from "../assets/images/brands-img/brand3.png";
import brand4 from "../assets/images/brands-img/brand4.png";
import brand5 from "../assets/images/brands-img/brand5.png";
import brand6 from "../assets/images/brands-img/brand6.png";
import featured1 from "../assets/images/featured-img/featured1.jpg";
import pingroom from "../assets/images/detailpage-img/pingroom.png";
import pinkroomshadow from "../assets/images/detailpage-img/pinkroomshadow.png";
import productcover1 from "../assets/images/detailpage-img/productcover1.png";
import productcover2 from "../assets/images/detailpage-img/productcover2.png";
import productcover3 from "../assets/images/detailpage-img/productcover3.png";
import productcover4 from "../assets/images/detailpage-img/productcover4.png";
import productcover5 from "../assets/images/detailpage-img/productcover5.png";
import productcover6 from "../assets/images/detailpage-img/productcover6.png";
import featured3 from "../assets/images/featured-img/featured3.jpg";
import staticImg from "../assets/images/featured-img/static.png";
import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Loader2, ChevronRight, ArrowLeft } from "lucide-react";
import { fetchProductById } from "../store/actions/productActions";
import { addToCart } from "../store/actions/shoppingCartActions";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

export default function ProductDetailPage() {
  const { productId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const { selectedProduct, fetchState } = useSelector((state) => state.product);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (productId) {
      console.log('Fetching product ID:', productId);
      dispatch(fetchProductById(productId));
    }
  }, [dispatch, productId]);

  console.log('ProductDetailPage - fetchState:', fetchState, 'selectedProduct:', selectedProduct);

  const isLoading = fetchState === 'FETCHING';

  if (isLoading) {
    return (
      <div className="flex w-full min-h-screen flex-col items-start flex-nowrap bg-white relative overflow-hidden">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <Loader2 className="w-12 h-12 animate-spin text-[#23a6f0]" />
        </div>
        <Footer />
      </div>
    );
  }

  if (!selectedProduct || fetchState === 'FAILED') {
    return (
      <div className="flex w-full min-h-screen flex-col items-start flex-nowrap bg-white relative overflow-hidden">
        <Header />
        <div className="flex-1 flex flex-col items-center justify-center gap-4">
          <p className="font-['Montserrat'] text-[16px] text-[#727272]">
            {fetchState === 'FAILED' ? 'Ürün yüklenirken hata oluştu.' : 'Ürün bulunamadı.'}
          </p>
          <button
            onClick={() => history.push('/shop')}
            className="px-5 py-[10px] bg-[#23a6f0] rounded-[5px] font-['Montserrat'] text-sm font-bold text-white hover:bg-[#1a8cd8] transition-colors"
          >
            Shop'a Dön
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? selectedProduct.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === selectedProduct.images.length - 1 ? 0 : prev + 1
    );
  };

  const handleAddToCart = () => {
    if (!selectedProduct || !selectedProduct.id) return;
    dispatch(addToCart(selectedProduct));
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <div className="flex w-full flex-col items-start flex-nowrap bg-white relative overflow-hidden">
      {/* Header */}
      <Header />

      {/* Breadcrumb Section */}
      <div className="w-full bg-[#f9f9f9] py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <button
              onClick={() => history.goBack()}
              className="flex items-center gap-2 font-['Montserrat'] text-sm font-bold text-[#23a6f0] hover:text-[#1a8fd0] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Geri
            </button>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-['Montserrat'] text-sm font-bold text-[#252b42]">
              Home
            </span>
            <ChevronRight className="w-4 h-4 text-[#bdbdbd]" />
            <span className="font-['Montserrat'] text-sm font-bold text-[#bdbdbd]">
              Shop
            </span>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div className="w-full bg-[#f9f9f9] pb-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[30px]">
            {/* Product Gallery */}
            <div className="flex flex-col gap-[21px]">
              {/* Main Image with Navigation */}
              <div className="relative w-full aspect-[506/450] rounded-[5px] overflow-hidden bg-white">
                <img
                  src={selectedProduct.images?.[currentImageIndex]?.url || featured1}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
                {/* Navigation Arrows - only show if multiple images */}
                {selectedProduct.images && selectedProduct.images.length > 1 && (
                  <>
                    <button 
                      onClick={handlePrevImage}
                      className="absolute left-10 top-1/2 -translate-y-1/2 w-6 h-11 bg-white rounded shadow-sm flex items-center justify-center hover:bg-gray-50">
                      <svg
                        width="24"
                        height="45"
                        viewBox="0 0 24 45"
                        fill="none"
                        className="text-[#252b42]"
                      >
                        <path
                          d="M0.93934 20.9393C0.353553 21.5251 0.353553 22.4749 0.93934 23.0607L10.4853 32.6066C11.0711 33.1924 12.0208 33.1924 12.6066 32.6066C13.1924 32.0208 13.1924 31.0711 12.6066 30.4853L4.12132 22L12.6066 13.5147C13.1924 12.9289 13.1924 11.9792 12.6066 11.3934C12.0208 10.8076 11.0711 10.8076 10.4853 11.3934L0.93934 20.9393ZM24 20.5L2 20.5V23.5L24 23.5V20.5Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                    <button 
                      onClick={handleNextImage}
                      className="absolute right-10 top-1/2 -translate-y-1/2 w-6 h-11 bg-white rounded shadow-sm flex items-center justify-center hover:bg-gray-50">
                      <svg
                        width="24"
                        height="45"
                        viewBox="0 0 24 45"
                        fill="none"
                        className="text-[#252b42]"
                      >
                        <path
                          d="M23.0607 23.0607C23.6464 22.4749 23.6464 21.5251 23.0607 20.9393L13.5147 11.3934C12.9289 10.8076 11.9792 10.8076 11.3934 11.3934C10.8076 11.9792 10.8076 12.9289 11.3934 13.5147L19.8787 22L11.3934 30.4853C10.8076 31.0711 10.8076 32.0208 11.3934 32.6066C11.9792 33.1924 12.9289 33.1924 13.5147 32.6066L23.0607 23.0607ZM0 23.5H22V20.5H0V23.5Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails */}
              {selectedProduct.images && (
                <div className="flex gap-[19px] flex-wrap">
                  {selectedProduct.images.map((image, index) => (
                    <div
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-[100px] h-[75px] rounded-[5px] border cursor-pointer hover:opacity-80 transition-opacity ${
                        currentImageIndex === index ? 'border-[#23a6f0] opacity-100' : 'border-gray-300 opacity-50'
                      }`}
                      style={{
                        backgroundImage: `url(${image.url})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <h1 className="font-['Montserrat'] text-xl text-[#252b42] mb-3">
                {selectedProduct.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-[10px] mb-5">
                <div className="flex gap-[5px]">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill={i < Math.floor(selectedProduct.rating || 0) ? "#F3CD03" : "#E5E5E5"}
                      className="w-[22px] h-[22px]"
                    >
                      <path d="M11 0L13.4697 8.14616H21.9389L15.2346 13.2077L17.7043 21.3538L11 16.2923L4.29568 21.3538L6.76537 13.2077L0.0610752 8.14616H8.53026L11 0Z" />
                    </svg>
                  ))}
                </div>
                <span className="font-['Montserrat'] text-sm font-bold text-[#727272]">
                  {selectedProduct.sell_count || 0} Satış
                </span>
              </div>

              {/* Price */}
              <div className="mb-[5px]">
                <span className="font-['Montserrat'] text-2xl font-bold text-[#252b42]">
                  ₺{selectedProduct.price}
                </span>
              </div>

              {/* Availability */}
              <div className="flex items-center gap-[5px] mb-8">
                <span className="font-['Montserrat'] text-sm font-bold text-[#727272]">
                  Stok :
                </span>
                <span className={`font-['Montserrat'] text-sm font-bold ${selectedProduct.stock > 0 ? 'text-[#23a6f0]' : 'text-red-500'}`}>
                  {selectedProduct.stock > 0 ? `${selectedProduct.stock} Adet` : 'Stokta Yok'}
                </span>
              </div>

              {/* Description */}
              <p className="font-['Montserrat'] text-sm leading-5 text-[#848484] mb-[26px] max-w-[464px]">
                {selectedProduct.description}
              </p>

              {/* Divider */}
              <div className="w-full max-w-[445px] h-px bg-[#e5e5e5] mb-[29px]" />

              {/* Color Options */}
              <div className="flex gap-[10px] mb-[67px]">
                <button className="w-[30px] h-[30px] rounded-full bg-[#23A6F0] hover:ring-2 ring-offset-2 ring-[#23A6F0]" />
                <button className="w-[30px] h-[30px] rounded-full bg-[#2DC071] hover:ring-2 ring-offset-2 ring-[#2DC071]" />
                <button className="w-[30px] h-[30px] rounded-full bg-[#E77C40] hover:ring-2 ring-offset-2 ring-[#E77C40]" />
                <button className="w-[30px] h-[30px] rounded-full bg-[#252B42] hover:ring-2 ring-offset-2 ring-[#252B42]" />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-[10px] items-center flex-wrap">
                <button 
                  onClick={handleAddToCart}
                  disabled={selectedProduct.stock === 0}
                  className={`px-5 py-[10px] rounded-[5px] font-['Montserrat'] text-sm font-bold text-white transition-colors ${
                    selectedProduct.stock === 0 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-[#23a6f0] hover:bg-[#1a8cd8]'
                  }`}
                >
                  Sepete Ekle
                </button>
                <button className="w-10 h-10 rounded-full bg-white border border-[#e8e8e8] flex items-center justify-center hover:bg-gray-50">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="text-[#252b42]"
                  >
                    <path
                      d="M10 18.35L8.55 17.03C3.4 12.36 0 9.27 0 5.5C0 2.41 2.42 0 5.5 0C7.24 0 8.91 0.81 10 2.08C11.09 0.81 12.76 0 14.5 0C17.58 0 20 2.41 20 5.5C20 9.27 16.6 12.36 11.45 17.03L10 18.35Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
                <button className="w-10 h-10 rounded-full bg-white border border-[#e8e8e8] flex items-center justify-center hover:bg-gray-50">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="text-[#252b42]"
                  >
                    <path
                      d="M7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM1 2V4H3L6.6 11.59L5.25 14.04C5.09 14.32 5 14.65 5 15C5 16.1 5.9 17 7 17H19V15H7.42C7.28 15 7.17 14.89 7.17 14.75L7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.58 17.3 11.97L20.88 5.48C20.96 5.34 21 5.17 21 5C21 4.45 20.55 4 20 4H5.21L4.27 2H1ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
                <button className="w-10 h-10 rounded-full bg-white border border-[#e8e8e8] flex items-center justify-center hover:bg-gray-50">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="text-[#252b42]"
                  >
                    <path
                      d="M10 4.5C7 4.5 4.73 6.61 4 9.5C4.73 12.39 7 14.5 10 14.5C13 14.5 15.27 12.39 16 9.5C15.27 6.61 13 4.5 10 4.5ZM10 13C8.62 13 7.5 11.88 7.5 10.5C7.5 9.12 8.62 8 10 8C11.38 8 12.5 9.12 12.5 10.5C12.5 11.88 11.38 13 10 13ZM10 9C9.17 9 8.5 9.67 8.5 10.5C8.5 11.33 9.17 12 10 12C10.83 12 11.5 11.33 11.5 10.5C11.5 9.67 10.83 9 10 9Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="w-full bg-white">
        <div className="container mx-auto px-4">
          {/* Tab Headers */}
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-0 py-3 border-b border-[#ebebeb]">
            <button className="px-6 py-6 font-['Montserrat'] text-sm font-semibold text-[#727272] hover:text-[#252b42]">
              Description
            </button>
            <button className="px-6 py-6 font-['Montserrat'] text-sm font-bold text-[#727272] hover:text-[#252b42]">
              Additional Information
            </button>
            <button className="px-6 py-6 font-['Montserrat'] text-sm font-bold text-[#727272] hover:text-[#252b42] flex items-center gap-2">
              Reviews
              <span className="text-[#23856d]">(0)</span>
            </button>
          </div>

          {/* Tab Content */}
          <div className="py-12">
            <div className="flex flex-col md:flex-row gap-[40px] w-full">
              {/* Sol: Görsel (arka gölge ve ana görsel) */}
              <div className="flex-1 w-full max-w-[420px] flex-shrink-0 relative aspect-[332/392]">
                <img
                  src={pinkroomshadow}
                  alt="Gölge"
                  className="absolute left-[5px] top-0 w-full h-full object-cover rounded-[5px] opacity-100 z-0"
                />
                <div className="relative z-10 w-[95%] h-[97%] bg-[#f5f5f5] rounded-[5px] overflow-hidden ml-0">
                  <img
                    src={pingroom}
                    alt="Interior"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Orta: Başlık ve paragraflar */}
              <div className="flex-1 w-full flex flex-col gap-[30px]">
                <h3 className="font-bold text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42]">
                  the quick fox jumps over
                </h3>
                <div className="flex flex-col gap-[20px]">
                  <p className="font-normal text-[14px] leading-[20px] tracking-[0.2px] text-[#737373]">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                  </p>
                  <p className="font-normal text-[14px] leading-[20px] tracking-[0.2px] text-[#737373]">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                  </p>
                  <p className="font-normal text-[14px] leading-[20px] tracking-[0.2px] text-[#737373]">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                  </p>
                </div>
              </div>
              {/* Sağ: Madde işaretli listeler (2 adet) */}
              <div className="flex-1 w-full flex flex-col gap-[30px]">
                <div>
                  <h3 className="font-bold text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42] mb-[30px]">
                    the quick fox jumps over
                  </h3>
                  <ul className="flex flex-col gap-[10px]">
                    {[1, 2, 3, 4].map((item) => (
                      <li key={item} className="flex items-center gap-[20px]">
                        <ChevronRight size={16} className="text-[#737373] min-w-[9px]" strokeWidth={3} />
                        <span className="font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">
                          the quick fox jumps over the lazy dog
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42] mb-[30px]">
                    the quick fox jumps over
                  </h3>
                  <ul className="flex flex-col gap-[10px]">
                    {[1, 2, 3].map((item) => (
                      <li key={item} className="flex items-center gap-[20px]">
                        <ChevronRight size={16} className="text-[#737373] min-w-[9px]" strokeWidth={3} />
                        <span className="font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">
                          the quick fox jumps over the lazy dog
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>

      {/* Bestseller Products */}
      <div className="w-full bg-[#f9f9f9] py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-6">
            <h2 className="font-['Montserrat'] text-2xl font-bold text-[#252b42] text-center">
              BESTSELLER PRODUCTS
            </h2>
            <div className="w-full h-[2px] bg-[#ebebeb]" />

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[30px]">
              {[
                productcover1,
                productcover2,
                productcover3,
                productcover4,
                productcover5,
                productcover6,
                productcover1,
                productcover2
              ].map((img, i) => (
                <div
                  key={i}
                  className="flex flex-col bg-white overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="h-[280px] relative overflow-hidden">
                    <img
                      src={img}
                      alt={`Product ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-[25px] flex flex-col gap-[10px]">
                    <h3 className="font-['Montserrat'] text-base font-bold text-[#252b42]">
                      Graphic Design
                    </h3>
                    <p className="font-['Montserrat'] text-sm font-bold text-[#727272]">
                      English Department
                    </p>
                    <div className="flex gap-[5px] pt-[5px]">
                      <span className="font-['Montserrat'] text-base font-bold text-[#bdbdbd]">
                        $16.48
                      </span>
                      <span className="font-['Montserrat'] text-base font-bold text-[#23856d]">
                        $6.48
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Brand Logos */}
      <div className="w-full bg-[#FAFAFA] py-12 flex justify-center">
        <div className="w-[90%] flex flex-col sm:flex-row flex-wrap justify-center items-center gap-8 md:gap-12">
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

      {/* Footer */}
      <Footer />

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-8 right-8 z-[200] animate-slideInRight">
          <div className="bg-[#23856d] text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <div>
              <p className="font-['Montserrat'] text-[14px] font-bold">Ürün sepete eklendi!</p>
              <p className="font-['Montserrat'] text-[12px] opacity-90">{selectedProduct?.name}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
