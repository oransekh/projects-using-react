import React from "react";
import { useState } from "react";

const Login = ({ handelLogin }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const submitHandel = (e) => {
    e.preventDefault();
    handelLogin(email, password);
  };

  return (
    <div className="h-screen bg-gray-800 justify-center items-center flex">
      <div className="flex justify-center items-center min-w-xs sm:w-sm max-w-md border-1 border-slate-200 rounded-2xl bg-gray-50 flex-col">
        <h2 className="text-gray-700 text-2xl pt-5 font-semibold">Login</h2>
        <form
          onSubmit={(e) => submitHandel(e)}
          className="flex flex-col space-y-5 py-10 w-full px-10"
        >
          <label className="flex flex-col">
            Email:
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="py-4 px-5 border-1 border-slate-300"
              required
              type="email"
              placeholder="Enter your email"
            />
          </label>

          <label className="flex flex-col">
            Password:
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="py-4 px-5 border-1 border-slate-300"
              required
              type="password"
              placeholder="Enter your password"
            />
          </label>

          <button className="py-4  bg-green-400 text-md hover:bg-green-500 transition-colors duration-300 ">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
