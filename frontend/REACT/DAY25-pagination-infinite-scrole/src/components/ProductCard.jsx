import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      
      {/* Product Image */}
      <div className="h-64 w-full bg-gray-800 p-4">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="p-5">
        
        {/* Brand */}
        <p className="mb-1 text-sm text-gray-400">
          {product.brand}
        </p>

        {/* Title */}
        <h2 className="mb-3 line-clamp-1 text-lg font-semibold">
          {product.title}
        </h2>

        {/* Price & Rating */}
        <div className="mb-4 flex items-center justify-between">
          <span className="text-xl font-bold text-white">
            ${product.price}
          </span>

          <span className="rounded-md bg-yellow-500/10 px-2 py-1 text-sm text-yellow-400">
            ⭐ {product.rating}
          </span>
        </div>

        {/* Stock */}
        <p className="mb-4 text-sm text-gray-400">
          {product.stock > 0
            ? `${product.stock} items available`
            : "Out of Stock"}
        </p>

        {/* Add to Cart */}
        <button
          onClick={() => onAddToCart(product)}
          disabled={product.stock === 0}
          className="w-full rounded-xl bg-white py-3 font-semibold text-black transition hover:bg-gray-200 disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-300"
        >
          {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
        </button>

      </div>
    </div>
  );
};

export default ProductCard;

