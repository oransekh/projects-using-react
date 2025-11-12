import React from "react";
import { useSelector } from "react-redux";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  console.log("Cart Items:", cartItems);
  return (
    <div className="flex flex-col md:flex-row gap-10 px-6 md:px-16 lg:px-32 pt-14 mb-20">
      <div className="flex-1">
        <div className="flex items-center justify-between mb-8 border-b border-gray-500/30 pb-6">
          <p className="text-2xl md:text-3xl text-gray-500">
            Your <span className="text-button">Cart</span>
          </p>
          <p className=" text-xl  text-gray-600">{cartItems.length} items</p>
        </div>
        <div class="overflow-x-auto">
          <table class="min-w-full table-auto">
            <thead class="text-left">
              <tr>
                <th class="text-nowrap pb-6 md:px-4 px-1 text-gray-600 font-medium">
                  Product Details
                </th>
                <th class="pb-6 md:px-4 px-1 text-gray-600 font-medium">
                  Price
                </th>
                <th class="pb-6 md:px-4 px-1 text-gray-600 font-medium">
                  Quantity
                </th>
                <th class="pb-6 md:px-4 px-1 text-gray-600 font-medium">
                  Subtotal
                </th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>

      <div className="w-full md:w-96 bg-gray-500/5 p-5">
        <h2 className="text-xl md:text-2xl font-medium text-gray-700">
          Order Summary
        </h2>
        <hr className="border-gray-500/30 my-5" />
        <div className="space-y-5">
          <div>
            <label className="text-base font-medium uppercase text-gray-600 block mb-2">
              Seleted Address
            </label>
          </div>

          <label className="text-base font-medium uppercase text-gray-600 block mb-2">
            Promo Code
          </label>
        </div>
        <div className="flex flex-col items-start gap-3">
          <input
            type="text"
            className="flex grow w-full outline-none p-2.5 text-gray-600 border"
            placeholder="Enter promo code"
          />
          <button className="bg-orange-600 text-white px-9 py-2 hover:bg-orange-700">
            Apply
          </button>
        </div>
        <hr className="border-gray-500/30 my-5" />
        <div class="space-y-4">
          <div class="flex justify-between text-base font-medium">
            <p class="text-gray-600">Price</p>
            <p class="text-gray-800">0</p>
          </div>
          <div class="flex justify-between">
            <p class="text-gray-600">Shipping Fee</p>
            <p class="font-medium text-gray-800">Free</p>
          </div>
          <div class="flex justify-between">
            <p class="text-gray-600">Tax (2%)</p>
            <p class="font-medium text-gray-800">0</p>
          </div>
          <div class="flex justify-between text-lg md:text-xl font-medium border-t pt-3">
            <p>Total</p>
            <p></p>
          </div>
        </div>
        <button class="w-full bg-orange-600 text-white py-3 mt-5 hover:bg-orange-700">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
