import { useContext, useEffect, useState } from "react";
import { productContext } from "../Context/ProductContext";

const ProductItem = ({ product }) => {
  const { cart, addToCart, removeFromCart } = useContext(productContext);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const isProductInCart = cart.some((cartItem) => cartItem.id === product.id);
    setIsInCart(isProductInCart);
  }, [cart, product.id]);

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product.id);
  };

  return (
    <div
      key={product.id}
      className="bg-white shadow-md rounded-lg overflow-hidden border hover:shadow-lg transition duration-300"
    >
      <div className="h-48 overflow-hidden p-2">
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
          {product.description.slice(0, 50)}...
        </p>
      </div>
      <div className="flex items-center justify-between pl-4 py-2 pr-2">
        <p className="text-blue-500 text-xl font-bold">${product.price}</p>
        {isInCart ? (
          <button
            onClick={handleRemoveFromCart}
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 font-semibold rounded transition"
          >
            In Cart
          </button>
        ) : (
          <button
            onClick={handleAddToCart}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 font-semibold rounded transition"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductItem