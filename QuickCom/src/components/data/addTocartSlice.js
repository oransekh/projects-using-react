import { createSlice } from "@reduxjs/toolkit";

const addToCartSlice = createSlice({
  name: "addToCart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    cartItems: (state) => {
      return state.items;
    },
  },
});

export const { addItem, removeItem, cartItems } = addToCartSlice.actions;
export default addToCartSlice.reducer;
