import React, { useContext } from "react";
import { Navigate, NavLink, useNavigate } from "react-router";
import { Auth } from "../context/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const {setLoogedUser} = useContext(Auth)
  
  return (
    <div className="border-r border-gray-500 flex flex-col p-3  justify-between ">
      <div className="flex flex-col gap-10">
        <h1 className="text-3xl font-semibold">logo</h1>
        <div className="flex flex-col gap-6 ml-5">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-red-500 border-b border-gray-500"
                : "text-black border-b border-gray-500 "
            }
            to={"/main"}
            end
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-red-500 border-b border-gray-500 "
                : "text-black border-b border-gray-500"
            }
            to={"/main/users"}
          >
            Users
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-red-500 border-b border-gray-500"
                : "text-black border-b border-gray-500"
            }
            to={"/main/product"}
          >
            Product
          </NavLink>
        </div>
      </div>
      <button onClick={ () =>{
        localStorage.removeItem("loogedinUser")
        toast.warn("User Logged out")
      setLoogedUser(null)
      }} className="p-4 bg-blue-700 text-white rounded-2xl cursor-pointer"
      >
        
        Logout
      </button>
    </div>
  );
};

export default Navbar;
