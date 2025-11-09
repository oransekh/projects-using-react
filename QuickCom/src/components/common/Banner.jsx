import React from "react";
import { assets } from "../../assets/assets";
const Banner = () => {
  return (
    <div className=" max:w-8xl px-6 md:px-12 lg:px-24 mt-14 ">
      <div className="flex items-center justify-between flex-col md:flex-row rounded-sm bg-[#e6e9f2]">
        <img className="w-60" src={assets.jbl_soundbox_image} alt="" />
        <div className="flex justify-center flex-col items-center text-center space-y-3 ">
          <h2 className="text-3xl font-semibold text-heading-text">
            Level Up Your <br /> Gaming Experience
          </h2>
          <p className="text-md font-semibold text-gray-600">
            From immersive sound to precise controls— <br />
            everything you need to win
          </p>
          <button className="bg-button py-2 px-14 text-white rounded">
            Buy Now
          </button>
        </div>
        <img
          className="h-50 lg:h-70 hidden md:block"
          src={assets.md_controller_image}
          alt=""
        />
        <img
          className="lg:h-70 left-0 md:hidden"
          src={assets.sm_controller_image}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
