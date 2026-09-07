import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    // Add item to cart
    addItem: (state, action) => {
      const item = action.payload;

      const existingItem = state.items.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...item,
          quantity: 1,
        });
      }
    },

    // Remove item from cart
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
    },

    // Update item quantity
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;

      const item = state.items.find((item) => item.id === id);

      if (item) {
        item.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;