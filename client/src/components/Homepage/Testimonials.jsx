import React from 'react';

const Testimonials = () => {
  const reviews = [
    { name: 'John Doe', review: 'Great product and fast delivery!' },
    { name: 'Jane Smith', review: 'Amazing customer service!' },
  ];

  return (
    <section className="py-8 px-4 bg-gray-100">
      <h2 className="text-2xl font-semibold text-center mb-6">What Our Customers Say</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {reviews.map((review, index) => (
          <div className="testimonial bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" key={index}>
            <p className="text-lg italic text-gray-700">"{review.review}"</p>
            <h4 className="mt-4 text-lg font-medium text-right text-gray-900">- {review.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

