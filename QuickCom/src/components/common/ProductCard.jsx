import React from "react";
import { assets } from "../../assets/assets";
const ProductCard = ({ product }) => {
  return (
    <div className="items-start gap-0.5 max-w-[200px] w-full cursor-pointer">
      <div className="bg-[#f0f0f2]  rounded-md w-full h-52 ">
        <img  loading="lazy"
            decoding="async" src={product.image[0]} alt="" />
      </div>
      <p className="md:text-base font-medium pt-2 w-full truncate">
        {product.name}
      </p>
      <p className="w-full text-xs text-gray-500/70 max-sm:hidden truncate">
        The ASUS ROG Zephyrus G16 gaming
      </p>

      <div className=" flex items-center gap-2 py-1">
        <p className="text-xs">{4.5}</p>
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, index) => (
            <img
              key={index}
              src={
                index < Math.floor(4) ? assets.star_icon : assets.star_dull_icon
              }
            />
          ))}
        </div>
      </div>

      <div className="flex items-end justify-between w-full mt-1">
        <p className="text-base font-medium">{product.price}</p>
        <button className=" max-sm:hidden px-4 py-1.5 text-gray-500 border border-gray-500/20 rounded-full text-xs hover:bg-slate-50 transition">
          Buy now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
