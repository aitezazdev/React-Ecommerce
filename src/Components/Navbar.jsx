import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="shadow-md fixed z-50 w-full bg-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-20">
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
