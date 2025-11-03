import React from "react";
import { assets } from "../../assets/assets";

const ProductCard = () => {
  return (
    <div className="bg-[#f0f0f2] w-40">
      <img src={assets.projector_image}  alt="" />
      <h2>ASUS ROG Zephyrus G16</h2>
      <p>The ASUS ROG Zephyrus G16 gamin</p>
      <span></span>
      <div className="flex">
        <h3>$1999.99</h3>
        <button>Buy Now</button>
      </div>
    </div>
  );
};

export default ProductCard;
