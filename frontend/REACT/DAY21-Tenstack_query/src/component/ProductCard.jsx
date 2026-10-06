import React, { useState } from "react";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 shadow-lg">

      {/* Product Image */}
      <div className="flex h-64 items-center justify-center bg-gray-950 p-5">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain transition duration-300 hover:scale-105"
        />
      </div>

      {/* Product Info */}
      <div className="p-5">

        {/* Title */}
        <h2 className="mb-3 text-lg font-semibold text-white">
          {product.title}
        </h2>

        {/* Price & Quantity */}
        <div className="mb-5 flex items-center justify-between">

          <span className="text-2xl font-bold text-white">
            ${product.price}
          </span>

          {/* Quantity */}
          <div className="flex items-center gap-3 rounded-lg bg-gray-800 px-2 py-1">
            <button
              onClick={decreaseQuantity}
              className="h-8 w-8 rounded-md bg-gray-700 text-lg text-white hover:bg-gray-600"
            >
              −
            </button>

            <span className="w-6 text-center font-semibold text-white">
              {quantity}
            </span>

            <button
              onClick={increaseQuantity}
              className="h-8 w-8 rounded-md bg-gray-700 text-lg text-white hover:bg-gray-600"
            >
              +
            </button>
          </div>

        </div>

        {/* Add to Cart */}
        <button
          className="w-full rounded-xl bg-white px-4 py-3 font-semibold text-black transition hover:bg-gray-200 active:scale-95"
        >
          Add to Cart
        </button>

      </div>
    </div>
  );
};

export default ProductCard;