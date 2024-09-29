import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"; // Pastikan path ini sesuai dengan lokasi cartSlice

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// Ekspor store agar dapat digunakan di komponen
export default store;
