import React from "react";
import { User, Search, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import { useState } from "react";

const Header = () => {
  const [openMenu, isOpenMenu] = useState(true);

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
        <div className="flex items-center gap-1 text-sm">
          <User className="h-5 text-gray-500" />{" "}
          <span className="hidden lg:block">Account</span>
        </div>

        <button onClick={() => isOpenMenu(true)} className="lg:hidden">
          <Menu className="h-5 text-gray-500" />
        </button>

        {/* mobile menu */}
        {openMenu && (
          <div className="fixed top-0 right-0 bg-[#ffffff] w-62 h-full shadow-sm">
            <div className=" border-b-gray-200 h-10 items-center">
              <X />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
