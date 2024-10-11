import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // To navigate to product detail pages

const Cart = () => {
  // Initial cart state
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Smartphone X', price: 599, quantity: 1, slug: 'smartphone-x' },
    { id: 2, name: 'Designer Handbag', price: 299, quantity: 2, slug: 'designer-handbag' },
  ]);

  // Function to calculate total price
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Function to increase quantity
  const increaseQuantity = (id) => {
    setCartItems(
      cartItems.map(item => 
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Function to decrease quantity
  const decreaseQuantity = (id) => {
    setCartItems(
      cartItems.map(item => 
        item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  // Remove item from cart
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cartItems.length > 0 ? (
        <div>
          <ul className="space-y-4 mb-6">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center bg-white p-4 shadow-md rounded-lg">
                <div>
                  <h2 className="text-xl">
                    {/* Link to product details page */}
                    <Link to={`/products/${item.slug}`} className="text-blue-500 hover:underline">
                      {item.name}
                    </Link>
                  </h2>
                  <p className="text-gray-600">Price: R{item.price}</p>
                  <div className="flex items-center mt-2">
                    <button 
                      onClick={() => decreaseQuantity(item.id)} 
                      className="px-3 py-1 bg-gray-300 text-gray-700 rounded-l hover:bg-gray-400"
                    >
                      -
                    </button>
                    <span className="px-4 py-2 bg-gray-100">{item.quantity}</span>
                    <button 
                      onClick={() => increaseQuantity(item.id)} 
                      className="px-3 py-1 bg-gray-300 text-gray-700 rounded-r hover:bg-gray-400"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex items-center">
                  <button 
                    onClick={() => removeItem(item.id)} 
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {/* Total Amount */}
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold">Total Amount:</h3>
            <p className="text-xl font-bold text-green-500">R{calculateTotal()}</p>
          </div>

          {/* Checkout Button */}
          <div className="text-right">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
              Proceed to Checkout
            </button>
          </div>
        </div>
      ) : (
        <p className="text-gray-500">Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
