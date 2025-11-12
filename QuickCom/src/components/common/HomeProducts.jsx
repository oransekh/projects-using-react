import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
const HomeProducts = () => {
  const products = useSelector((state) => state.products.products);
  console.log(products);
  return (
    <div className="max:w-8xl items-center flex flex-col lg:px-24 md:px-12 px-6 pt-14">
      <p className="text-2xl font-medium text-left w-full">Popular products</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 flex-col items-center gap-6 mt-6 pb-14 w-full">
        {products.map((product) => (
          <Link key={product._id} to={`/product/${product._id}`}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
      <button className="border border-gray-200  py-3 text-gray-600 text-sm w-40">
        See More
      </button>
    </div>
  );
};

export default HomeProducts;
