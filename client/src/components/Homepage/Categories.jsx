import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  const categories = [
    { name: 'Electronics', image: 'electronics.png', path: '/electronics' },
    { name: 'Fashion', image: 'fashion.png', path: '/fashion' },
    { name: 'Home & Living', image: 'home.png', path: '/home-living' },
    { name: 'Books', image: 'boks.png', path: '/books' },
  ];

  return (
    <section className="py-8 px-4 bg-gray-100">
      <h2 className="text-2xl font-semibold text-center mb-6">Shop by Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <Link
            to={category.path}
            className="category-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
            key={index}
          >
            <img src={category.image} alt={category.name} className="w-full h-48 object-cover" />
            <h3 className="text-lg font-medium text-center p-4">{category.name}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
