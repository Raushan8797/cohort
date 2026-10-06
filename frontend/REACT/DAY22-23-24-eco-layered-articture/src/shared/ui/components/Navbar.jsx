import React from "react";
import { NavLink } from "react-router";
import { Box, ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex items-center gap-5 justify-between py-4 px-10 bg-blue-400 rounded-3xl">
      <h1>LOGO</h1>
      <div className="flex items-center gap-10 text-xl">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-white"
          }
          to={"/main"}
          end
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-white"
          }
          to={"/main/product"}
        >
          Shop
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-white"
          }
          to={"/main/about"}
        >
          About
        </NavLink>
      </div>
      <div className="flex items-center gap-6">
        <NavLink to={"/main/cart"}>
          <ShoppingCart />
        </NavLink>
        <NavLink to={"/main/order"}>
          <Box />
        </NavLink>
        <button className="py-2 px-5 text-xl rounded cursor-pointer text-white bg-red-700 hover:bg-red-500 ">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
