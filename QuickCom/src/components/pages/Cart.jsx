import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { assets } from "../../assets/assets";
import { removeItem } from "../data/addTocartSlice";
import { incressQuantity } from "../data/addTocartSlice";
import { decreaseQuantity } from "../data/addTocartSlice";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  const subtotal = cartItems.map((item) => ({
    ...item,
    subtotal: item.price * item.quantity,
  }));

  const totalPrice = subtotal.reduce((acc, item) => acc + item.subtotal, 0);
  const tax = Math.round(totalPrice * 0.02);
  const grandTotal = Math.floor(totalPrice + tax);

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

            {subtotal.length === 0
              ? "No items in the cart"
              : subtotal.map((item) => (
                  <tbody>
                    <tr>
                      <td className="flex items-center gap-4 py-4 md:px-4 px-1">
                        <div>
                          <div className="rounded-lg overflow-hidden bg-gray-500/10 p-2">
                            <img
                              src={item.image?.[0]}
                              className="w-16 h-auto object-cover mix-blend-multiply"
                              alt=""
                              decoding="async"
                              loading="lazy"
                            />
                          </div>
                          <button className="md:hidden text-xs text-orange-600 mt-1">
                            remove
                          </button>
                        </div>

                        <div className="text-sm hidden md:block">
                          <p className="text-gray-800">{item.name}</p>
                          <button
                            onClick={() => dispatch(removeItem(item))}
                            className="text-xs text-orange-600 mt-1"
                          >
                            remove
                          </button>
                        </div>
                      </td>

                      <td className="py-4 md:px-4 px-1 text-gray-600">
                        {item.price}
                      </td>

                      <td className="py-4 md:px-4 px-1">
                        <div>
                          <button
                            onClick={() => dispatch(decreaseQuantity(item))}
                          >
                            <img
                              decoding="async"
                              loading="lazy"
                              className="h-4 w-4"
                              src={assets.decrease_arrow}
                              alt="decrease"
                            />
                          </button>
                          <input
                            type="number"
                            className="w-8 border text-center appearance-none no-spinner"
                            value={item.quantity}
                          />
                          <button
                            onClick={() => dispatch(incressQuantity(item))}
                          >
                            <img
                              decoding="async"
                              loading="lazy"
                              className="h-4 w-4"
                              src={assets.increase_arrow}
                              alt="increase"
                            />
                          </button>
                        </div>
                      </td>

                      <td className="py-4 md:px-5 px-1 text-gray-600 font-medium">
                        {item.subtotal}
                      </td>
                    </tr>
                  </tbody>
                ))}
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
            <p class="text-gray-800">{totalPrice}</p>
          </div>
          <div class="flex justify-between">
            <p class="text-gray-600">Shipping Fee</p>
            <p class="font-medium text-gray-800">Free</p>
          </div>
          <div class="flex justify-between">
            <p class="text-gray-600">Tax (2%)</p>
            <p class="font-medium text-gray-800">{tax}</p>
          </div>
          <div class="flex justify-between text-lg md:text-xl font-medium border-t pt-3">
            <p>Total</p>
            <p>{grandTotal}</p>
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
