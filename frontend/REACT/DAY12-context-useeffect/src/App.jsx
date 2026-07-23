import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./component/Navbar";
import ProductCard from "./component/ProductCard";
import CartScreen from "./pages/CartScreen";
import { MyStore } from "./context/MyContext";

const App = () => {
  const [productData, setProductData] = useState([]);

  let { setIsCartOpen, isCartOpen, setCartItems, cartItems } =
    useContext(MyStore);

  const getProductsData = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      setProductData(res.data);
    } catch (error) {
      console.log("error in api", error);
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <Navbar />

      {isCartOpen ? (
        <div className="h-screen">
          <CartScreen />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {productData.map((elem) => {
            let isInCart = cartItems.find((val) => 
              val.id === elem.id
            );
            console.log(isInCart);
            

            return <ProductCard isInCart={isInCart} product={elem} key={elem.id} />;
          })}
        </div>
      )}
    </div>
  );
};

export default App;
