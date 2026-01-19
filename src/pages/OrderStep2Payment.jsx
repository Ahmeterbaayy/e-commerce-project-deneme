
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../store/actions/shoppingCartActions";
import { setPayment, clearPayment } from "../store/reducers/paymentReducer";
import { addOrder } from "../store/reducers/ordersReducer";

const months = Array.from({ length: 12 }, (_, i) => i + 1);
const years = Array.from({ length: 15 }, (_, i) => new Date().getFullYear() + i);

const OrderStep2Payment = () => {
  const [cards, setCards] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("cards")) || [];
    return saved;
  });
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    card_no: "",
    expire_month: "",
    expire_year: "",
    name_on_card: "",
    cvv: "",
    secure3d: false
  });
  const [editId, setEditId] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const history = useHistory();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.shoppingCart.cart);
  const [orderSuccess, setOrderSuccess] = useState(false);
  // Siparişi Tamamla
  const handleCompleteOrder = () => {
    if (selectedId === null) return alert("Lütfen bir kart seçin.");
    if (!cart || cart.length === 0) return alert("Sepetiniz boş.");
    const address_id = Number(localStorage.getItem('selected_address_id'));
    if (!address_id && address_id !== 0) return alert("Lütfen bir teslimat adresi seçin.");
    const card = cards[selectedId];
    if (!card) return alert("Kart bulunamadı.");
    const products = cart.map(item => ({
      product_id: item.product.id,
      count: item.count,
      detail: [
        item.product.color ? item.product.color : null,
        item.product.size ? item.product.size : null,
        item.product.detail ? item.product.detail : null
      ].filter(Boolean).join(' - ')
    }));
    const price = cart.reduce((sum, item) => sum + item.product.price * item.count, 0);
    const order_date = new Date().toISOString();
    const payload = {
      address_id,
      order_date,
      card_no: card.card_no,
      card_name: card.name_on_card,
      card_expire_month: card.expire_month,
      card_expire_year: card.expire_year,
      card_ccv: card.cvv,
      price,
      products
    };
    dispatch(addOrder(payload));
    setOrderSuccess(true);
    dispatch(clearCart());
  };
  if (orderSuccess) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <svg className="w-20 h-20 text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth="2" /><path d="M9 12l2 2 4-4" strokeWidth="2" /></svg>
        <h2 className="text-2xl font-bold text-green-600 mb-2">Siparişiniz başarıyla oluşturuldu!</h2>
        <p className="text-gray-600 mb-6">Siparişiniz alınmıştır. Teşekkür ederiz.</p>
        <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg text-lg shadow transition" onClick={() => history.push("/")}>Ana Sayfaya Dön</button>
      </div>
    );
  }
      {/* Siparişi Tamamla Butonu */}
      <div className="flex justify-end mt-8">
        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg shadow transition" onClick={handleCompleteOrder}>
          Siparişi Tamamla
        </button>
      </div>

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) history.push("/login");
  }, [history]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let updatedCards = [...cards];
    if (editId !== null) {
      updatedCards[editId] = formData;
    } else {
      updatedCards.push(formData);
    }
    setCards(updatedCards);
    localStorage.setItem("cards", JSON.stringify(updatedCards));
    setShowForm(false);
  };

  const handleDelete = (id) => {
    if (!window.confirm("Kart silinsin mi?")) return;
    const updatedCards = cards.filter((_, i) => i !== id);
    setCards(updatedCards);
    localStorage.setItem("cards", JSON.stringify(updatedCards));
  };

  const handleEdit = (card, i) => {
    setFormData({ ...card });
    setEditId(i);
    setShowForm(true);
  };

  if (loading) return <div className="text-center py-12 text-lg font-semibold text-gray-500">Yükleniyor...</div>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-1 flex items-center gap-2">
          <svg className="w-7 h-7 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="10" rx="2" strokeWidth="2" /><path d="M2 11h20" strokeWidth="2" /><circle cx="6" cy="12" r="1" /><circle cx="18" cy="12" r="1" /></svg>
          Kayıtlı Kartlarım
        </h2>
        <p className="text-gray-500 text-sm mt-1">Kayıtlı kartlarınızı seçebilir, düzenleyebilir veya yeni bir kart ekleyebilirsiniz.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        {cards.length === 0 && (
          <div className="col-span-3 flex flex-col items-center justify-center py-12 bg-gray-50 rounded-xl border border-dashed border-gray-300 shadow">
            <svg className="w-12 h-12 text-gray-300 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="10" rx="2" strokeWidth="2" /><path d="M2 11h20" strokeWidth="2" /><circle cx="6" cy="12" r="1" /><circle cx="18" cy="12" r="1" /></svg>
            <div className="text-gray-400">Kayıtlı kartınız yok.</div>
          </div>
        )}
        {cards.map((card, i) => (
          <div
            key={i}
            className={`relative rounded-2xl shadow-lg p-6 border-2 transition-all cursor-pointer flex flex-col gap-2 ${selectedId === i ? 'border-orange-500 bg-orange-50' : 'border-gray-200 bg-white'} hover:border-orange-400`}
            onClick={() => setSelectedId(i)}
          >
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-7 h-7 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="10" rx="2" strokeWidth="2" /><path d="M2 11h20" strokeWidth="2" /><circle cx="6" cy="12" r="1" /><circle cx="18" cy="12" r="1" /></svg>
              <span className="font-semibold text-lg tracking-widest">**** **** **** {card.card_no.slice(-4)}</span>
              {selectedId === i && <span className="ml-2 px-2 py-0.5 text-xs rounded bg-orange-500 text-white font-bold">Seçili</span>}
            </div>
            <div className="text-gray-700 text-base font-medium">{card.name_on_card}</div>
            <div className="text-gray-500 text-sm">{card.expire_month}/{card.expire_year}</div>
            <div className="flex gap-2 mt-2">
              <button type="button" className="text-blue-600 hover:underline text-xs" onClick={e => { e.stopPropagation(); handleEdit(card, i); }}>Düzenle</button>
              <button type="button" className="text-red-500 hover:underline text-xs" onClick={e => { e.stopPropagation(); handleDelete(i); }}>Sil</button>
            </div>
          </div>
        ))}
        <button
          type="button"
          className="flex flex-col items-center justify-center border-2 border-dashed border-orange-400 rounded-2xl p-6 text-orange-500 hover:bg-orange-50 transition-all min-h-[180px] shadow-lg"
          onClick={() => { setShowForm(true); setEditId(null); setFormData({ card_no: "", expire_month: "", expire_year: "", name_on_card: "", cvv: "", secure3d: false }); }}
        >
          <svg className="w-10 h-10 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
          <span className="font-semibold text-lg">Yeni Kart Ekle</span>
        </button>
      </div>
      {showForm && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-30">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-md relative animate-fadeIn border border-orange-100">
            <button type="button" className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl" onClick={() => setShowForm(false)}>&times;</button>
            <div className="flex flex-col items-center mb-6">
              <svg className="w-12 h-12 text-orange-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="10" rx="2" strokeWidth="2" /><path d="M2 11h20" strokeWidth="2" /><circle cx="6" cy="12" r="1" /><circle cx="18" cy="12" r="1" /></svg>
              <h3 className="text-2xl font-bold text-orange-600 mb-1">Yeni Kart Ekle</h3>
              <p className="text-gray-500 text-sm">Kart bilgilerinizi güvenle kaydedin ve hızlıca ödeme yapın.</p>
            </div>
            <div className="mb-5">
              <label className="block text-sm font-semibold mb-1">Kart Numarası</label>
              <input name="card_no" value={formData.card_no} onChange={handleChange} placeholder="1234 5678 9012 3456" required maxLength={16} className="border-2 border-gray-200 focus:border-orange-500 p-3 rounded-lg w-full text-lg tracking-widest transition" />
              <div className="text-xs text-gray-400 mt-1">Sadece rakam giriniz. Örnek: 1234 5678 9012 3456</div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-5">
              <div>
                <label className="block text-sm font-semibold mb-1">Son Kullanma Ayı</label>
                <select name="expire_month" value={formData.expire_month} onChange={handleChange} required className="border-2 border-gray-200 focus:border-orange-500 p-3 rounded-lg w-full transition">
                  <option value="">Ay</option>
                  {months.map(m => <option key={m} value={m}>{m}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Son Kullanma Yılı</label>
                <select name="expire_year" value={formData.expire_year} onChange={handleChange} required className="border-2 border-gray-200 focus:border-orange-500 p-3 rounded-lg w-full transition">
                  <option value="">Yıl</option>
                  {years.map(y => <option key={y} value={y}>{y}</option>)}
                </select>
              </div>
            </div>
            <div className="mb-5">
              <label className="block text-sm font-semibold mb-1">Kart Üzerindeki İsim</label>
              <input name="name_on_card" value={formData.name_on_card} onChange={handleChange} placeholder="Ad Soyad" required className="border-2 border-gray-200 focus:border-orange-500 p-3 rounded-lg w-full transition" />
            </div>
            <div className="mb-5">
              <label className="block text-sm font-semibold mb-1 flex items-center">CVV
                <span className="ml-1 text-orange-500 cursor-pointer" title="Kartınızın arka yüzündeki 3 haneli güvenlik kodu.">
                  <svg className="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth="2" /><path d="M12 16v-4" strokeWidth="2" /><circle cx="12" cy="8" r="1" /></svg>
                </span>
              </label>
              <input name="cvv" value={formData.cvv} onChange={handleChange} placeholder="CVV" required maxLength={4} className="border-2 border-gray-200 focus:border-orange-500 p-3 rounded-lg w-full transition" />
            </div>
            <div className="mb-6 flex items-center">
              <input type="checkbox" name="secure3d" checked={formData.secure3d} onChange={handleChange} className="accent-orange-500 w-5 h-5 rounded" />
              <span className="ml-2 text-sm font-semibold"><span className="inline-block bg-orange-100 text-orange-600 px-2 py-0.5 rounded mr-1 font-bold">3D Secure</span> ile ödemek istiyorum</span>
            </div>
            <button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-lg text-lg shadow transition">Kaydet</button>
            <button type="button" className="w-full mt-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-3 rounded-lg text-lg transition" onClick={() => setShowForm(false)}>İptal</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default OrderStep2Payment;
