import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";



const Navbar = () => {

let {setIsCartOpen} = useContext (MyStore)

  return (
    <div className=" bg-black rounded-2xl p-5 flex items-center justify-between text-white">
      <div>Logo</div>

      <div className="flex gap-10 text-xl">
        <p onClick={() => setIsCartOpen(false)}  className="  hover:text-2xl hover:text-red-600 cursor-pointer">
          Home
        </p>
        <p onClick={() => setIsCartOpen(true)} className="cursor-pointer hover:text-2xl hover:text-red-600">
          Cart
        </p>
      </div>

      <button>Login</button>
    </div>
  );
};

export default Navbar;
