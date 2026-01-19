import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Trash2, Plus, Minus } from "lucide-react";
import {
  removeFromCart,
  updateCartItemCount,
  toggleCartItem,
} from "../store/actions/shoppingCartActions";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

export default function CartPage() {
  const cart = useSelector((state) => state.shoppingCart.cart);
  const dispatch = useDispatch();
  const history = useHistory();

  const [discountCode, setDiscountCode] = React.useState("");
  const [appliedDiscount, setAppliedDiscount] = React.useState(0);
  const [discountMessage, setDiscountMessage] = React.useState("");
  const [showCouponInput, setShowCouponInput] = React.useState(false);

  const validCartItems = cart.filter(item => item && item.product);
  const checkedItems = validCartItems.filter((item) => item.checked && typeof item.product.price === 'number');
  const subtotal = checkedItems.reduce(
    (total, item) => {
      if (!item || !item.product || typeof item.product.price !== 'number') return total;
      return total + item.product.price * item.count;
    },
    0
  );
  const shipping = checkedItems.length > 0 ? (subtotal >= 150 ? 0 : 29.99) : 0;
  const total = subtotal + shipping - appliedDiscount;

  const handleIncreaseCount = (productId, currentCount) => {
    dispatch(updateCartItemCount(productId, currentCount + 1));
  };

  const handleDecreaseCount = (productId, currentCount) => {
    if (currentCount > 1) {
      dispatch(updateCartItemCount(productId, currentCount - 1));
    }
  };

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleToggle = (productId) => {
    dispatch(toggleCartItem(productId));
  };

  const handleApplyDiscount = () => {
    if (discountCode.toUpperCase() === "INDIRIM10") {
      setAppliedDiscount(subtotal * 0.1);
      setDiscountMessage("✓ %10 indirim uygulandı!");
    } else if (discountCode.toUpperCase() === "INDIRIM20") {
      setAppliedDiscount(subtotal * 0.2);
      setDiscountMessage("✓ %20 indirim uygulandı!");
    } else if (discountCode) {
      setAppliedDiscount(0);
      setDiscountMessage("✗ Geçersiz indirim kodu");
    }
  };

  return (
    <div className="flex w-full flex-col items-start flex-nowrap bg-[#fafafa] relative overflow-hidden min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-12 flex-1">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-['Montserrat'] text-[32px] font-bold text-[#252b42]">
            Sepetim ({validCartItems.length} Ürün)
          </h1>
          <Link
            to="/shop"
            className="font-['Montserrat'] text-[14px] font-bold text-[#23a6f0] hover:underline"
          >
            Alışverişe Devam Et
          </Link>
        </div>
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4 bg-white rounded-lg">
            <svg className="w-24 h-24 text-[#bdbdbd]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <p className="font-['Montserrat'] text-[16px] text-[#727272]">
              Sepetiniz boş
            </p>
            <Link 
              to="/shop"
              className="px-5 py-[10px] bg-[#23a6f0] rounded-[5px] font-['Montserrat'] text-sm font-bold text-white hover:bg-[#1a8cd8] transition-colors"
            >
              Alışverişe Başla
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Sol sütun: Ürünler */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              {/* Ürünler */}
              {cart.filter(item => item && item.product).map(item => {
                const product = item.product;
                const image = product.images?.[0]?.url || (Array.isArray(product.images) ? product.images[0] : product.images) || "https://via.placeholder.com/100";
                return (
                  <div key={product.id} className="bg-white rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-[#E6E6E6] overflow-hidden relative group">
                    <div className="px-5 py-3 border-b border-[#F0F0F0] bg-white flex flex-col md:flex-row md:items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        {/* Tik kutusu satıcı bilgisinin solunda */}
                        <button
                          onClick={() => handleToggle(product.id)}
                          className={`w-5 h-5 rounded border flex items-center justify-center transition-colors shadow-sm ${item.checked ? 'bg-[#F27A1A] border-[#F27A1A]' : 'bg-white border-gray-300'}`}
                        >
                          {item.checked && (
                            <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M5 10.5L9 14.5L15 7.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          )}
                        </button>
                        <span className="text-sm text-[#999999]">Satıcı:</span>
                        <span className="text-sm font-bold text-[#252B42]">Workintech Satıcısı</span>
                        <span className="bg-[#0BC15C] text-white text-[10px] font-bold px-1 rounded ml-0.5">9.7</span>
                        <span className="border border-blue-100 bg-blue-50 text-[#1E90FF] text-[10px] px-2 py-0.5 rounded flex items-center gap-1 cursor-pointer">Kurumsal <span className="w-3 h-3 rounded-full border border-current flex items-center justify-center text-[8px]">i</span></span>
                      </div>
                      {/* İndirim bilgisi md ve üstü ekranlarda */}
                      <div className="hidden md:flex items-center bg-[#FFF1E6] text-[#F27A1A] text-xs px-3 py-1 rounded-full">
                        <span className="font-bold mr-1">🏷️ 3 Adet ve Üzeri 40 TL İndirim</span>
                        <span className="font-normal text-[#F27A1A] cursor-pointer hover:underline text-[10px] ml-2">Tüm Ürünler {'>'}</span>
                      </div>
                    </div>
                    <div className="p-5 flex flex-col md:flex-row items-center gap-6">
                      {/* Tik kutusu ürün görselinin yanında (sadece md ve üstü ekranlarda) */}
                      <div className="hidden md:block self-center">
                        <button
                          onClick={() => handleToggle(product.id)}
                          className={`w-5 h-5 rounded border flex items-center justify-center transition-colors shadow-sm ${item.checked ? 'bg-[#F27A1A] border-[#F27A1A]' : 'bg-white border-gray-300'}`}
                        >
                          {item.checked && (
                            <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M5 10.5L9 14.5L15 7.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          )}
                        </button>
                      </div>
                      <div className="w-[100px] h-[120px] border border-gray-100 rounded-lg overflow-hidden flex-shrink-0 bg-white p-2">
                        <img src={image} alt={product.name} className="w-full h-full object-contain mix-blend-multiply" />
                      </div>
                      <div className="flex-1 flex flex-col gap-1.5 self-start md:self-center">
                        <h3 className="font-medium text-[#333333] text-[15px] leading-snug">
                          <span className="font-bold text-[#252B42]">Marka</span> {product.name} - Detaylı Açıklama
                        </h3>
                        <div className="text-[13px] text-[#999999]">Beden: <span className="text-[#333333]">Standart</span></div>
                        <div className="text-[12px] bg-[#E6F7E6] text-[#0BC15C] inline-flex items-center gap-1 mt-1 px-2 py-1 rounded w-fit">
                          <span>🚚</span>
                          <span className="font-bold">39 dakika</span>
                          <span className="text-[#252B42]">içinde sipariş verirsen</span>
                          <span className="font-bold">en geç yarın</span>
                          <span className="text-[#252B42]">kargoda!</span>
                        </div>
                      </div>
                      <div className="flex flex-row md:flex-col lg:flex-row items-center gap-8 ml-auto self-center">
                        <div className="flex items-center border border-[#E6E6E6] rounded bg-white h-[40px] shadow-sm">
                          <button
                            onClick={() => handleDecreaseCount(product.id, item.count)}
                            disabled={item.count <= 1}
                            className="w-[32px] h-full flex items-center justify-center hover:bg-gray-50 text-[#999999] disabled:opacity-50 text-xl font-light"
                          >
                            -
                          </button>
                          <span className="w-[40px] text-center font-medium text-[#333333] text-sm">{item.count}</span>
                          <button
                            onClick={() => handleIncreaseCount(product.id, item.count)}
                            className="w-[32px] h-full flex items-center justify-center hover:bg-gray-50 text-[#F27A1A] text-xl font-light"
                          >
                            +
                          </button>
                        </div>
                        <div className="flex flex-col items-end min-w-[100px]">
                          <span className="font-bold text-[#F27A1A] text-lg tracking-tight">
                            {(product.price * item.count).toLocaleString('tr-TR', { minimumFractionDigits: 2 })} TL
                          </span>
                        </div>
                        <button
                          onClick={() => handleRemove(product.id)}
                          className="text-[#999999] hover:text-[#333333] transition-colors"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
              {/* Sekmeler ürünlerin altında */}
              <div className="w-full flex items-center gap-8 border-b border-gray-200 mt-8 mb-4">
                <button className="pb-3 border-b-2 border-[#F27A1A] text-[#F27A1A] font-medium text-sm">Önceden Eklediklerim</button>
                <button className="pb-3 border-b-2 border-transparent text-[#666666] font-medium text-sm hover:text-[#F27A1A]">Önerilen Ürünler</button>
                <button className="pb-3 border-b-2 border-transparent text-[#666666] font-medium text-sm hover:text-[#F27A1A] flex items-center gap-1">
                  Favorilerim <span className="bg-[#E74040] text-white text-[10px] px-1.5 rounded-full">Yeni</span>
                </button>
              </div>
            </div>
            {/* Sağ sütun: Sipariş Özeti */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-md p-4 shadow-sm sticky top-4 w-full max-w-[300px] mx-auto">
                <h2 className="text-lg font-bold text-[#252B42] mb-4">Sipariş Özeti</h2>
                <div className="flex flex-col gap-3 mb-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-[#555555]">Ürünün Toplamı</span>
                    <span className="font-bold text-[#252B42]">{subtotal.toLocaleString('tr-TR', { minimumFractionDigits: 2 })} TL</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-[#555555]">Kargo Toplam</span>
                    <span className="font-bold text-[#252B42]">{shipping === 0 ? 'Ücretsiz' : `${shipping.toLocaleString('tr-TR', { minimumFractionDigits: 2 })} TL`}</span>
                  </div>
                  {subtotal >= 150 && (
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-[#555555] w-[60%]">150 TL ve Üzeri Kargo Bedava (Satıcı Karşılar)</span>
                      <span className="font-bold text-[#E74040]">-29,99 TL</span>
                    </div>
                  )}
                </div>
                <div className="border-t border-gray-200 pt-4 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="font-normal text-[#252B42]">Toplam</span>
                    <span className="font-bold text-[#F27A1A] text-xl">{total.toLocaleString('tr-TR', { minimumFractionDigits: 2 })} TL</span>
                  </div>
                </div>
                {/* İndirim kodu girme alanı */}
                {!discountMessage && (
                  showCouponInput ? (
                    <div className="mb-2 animate-in fade-in zoom-in duration-200">
                      <div className="flex gap-2 mb-2">
                        <input
                          type="text"
                          value={discountCode}
                          onChange={e => setDiscountCode(e.target.value)}
                          placeholder="İndirim kodu giriniz"
                          className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-[#F27A1A]"
                        />
                        <button
                          onClick={handleApplyDiscount}
                          className="bg-[#555555] text-white px-3 py-2 rounded-md text-sm font-bold hover:bg-[#333333]"
                        >
                          Ekle
                        </button>
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => setShowCouponInput(true)}
                      className="w-full py-3 bg-white border border-[#E6E6E6] text-[#F27A1A] font-bold rounded-md hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 mb-2 text-sm shadow-sm"
                    >
                      İNDİRİM KODU GİR
                    </button>
                  )
                )}
                {discountMessage && (
                  <div className="text-xs font-medium mt-1 text-[#F27A1A]">{discountMessage}</div>
                )}
                <button
                  className="w-full py-3 bg-[#F27A1A] text-white font-bold text-base rounded-md hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 mt-2"
                  disabled={checkedItems.length === 0}
                  onClick={() => history.push('/order')}
                >
                  Sepeti Onayla
                </button>
              </div>
            </div>
          </div>
        )}
        </div>
      <Footer />
    </div>
  );
}
