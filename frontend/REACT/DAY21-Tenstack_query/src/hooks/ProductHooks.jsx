import { useQuery } from "@tanstack/react-query";
import { getProductDataApi } from "../api/Productapi";
import { useState } from "react";

export const useProductApi = () => {
    const [filteredProducts, setFilteredProducts] = useState(null)
  let { data, isPending, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProductDataApi,
    staleTime: 6000,
  });
  let filterProducts = (seacrhPharams) => {
    let filteredData = data.filter((val) =>
      val.title.toLowerCase().includes(seacrhPharams.toLowerCase()),
    );
    if (filteredData){
        setFilteredProducts(filteredData)

    }
  };
  useEffect(() => {
   setFilteredProducts(data)
  }, [])
  
  return {
    isPending,
    data,
    error,
    filterProducts,
    filteredProducts,
  };
};
