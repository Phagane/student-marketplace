// src/components/CategoryPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';

const CategoryPage = () => {
  const { categoryName } = useParams();

  // Sample product data based on category
  const products = {
    electronics: [
      { name: 'Smartphone', image: 'smartphone.png', price: '$599' },
      { name: 'Laptop', image: 'laptop.png', price: '$999' },
    ],
    fashion: [
      { name: 'T-Shirt', image: 'tshirt.png', price: '$29' },
      { name: 'Jeans', image: 'jeans.png', price: '$49' },
    ],
    'home-living': [
      { name: 'Sofa', image: 'sofa.png', price: '$799' },
      { name: 'Dining Table', image: 'table.png', price: '$499' },
    ],
    books: [
      { name: 'React Book', image: 'react-book.png', price: '$19' },
      { name: 'JavaScript Book', image: 'js-book.png', price: '$29' },
    ],
  };

  const currentProducts = products[categoryName.toLowerCase()] || [];

  return (
    <div className="p-8">
      <h2 className="text-3xl font-semibold mb-4">{categoryName}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;

