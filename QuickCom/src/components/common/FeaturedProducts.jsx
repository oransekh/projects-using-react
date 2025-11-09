import React from "react";
import { assets } from "../../assets/assets";

const FeaturedProducts = () => {
  const FeaturedData = [
    {
      id: 1,
      title: "Unparalleled Sound",
      dec: "Experience crystal-clear audio with premium headphones.",
      img: assets.boy_with_laptop_image,
    },
    {
      id: 2,
      title: "Stay Connected",
      dec: "Compact and stylish earphones for every occasion.",
      img: assets.girl_with_headphone_image,
    },
    {
      id: 4,
      title: "Power in Every Pixel",
      dec: "Shop the latest laptops for work, gaming, and more.",
      img: assets.girl_with_earphone_image,
    },
  ];

  return (
    <div className="max-w-8xl px-6 md:px-12 lg:px-24 mt-12 flex items-center flex-col">
      <div className="w-full flex flex-col items-center">
        <p className="text-3xl font-medium text-center w-full">
          Featured Products
        </p>
        <div className="w-34 border-b-3 border-button mt-2"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
        {FeaturedData.map((Card) => (
          <div
            key={Card.id}
            className="relative w-full overflow-hidden rounded-lg group cursor-pointer"
          >
            <img
              className="w-full lg:h-120 object-cover transform transition-all duration-500 group-hover:scale-105 group-hover:brightness-75"
              src={Card.img}
              alt=""
            />

            {/* Overlay Text */}
            <div className="absolute bottom-5 left-5 text-white group-hover:-translate-y-5 duration-200 transition-all">
              <h4 className="font-semibold">{Card.title}</h4>
              <p className="text-sm w-[250px]">{Card.dec}</p>
              <button className="mt-2 bg-button text-white px-4 py-2 rounded flex items-center gap-2">
                Buy now
                <img src={assets.redirect_icon} alt="" className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
