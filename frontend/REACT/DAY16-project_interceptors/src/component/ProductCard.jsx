import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-200">
      {/* Product Image */}
      <div className="h-64 bg-gray-100 flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-52 object-contain group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Product Details */}
      <div className="p-5">
        {/* Category */}
        <span className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full capitalize">
          {product.category}
        </span>

        {/* Title */}
        <h2 className="text-lg font-bold text-gray-800 mt-3 line-clamp-2">
          {product.title}
        </h2>

        {/* Description */}
        <p className="text-gray-500 text-sm mt-2 line-clamp-3">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-1">
            <span className="text-yellow-500 text-lg">⭐</span>
            <span className="font-semibold">{product.rating.rate}</span>
            <span className="text-gray-400 text-sm">
              ({product.rating.count} reviews)
            </span>
          </div>

          {/* Price */}
          <h3 className="text-2xl font-bold text-green-600">
            ${product.price}
          </h3>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-6">
          <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl font-semibold transition">
            Add to Cart
          </button>

          <button className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-2 rounded-xl font-semibold transition">
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;