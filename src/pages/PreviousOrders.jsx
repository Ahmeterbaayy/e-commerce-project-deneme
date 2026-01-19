
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const PreviousOrders = () => {
  const orders = useSelector(state => state.orders.orders);
  const [loading, setLoading] = useState(false);
  const [openId, setOpenId] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) history.push("/login");
  }, [history]);

  if (loading) return <div className="text-center py-12 text-lg font-semibold text-gray-500">Yükleniyor...</div>;

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-8">Geçmiş Siparişlerim</h2>
      {orders.length === 0 ? (
        <div className="bg-gray-50 border border-dashed border-gray-300 rounded-lg p-8 text-center text-gray-400">
          Henüz hiç siparişiniz yok.
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map(order => (
            <div key={order.id} className="bg-white rounded-lg shadow border border-gray-100">
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none hover:bg-orange-50 transition"
                onClick={() => setOpenId(openId === order.id ? null : order.id)}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <span className="font-semibold text-gray-800">Sipariş #{order.id}</span>
                  <span className="text-gray-500 text-sm">{new Date(order.order_date).toLocaleString()}</span>
                  <span className="text-orange-600 font-bold ml-2">₺{order.price}</span>
                </div>
                <svg className={`w-5 h-5 ml-2 transition-transform ${openId === order.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {openId === order.id && (
                <div className="px-6 pb-6">
                  <div className="border-t pt-4 mt-2">
                    <div className="mb-2 text-gray-700 font-semibold">Adres ID: {order.address_id}</div>
                    <div className="mb-2 text-gray-700 font-semibold">Kart: **** **** **** {String(order.card_no).slice(-4)} ({order.card_name})</div>
                    <div className="mb-2 text-gray-700 font-semibold">Toplam: ₺{order.price}</div>
                    <div className="mb-2 text-gray-700 font-semibold">Ürünler:</div>
                    <ul className="pl-4 list-disc text-gray-600">
                      {order.products && order.products.map((p, i) => (
                        <li key={i}>
                          Ürün ID: {p.product_id} | Adet: {p.count} {p.detail && `| Detay: ${p.detail}`}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PreviousOrders;
