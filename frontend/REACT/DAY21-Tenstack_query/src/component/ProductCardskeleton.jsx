import React from "react";

const ProductCardskeleton = () => {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 shadow-lg animate-pulse">

      {/* Image Skeleton */}
      <div className="flex h-64 items-center justify-center bg-gray-950 p-5">
        <div className="h-48 w-40 rounded-lg bg-gray-800"></div>
      </div>

      {/* Product Info */}
      <div className="p-5">

        {/* Title Skeleton */}
        <div className="mb-3 h-6 w-3/4 rounded bg-gray-800"></div>

        {/* Price + Quantity */}
        <div className="mb-5 flex items-center justify-between">

          {/* Price */}
          <div className="h-8 w-20 rounded bg-gray-800"></div>

          {/* Quantity */}
          <div className="h-10 w-28 rounded-lg bg-gray-800"></div>

        </div>

        {/* Button Skeleton */}
        <div className="h-12 w-full rounded-xl bg-gray-800"></div>

      </div>
    </div>
  );
};

export default ProductCardskeleton;
