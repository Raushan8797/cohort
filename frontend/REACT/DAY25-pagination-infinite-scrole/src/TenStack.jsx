import { keepPreviousData, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getAllProduct } from "./api/ProductApi";
import ProductCard from "./components/ProductCard";

const TenStack = () => {
  let limit = 10;
  const [page, setPage] = useState(0)
  let { data, isPending, isError,isPlaceholderData } = useQuery({
    queryKey: ["products",page],
    queryFn: () => getAllProduct(limit,page),
    placeholderData: keepPreviousData,
  });
  if (isPending) return "Loading....";
  if (isError) return "Something went wrong";
  console.log(data);
  let totalPages = Math.ceil(data?.total / limit)

  return (
    <div className="flex flex-col gap-6 item-center">
      <div style={{opacity : isPlaceholderData? 0.3:1}}
      className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4">
        {data?.products.map((val) => {
          return <ProductCard key={val.id} product={val} />;
        })}
      </div>
       <div className="flex gap-5 item-center  ">
        <button
        disabled = {page === 0}
          onClick={() => setPage(page - 1)}
          className="p-3 bg-red-700 text-white rounded-xl"
        >
          prev
        </button>
        <p>page {page + 1} of {totalPages}</p>
        <button
          onClick={() => setPage(page + 1)}
          className="p-3 bg-red-700 text-white rounded-xl"
        >
          Next
        </button>
      </div> 
    </div>
  );
};

export default TenStack;
