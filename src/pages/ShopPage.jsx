import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { Loader2 } from "lucide-react";
import ReactPaginate from "react-paginate";
import { fetchProducts, fetchCategories } from "../store/actions/productActions";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import ProductCard from "../components/ProductCard";
import ShopCategoryCards from "../components/shop/ShopCategoryCards";
import breadcrumbArrow from "../assets/images/shopPage-img/arrow.png";
import productPlaceholder from "../assets/images/product-img/product1.jpg";
import brand1 from "../assets/images/brands-img/brand1.png";
import brand2 from "../assets/images/brands-img/brand2.png";
import brand3 from "../assets/images/brands-img/brand3.png";
import brand4 from "../assets/images/brands-img/brand4.png";
import brand5 from "../assets/images/brands-img/brand5.png";
import brand6 from "../assets/images/brands-img/brand6.png";

export default function ShopPage() {
  const dispatch = useDispatch();
  const { categoryId, gender, categoryName } = useParams();
  const { productList, total, fetchState, categories } = useSelector((state) => state.product);
  
  // Local states for filter, sort, view mode, and pagination
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(0);
  const limit = 25;

  // Kategorileri ilk açılışta çek
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  // Reset page to 0 when filter or sort changes
  useEffect(() => {
    setCurrentPage(0);
  }, [filter, sort, categoryId]);

  useEffect(() => {
    // Build query parameters - keep all parameters when one changes
    const params = {
      limit: limit,
      offset: currentPage * limit
    };
    if (categoryId) params.category = categoryId;
    if (sort) params.sort = sort;
    if (filter) params.filter = filter;
    dispatch(fetchProducts(params));
  }, [dispatch, categoryId, sort, filter, currentPage]);

  // Handle page change
  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Calculate total pages
  const pageCount = Math.ceil(total / limit);

  const isLoading = fetchState === 'FETCHING';

  return (
    <div className="flex w-full flex-col items-start flex-nowrap bg-[#fff] relative overflow-hidden">
      {/* Header */}
      <Header />

      {/* Breadcrumb Section */}
      <div className="flex w-full pt-[24px] pr-0 pb-[24px] pl-0 flex-col items-center bg-[#f9f9f9] relative overflow-hidden">
        <div className="flex w-full max-w-[1049px] gap-[30px] items-center px-4 md:px-0 flex-wrap md:flex-nowrap relative overflow-hidden">
          <div className="flex flex-col items-start flex-1 md:flex-initial md:w-[510px] relative overflow-hidden">
            <span className="font-['Montserrat'] text-[24px] font-bold leading-[32px] text-[#252b42] tracking-[0.1px] text-center whitespace-nowrap">
              Shop
            </span>
          </div>
          <div className="flex flex-col gap-[5px] items-start md:items-end flex-1 md:flex-initial md:w-[509px] relative overflow-hidden">
            <div className="flex pt-[10px] pr-0 pb-[10px] pl-0 gap-[15px] items-center flex-nowrap relative overflow-hidden">
              <span className="font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#252b42] tracking-[0.2px] text-center whitespace-nowrap">
                Home
              </span>
              <div className="w-[9px] h-[16px] shrink-0" style={{ backgroundImage: `url(${breadcrumbArrow})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat' }} />
              <span className="font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#bdbdbd] tracking-[0.2px] text-center whitespace-nowrap">
                Shop
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Category Cards Section */}
      <div className="flex w-full justify-center">
        <ShopCategoryCards />
      </div>

      {/* Filter Section */}
      <div className="w-full bg-[#fff] relative overflow-hidden">
        <div className="flex w-full max-w-[1050px] pt-[24px] pr-0 pb-[24px] pl-0 flex-col gap-[80px] items-center flex-nowrap px-4 md:px-0 relative overflow-hidden mx-auto">
          <div className="flex w-full flex-col md:flex-row justify-between items-center gap-[15px] flex-wrap relative overflow-hidden">
            <div className="flex pt-0 pr-px pb-0 pl-px gap-[15px] items-center flex-nowrap">
              <span className="h-[24px] font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#727272] tracking-[0.2px] text-left whitespace-nowrap">
                Showing {productList.length} of {total} results
              </span>
            </div>
            <div className="flex pt-0 pr-px pb-0 pl-px gap-[15px] items-center flex-nowrap">
              <span className="h-[24px] font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#727272] tracking-[0.2px] text-left whitespace-nowrap">
                Views:
              </span>
              <button
                onClick={() => setViewMode('grid')}
                className={`flex w-[46px] h-[46px] items-center justify-center rounded-[5px] border-solid border ${viewMode === 'grid' ? 'border-[#252B42] bg-gray-50 text-[#252B42]' : 'border-[#ebebeb] text-[#737373] hover:bg-gray-100'}`}
                style={{marginRight: '8px'}}
                aria-label="Grid View"
              >
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="2" fill="currentColor"/><rect x="14" y="3" width="7" height="7" rx="2" fill="currentColor"/><rect x="14" y="14" width="7" height="7" rx="2" fill="currentColor"/><rect x="3" y="14" width="7" height="7" rx="2" fill="currentColor"/></svg>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`flex w-[46px] h-[46px] items-center justify-center rounded-[5px] border-solid border ${viewMode === 'list' ? 'border-[#252B42] bg-gray-50 text-[#252B42]' : 'border-[#ebebeb] text-[#737373] hover:bg-gray-100'}`}
                aria-label="List View"
              >
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><rect x="3" y="5" width="7" height="3" rx="1.5" fill="currentColor"/><rect x="3" y="10.5" width="18" height="3" rx="1.5" fill="currentColor"/><rect x="3" y="16" width="13" height="3" rx="1.5" fill="currentColor"/></svg>
              </button>
            </div>
            <div className="flex pt-0 pr-px pb-0 pl-px gap-[15px] items-center flex-wrap md:flex-nowrap">
              <input
                type="text"
                placeholder="Arama..."
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-full md:w-[200px] h-[50px] px-[17px] bg-[#f8f8f8] rounded-[5px] border-solid border border-[#dddddd] font-['Montserrat'] text-[14px] text-[#727272] tracking-[0.2px] outline-none focus:border-[#23a6f0]"
              />
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="w-full md:w-[180px] h-[50px] px-[17px] bg-[#f8f8f8] rounded-[5px] border-solid border border-[#dddddd] font-['Montserrat'] text-[14px] text-[#727272] tracking-[0.2px] outline-none focus:border-[#23a6f0] appearance-none cursor-pointer"
                style={{
                  backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2714%27 height=%278%27 viewBox=%270 0 14 8%27%3E%3Cpath fill=%27%23727272%27 d=%27M7 8L0 0h14z%27/%3E%3C/svg%3E')",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 17px center"
                }}
              >
                <option value="">Sırala</option>
                <option value="price:asc">Fiyat: Düşükten Yükseğe</option>
                <option value="price:desc">Fiyat: Yüksekten Düşüğe</option>
                <option value="rating:asc">Puan: Düşükten Yükseğe</option>
                <option value="rating:desc">Puan: Yüksekten Düşüğe</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid/List Section */}
      <div className="w-full bg-[#fff] relative overflow-hidden">
        <div className="flex w-full max-w-[1124px] pt-[48px] pr-0 pb-[48px] pl-0 flex-col gap-[48px] items-center flex-nowrap px-4 md:px-0 relative overflow-hidden mx-auto">
          {/* Loading Spinner */}
          {isLoading && (
            <div className="flex justify-center items-center py-[100px]">
              <Loader2 className="w-12 h-12 animate-spin text-[#23a6f0]" />
            </div>
          )}
          {/* Products Grid/List */}
          {!isLoading && productList.length > 0 && (
            <div className={viewMode === 'list' ? 'flex flex-col gap-[30px] items-center justify-center w-full min-h-[600px]' : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] items-start w-full max-w-[1048px]'}>
              {productList.map((product) => {
                // Truncate description if too long
                const truncatedDesc = product.description?.length > 20 
                  ? product.description.substring(0, 20) + '...' 
                  : (product.description || 'English Department');
                // Find category info from categories or URL params
                const categoryInfo = categoryId ? {
                  id: categoryId,
                  gender: gender || 'shop',
                  title: categoryName || 'category'
                } : null;
                return (
                  <div key={product.id} className={viewMode === 'list' ? 'mx-auto w-[320px]' : ''}>
                    <ProductCard
                      id={product.id}
                      image={product.images?.[0]?.url || productPlaceholder}
                      title={product.name || "Product"}
                      department={truncatedDesc}
                      originalPrice={product.price || 16.48}
                      salePrice={product.sell_price || product.price || 6.48}
                      colors={[]}
                      category={categoryInfo}
                    />
                  </div>
                );
              })}
            </div>
          )}
          {/* No Products Message */}
          {!isLoading && productList.length === 0 && (
            <div className="flex flex-col justify-center items-center py-[100px] gap-4">
              <p className="font-['Montserrat'] text-[16px] text-[#727272]">
                Bu kategoride henüz ürün bulunmuyor.
              </p>
              <Link 
                to="/shop"
                className="px-5 py-[10px] bg-[#23a6f0] rounded-[5px] font-['Montserrat'] text-sm font-bold text-white hover:bg-[#1a8cd8] transition-colors"
              >
                Tüm Ürünler
              </Link>
            </div>
          )}

          {/* Total Products Info */}
          {!isLoading && total > 0 && (
            <div className="w-full flex justify-center">
              <p className="font-['Montserrat'] text-[14px] text-[#727272]">
                Showing {productList.length} of {total} products
              </p>
            </div>
          )}

          {/* Pagination */}
          {!isLoading && pageCount > 1 && (
            <div className="w-full flex justify-center mt-8">
              <ReactPaginate
                previousLabel={"Önceki"}
                nextLabel={"Sonraki"}
                breakLabel={"..."}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                forcePage={currentPage}
                containerClassName={"flex items-center gap-2"}
                pageClassName={""}
                pageLinkClassName={"px-4 py-2 border border-[#e8e8e8] rounded-[5px] font-['Montserrat'] text-[14px] font-bold text-[#23a6f0] hover:bg-[#23a6f0] hover:text-white transition-colors"}
                previousClassName={""}
                previousLinkClassName={"px-4 py-2 border border-[#e8e8e8] rounded-[5px] font-['Montserrat'] text-[14px] font-bold text-[#23a6f0] hover:bg-[#23a6f0] hover:text-white transition-colors"}
                nextClassName={""}
                nextLinkClassName={"px-4 py-2 border border-[#e8e8e8] rounded-[5px] font-['Montserrat'] text-[14px] font-bold text-[#23a6f0] hover:bg-[#23a6f0] hover:text-white transition-colors"}
                breakClassName={""}
                breakLinkClassName={"px-4 py-2 font-['Montserrat'] text-[14px] text-[#727272]"}
                activeClassName={""}
                activeLinkClassName={"!bg-[#23a6f0] !text-white border-[#23a6f0]"}
                disabledClassName={"opacity-50 cursor-not-allowed"}
              />
            </div>
          )}
        </div>
      </div>

      {/* Brand Logos Section */}
      <section className="w-full bg-[#FAFAFA] py-12 flex justify-center">
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
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
