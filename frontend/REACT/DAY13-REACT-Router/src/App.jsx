import React, { useState } from "react";
import { NavLink, Route,Routes } from "react-router";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";

const App = () => {
  const [toggle, setToggle] = useState("home");
  return (
    <div className="h-screen p-2">
      <Navbar/>
      <AppRoutes/>
    </div>
  );
};

export default App;
