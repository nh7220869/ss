import Link from 'next/link';
import React from 'react';

const SNKRS = () => {
  return (
    <div className="bg-gray-50 py-16">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-gray-800">Step Up Your Sneaker Game</h2>
        <p className="text-lg text-gray-500 mt-4">Explore the latest releases and exclusive styles</p>
      </div>

      {/* Product Grid Section */}
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        
        {/* Product 1 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300">
          <img src="/shoe1.png" alt="Nike Air Max" className="w-full h-64 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-800">Nike Air Max 2024</h3>
            <p className="text-xl text-gray-600 mt-2">₹8,500</p>
            <button className="w-full bg-black text-white py-3 mt-4 rounded-lg hover:bg-yellow-500 transition-colors duration-300">
              <Link href={'/Order'}>
              Add to Cart</Link>
            </button>
          </div>
        </div>

        {/* Product 2 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300">
          <img src="/shoe2.png" alt="Adidas Ultraboost" className="w-full h-64 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-800">Adidas Ultraboost</h3>
            <p className="text-xl text-gray-600 mt-2">₹12,999</p>
            <button className="w-full bg-black text-white py-3 mt-4 rounded-lg hover:bg-yellow-500 transition-colors duration-300">
              <Link href={'/Order'}>
              Add to Cart</Link>
            </button>
          </div>
        </div>

        {/* Product 3 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300">
          <img src="/shoe3.png" alt="Puma RS-X" className="w-full h-64 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-800">Puma RS-X</h3>
            <p className="text-xl text-gray-600 mt-2">₹7,799</p>
            <button className="w-full bg-black text-white py-3 mt-4 rounded-lg hover:bg-yellow-500 transition-colors duration-300">
              <Link href={'/Order'}>
              Add to Cart</Link>
            </button>
          </div>
        </div>

        {/* Product 4 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300">
          <img src="/shoe4.png" alt="Reebok Classic" className="w-full h-64 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-800">Reebok Classic Leather</h3>
            <p className="text-xl text-gray-600 mt-2">₹6,250</p>
            <button className="w-full bg-black text-white py-3 mt-4 rounded-lg hover:bg-yellow-500 transition-colors duration-300">
              <Link href={'/Order'}>
              Add to Cart</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SNKRS;
