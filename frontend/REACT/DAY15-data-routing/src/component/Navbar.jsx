import React, { useContext } from "react";
import { NavLink } from "react-router";




const Navbar = () => {


  return (
    <div className=" bg-black rounded-2xl p-5 flex items-center justify-between text-white">
      <div>Logo</div>

      <div className="flex gap-10 text-xl">
       <NavLink to={"/"}>Home</NavLink>
       <NavLink to={"/about"}>About</NavLink>
       <NavLink to={"/services"}>Product</NavLink>
      </div>

      <button>Login</button>
    </div>
  );
};

export default Navbar;
