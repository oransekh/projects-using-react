import { createSlice } from "@reduxjs/toolkit";
const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
  },
  reducers: {
    Auth: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { Auth } = AuthSlice.actions;
export default AuthSlice.reducer;
