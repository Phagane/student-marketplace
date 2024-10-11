import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FeaturedProducts = () => {
  const navigate = useNavigate();

  // Sample products list
  const products = [
    { id: 1, name: 'Smartphone X', image: 'Phone.png', price: 'R599' },
    { id: 2, name: 'Designer Handbag', image: 'bag.png', price: 'R299' },
    { id: 3, name: 'Sofa Set', image: 'sofa.png', price: 'R799' },
    { id: 4, name: 'Bluetooth Speaker', image: 'speaker.png', price: 'R99' },
  ];

  // Initialize each product's quantity to 1
  const [quantities, setQuantities] = useState(
    products.reduce((acc, product) => ({ ...acc, [product.id]: 1 }), {})
  );

  // Handle quantity increment
  const handleIncrement = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] + 1,
    }));
  };

  // Handle quantity decrement
  const handleDecrement = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max(prevQuantities[id] - 1, 1), // Prevent going below 1
    }));
  };

  // Navigate to product detail page
  const handleProductClick = (productName) => {
    navigate(`/product/${productName}`);
  };

  return (
    <section className="py-8 px-4 bg-gray-100">
      <h2 className="text-2xl font-semibold text-center mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            className="product-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            key={product.id}
          >
            {/* Product image and name as clickable links */}
            <div
              onClick={() => handleProductClick(product.name)}
              className="cursor-pointer"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-medium mb-2 text-center hover:underline">
                  {product.name}
                </h3>
              </div>
            </div>

            {/* Product Price and Quantity Controls */}
            <div className="p-4">
              <p className="text-xl font-bold text-blue-500 mb-4 text-center">
                {product.price}
              </p>

              {/* Quantity Controls */}
              <div className="flex items-center justify-center space-x-4 mb-4">
                <button
                  onClick={() => handleDecrement(product.id)}
                  className="px-3 py-2 bg-gray-300 text-gray-700 rounded-l-md hover:bg-gray-400 transition-colors"
                >
                  -
                </button>
                <span className="text-lg px-4 py-2 bg-gray-100 rounded-md">{quantities[product.id]}</span>
                <button
                  onClick={() => handleIncrement(product.id)}
                  className="px-3 py-2 bg-gray-300 text-gray-700 rounded-r-md hover:bg-gray-400 transition-colors"
                >
                  +
                </button>
              </div>

              {/* Add to Cart Button */}
              <button
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
                onClick={() =>
                  console.log('Add to Cart:', product.name, 'Quantity:', quantities[product.id])
                }
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

export default FeaturedProducts;
