import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  const cart = useSelector((state) => state.cart.cart);

  return (
    <nav className="shadow-md fixed z-50 w-full bg-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-20">
        <div className="text-2xl font-bold">
          <NavLink to="/" className="hover:text-indigo-600">
          ClickNCart
          </NavLink>
        </div>

        <div className="flex space-x-6 text-lg">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-lg ${isActive ? "text-indigo-600" : "hover:text-indigo-700"}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `text-lg ${isActive ? "text-indigo-600" : "hover:text-indigo-700"}`
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-lg ${isActive ? "text-indigo-600" : "hover:text-indigo-700"}`
            }
          >
            Contact
          </NavLink>
        </div>

        <div className="flex space-x-4 items-center text-lg">
          <NavLink
            to="/cart"
            className="flex items-center gap-2.5 bg-zinc-900 hover:bg-zinc-800 text-white font-medium py-2 px-5 rounded-lg transition-all"
          >
            <FaCartShopping />
            <p>
              Cart <span className="tracking-wider">({cart.length})</span>
            </p>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
