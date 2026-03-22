import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const { id, name, image, price } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ id, name, image, price, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const itemToUpdate = state.items.find((item) => item.id === id);
      if (itemToUpdate) {
        if (quantity > 0) {
          itemToUpdate.quantity = quantity;
        } else {
          state.items = state.items.filter((item) => item.id !== id);
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, updateQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
