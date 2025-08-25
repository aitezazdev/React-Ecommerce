import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../Store/Reducers/cartReducer";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const isProductInCart = cart.some((cartItem) => cartItem.id === product.id);
    setIsInCart(isProductInCart);
  }, [cart, product.id]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success("Added to cart!", {
      position: "top-right",
      autoClose: 850,
      hideProgressBar: true,
    });
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product.id));
    toast.info("Removed from cart.", {
      position: "top-right",
      autoClose: 850,
      hideProgressBar: true,
    });
  };

  return (
    <div
      key={product.id}
      className="w-[350px] bg-white shadow-lg rounded-lg p-2 overflow-hidden border hover:shadow-xl transition duration-300"
    >
      <div className="h-48 overflow-hidden p-2.5">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="px-4 py-2">
        <h2 className="text-lg font-semibold text-gray-800 truncate">
          {product.title}
        </h2>
        <p className="text-gray-600 text-sm mt-1">
          {product.description.slice(0, 70)}...
        </p>
      </div>

      <p className="text-gray-900 text-xl text-center my-2 font-bold">
        ${product.price}
      </p>
      <div className="flex items-center justify-center p-2 gap-4">
        <Link to={`/React-Ecommerce/product-details/${product.id}`}>
          <button className="bg-gray-800 hover:bg-gray-900 text-white text-sm py-2 px-5 font-medium rounded-md transition-all duration-300 ease-in-out transform">
            Buy Now
          </button>
        </Link>
        {isInCart ? (
          <button
            onClick={handleRemoveFromCart}
            className="bg-green-600 hover:bg-green-700 text-white text-sm py-2 px-5 font-medium rounded-md transition-all duration-300 ease-in-out transform"
          >
            In Cart
          </button>
        ) : (
          <button
            onClick={handleAddToCart}
            className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm py-2 px-5 font-medium rounded-md transition-all duration-300 ease-in-out transform"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
