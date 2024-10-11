import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Deals = () => {
  const navigate = useNavigate();

  // Deals data
  const deals = [
    { id: 1, name: 'Flash Sale: 50% Off', image: 'shirt.png', description: 'Limited time offer', price: 'R150' },
    { id: 2, name: 'Daily Deal: Buy 1 Get 1 Free', image: 'speaker.png', description: 'Hurry up!', price: 'R300' },
  ];

  // State to manage quantity of each deal
  const [quantities, setQuantities] = useState(
    deals.reduce((acc, deal) => ({ ...acc, [deal.id]: 1 }), {})
  );

  // Handle quantity increment
  const handleIncrement = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] + 1,
    }));
  };

  // Handle quantity decrement (minimum 1)
  const handleDecrement = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max(prevQuantities[id] - 1, 1),
    }));
  };

  // Navigate to deal details
  const handleDealClick = (dealName) => {
    navigate(`/product/${dealName}`);
  };

  return (
    <section className="py-8 px-4 bg-gray-100">
      <h2 className="text-2xl font-semibold text-center mb-6">Deals & Promotions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {deals.map((deal) => (
          <div
            className="deal-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            key={deal.id}
          >
            <div onClick={() => handleDealClick(deal.name)} className="cursor-pointer">
              <img src={deal.image} alt={deal.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-medium mb-2 text-center hover:underline">
                  {deal.name}
                </h3>
                <p className="text-gray-600 text-center">{deal.description}</p>
                <p className="text-xl font-bold text-blue-500 text-center mt-2">{deal.price}</p>
              </div>
            </div>

            {/* Quantity Controls */}
            <div className="p-4">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <button
                  onClick={() => handleDecrement(deal.id)}
                  className="px-3 py-2 bg-gray-300 text-gray-700 rounded-l-md hover:bg-gray-400 transition-colors"
                >
                  -
                </button>
                <span className="text-lg px-4 py-2 bg-gray-100 rounded-md">{quantities[deal.id]}</span>
                <button
                  onClick={() => handleIncrement(deal.id)}
                  className="px-3 py-2 bg-gray-300 text-gray-700 rounded-r-md hover:bg-gray-400 transition-colors"
                >
                  +
                </button>
              </div>

              {/* Add to Cart Button */}
              <button
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
                onClick={() =>
                  console.log('Add to Cart:', deal.name, 'Quantity:', quantities[deal.id])
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

export default Deals;
