import React from "react";

const Navbar = ({setToggle}) => {
  return (
    <div className="bg-black rounded-2xl p-4 flex items-center justify-between text-white">
      <div> 
        <img className="h-10 rounded-full  " src="https://imgs.search.brave.com/ULlQsrwRIG15k-0O9FNN6-DRpaN-1SwXJ0PiO_Qk4lQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8w/Ny8xOC8yMy8yMy91/c2VyLTI1MTc0MzBf/NjQwLnBuZw" alt="" />
      </div>
      <div className="flex gap-6 font-semibold">
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <button onClick={() => setToggle((prev) =>!prev)} className="p-3 bg-blue-700 text-white cursor-pointer rounded">Create User</button>
    </div>
  );
};

export default Navbar;
