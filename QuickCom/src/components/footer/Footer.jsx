import React from "react";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <footer className="w-full bg-white mt-12 ">
      <div className="max-w-8xl mx-auto px-6 md:px-12 lg:px-24  py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo & Description */}
        <div>
          <div className="flex items-center gap-2">
            <img src={assets.logo} alt="logo" className="h-10" />
          </div>
          <p className="text-gray-600 text-xs mt-4 leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="hover:text-black cursor-pointer">Home</li>
            <li className="hover:text-black cursor-pointer">About us</li>
            <li className="hover:text-black cursor-pointer">Contact us</li>
            <li className="hover:text-black cursor-pointer">Privacy policy</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Get in touch</h3>
          <p className="text-gray-700">+1-234-567-890</p>
          <p className="text-gray-700 mt-2">contact@greatstack.dev</p>
        </div>
      </div>

      {/* Bottom Text */}
      <div className=" border-t border-gray-400 py-4 text-center text-gray-600 text-sm">
        Copyright 2025 © GreatStack.dev All Right Reserved.
      </div>
    </footer>
  );
};

export default Footer;
