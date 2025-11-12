import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { assets } from "../../assets/assets";
import { useDispatch } from "react-redux";
import { addItem } from "../data/addTocartSlice";

const Product = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const products = useSelector((state) => state.products.products);
  const { id } = useParams();
  const product = products.find((item) => item._id === id);

  const dispatch = useDispatch();

  return (
    <section className="max-w-8xl py-6 md:px-12 lg:px-24 mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* LEFT SIDE IMAGES */}
        <div className="px-6 lg:px-12 xl:px-24">
          {/* Big Image */}
          <div className="bg-[#f0f0f2] rounded-md">
            <img
              src={product?.image[selectedImage]}
              alt={product?.name}
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-2 px-2 py-4 w-full">
            {product?.image?.map((img, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`bg-gray-500/20 rounded-md mt-4 cursor-pointer p-1
                ${
                  selectedImage === index
                    ? "border-2 border-button"
                    : "border border-transparent"
                }`}
              >
                <img
                  src={img}
                  alt={`${product?.name} ${index + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE PRODUCT DETAILS */}
        <div className="px-6">
          <h1 className="text-3xl font-medium text-gray-800/90 mb-4">
            {product?.name}
          </h1>

          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, index) => (
              <img
                key={index}
                src={
                  index < Math.floor(4)
                    ? assets.star_icon
                    : assets.star_dull_icon
                }
              />
            ))}
          </div>

          <p className="text-gray-600 mt-3">{product?.description}</p>

          <h2 className="text-3xl font-medium mt-6">
            {product?.price}{" "}
            <span className="text-base font-normal text-gray-800/60 line-through ml-2">
              {product?.offerPrice}
            </span>
          </h2>

          <hr className="border-gray-600 my-6" />

          <div className="overflow-x-auto">
            <table className="table-auto border-collapse w-full max-w-72">
              <tbody>
                <tr>
                  <td className="text-gray-600 font-medium">Brand</td>
                  <td className="text-gray-800/50 ">Generic</td>
                </tr>
                <tr>
                  <td className="text-gray-600 font-medium">Color</td>
                  <td className="text-gray-800/50 ">Multi</td>
                </tr>
                <tr>
                  <td className="text-gray-600 font-medium">Category</td>
                  <td className="text-gray-800/50">Earphone</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex items-center mt-10 gap-4">
            <button
              onClick={() => dispatch(addItem(product))}
              className="w-full py-3.5 bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition"
            >
              Add to Cart
            </button>{" "}
            <button className="w-full py-3.5 bg-orange-500 text-white hover:bg-orange-600 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
