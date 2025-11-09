import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import addTocartSlice from "./addTocartSlice";
export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: addTocartSlice,
  },
});
