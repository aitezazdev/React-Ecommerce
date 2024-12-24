import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="shadow-md fixed z-50 w-full bg-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold">
          <NavLink to="/" className="hover:text-blue-400">
            MyShop
          </NavLink>
        </div>

        <div className="flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-lg ${
                isActive
                  ? "text-blue-400"
                  : "hover:text-blue-300"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `text-lg ${
                isActive
                  ? "text-blue-400"
                  : "hover:text-blue-300"
              }`
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-lg ${
                isActive
                  ? "text-blue-400"
                  : "hover:text-blue-300"
              }`
            }
          >
            Contact
          </NavLink>
        </div>

        <div className="flex space-x-4 items-center">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="bg-zinc-300 rounded-l-lg py-2 px-4 w-64 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-400 placeholder:text-gray-950"
            />
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-r-lg transition-all"
              onClick={() => console.log("Search triggered")}
            >
              Search
            </button>
          </div>

          <NavLink
            to="/cart"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-8 rounded-lg transition-all"
          >
            Cart
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
