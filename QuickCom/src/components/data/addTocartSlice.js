import { createSlice } from "@reduxjs/toolkit";

//  Load saved data from localStorage when app starts
const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];

const addToCartSlice = createSlice({
  name: "addToCart",
  initialState: {
    items: savedCart,
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    cartItems: (state) => {
      return state.items;
    },
  },
});

export const { addItem, removeItem, cartItems } = addToCartSlice.actions;
export default addToCartSlice.reducer;
