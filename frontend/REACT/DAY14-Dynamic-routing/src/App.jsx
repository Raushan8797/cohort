import React from "react";
import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import AppRout from "./routs/AppRout";

const App = () => {
  return (
    <div className="flex flex-col gap-4">
      <Navbar />

      <AppRout/>

      
    </div>
  );
};

export default App;
