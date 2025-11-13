import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import addTocartSlice from "./addTocartSlice";
import AuthSlice from "./AuthSlice";
export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: addTocartSlice,
    auth: AuthSlice,
  },
});
