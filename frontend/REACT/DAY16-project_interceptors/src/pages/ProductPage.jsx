
import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { axiosInstance } from "../config/axiosinstance";

const ProductPage = () => {
  const [productData, setProductData] = useState([]);
  const [productLoading, setProductLoading] = useState(true)

  let getProductData = async () => {
    try {
      let respon = await axiosInstance.get('/products')
      setProductData(respon.data)
      setProductLoading(false)
      console.log(respon.data);
    } catch (error) {
      console.log("error in product api", error);
    }

    
  }

   useEffect(() => {
    getProductData();
  }, []);

  if(productLoading) return <h1 className="text-7xl text-fuchsia-900 flex justify-center mt-90" >Loading Product......</h1>
  return <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {
        productData.map((val) =>
            <ProductCard key={val.id} product={val}/>
        )
    }
  </div>;
};

export default ProductPage;
