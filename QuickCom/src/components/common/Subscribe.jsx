import React from "react";

const Subscribe = () => {
  return (
    <div className="max-8xl px-6 md:px-12 lg:px-24  flex items-center justify-center mt-24 text-center">
      <div className="space-y-10">
        <div className="space-y-2">
          {" "}
          <h2 className="text-2xl lg:text-4xl font-medium text-heading-text">
            Subscribe now & get 20% off
          </h2>
          <p className="text-xs lg:text-sm text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="text-start flex px-6">
          <input
            className="px-6 md:px-18 lg:px-48 text-start py-4 border border-gray-300 rounded"
            type="text"
            placeholder="Enter your email id"
          />{" "}
          <button className="bg-button py-5 text-sm text-white px-5">subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
