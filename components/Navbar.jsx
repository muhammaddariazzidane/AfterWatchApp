import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full absolute flex items-center justify-between p-5 z-[9999]">
      <h1 className="text-indigo-600 lg:text-3xl font-bold cursor-pointer">AW MOVIES</h1>
      <div>
        <button className="px-6  hover:bg-indigo-600 hover:bg-opacity-90 transition-all duration-300 text-white font-semibold py-2 rounded-lg cursor-pointer">Sign In</button>
      
      </div>
    </div>
  );
};

export default Navbar;
