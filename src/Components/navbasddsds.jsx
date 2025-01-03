import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaCartShopping } from "react-icons/fa6";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const cart = useSelector((state) => state.cart.cart);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className=" shadow-md md:fixed z-50 md:w-full bg-green-500">
      <div className="md:mx-auto md:flex md:justify-between md:items-center md:py-4 md:px-20">

        <div className="text-2xl font-bold text-center p-2">
          <NavLink to="/" className="hover:text-indigo-600">
            ClickNCart
          </NavLink>
        </div>

        <div className="md:hidden flex items-center space-x-4 absolute right-4 top-4">
          <button
            className={`text-2xl font-bold ${
              isMenuOpen? "text-indigo-600" : "hover:text-indigo-700"
            } cursor-pointer`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <HiOutlineMenuAlt3 />
          </button>
        </div>

        <div className="flex flex-col justify-center items-center space-y-4 my-5 md:flex md:space-x-6 md:text-lg">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-lg ${
                isActive ? "text-indigo-600" : "hover:text-indigo-700"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `text-lg ${
                isActive ? "text-indigo-600" : "hover:text-indigo-700"
              }`
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-lg ${
                isActive ? "text-indigo-600" : "hover:text-indigo-700"
              }`
            }
          >
            Contact
          </NavLink>
        </div>

        <div className="w-32 mx-auto md:flex md:space-x-4 md:items-center md:text-lg">
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
