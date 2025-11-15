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

// Load saved user from localStorage
const savedUser = JSON.parse(localStorage.getItem("userInformation")) || null;
const Status = JSON.parse(localStorage.getItem("userStates")) || null;

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    users: users, // all users
    activeUser: savedUser, // logged-in user OR null
    loginStatus: savedUser ? Status : false,
    openForm: false, // open Login & Sign-up form
    loginToken: savedUser ? true : false,
  },

  reducers: {
    LoginUser: (state, action) => {
      const { email, password } = action.payload;

      // Find user with matching credentials
      const foundUser = state.users.find(
        (u) => u.email === email && u.password === password
      );

      if (foundUser) {
        state.activeUser = foundUser;
        state.loginStatus = true;
        state.openForm = false;

        // Save to localStorage
        localStorage.setItem("userInformation", JSON.stringify(foundUser));
        localStorage.setItem("userStates", JSON.stringify(true));
      } else {
        state.activeUser = null;
        state.loginStatus = false;
      }
    },

    LogoutUser: (state) => {
      state.activeUser = null;
      state.loginStatus = false;
      localStorage.removeItem("userInformation");
      localStorage.removeItem("userStates");
    },

    fromOpen: (state, action) => {
      state.openForm = action.payload;
    },
  },
});

export const { LoginUser, LogoutUser, fromOpen } = AuthSlice.actions;
export default AuthSlice.reducer;
