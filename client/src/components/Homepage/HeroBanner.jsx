import React from 'react';

const HeroBanner = () => {
  return (
    <section className="relative w-full h-64 overflow-hidden">
      <div className="absolute inset-0 flex transition-transform duration-500 ease-in-out transform hover:scale-105">
        <img src="s-zoom.png" alt="Promotion 1" className="w-1/2 h-auto object-cover" />
        <img src="keyboard.png" alt="Promotion 2" className="w-1/2 h-auto object-cover" />
        <img src="Phone.png" alt="Promotion 3" className="w-1/2 h-auto object-cover" />
      </div>
    </section>
  );
};

export default HeroBanner;
