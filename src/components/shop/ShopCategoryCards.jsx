import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function ShopCategoryCards() {
  const categories = useSelector((state) => state.product.categories);

  // En yüksek rating'e sahip ilk 5 kategori (veya tümü)
  const topCategories = [...categories]
    .sort((a, b) => (b.rating || 0) - (a.rating || 0))
    .slice(0, 5);

  return (
    <section className="bg-[#FAFAFA] pb-8 sm:pb-12">
      <div className="w-full max-w-[1088px] mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 justify-items-center w-fit mx-auto">
          {topCategories.map((cat) => {
            // Kategoriye uygun route ve görsel
            const gender = cat.code?.startsWith("k:") ? "kadin" : "erkek";
            return (
              <Link
                to={`/shop/${gender}/${cat.title?.toLowerCase()}/${cat.id}`}
                key={cat.id}
                className="relative group w-full aspect-square overflow-hidden bg-gray-200 rounded-lg shadow hover:shadow-lg active:shadow-lg focus:outline-none active:scale-95 transition-all max-w-[180px] sm:max-w-[200px]"
                tabIndex={0}
              >
                <img
                  src={cat.img || cat.image || "https://via.placeholder.com/300"}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition-colors flex flex-col items-center justify-center text-white">
                  <h3 className="font-bold text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] uppercase tracking-wide">{cat.title}</h3>
                  {cat.rating && <p className="font-normal text-[12px] sm:text-[14px] leading-[16px] sm:leading-[20px]">{cat.rating} Rating</p>}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
