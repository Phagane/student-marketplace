import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Recommendations = ({ addToCart }) => {
  const navigate = useNavigate();

  const recommendedProducts = [
    { id: 1, name: 'Wireless Headphones', image: 'headphones.png', price: 199 },
    { id: 2, name: 'Laptop Stand', image: 'stand.png', price: 49 },
  ];

  // State to store quantity for each product, initialized to 1 for each
  const [quantities, setQuantities] = useState(
    recommendedProducts.reduce((acc, product) => {
      acc[product.id] = 1; // Initialize with quantity 1 for each product
      return acc;
    }, {})
  );

  // Handle quantity change for each product
  const handleQuantityChange = (productId, change) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: Math.max(1, prevQuantities[productId] + change), // Ensure quantity stays above 1
    }));
  };

  // Navigate to product detail page when product is clicked
  const handleProductClick = (productName) => {
    navigate(`/product/${productName}`);
  };

  return (
    <section className="py-8 px-4 bg-gray-100">
      <h2 className="text-2xl font-semibold text-center mb-6">Recommended for You</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recommendedProducts.map((product) => (
          <div
            className="recommendation-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            key={product.id}
          >
            {/* Product image is clickable */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover cursor-pointer"
              onClick={() => handleProductClick(product.name)}
            />
            <div className="p-4">
              <h3 className="text-lg font-medium mb-2">{product.name}</h3>
              <p className="text-xl font-bold text-blue-500">R{product.price}</p>

              {/* Quantity Controls */}
              <div className="flex justify-center items-center mt-2">
                <button
                  className="px-3 py-1 bg-gray-300 text-gray-700 rounded-l hover:bg-gray-400"
                  onClick={() => handleQuantityChange(product.id, -1)}
                >
                  -
                </button>
                <span className="px-4 py-2 bg-gray-100">{quantities[product.id]}</span>
                <button
                  className="px-3 py-1 bg-gray-300 text-gray-700 rounded-r hover:bg-gray-400"
                  onClick={() => handleQuantityChange(product.id, 1)}
                >
                  +
                </button>
              </div>

              {/* Add to Cart Button */}
              <button
                className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={() => addToCart({ ...product, quantity: quantities[product.id] })}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Recommendations;
