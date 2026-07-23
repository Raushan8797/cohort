import React from "react";

const CartCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex items-center justify-between mb-4">
      {/* Image */}
      <div className="w-28 h-28 bg-gray-100 rounded-lg flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain p-2"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 px-6">
        <h2 className="text-lg font-semibold line-clamp-2">
          {product.title}
        </h2>

        <p className="text-gray-500 text-sm capitalize mt-1">
          {product.category}
        </p>

        <div className="flex items-center gap-2 mt-2">
          <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">
            ⭐ {product.rating.rate}
          </span>

          <span className="text-gray-500 text-sm">
            ({product.rating.count} reviews)
          </span>
        </div>
      </div>

      {/* Quantity */}
      <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden mx-6">
        <button className="w-10 h-10 text-xl font-semibold hover:bg-gray-100">
          -
        </button>

        <span className="w-12 text-center text-lg font-semibold">
          {product.quantity}
        </span>

        <button className="w-10 h-10 text-xl font-semibold hover:bg-gray-100">
          +
        </button>
      </div>

      {/* Price & Remove */}
      <div className="text-right">
        <p className="text-2xl font-bold text-blue-600">
          ${product.price}
        </p>

        <button className="mt-3 bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded-lg transition">
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartCard;