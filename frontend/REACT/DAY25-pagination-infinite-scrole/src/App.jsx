import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./components/ProductCard";

const App = () => {
  let limit = 10
  const [products, setProducts] = useState(null);
  const [page, setPage] = useState(0);
  console.log(products);

  const getAllProduct = async () => {
    try {
      let res = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${page * limit}`);
      setProducts(res.data);
    } catch (error) {
      console.log("error in api", error);
    }
  };

  let totalPages =Math.ceil( products?.total / limit)
  console.log(totalPages);
  

  useEffect(() => {
    getAllProduct();
  }, [page]);

  return (
    <div className="flex flex-col gap-6 item-center">
      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4">
        {products?.products.map((val) => {
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

export default App;
