import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import { MyStore } from '../context/MyContext';
import ProductCard from '../component/ProductCard';
import product from './Product';

const Home = () => {

    let {productsData, setProductsData} = useContext(MyStore)


     let getProductData = async () =>{
        try {
            let res = await  axios.get("https://fakestoreapi.com/products")
            setProductsData(res.data)

            
        } catch (error) {
            console.log("error in catch" ,error);
            
            
        }
     }

     useEffect(() => {
       
     getProductData()
       
     },[] )
     
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
   {
    productsData.map((product) =>{
        return <ProductCard key={product.id} product={product}/>
    })
   }
    </div>
  )
}

export default Home
