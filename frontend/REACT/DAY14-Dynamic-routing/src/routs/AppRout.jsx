import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Product from "../pages/Product";
import ProductDetail from "../pages/ProductDetail";
import ProtuctedRouts from "./ProtuctedRouts";

const AppRout = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/about"
          element={
            <ProtuctedRouts>
              <About />
            </ProtuctedRouts>
          }
        ></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/detail/:id" element={<ProductDetail />}></Route>
      </Routes>
    </div>
  );
};

export default AppRout;
