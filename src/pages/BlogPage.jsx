
import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import blog1 from "../assets/images/featured-img/featured1.jpg";
import blog2 from "../assets/images/featured-img/featured2.jpg";
import blog3 from "../assets/images/featured-img/featured3.jpg";

const blogPosts = [
  {
    id: 1,
    title: "E-Ticarette Başarının 5 Altın Kuralı",
    date: "2026-01-14",
    image: blog1,
    summary: "E-ticarette başarı için dikkat edilmesi gereken temel noktalar ve ipuçları."
  },
  {
    id: 2,
    title: "Dijital Pazarlamada Yeni Trendler",
    date: "2026-01-10",
    image: blog2,
    summary: "2026 yılında dijital pazarlamada öne çıkan yenilikler ve uygulamalar."
  },
  {
    id: 3,
    title: "Kullanıcı Deneyimi Neden Önemli?",
    date: "2026-01-05",
    image: blog3,
    summary: "UX tasarımının e-ticaret projelerine katkısı ve dönüşüm oranlarına etkisi."
  }
];

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fff] w-full">
      <Header />
      <main className="flex-1 w-full px-0 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#252b42] mb-8 text-center w-full">Blog</h1>
        <div className="w-full max-w-screen-2xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow flex flex-col overflow-hidden w-full">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-5 flex flex-col flex-1">
                  <h2 className="text-xl font-semibold text-[#252b42] mb-2 line-clamp-2">{post.title}</h2>
                  <span className="text-xs text-[#727272] mb-2">{post.date}</span>
                  <p className="text-sm text-[#727272] flex-1 mb-4 line-clamp-3">{post.summary}</p>
                  <button className="mt-auto px-4 py-2 bg-[#23a6f0] text-white rounded hover:bg-[#1a8cd8] transition-colors font-bold">Devamını Oku</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
