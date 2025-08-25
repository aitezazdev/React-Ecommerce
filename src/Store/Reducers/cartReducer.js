import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.cart.find((item) => item.id === action.payload.id);
      if (existingProduct) {
        state.cart = state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        state.cart = [...state.cart, { ...action.payload, quantity: 1 }];
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    updateCartQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      state.cart = state.cart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      );
    },
  },
});

export const { addToCart, removeFromCart, updateCartQuantity } = cartSlice.actions;
export default cartSlice.reducer;
