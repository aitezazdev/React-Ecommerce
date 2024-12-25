import { useContext } from "react";
import { productContext } from "../Context/ProductContext";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cart, removeFromCart, updateCartQuantity } = useContext(productContext);
  const navigate = useNavigate();

  const decreaseProductQuantity = (product) => {
    if (product.quantity > 1) {
      updateCartQuantity(product.id, product.quantity - 1);
    } else {
      removeFromCart(product.id);
    }
  };

  const increaseProductQuantity = (product) => {
    updateCartQuantity(product.id, product.quantity + 1);
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
        <h1 className="text-4xl font-semibold mb-4">Oops! No products in the cart</h1>
        <button
          onClick={() => navigate("/products")}
          className="bg-zinc-800 text-white py-2 mt-4 px-4 rounded hover:bg-zinc-900"
        >
          Start Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="md:w-[85%] w-full mx-auto px-2 py-20">
      <h1 className="text-center text-4xl my-2 text-semibold">Checkout</h1>
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
                      className="text-xl font-bold text-gray-600"
                    >
                      -
                    </button>
                    <span className="px-4 py-2 text-sm bg-gray-100 rounded">
                      {cartItem.quantity}
                    </span>
                    <button
                      onClick={() => increaseProductQuantity(cartItem)}
                      className="text-xl font-bold text-gray-600"
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
          <button className="w-full bg-black text-white py-3 rounded hover:bg-gray-800">
            Go to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
