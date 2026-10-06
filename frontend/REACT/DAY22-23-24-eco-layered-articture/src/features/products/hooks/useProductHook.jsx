import { useQuery } from "@tanstack/react-query";
import {
  getAllProductApi,
  getProductbyCat,
  getProductCat,
} from "../api/ProductApi";
import { useEffect, useState } from "react";

export const useAllProduct = () => {
  const [search, setSearch] = useState(null);
  const [debouncesearch, setDebounceSearch] = useState(null);

  useEffect(() => {
    let timeout = setTimeout(() => {
      setDebounceSearch(search);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [search]);

  let { data, isPending, errors } = useQuery({
    queryKey: ["products", debouncesearch],
    queryFn: () => getAllProductApi(debouncesearch),
  });
  console.log("product data", data);

  return {
    data,
    isPending,
    errors,
    search,
    setSearch,
  };
};

export const useAllCat = () => {
  return useQuery({
    queryKey: ["AllCategories"],
    queryFn: getProductCat,
  });
};

export const useProductbyCat = () => {
  const [category, setCategory] = useState(null);

  console.log("ye category hai", category);

  let { data } = useQuery({
    queryKey: ["productByCategories", category],
    queryFn: () => getProductbyCat(category),
  });
  return {
    data,
    category,
    setCategory,
  };
};
