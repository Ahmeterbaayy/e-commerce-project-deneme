import { toast } from 'react-toastify';
import React, { useEffect, useState } from 'react';
// Kart ekleme formu
import { useForm } from 'react-hook-form';
const CardForm = ({ onCancel, onSubmit }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  return (
    <form onSubmit={handleSubmit((data) => { onSubmit(data); reset(); })} className="border border-gray-200 rounded-lg p-4 bg-gray-50 mb-4">
      <div className="grid grid-cols-1 gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-bold text-[#252B42]">Kart Numarası</label>
          <input {...register("card_no", { required: true, maxLength: 16, minLength: 16 })} className="border border-gray-300 rounded p-3" placeholder="0000 0000 0000 0000" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-bold text-[#252B42]">Son Kullanma Tarihi</label>
            <div className="flex gap-2">
              <select {...register("expire_month", { required: true })} className="border border-gray-300 rounded p-3 bg-white w-full">
                {Array.from({ length: 12 }, (_, i) => i + 1).map(m => (
                  <option key={m} value={m}>{m < 10 ? `0${m}` : m}</option>
                ))}
              </select>
              <select {...register("expire_year", { required: true })} className="border border-gray-300 rounded p-3 bg-white w-full">
                {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i).map(y => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-bold text-[#252B42]">CVV</label>
            <input {...register("cvv", { required: true, maxLength: 3, minLength: 3 })} className="border border-gray-300 rounded p-3 w-24" placeholder="***" />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-bold text-[#252B42]">Kart Üzerindeki İsim</label>
          <input {...register("name_on_card", { required: true })} className="border border-gray-300 rounded p-3" placeholder="Ad Soyad" />
        </div>
        <div className="flex gap-2 mt-2">
          <button type="submit" className="bg-[#F27A1A] text-white font-bold px-6 py-2 rounded">Kaydet</button>
          <button type="button" onClick={onCancel} className="text-[#737373] font-bold px-6 py-2">Vazgeç</button>
        </div>
      </div>
    </form>
  );
};
import { turkishCities } from '../data/turkishCities';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useLocation, Link } from 'react-router-dom';
import { Plus, ChevronRight } from 'lucide-react';
import api from '../services/api';
import { clearCart } from '../store/actions/shoppingCartActions';
import { addOrder } from '../store/reducers/ordersReducer';

const OrderPage = () => {
    // Kart ekleme fonksiyonu artık burada
    const handleCardSubmit = (data) => {
      try {
        const newCards = [...cards, data];
        setCards(newCards);
        localStorage.setItem("cards", JSON.stringify(newCards));
        setShowCardForm(false);
      } catch (e) {
        alert("Kart eklenirken bir hata oluştu.");
      }
    };
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const cart = useSelector(state => state.shoppingCart.cart);
  const [addresses, setAddresses] = useState([]);
  const [cards, setCards] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const [activeStep, setActiveStep] = useState(1);
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [showCardForm, setShowCardForm] = useState(false);
  const [error, setError] = useState("");
  const subtotal = cart.reduce((sum, item) => {
    if (!item || !item.product || typeof item.product.price !== 'number') return sum;
    return item.checked ? sum + (item.product.price * item.count) : sum;
  }, 0);
  const shippingCost = subtotal > 150 || subtotal === 0 ? 0 : 29.99;
  const grandTotal = subtotal + shippingCost;

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      history.push("/login", { from: location });
    }
  }, [history, location]);

  useEffect(() => {
    let loadedAddresses = JSON.parse(localStorage.getItem("addresses")) || [];
    // id'si olmayan eski adreslere id ata
    let changed = false;
    loadedAddresses = loadedAddresses.map(addr => {
      if (!addr.id) {
        changed = true;
        return { ...addr, id: Date.now() + Math.floor(Math.random() * 10000) };
      }
      return addr;
    });
    if (changed) {
      localStorage.setItem("addresses", JSON.stringify(loadedAddresses));
    }
    setAddresses(loadedAddresses);
    let loadedCards = JSON.parse(localStorage.getItem("cards")) || [];
    let cardChanged = false;
    loadedCards = loadedCards.map(card => {
      if (!card.id) {
        cardChanged = true;
        return { ...card, id: Date.now() + Math.floor(Math.random() * 10000) };
      }
      return card;
    });
    if (cardChanged) {
      localStorage.setItem("cards", JSON.stringify(loadedCards));
    }
    setCards(loadedCards);
    // Otomatik adres seçimi
    if (loadedAddresses.length > 0 && !selectedAddressId) {
      setSelectedAddressId(loadedAddresses[0].id);
    }
    // Otomatik kart seçimi
    if (loadedCards.length > 0 && !selectedCardId) {
      setSelectedCardId(loadedCards[0].id);
    }
  }, [modalOpen, showCardForm]);

  const handlePayment = () => {
    setError("");
    if (!selectedAddressId) {
      setError("Lütfen bir teslimat adresi seçiniz.");
      return;
    }
    if (!selectedCardId) {
      setError("Lütfen bir kart seçiniz.");
      return;
    }
    const card = cards.find((c, i) => i === selectedCardId || c.id === selectedCardId);
    if (!card) return;
    const payload = {
      address_id: selectedAddressId,
      order_date: new Date().toISOString(),
      card_no: card.card_no,
      card_name: card.name_on_card,
      card_expire_month: card.expire_month,
      card_expire_year: card.expire_year,
      card_ccv: card.cvv || 123,
      price: grandTotal,
      products: cart.filter(i => i && i.product && i.checked).map(item => ({
        product_id: item.product.id,
        count: item.count,
        detail: item.product.detail || "Standart"
      }))
    };
    dispatch(addOrder(payload));
    toast.success("Siparişiniz başarıyla alındı!");
    dispatch(clearCart());
    history.push("/");
  };

  // Adres ekleme formu için react-hook-form
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const handleAddAddress = (data) => {
    try {
      const newAddress = { ...data, id: Date.now() };
      const newAddresses = [...addresses, newAddress];
      setAddresses(newAddresses);
      localStorage.setItem("addresses", JSON.stringify(newAddresses));
      setSelectedAddressId(newAddress.id);
      setModalOpen(false);
      reset();
    } catch (e) {
      setError("Adres eklenirken bir hata oluştu.");
    }
  };

  return (
    <div className="bg-[#FAFAFA] min-h-screen pb-12 w-full">
      <div className="w-full max-w-[1400px] mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-10 md:mb-12 w-full">
          <div className={`flex-1 border-b-4 pb-4 cursor-pointer ${activeStep === 1 ? 'border-[#F27A1A]' : 'border-gray-200'} `} onClick={() => setActiveStep(1)}>
            <h2 className={`${activeStep === 1 ? 'text-[#F27A1A]' : 'text-[#252B42]'} text-xl font-bold`}>1 Adres Bilgileri</h2>
            <div className="text-sm text-[#252B42] mt-1">{addresses?.find(a => a.id === selectedAddressId)?.title || addresses?.[0]?.title || 'Teslimat Adresi'}</div>
          </div>
          <div className={`flex-1 border-b-4 pb-4 cursor-pointer ${activeStep === 2 ? 'border-[#F27A1A]' : 'border-gray-200 opacity-50'} `} onClick={() => selectedAddressId && setActiveStep(2)}>
            <h2 className={`${activeStep === 2 ? 'text-[#F27A1A]' : 'text-[#252B42]'} text-xl font-bold`}>2 Ödeme Seçenekleri</h2>
          </div>
        </div>
        {error && <div className="mb-4 text-red-600 font-bold">{error}</div>}
        <div className="flex flex-col lg:flex-row gap-8 w-full">
          <div className="flex-1 min-w-0">
            {activeStep === 1 && (
              <>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold text-[#252B42]">Teslimat Adresi</h3>
                  <label className="flex items-center gap-2 text-sm text-[#737373] cursor-pointer">
                    <input type="checkbox" defaultChecked className="accent-[#F27A1A]" />
                    Faturamı Aynı Adrese Gönder
                  </label>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button
                    onClick={() => { setEditingAddress(null); setModalOpen(true); }}
                    className="min-h-[160px] border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center gap-2 hover:bg-gray-50 transition-colors text-[#252B42] font-bold"
                  >
                    <Plus size={32} />
                    Yeni Adres Ekle
                  </button>
                        {/* Adres Ekle Modalı */}
                        {modalOpen && (
                          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 px-2">
                            <div className="bg-white rounded-lg shadow-lg p-10 w-full max-w-xl min-w-[340px] md:min-w-[420px] min-h-[480px] md:min-h-[520px] flex flex-col justify-center relative">
                              <button onClick={() => { setModalOpen(false); reset(); }} className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl">&times;</button>
                              <h2 className="text-xl font-bold mb-4 text-[#252B42]">Yeni Adres Ekle</h2>
                              <form onSubmit={handleSubmit(handleAddAddress)} className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  <div className="flex flex-col gap-1">
                                    <label className="text-sm font-bold text-[#252B42]">Adres Başlığı</label>
                                    <input {...register('title', { required: 'Adres başlığı zorunlu' })} className="border border-gray-300 rounded p-3" placeholder="Örn: Ev Adresim" />
                                    {errors.title && <span className="text-red-500 text-xs">{errors.title.message}</span>}
                                  </div>
                                  <div className="flex flex-col gap-1">
                                    <label className="text-sm font-bold text-[#252B42]">Telefon</label>
                                    <input {...register('phone', { required: 'Telefon zorunlu' })} className="border border-gray-300 rounded p-3" placeholder="053..." />
                                    {errors.phone && <span className="text-red-500 text-xs">{errors.phone.message}</span>}
                                  </div>
                                  <div className="flex flex-col gap-1">
                                    <label className="text-sm font-bold text-[#252B42]">Ad</label>
                                    <input {...register('name', { required: 'Ad zorunlu' })} className="border border-gray-300 rounded p-3" placeholder="Ad" />
                                    {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
                                  </div>
                                  <div className="flex flex-col gap-1">
                                    <label className="text-sm font-bold text-[#252B42]">Soyad</label>
                                    <input {...register('surname', { required: 'Soyad zorunlu' })} className="border border-gray-300 rounded p-3" placeholder="Soyad" />
                                    {errors.surname && <span className="text-red-500 text-xs">{errors.surname.message}</span>}
                                  </div>
                                  <div className="flex flex-col gap-1">
                                    <label className="text-sm font-bold text-[#252B42]">İl</label>
                                    <select {...register('city', { required: 'İl zorunlu' })} className="border border-gray-300 rounded p-3 bg-white">
                                      <option value="">Şehir Seçiniz</option>
                                      {turkishCities.map(city => (
                                        <option key={city} value={city}>{city}</option>
                                      ))}
                                    </select>
                                    {errors.city && <span className="text-red-500 text-xs">{errors.city.message}</span>}
                                  </div>
                                  <div className="flex flex-col gap-1">
                                    <label className="text-sm font-bold text-[#252B42]">Ülke</label>
                                    <input {...register('country', { required: 'Ülke zorunlu' })} className="border border-gray-300 rounded p-3" placeholder="Ülke" />
                                    {errors.country && <span className="text-red-500 text-xs">{errors.country.message}</span>}
                                  </div>
                                </div>
                                <div className="flex flex-col gap-1">
                                  <label className="text-sm font-bold text-[#252B42]">Adres Detayı</label>
                                  <textarea {...register('address', { required: 'Adres detayı zorunlu' })} className="border border-gray-300 rounded p-3 min-h-[100px]" placeholder="Sokak, bina no, kapı no..." />
                                  {errors.address && <span className="text-red-500 text-xs">{errors.address.message}</span>}
                                </div>
                                <button type="submit" className="w-full bg-[#F27A1A] text-white font-bold py-3 rounded hover:bg-orange-600 transition-colors">
                                  Kaydet
                                </button>
                              </form>
                            </div>
                          </div>
                        )}
                  {addresses.map((address, i) => (
                    <div
                      key={address.id || i}
                      className={`relative p-4 rounded-lg border cursor-pointer transition-all ${selectedAddressId === address.id ? 'border-[#F27A1A] shadow-md bg-[#FFF]' : 'border-gray-200 bg-white hover:border-gray-300'} `}
                      onClick={() => setSelectedAddressId(address.id)}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-2">
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${selectedAddressId === address.id ? 'border-[#F27A1A]' : 'border-gray-400'} `}>
                            {selectedAddressId === address.id && <div className="w-2 h-2 rounded-full bg-[#F27A1A]" />}
                          </div>
                          <span className="font-bold text-[#252B42]">{address.title}</span>
                        </div>
                      </div>
                      <div className="text-sm p-2 bg-[#FAFAFA] rounded mb-2">
                        <div className="flex justify-between text-[#252B42] font-bold mb-1">
                          <span>{address.name} {address.surname}</span>
                          <span>{address.phone}</span>
                        </div>
                        <div className="text-[#737373] line-clamp-2">
                          {address.address} {address.city}/{address.country}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
            {activeStep === 2 && (
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-6 border-b pb-4">
                  <h3 className="text-lg font-bold text-[#252B42]">Kart ile Öde</h3>
                  <button onClick={() => setShowCardForm(!showCardForm)} className="ml-auto text-sm underline text-[#737373] hover:text-[#F27A1A]">
                    {showCardForm ? 'Kayıtlı Kartlarıma Dön' : 'Başka bir Kart ile Ödeme Yap'}
                  </button>
                </div>
                {showCardForm ? (
                  <CardForm onCancel={() => setShowCardForm(false)} onSubmit={handleCardSubmit} />
                ) : (
                  <div className="flex flex-col gap-3">
                    {cards.map((card, i) => (
                      <label key={card.id || i} className={`flex items-center gap-3 border p-4 rounded-lg cursor-pointer ${selectedCardId === card.id ? 'border-[#F27A1A] bg-orange-50' : 'border-gray-200'} `}>
                        <input
                          type="radio"
                          name="selectedCard"
                          checked={selectedCardId === card.id}
                          onChange={() => setSelectedCardId(card.id)}
                          className="accent-[#F27A1A] w-4 h-4"
                        />
                        <div className="flex-1">
                          <div className="font-bold text-[#252B42]">{card.name_on_card}</div>
                          <div className="text-sm text-[#737373]">{card.card_no}</div>
                        </div>
                        <div className="text-xs text-[#737373]">{card.expire_month}/{card.expire_year}</div>
                      </label>
                    ))}
                    {(!cards || cards.length === 0) && (
                      <div className="text-center py-4 text-gray-500 text-sm">Hiç kayıtlı kartınız yok. Yeni ekleyin.</div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="w-full lg:w-[340px] flex flex-col gap-4 mt-8 lg:mt-0">
            <div className="bg-white p-5 rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-[#E6E6E6] sticky top-4">
              <h2 className="text-lg font-bold text-[#252B42] mb-4">Sipariş Özeti</h2>
              <div className="flex flex-col gap-3 mb-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-[#555555]">Ürünün Toplamı</span>
                  <span className="font-bold text-[#252B42]">{subtotal.toLocaleString('tr-TR', { minimumFractionDigits: 2 })} TL</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-[#555555]">Kargo Toplam</span>
                  <span className="font-bold text-[#252B42]">{shippingCost === 0 ? 'Ücretsiz' : `${shippingCost.toLocaleString('tr-TR', { minimumFractionDigits: 2 })} TL`}</span>
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
                  <span className="font-bold text-[#F27A1A] text-xl">{grandTotal.toLocaleString('tr-TR', { minimumFractionDigits: 2 })} TL</span>
                </div>
              </div>
              <button
                onClick={activeStep === 1 ? () => setActiveStep(2) : handlePayment}
                className="w-full py-3 bg-[#F27A1A] text-white font-bold text-base rounded-md hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
              >
                {activeStep === 1 ? 'Kaydet ve Devam Et' : 'Ödeme Yap'} <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
