import React from "react";
import { useContext } from "react";
import { MyStore } from "../context/MyContext";

const ProductCard = ({ product, isInCart }) => {
  let { setCartItems, setIsCartOpen , incrementQuantity, decrementQuantity} = useContext(MyStore);
  const addToCart = () => {
    setCartItems((prev) => [...prev, {...product , quantity:1}]);
    alert("Product added into cart");
  };

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group">
      {/* Image */}
      <div className="h-60 bg-gray-100 flex items-center justify-center p-5 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3">
        {/* Category */}
        <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full w-fit capitalize">
          {product.category}
        </span>
        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
          {product.title}
        </h2>
        {/* Description */}
        <p className="text-sm text-gray-500 line-clamp-2">
          {product.description}
        </p>
        {/* Rating */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
              ⭐ {product.rating.rate}
            </span>

            <span className="text-gray-500 text-sm">
              ({product.rating.count})
            </span>
          </div>

          <span className="text-2xl font-bold text-blue-600">
            ${product.price}
          </span>
        </div>
        
        {
          isInCart ?
        <button className="w-full bg-gray-500 flex items-center justify-center gap-5 rounded-xl">
          <span onClick={() => decrementQuantity(product.id)} className="text-4xl">-</span>
          <span className="text-5xl" >{isInCart.quantity}</span>
          <span onClick={() => incrementQuantity(product.id)} className="text-4xl" >+</span>
        </button>
        :
        <button
          onClick={addToCart}
          className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl font-medium transition"
        >
          Add to Cart
        </button>
        }

      </div>
    </div>
  );
};

export default ProductCard;
