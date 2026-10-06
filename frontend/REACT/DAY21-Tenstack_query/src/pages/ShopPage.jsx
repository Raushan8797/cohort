import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import ProductCardskeleton from "../component/ProductCardskeleton";
import { getProductDataApi } from "../api/Productapi";
import { Query, useQuery } from "@tanstack/react-query";
import { useProductApi } from "../hooks/ProductHooks";
import Filters from "../component/Filters";

const ShopPage = () => {
  let { isPending, data, error, filteredProducts } = useProductApi();
  if (error) return <h1>{error.message}</h1>;
  return (
    <div className="min-h-screen bg-black p-8 ">
      <Filters />
      <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {isPending
          ? Array.from({ length: 8 }).map((_, index) => (
              <ProductCardskeleton key={index} />
            ))
          : filteredProducts
            ? filteredProducts.map((val) => (
                <ProductCard key={val.id} product={val} />
              ))
            : data.map((val) => <ProductCard key={val.id} product={val} />)}
      </div>
    </div>
  );
};

export default ShopPage;
