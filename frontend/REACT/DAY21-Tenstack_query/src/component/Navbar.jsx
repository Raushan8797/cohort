import React from "react";
import { NavLink } from "react-router"
import {  LogOut } from 'lucide-react'

const Navbar = () => {
  return (
    <div className="flex justify-between p-4 items-center ">
      <h1>SKYDART</h1>
      <div className="gap-8 text-xl flex items-center  ">
        <NavLink
          className={({ isActive }) => {
            return isActive ? "text-yellow-500" : "";
          }}
          to={"/main"}
          end
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? "text-yellow-500" : "";
          }}
          to={"/main/shop"}
        >
          Shop
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? "text-yellow-500" : "";
          }}
          to={"/main/about"}
        >
          About
        </NavLink>
      </div>
      <div className="flex gap-8 text-xl items-center ">
        <h1>Hey, <strong className="text-yellow-400">Blaezi</strong></h1>
        <button>Cart</button>
        <LogOut className="cursor-pointer" size={18}/>
      </div>
    </div>
  );
};

export default Navbar;
