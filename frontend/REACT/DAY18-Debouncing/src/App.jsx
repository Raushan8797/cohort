import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [searchData, setSearchData] = useState(null);
  const [productData, setProductData] = useState([]);
  const [scrollY, setScrollY] = useState(null);

  let throttle = false;

  let getProduct = async () => {
    let res = await axios.get("https://fakestoreapi.com/products");
    let arr = res.data;
    setProductData(arr);
  };

  let filterData = () => {
    let result = productData.filter((val) => {
      return val.title.toLowerCase().includes(searchData.toLowerCase());
    });
    setProductData(result);
  };

  // debouncing
  useEffect(() => {
    if (!searchData) return;

    let timeout = setTimeout(() => {
      filterData();
    }, 700);

    return () => clearTimeout(timeout);
  }, [searchData]);

  // thritling

  useEffect(() => {
    let handleScroll = () => {
      if (throttle) return;

      console.log("scroll tringgered");
      throttle = true;
      setScrollY(window.scrollY);

      setTimeout(() => {
        throttle =false
      }, 5000);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <h1>debouncing.....</h1>

      <input
        style={{ padding: "10px 30px" }}
        type="text"
        placeholder="search product.."
        onChange={(e) => setSearchData(e.target.value)}
      />

      {productData.map((val) => {
        return <h1>{val.title}</h1>;
      })}
    </div>
  );
};

export default App;
