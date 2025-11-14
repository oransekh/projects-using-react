import { useState } from "react";
import { useDispatch } from "react-redux";
import { LoginUser } from "../data/AuthSlice";
import { fromOpen } from "../data/AuthSlice";
import { X } from "lucide-react";

export default function Login() {
  const dispatch = useDispatch();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting login data:", loginData);
    dispatch(LoginUser(loginData));
  };

  return (
    <div className="inset-0 fixed backdrop-blur-xs bg-black/25">
      <form
        onSubmit={handleSubmit}
        className="fixed left-1/2 top-1/2 -translate-x-1/2 right-1/2 -translate-y-1/2 z-50 bg-white text-gray-500 max-w-[350px] min-w-[300px] mx-4 md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10"
      >
        <span>
          <X
            onClick={() => dispatch(fromOpen(false))}
            className="h-5 absolute cursor-pointer text-gray-500 right-5"
          />
        </span>

        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Login Now
        </h2>

        <input
          name="email"
          onChange={handleChange}
          value={loginData.email}
          className="w-full border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
          type="email"
          placeholder="Enter your email"
          required
        />

        <input
          name="password"
          onChange={handleChange}
          value={loginData.password}
          className="w-full border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
          type="password"
          placeholder="Enter your password"
          required
        />

        <div className="text-right py-4">
          <a className="text-button underline" href="#">
            Forgot Password
          </a>
        </div>

        <button
          type="submit"
          className="w-full mb-3 bg-button hover:bg-button/90 active:scale-95 transition py-2.5 rounded-full text-white"
        >
          Log in
        </button>

        <p className="text-center mt-4">
          Don’t have an account?{" "}
          <a href="#" className="text-button underline">
            Signup Now
          </a>
        </p>
      </form>
    </div>
  );
}
