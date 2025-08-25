import React, { useState } from "react";
import { useSelector } from "react-redux";

const Checkout = () => {
  const cart = useSelector((state) => state.cart.cart);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    cardNumber: "",
    expiryDate: "",
    cvc: "",
  });

  const getTotalItems = () => cart.reduce((total, item) => total + item.quantity, 0);

  const getTotalAmount = () => cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Payment Successful!");
  };

  return (
    <div className="md:w-[85%] w-full mx-auto px-2 py-28">
      <h1 className="text-center text-5xl my-2 text-gray-800 font-semibold">Checkout</h1><hr className="my-10" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-5">
        <div className="md:col-span-2 bg-white shadow rounded-lg p-4">
          <h2 className="text-xl font-bold mb-4">Billing & Payment Details</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300 transition"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300 transition"
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300 transition"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                placeholder="1234 5678 9012 3456"
                className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300 transition"
                maxLength="16"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-6 my-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                <input
                  type="text"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleChange}
                  placeholder="MM/YY"
                  className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300 transition"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">CVC</label>
                <input
                  type="text"
                  name="cvc"
                  value={formData.cvc}
                  onChange={handleChange}
                  placeholder="123"
                  className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300 transition"
                  maxLength="3"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2.5 px-4 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Complete Purchase
            </button>
          </form>
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
        </div>
      </div>
    </div>
  );
};

export default Checkout;
