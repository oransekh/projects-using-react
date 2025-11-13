import { createSlice } from "@reduxjs/toolkit";

const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];

const addToCartSlice = createSlice({
  name: "addToCart",
  initialState: {
    items: savedCart,
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const exists = state.items.find((i) => i._id === item._id);
      if (exists) {
        state.items = state.items.map((i) =>
          i._id === item._id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        state.items.push({ ...item, quantity: 1 });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },

    incressQuantity: (state, action) => {
      const id = action.payload._id;
      state.items = state.items.map((item) =>
        item._id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },

    decreaseQuantity: (state, action) => {
      const id = action.payload._id;
      state.items = state.items.map((item) =>
        item._id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },

    removeItem: (state, action) => {
      const id = action.payload._id;
      const index = state.items.findIndex((item) => item._id === id);
      if (index !== -1) {
        state.items.splice(index, 1);
      }

      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },

    cartItems: (state) => state.items,
  },
});

export const { addItem, removeItem, incressQuantity, decreaseQuantity, cartItems } = addToCartSlice.actions;
export default addToCartSlice.reducer;
