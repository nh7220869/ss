import Link from 'next/link';
import React from 'react';

// Product array defined as a local variable
const Product = [
  {
    id: 3,
    img: "/b3.png",
    title: "Nike Air Max 97 SE",
    title2: "Men's Shoes",
    price: "₹ 13 995",
    price2: "MRP : ₹ 1 495.00",
  },
  {
    id: 6,
    img: "/g1.png",
    title: "Nike Air Max Pulse",
    title2: "Women's Shoes",
    price: "₹ 13 995",
    price2: "MRP : ₹ 1 495.00",
  },
  {
    id: 9,
    img: "/g2.png",
    title: "Nike Air Max 97 SE",
    title2: "Men's Shoes",
    price: "₹ 13 995",
    price2: "MRP : ₹ 1 495.00",
  },
  {
    id: 19,
    img: "/shoe5.png",
    title: "Air Jordan 1 Elevate Low",
    title2: "Women's Shoes",
    price: "₹ 11 895",
    price2: "MRP : ₹ 1 495.00",
  },
  {
    id: 22,
    img: "/shoe7.png",
    title: "Nike Dunk Low Retro SE",
    title2: "Men's Shoes",
    price: "₹ 9 695",
    price2: "MRP : ₹ 1 495.00",
  },
  {
    id: 15,
    img: "/shoe1.png",
    title: "Nike Air Force 1 Mid '07",
    title2: "Men's Shoes",
    price: "₹ 10 995",
    price2: "MRP : ₹ 1 495.00",
  },
  {
    id: 17,
    img: "/shoe3.png",
    title: "Nike Air Force 1 PLT.AF.ORM",
    title2: "Women's Shoes",
    price: "₹ 8 995",
    price2: "MRP : ₹ 1 495.00",
  },
  {
    id: 18,
    img: "/shoe4.png",
    title: "Nike Air Force 1 React",
    title2: "Men's Shoes",
    price: "₹ 13 295",
    price2: "MRP : ₹ 1 495.00",
  },
];

const Sale  = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-6">Sale Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
        {Product.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg shadow-md p-4 flex flex-col items-center hover:scale-105 transform transition duration-300"
          >
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-center">{product.title}</h3>
            <p className="text-gray-500 text-center mb-2">{product.title2}</p>
            <p className="text-sm text-gray-500 line-through">{product.price2}</p>
            <p className="text-xl font-bold text-center text-green-600">
              {product.price}
            </p>
            <button className="mt-4 bg-gray-950 text-white py-2 px-4 rounded-full hover:bg-yellow-500 transition">
              <Link href="/Order">
                <span>Add to Cart</span>
              </Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sale;
