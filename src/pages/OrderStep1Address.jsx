

import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addAddress, clearAddress, selectAddress } from "../store/reducers/addressReducer";

const cityList = [
  "Adana", "Ankara", "Antalya", "Bursa", "Eskişehir", "Gaziantep", "İstanbul", "İzmir", "Kayseri", "Konya", "Samsun", "Trabzon", "Diğer"
];

const OrderStep1Address = () => {
  const addresses = useSelector((state) => state.address.addresses);
  const selectedId = useSelector((state) => state.address.selectedAddress);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    name: "",
    surname: "",
    phone: "",
    city: "",
    district: "",
    neighborhood: ""
  });
  const [editId, setEditId] = useState(null);
  const [sameInvoice, setSameInvoice] = useState(true);
  const [selectedId, setSelectedId] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      history.push("/login");
    }
  }, [history]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId !== null) {
      // Güncelleme için önce sil, sonra ekle
      dispatch(clearAddress(editId));
    }
    dispatch(addAddress(formData));
    setShowForm(false);
  };

  const handleDelete = (id) => {
    if (!window.confirm("Adres silinsin mi?")) return;
    dispatch(clearAddress(id));
  };

  const handleEdit = (address, i) => {
    setFormData({ ...address });
    setEditId(i);
    setShowForm(true);
  };

  if (loading) return <div className="text-center py-12 text-lg font-semibold text-gray-500">Yükleniyor...</div>;

  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Adım başlığı ve ilerleme */}
      <div className="flex items-center gap-4 mb-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-500 text-white font-bold">1</div>
          <span className="font-bold text-orange-600 text-lg">Adres Bilgileri</span>
        </div>
        <div className="h-1 w-8 bg-orange-300 rounded mx-2" />
        <div className="flex items-center gap-2 opacity-60">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-500 font-bold">2</div>
          <span className="font-bold text-gray-500 text-lg">Ödeme Seçenekleri</span>
        </div>
      </div>

      {/* Üstte bilgi kutusu */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 p-4 rounded mb-6 flex items-center gap-2">
        <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01" /></svg>
        Kurumsal faturalı alışveriş yapmak için "Faturamı Aynı Adrese Gönder" tikini kaldırın ve fatura adresi olarak kayıtlı kurumsal fatura adresinizi seçin.
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sol: Adresler ve form */}
        <div className="lg:col-span-2">
          {/* Fatura adresi checkbox */}
          <div className="flex items-center mb-6">
            <input
              id="sameInvoice"
              type="checkbox"
              checked={sameInvoice}
              onChange={() => setSameInvoice((v) => !v)}
              className="accent-orange-500 w-5 h-5 rounded"
            />
            <label htmlFor="sameInvoice" className="ml-2 text-sm font-medium text-gray-700 select-none cursor-pointer">
              Faturamı Aynı Adrese Gönder
            </label>
          </div>

          {/* Adresler */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {addresses.length === 0 && (
              <div className="col-span-2 flex flex-col items-center justify-center py-12 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                <svg className="w-12 h-12 text-gray-300 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                <div className="text-gray-400">Kayıtlı adresiniz yok.</div>
              </div>
            )}
            {addresses.map((address, i) => (
              <div
                key={i}
                className={`relative rounded-lg shadow-md p-5 border-2 transition-all cursor-pointer ${selectedId === i ? 'border-orange-500 bg-orange-50' : 'border-gray-200 bg-white'} hover:border-orange-400`}
                onClick={() => {
                  dispatch(selectAddress(i));
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="font-semibold text-lg text-gray-800 flex-1 truncate">{address.title}</div>
                  {selectedId === i && (
                    <span className="ml-2 px-2 py-0.5 text-xs rounded bg-orange-500 text-white font-bold">Seçili</span>
                  )}
                </div>
                <div className="text-gray-700 text-sm mb-1">{address.name} {address.surname}</div>
                <div className="text-gray-500 text-sm mb-1">{address.phone}</div>
                <div className="text-gray-500 text-sm mb-1">{address.city} / {address.district}</div>
                <div className="text-gray-500 text-sm mb-2">{address.neighborhood}</div>
                <div className="flex gap-2 absolute top-2 right-2">
                  <button type="button" className="text-blue-600 hover:underline text-xs" onClick={e => { e.stopPropagation(); handleEdit(address, i); }}>Düzenle</button>
                  <button type="button" className="text-red-500 hover:underline text-xs" onClick={e => { e.stopPropagation(); handleDelete(i); }}>Sil</button>
                </div>
              </div>
            ))}
            {/* Yeni adres ekle kutusu */}
            <button
              type="button"
              className="flex flex-col items-center justify-center border-2 border-dashed border-orange-400 rounded-lg p-5 text-orange-500 hover:bg-orange-50 transition-all min-h-[120px]"
              onClick={() => { setShowForm(true); setEditId(null); setFormData({ title: "", name: "", surname: "", phone: "", city: "", district: "", neighborhood: "" }); }}
            >
              <svg className="w-8 h-8 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
              <span className="font-semibold">Yeni Adres Ekle</span>
            </button>
          </div>

          {/* Adres formu */}
          {showForm && (
            <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-30">
              <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg relative animate-fadeIn">
                <button type="button" className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-xl" onClick={() => setShowForm(false)}>&times;</button>
                <h3 className="text-lg font-bold mb-4 text-orange-600">Adres {editId ? 'Güncelle' : 'Ekle'}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Adres Başlığı</label>
                    <input name="title" value={formData.title} onChange={handleChange} placeholder="Ev, Ofis..." required className="border p-2 rounded w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Ad</label>
                    <input name="name" value={formData.name} onChange={handleChange} placeholder="Ad" required className="border p-2 rounded w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Soyad</label>
                    <input name="surname" value={formData.surname} onChange={handleChange} placeholder="Soyad" required className="border p-2 rounded w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Telefon</label>
                    <input name="phone" value={formData.phone} onChange={handleChange} placeholder="05xxxxxxxxx" required className="border p-2 rounded w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">İl</label>
                    <select name="city" value={formData.city} onChange={handleChange} required className="border p-2 rounded w-full">
                      <option value="">Şehir Seçiniz</option>
                      {cityList.map(city => <option key={city} value={city}>{city}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">İlçe</label>
                    <input name="district" value={formData.district} onChange={handleChange} placeholder="İlçe" required className="border p-2 rounded w-full" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-1">Mahalle ve Adres Detayları</label>
                    <textarea name="neighborhood" value={formData.neighborhood} onChange={handleChange} placeholder="Mahalle, sokak, bina, daire..." required className="border p-2 rounded w-full min-h-[60px]" />
                  </div>
                </div>
                <div className="mt-6 flex justify-end gap-2">
                  <button type="submit" className="bg-orange-600 text-white px-5 py-2 rounded font-bold hover:bg-orange-700 transition">Kaydet</button>
                  <button type="button" className="bg-gray-200 px-5 py-2 rounded font-bold hover:bg-gray-300 transition" onClick={() => setShowForm(false)}>İptal</button>
                </div>
              </form>
            </div>
          )}
        </div>
        {/* Sağ: Sipariş Özeti */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8 border border-gray-100">
            <h3 className="text-lg font-bold mb-4 text-gray-700">Sipariş Özeti</h3>
            <div className="flex justify-between mb-2 text-sm">
              <span>Ürün Toplamı</span>
              <span className="font-semibold text-gray-800">₺8.448,99</span>
            </div>
            <div className="flex justify-between mb-2 text-sm">
              <span>Kargo Toplam</span>
              <span className="font-semibold text-gray-800">₺29,99</span>
            </div>
            <div className="flex justify-between mb-2 text-sm">
              <span className="text-green-600">150 TL ve Üzeri Kargo Bedava</span>
              <span className="text-green-600">-₺29,99</span>
            </div>
            <div className="border-t my-2" />
            <div className="flex justify-between text-lg font-bold">
              <span>Toplam</span>
              <span className="text-orange-600">₺8.448,99</span>
            </div>
            <button className="w-full mt-6 bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded transition text-lg shadow">Kaydet ve Devam Et</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderStep1Address;
