import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import { removeFromCart, updateCartQuantity } from "../Store/Reducers/cartReducer";

const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.cart);

  const decreaseProductQuantity = (product) => {
    if (product.quantity > 1) {
      dispatch(updateCartQuantity({ productId: product.id, quantity: product.quantity - 1 }));
    } else {
      dispatch(removeFromCart(product.id));
      toast.error("Removed from cart.", {
        position: "top-right",
        autoClose: 850,
        hideProgressBar: true,
      });
    }
  };

  const increaseProductQuantity = (product) => {
    dispatch(updateCartQuantity({ productId: product.id, quantity: product.quantity + 1 }));
  };

  const getTotalAmount = () => {
    const total = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    return total.toFixed(2);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  if (cart.length === 0) {
    return (
      <div className="text-center py-20 mt-20">
        <h1 className="text-4xl font-semibold mb-4">Oops! No products in the Cart</h1>
        <button
          onClick={() => navigate("/React-Ecommerce/products")}
          className="flex items-center gap-2 mx-auto bg-zinc-800 text-white py-2 mt-6 px-4 rounded hover:bg-zinc-900"
        >
          <FaArrowLeftLong /> Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="md:w-[85%] w-full mx-auto px-2 py-28">
      <h1 className="text-center text-5xl my-2 font-semibold">Cart</h1><hr className="my-10" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-5">
        <div className="md:col-span-2 bg-white shadow rounded-lg p-4">
          <h2 className="text-xl font-bold mb-4">Item List</h2>
          {cart.map((cartItem) => (
            <div key={cartItem.id} className="border-b pb-4 mb-4">
              <div className="flex items-center">
                <img
                  src={cartItem.image}
                  alt={cartItem.title}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="ml-4 flex-1">
                  <h3 className="font-bold">{cartItem.title}</h3>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="flex items-center space-x-5">
                    <button
                      onClick={() => decreaseProductQuantity(cartItem)}
                      className="text-xl font-bold text-gray-600 px-2.5 rounded active:ring active:ring-blue-200"
                    >
                      –
                    </button>
                    <span className="px-4 py-2 text-sm bg-gray-100 rounded">
                      {cartItem.quantity}
                    </span>
                    <button
                      onClick={() => increaseProductQuantity(cartItem)}
                      className="text-xl font-bold text-gray-600 px-2 rounded active:ring active:ring-blue-200"
                    >
                      +
                    </button>
                  </div>
                  <div>
                    <p className="text font-bold">
                      {cartItem.quantity} x ${cartItem.price}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="flex justify-between text-gray-700 mb-2">
            <p>Products ({getTotalItems()})</p>
            <p>${getTotalAmount()}</p>
          </div>
          <div className="flex justify-between text-gray-700 mb-2">
            <p>Shipping</p>
            <p>$30</p>
          </div>
          <div className="flex justify-between text-xl font-bold mb-6">
            <p>Total amount</p>
            <p>${(parseFloat(getTotalAmount()) + 30).toFixed(2)}</p>
          </div>
          <Link to={"/React-Ecommerce/checkout"}>
            <button className="w-full bg-black text-white py-3 rounded hover:bg-gray-800">
              Go to checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
