import { createSlice } from "@reduxjs/toolkit";

const savedPayment = JSON.parse(localStorage.getItem("payment")) || null;

const paymentSlice = createSlice({
  name: "payment",
  initialState: {
    payment: savedPayment,
  },
  reducers: {
    setPayment: (state, action) => {
      state.payment = action.payload;
      localStorage.setItem("payment", JSON.stringify(action.payload));
    },
    clearPayment: (state) => {
      state.payment = null;
      localStorage.removeItem("payment");
    },
  },
});

export const { setPayment, clearPayment } = paymentSlice.actions;
export default paymentSlice.reducer;
