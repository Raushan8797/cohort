import React from "react";
import { useContext } from "react";
import { MyShop } from "../context/MyWebsite";

const Cart = () => {

    let {cartItems} = useContext (MyShop)


  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="flex justify-center items-center h-[70vh]">
          <h2 className="text-2xl text-gray-500">🛒 Your cart is empty</h2>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Cart Items */}
          <div className="flex-1 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow p-4 flex gap-4 items-center"
              >
                {/* Image */}
                <div className="w-28 h-28 bg-gray-100 rounded-lg flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain p-2"
                  />
                </div>

                {/* Product Info */}
                <div className="flex-1">
                  <h2 className="font-semibold text-lg line-clamp-2">
                    {item.title}
                  </h2>

                  <p className="text-gray-500 text-sm capitalize mt-1">
                    {item.category}
                  </p>

                  <div className="flex items-center gap-2 mt-2">
                    <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">
                      ⭐ {item.rating.rate}
                    </span>

                    <span className="text-gray-500 text-sm">
                      ({item.rating.count} reviews)
                    </span>
                  </div>
                </div>

                {/* Price */}
                <div className="text-right">
                  <p className="text-2xl font-bold text-blue-600">
                    ${item.price}
                  </p>

                  <button className="mt-3 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition">
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-80 bg-white rounded-xl shadow p-6 h-fit">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>

            <div className="flex justify-between mb-2">
              <span>Items</span>
              <span>{cartItems.length}</span>
            </div>

            <div className="flex justify-between mb-4">
              <span>Total</span>
              <span className="font-bold text-xl">
                ${total.toFixed(2)}
              </span>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;