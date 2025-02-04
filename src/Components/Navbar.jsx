import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaCartShopping } from "react-icons/fa6";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const cart = useSelector((state) => state.cart.cart);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="shadow-md fixed z-50 w-full bg-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-20">
        <div className="text-2xl font-bold">
          <NavLink to="/React-Ecommerce" className="hover:text-indigo-600">
            ClickNCart
          </NavLink>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <HiX size={24} /> : <HiOutlineMenuAlt3 size={24} />}
        </button>

        <div
          className={`
          fixed md:relative top-[65px] md:top-0 right-0 h-screen md:h-auto
          bg-white md:bg-transparent shadow-lg md:shadow-none
          p-4 md:p-0 w-2/3 md:w-auto
          flex flex-col md:flex-row items-center md:items-center gap-4 md:gap-6
          transform transition-transform duration-300 md:transform-none
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"} md:translate-x-0
        `}>
          <div className="flex flex-col md:flex-row items-center w-full md:w-auto space-y-4 md:space-y-0 md:space-x-6 text-lg">
            <NavLink
              to="/React-Ecommerce" end
              className={({ isActive }) =>
                `text-lg w-full md:w-auto text-center ${
                  isActive ? "text-indigo-600" : "hover:text-indigo-700"
                }`
              }
              onClick={() => setIsMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink
              to="/React-Ecommerce/products"
              className={({ isActive }) =>
                `text-lg w-full md:w-auto text-center ${
                  isActive ? "text-indigo-600" : "hover:text-indigo-700"
                }`
              }
              onClick={() => setIsMenuOpen(false)}>
              Products
            </NavLink>
            <NavLink
              to="/React-Ecommerce/contact"
              className={({ isActive }) =>
                `text-lg w-full md:w-auto text-center ${
                  isActive ? "text-indigo-600" : "hover:text-indigo-700"
                }`
              }
              onClick={() => setIsMenuOpen(false)}>
              Contact
            </NavLink>
          </div>

          <NavLink
            to="/React-Ecommerce/cart"
            className="flex items-center justify-center w-2/3 md:w-auto gap-2.5 bg-zinc-900 hover:bg-zinc-800 text-white font-medium py-2 px-5 rounded-lg transition-all"
            onClick={() => setIsMenuOpen(false)}>
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
