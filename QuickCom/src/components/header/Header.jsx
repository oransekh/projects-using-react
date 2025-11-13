import React, { useState } from "react";
import { User, Search, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import { useDispatch } from "react-redux";
import { LoginOpen } from "../data/AuthSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [openMenu, setOpenMenu] = useState(false);

  const NavLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="relative flex justify-between py-3 items-center text-sm text-gray-700 lg:px-24 md:px-12 px-6 border border-b-2 border-gray-200">
      <img className="h-8" src={assets.logo} alt="logo" />

      {/* Desktop menu */}
      <ul className="gap-5 items-center hidden lg:flex">
        {NavLinks.map((nav, index) => (
          <li key={index}>
            <Link to={nav.path}>{nav.name}</Link>
          </li>
        ))}

        <button className="border border-gray-200 py-1 px-2 rounded-full text-xs">
          Seller Dashboard
        </button>
      </ul>

      <div className="flex items-center gap-3">
        <button>
          <Search className="h-5 text-gray-500" />
        </button>
        <button
          onClick={() => dispatch(LoginOpen(true))}
          className="flex items-center gap-1 text-sm cursor-pointer"
        >
          <User className="h-5 text-gray-500" />{" "}
          <span className="hidden lg:block">Account</span>
        </button>

        <button onClick={() => setOpenMenu(true)} className="lg:hidden">
          <Menu className="h-5 text-gray-500" />
        </button>

        {/* mobile menu */}
        {openMenu && (
          <div
            className={`fixed top-0 right-0 bg-[#ffffff] w-64 h-full shadow-sm sm:hidden z-50
              transform transition-transform duration-600
              ${openMenu ? "translate-x-0" : "translate-x-full"}`}
          >
            <div className="relative border border-gray-200 h-15 flex items-center">
              <X
                onClick={() => setOpenMenu(false)}
                className="h-5 text-gray-500 left-5"
              />
              <span className="absolute left-1/2 -translate-x-1/2">Menu</span>
            </div>
            {/* nav-items*/}
            <div className="flex flex-col gap-3 px-3 py-4">
              {NavLinks.map((nav, index) => (
                <Link
                  key={index}
                  to={nav.path}
                  className="flex items-center justify-between 
                 bg-white p-4 rounded-2xl 
                 border border-gray-100 shadow-sm
                 hover:shadow-md hover:bg-gray-50
                 transition-all duration-200"
                >
                  <span className="text-gray-800 font-medium">{nav.name}</span>
                  <span className="text-gray-400 text-lg">›</span>
                </Link>
              ))}

              {/* Special Button */}
              <button
                className="w-full mt-2  bg-button 
                     text-white py-4 rounded-xl font-medium 
                     shadow-sm hover:shadow-md transition-all"
              >
                Seller Dashboard
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
