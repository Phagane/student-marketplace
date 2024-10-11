import React, { useState } from 'react';

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrease = () => {
    setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1));
  };

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of ${product.name} to cart.`);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-gray-600 text-xl font-bold mt-1">{product.price}</p>
        <div className="flex items-center mt-4">
          <button 
            onClick={handleDecrease} 
            className="bg-gray-300 text-xl font-bold w-10 h-10 rounded-l hover:bg-gray-400 focus:outline-none"
          >
            -
          </button>
          <input 
            type="number" 
            value={quantity} 
            readOnly 
            className="w-12 text-center border-t pl-2 h-10 border-b border-gray-300 focus:outline-none"
          />
          <button 
            onClick={handleIncrease} 
            className="bg-gray-300 text-xl font-bold w-10 h-10 rounded-r hover:bg-gray-400 focus:outline-none"
          >
            +
          </button>
        </div>
        <button 
          onClick={handleAddToCart} 
          className="mt-4 bg-blue-600 text-white py-2 px-4 rounded shadow hover:bg-blue-500 transition-colors duration-200"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;


