// src/pages/ProductDetails.js

import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { productName } = useParams();

  // For simplicity, hardcoding the same product data from the FeaturedProducts component.
  // In a real application, you'd fetch this data from a database or API.
  const products = [
    { name: 'Smartphone X', image: '/Phone.png', price: 'R599', description: 'A high-end smartphone with excellent features.' },
    { name: 'Designer Handbag', image: '/bag.png', price: 'R299', description: 'A stylish designer handbag made from premium materials.' },
    { name: 'Sofa Set', image: '/sofa.png', price: 'R799', description: 'A comfortable and modern sofa set perfect for any living room.' },
    { name: 'Bluetooth Speaker', image: '/speaker.png', price: 'R99', description: 'A compact Bluetooth speaker with amazing sound quality.' },
    { name: 'Wireless Headphones', image: '/headphones.png', price: 'R199', description: 'High-quality wireless headphones with excellent sound.' },
    { name: 'Laptop Stand', image: '/stand.png', price: 'R49', description: 'A portable laptop stand to improve ergonomics.' },
    { name: 'Flash Sale: 50% Off', image: '/shirt.png', description: 'Limited time offer on all fashion items. Grab your favorite shirt at half price!', price: 'R150' },
    { name: 'Daily Deal: Buy 1 Get 1 Free', image: '/speaker.png', description: 'Hurry up and get two Bluetooth speakers for the price of one.', price: 'R99' },
  ];

  const product = products.find((p) => p.name === productName);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-details py-8 px-4">
      <div className="flex flex-col md:flex-row items-center">
        <img src={product.image} alt={product.name} className="w-full md:w-1/3 h-auto object-cover mb-4 md:mb-0" />
        <div className="md:ml-8">
          <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
          <p className="text-xl text-blue-500 font-bold mb-4">{product.price}</p>
          <p className="mb-4">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
