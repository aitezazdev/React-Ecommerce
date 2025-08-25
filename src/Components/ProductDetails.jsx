import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { addToCart } from "../Store/Reducers/cartReducer";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    const product = products.find((product) => product.id === parseInt(id));
    setProductDetails(product);
  }, [id, products]);

  const handleAddToCart = () => {
    if (productDetails) {
      dispatch(addToCart(productDetails));
      toast.success("Added to cart!", {
        position: "top-right",
        autoClose: 850,
        hideProgressBar: true,
      });
    }
  };

  if (!productDetails) {
    return (
      <div className=" bg-gray-50 flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className=" bg-gray-50 flex items-center justify-center p-2 mt-20">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row max-w-4xl w-full">
        <div className="md:w-2/5 p-4">
          <img
            src={productDetails.image}
            alt={productDetails.title}
            className="w-full h-full object-cover"
            style={{ height: "500px" }}
          />
        </div>

        <div className="md:w-3/5 p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {productDetails.title}
          </h1>
          <div className="pt-4">
            <h2 className="text-gray-600 font-medium mb-2">Description:</h2>
            <p className="text-gray-800 leading-relaxed">
              {productDetails.description}
            </p>
          </div>
          <div className="flex justify-center gap-4">
            <button
              onClick={handleAddToCart}
              className="bg-gray-800 hover:bg-gray-900 text-white text-sm py-2 px-5 font-medium rounded-md transition-all duration-300 ease-in-out transform"
            >
              Add To Cart
            </button>
            <button
              onClick={() => navigate("/React-Ecommerce/cart")}
              className="bg-gray-800 hover:bg-gray-900 text-white text-sm py-2 px-5 font-medium rounded-md transition-all duration-300 ease-in-out transform"
            >
              Go To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
