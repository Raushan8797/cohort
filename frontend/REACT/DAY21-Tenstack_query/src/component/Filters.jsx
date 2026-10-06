import React from "react";
import { useProductApi } from "../hooks/ProductHooks";

const Filters = () => {
    let {filterProducts} = useProductApi()
  return (
    <div className="p-3 flex gap-6 rounded border border-gray-500">
      <div className="flex gap-8 w-full ">
        <input
        onChange={(e) => filterProducts(e.target.value)}
          className="p-2 outline-0  w-full border rounded"
          type="text"
          placeholder="Search Product....."
        />
        <button className="p-2  text-xl  bg-white text-black rounded border-0">
          Search
        </button>
      </div>
      <div className=" ">
        <span>Select Category</span>
        <select className="p-2 bg-white text-black rounded border-0 outline-0">
          <option value="groceries">Groceries</option>
          <option value="beauty">Beauty</option>
          <option value="furniture">Furniture</option>
          <option value="fragrance">Fragrance</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
