import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router'
import { MyStore } from '../context/MyContext';
import { Star } from "lucide-react";

const ProductDetail = () => {
    let { id } = useParams();
    let {singleProductData, setSingleProductData} =useContext(MyStore)
    
    let getSingleProduct = async () =>{
        try {
            let respo = await axios.get(`https://fakestoreapi.com/products/${id}`)
            setSingleProductData(respo.data)
        } catch (error) {
            console.log("the error is",error);
            
            
        }

    }
    useEffect(() => {
    getSingleProduct()
    }, [])
    
  return (
     <div className="h-fit bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-xl grid md:grid-cols-2 gap-10 p-8">
        
        
        <div className="flex items-center justify-center bg-gray-50 rounded-xl p-10">
          <img
            src={singleProductData.image}
            alt={singleProductData.title}
            className="h-96 object-contain hover:scale-105 transition duration-300"
          />
        </div>

        
        <div className="flex flex-col justify-center">
          <span className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full w-fit capitalize">
            {singleProductData.category}
          </span>

          <h1 className="text-3xl font-bold mt-4">
            {singleProductData.title}
          </h1>

 
          <h2 className="text-4xl font-bold text-green-600 mt-5">
            ${singleProductData.price}
          </h2>

          <p className="text-gray-600 mt-5 leading-7">
            {singleProductData.description}
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition">
              Add to Cart
            </button>

            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
