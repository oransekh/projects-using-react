import { createSlice } from "@reduxjs/toolkit";

const users = [
  {
    id: 1,
    name: "Rohan Sharma",
    email: "rohan.sharma@example.com",
    password: "Rohan@123",
    age: 28,
    address: "221B MG Road, Delhi, India",
    phone: "+91 9876543210",
  },
  {
    id: 2,
    name: "Priya Das",
    email: "priya.das@example.com",
    password: "Priya@456",
    age: 24,
    address: "45 Lake View, Salt Lake, Kolkata",
    phone: "+91 9638527410",
  },
  {
    id: 3,
    name: "Aditya Verma",
    email: "aditya.verma@example.com",
    password: "Adi@789",
    age: 32,
    address: "12 Lotus Residency, Andheri West, Mumbai",
    phone: "+91 9001234567",
  },
  {
    id: 4,
    name: "Neha Gupta",
    email: "neha.gupta@example.com",
    password: "Neha@2024",
    age: 26,
    address: "98 Green Park, Bengaluru, India",
    phone: "+91 9123456780",
  },
  {
    id: 5,
    name: "Sahil Khan",
    email: "sahil.khan@example.com",
    password: "Sahil@321",
    age: 30,
    address: "88 Civil Lines, Jaipur, India",
    phone: "+91 9988776655",
  },
];

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    allUsers: users, // all users list
    currentUser: null, // logged-in user
    loginError: null,
    userLogin: false,
    isLoginOpen: false,
  },

  reducers: {
    LoginUser: (state, action) => {
      const { email, password } = action.payload;

      const existingUser = state.allUsers.find(
        (user) => user.email === email && user.password === password
      );

      if (existingUser) {
        state.currentUser = existingUser; // SUCCESS
        state.userLogin = true;
        state.loginError = null;
      } else {
        state.currentUser = null;
        state.loginError = "Invalid email or password"; // ERROR
      }
      localStorage.setItem("setUser", JSON.stringify(state.currentUser));
    },

    LoginOpen: (state, action) => {
      state.isLoginOpen = action.payload;
    },

    LogoutUser: (state) => {
      state.currentUser = null;
    },
  },
});

export const { LoginUser, LogoutUser, LoginOpen } = AuthSlice.actions;
export default AuthSlice.reducer;
