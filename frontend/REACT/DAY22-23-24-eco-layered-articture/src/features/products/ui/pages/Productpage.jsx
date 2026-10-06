import React from "react";
import { useAllProduct, useProductbyCat } from "../../hooks/useProductHook";
import ProductCard from "../components/ProductCard";
import Filter from "../components/Filter";

const Productpage = () => {
  let { data, isPending, errors, search, setSearch } = useAllProduct();

  let { data: prductBycat, category, setCategory } = useProductbyCat();
  console.log("product by category", prductBycat);

  if (isPending) return <h1>Loading Products........</h1>;
  return (
    <div className="p-6">
      <Filter
        category={category}
        setCategory={setCategory}
        search={search}
        setSearch={setSearch}
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {prductBycat?.products.length
          ? prductBycat?.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          : data?.products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
};

export default Productpage;
