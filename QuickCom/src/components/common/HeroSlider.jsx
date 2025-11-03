import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { assets } from "../../assets/assets";

const HeroSlider = () => {
  const sliderData = [
    {
      id: 1,
      title: "Experience Pure Sound - Your Perfect Headphones Awaits!",
      offer: "Limited Time Offer 30% Off",
      buttonText1: "Buy now",
      buttonText2: "Find more",
      imgSrc: assets.header_headphone_image,
    },
    {
      id: 2,
      title: "Next-Level Gaming Starts Here - Discover PlayStation 5 Today!",
      offer: "Hurry up only few lefts!",
      buttonText1: "Shop Now",
      buttonText2: "Explore Deals",
      imgSrc: assets.header_playstation_image,
    },
    {
      id: 3,
      title: "Power Meets Elegance - Apple MacBook Pro is Here for you!",
      offer: "Exclusive Deal 40% Off",
      buttonText1: "Order Now",
      buttonText2: "Learn More",
      imgSrc: assets.header_macbook_image,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="lg:px-24 md:px-12 px-6">
      {/*  Proper overflow-hidden wrapper */}
      <div className="w-full overflow-hidden">
        {/*  Slider Track */}
        <div
          className="mt-5 flex flex-nowrap transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {sliderData.map((item) => (
            <div
              key={item.id}
              className="bg-[#e6e9f2] min-w-full snap-center rounded-sm flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 lg:px-24"
            >
              {/* Text Section */}
              <div className="md:text-left">
                <p className="text-sm md:text-base text-button">{item.offer}</p>

                <h1 className="text-2xl md:text-3xl lg:text-[2.7rem] text-heading-text font-semibold leading-tight">
                  {item.title}
                </h1>

                <div className="py-4 flex">
                  <button className="bg-button px-8 py-3 rounded-xl text-sm text-white font-semibold">
                    {item.buttonText1}
                  </button>

                  <button className="px-8 py-3 flex text-sm font-semibold items-center group">
                    {item.buttonText2}
                    <ArrowRight className="group-hover:translate-x-1 transform duration-200" />
                  </button>
                </div>
              </div>

              {/* Image Section */}
              <img
                src={item.imgSrc}
                alt="Product"
                className="max-w-[220px] py-5 md:max-w-[300px] lg:max-w-[360px] w-full"
              />
            </div>
          ))}
        </div>
      </div>

      {/*  Pagination Dots */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {sliderData.map((_, index) => (
          <div
            onClick={() => setCurrentIndex(index)}
            key={index}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "bg-orange-600 scale-110"
                : "bg-gray-500/30"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
