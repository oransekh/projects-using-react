import { createSlice } from "@reduxjs/toolkit";
import { productsDummyData } from "../../assets/assets";
const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: productsDummyData, // set initial products from dummy data
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload; // update products
    },
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
