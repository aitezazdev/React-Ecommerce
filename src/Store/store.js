import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./Reducers/productsReducer";
import cartReducer from "./Reducers/cartReducer";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});

export default store;
