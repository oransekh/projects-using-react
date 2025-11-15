import React from "react";
import {
  Settings,
  User,
  ShoppingCart,
  ShoppingBag,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { LogoutUser } from "../data/AuthSlice";

const UserProfile = ({ setIsSidemenuOpen }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isActive = useSelector((state) => state.auth.activeUser);
  console.log(isActive);

  return (
    <div className="bg-[#fefefe] absolute  top-10 -right-1 z-500 w-72 shadow-lg rounded-lg p-5">
      <div className="flex flex-col justify-start h-full">
        <div className="flex items-center">
          <span className="bg-gray-300 p-2 rounded-full mr-3">
            <User />
          </span>
          <div>
            <h2 className="text-sm font-medium">{isActive.name}</h2>
            <p className="text-xs text-gray-600">{isActive.email}</p>
          </div>
        </div>
        <hr className="mt-4 text-gray-300 " />
        <div className="flex  items-center gap-2 text-gray-600 hover:bg-gray-500/10 py-4 rounded-md cursor-pointer">
          <Settings /> <h2 className="text-sm font-medium">Manage Profile</h2>
        </div>
        <hr className=" text-gray-300" />
        <button
          onClick={() => {
            navigate("/cart");
            setIsSidemenuOpen(false);
          }}
          className="flex  items-center gap-2 text-gray-600 hover:bg-gray-500/10 py-4 rounded-md cursor-pointer"
        >
          <ShoppingCart /> <h2 className="text-sm font-medium">Cart</h2>
        </button>
        <hr className=" text-gray-300" />
        <div className="flex  items-center gap-2 text-gray-600 hover:bg-gray-500/10 py-4 rounded-md cursor-pointer">
          <ShoppingBag /> <h2 className="text-sm font-medium">Order</h2>
        </div>
        <hr className=" text-gray-300" />
        <button
          onClick={() => {
            dispatch(LogoutUser());
            setIsSidemenuOpen(false);
            navigate("/");
          }}
          className="flex  items-center gap-2 text-gray-600 hover:bg-gray-500/10 py-4 rounded-md cursor-pointer"
        >
          <LogOut /> <h2 className="text-sm font-medium">Order</h2>
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
