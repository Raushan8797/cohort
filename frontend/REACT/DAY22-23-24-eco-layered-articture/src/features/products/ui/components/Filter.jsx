import React from "react";
import { useAllCat } from "../../hooks/useProductHook";

const Filter = ({search, setSearch, category , setCategory}) => {
  let { data, isPending, error,  } = useAllCat();
  console.log("all cat ", data);

  if (isPending) return <h1>Loading..</h1>;

  return (
    <div className="mb-8 flex w-full items-center justify-between gap-4">
      {/* Search Bar */}
      <div className="flex-1">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search products..."
          className="w-full rounded-xl border border-gray-700 bg-gray-900 px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-white"
        />
      </div>

      {/* Category Select */}
      <div className="w-52">
        <select
          value={category}
          onChange={(e) =>setCategory(e.target.value)}
          className="w-full rounded-xl border border-gray-700 bg-gray-900 px-4 py-3 text-white outline-none focus:border-white"
        >
          <option value="all">All Categories</option>

          {data?.map((item) => (
            <option key={item.slug} value={item.slug}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filter;
