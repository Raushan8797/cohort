import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import { getAllProduct } from "./api/ProductApi";
import ProductCard from "./components/ProductCard";

const Infinite = () => {
  let limit = 10;
  let { data, isPending, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["products"],
      queryFn: ({ pageParam }) => getAllProduct(limit, pageParam),
      initialPageParam: 0,
      getNextPageParam: (lastPage, allPage) => {
        let loadedData = allPage.length * limit;
        if (loadedData < lastPage.total) return loadedData;
        return undefined;
      },
    });

  if (isPending) return "loading.........";
  console.log(data);
  let allProducts = data.pages.flatMap((val) => val.products) ?? [];
  return (
    <div className="flex flex-col gap-6 item-center">
      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4">
        {allProducts.map((val) => (
          <ProductCard key={val.id} product={val} />
        ))}
      </div>
      <button onClick={() => fetchNextPage()}>
        {isFetchingNextPage ? "Loading.." : "Load more"}
      </button>
    </div>
  );
};

export default Infinite;
