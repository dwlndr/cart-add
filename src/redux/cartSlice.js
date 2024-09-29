import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    totalItems: 0, // Total jumlah semua produk di keranjang
    items: [],     // Daftar item dalam keranjang
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(i => i.id === item.id);

      if (existingItem) {
        // Jika item sudah ada, tambahkan kuantitasnya
        existingItem.quantity += 1;
      } else {
        // Jika item belum ada, tambahkan ke keranjang dengan kuantitas awal yang 1
        state.items.push({ ...item, quantity: 1 });
      }

      // Perbarui totalItems
      state.totalItems += 1;
    },
    updateItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(i => i.id === id);

      if (item) {
        // Update totalItems dengan perbedaan kuantitas baru dan lama
        state.totalItems += quantity - item.quantity;
        item.quantity = quantity;
      }
    },
    removeItem: (state, action) => {
      const id = action.payload;
      const itemIndex = state.items.findIndex(i => i.id === id);

      if (itemIndex >= 0) {
        // Kurangi totalItems sesuai kuantitas item yang dihapus
        state.totalItems -= state.items[itemIndex].quantity;
        // Hapus item dari keranjang
        state.items.splice(itemIndex, 1);
      }
    },
  },
});

// Ekspor action untuk digunakan di komponen
export const { addItem, updateItemQuantity, removeItem } = cartSlice.actions;

// Ekspor reducer untuk digunakan di store
export default cartSlice.reducer;
