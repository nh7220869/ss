
import Link from "next/link";


function Man() {
   
      
       const Product: any[] = [
        {
          id: 2,
          img: "/b2.png",
          title: "Nike Air Max Pulse",
          title2: "Men's Shoes",
          price: "₹ 13 995"
        },
        {
          id: 3,
          img: "/b3.png",
          title: "Nike Air Max 97 SE",
          title2: "Men's Shoes",
          price: "₹ 13 995"
        },
        {
          id: 4,
          img: "/b3.png",
          title: "Nike Air Max 97 SE",
          title2: "Men's Shoes",
          price: "₹ 13 995"
        },
        {
          id: 5,
          img: "/b2.png",
          title: "Nike Air Max Pulse",
          title2: "Men's Shoes",
          price: "₹ 13 995"
        },
    
        {
          id: 7,
          img: "/g2.png",
          title: "Nike Air Max Pulse",
          title2: "Men's Shoes",
          price: "₹ 13 995"
        },
        {
          id: 8,
          img: "/g1.png",
          title: "Nike Air Max 97 SE",
          title2: "Men's Shoes",
          price: "₹ 13 995"
        },
        {
          id: 9,
          img: "/g2.png",
          title: "Nike Air Max 97 SE",
          title2: "Men's Shoes",
          price: "₹ 13 995"
        },
     
        {
          id: 11,
          img: "/g4.png",
          title: "Nike Air Max Pulse",
          title2: "Men's Shoes",
          price: "₹ 13 995"
        },
        // {
        //   id: 12,
        //   img: "/g3.png",
        //   title: "Nike Air Max 97 SE",
        //   title2: "Men's Shoes",
        //   price: "₹ 13 995"
        // },
        {
          id: 13,
          img: "/g4.png",
          title: "Nike Air Max 97 SE",
          title2: "Men's Shoes",
          price: "₹ 13 995"
        },
        {
          id: 14,
          img: "/g4.png",
          title: "Nike Air Max Pulse",
          title2: "Men's Shoes",
          price: "₹ 13 995"
        },
      
        {
          id: 15,
          img: "/shoe1.png",
          title: "Nike Air Force 1 Mid '07",
          title2: "Men's Shoes",
          price: "₹ 10 995"
        },
        {
          id: 16,
          img: "/shoe2.png",
          title: "Nike Court Vision Low Next Nature",
          title2: "Men's Shoes",
          price: "₹ 4 995"
        },
        {
          id: 18,
          img: "/shoe4.png",
          title: "Nike Air Force 1 React",
          title2: "Men's Shoes",
          price: "₹ 13 295"
        },
        {
          id: 20,
          img: "/shoe7.png",
          title: "Nike Court Vision Low",
          title2: "Men's Shoes",
          price: "₹ 5 695"
        },
        {
          id: 22,
          img: "/shoe7.png",
          title: "Nike Dunk Low Retro SE",
          title2: "Men's Shoes",
          price: "₹ 9 695"
        },
        {
          id: 23,
          img: "/shoe8.png",
          title: "Nike Air Max SC",
          title2: "Men's Shoes",
          price: "₹ 12 695"
        },
        {
          id: 24,
          img: "/shoe9.png",
          title: "Nike Dunk Low Retro",
          title2: "Men's Shoes",
          price: "₹ 7 695"
        },
        {
          id: 28,
          img: "/shoe5.png",
          title: "Nike Air Force 1 React",
          title2: "Men's Shoes",
          price: "₹ 13 295"
        },
        {
          id: 29,
          img: "/p2.png",
          title: "Nike Dunk Low Retro SE",
          title2: "Men's Shoes",
          price: "MRP : ₹ 9 695.00"
        },
        // {
        //   id: 32,
        //   img: "/p6.png",
        //   title: "Nike One Leak Protection: Period",
        //   title2: "Men's Mid-Rise 18cm (approx.) Biker Shorts",
        //   price: "MRP : ₹ 3 395.00"
        // },
        {
          id: 33,
          img: "/p8.png",
          title: "Nike Dri-FIT UV Miler",
          title2: "Men's Short-Sleeve Running Top",
          price: "MRP : ₹ 1 695.00"
        },
        {
          id: 36,
          img: "/p11.png",
          title: "Nike Dri-FIT Run Division Rise 365",
          title2: "Men's Running Tank",
          price: "MRP : ₹ 3 495.00"
        },
        {
          id: 37,
          img: "/p12.png",
          title: "Nike Dri-FIT Challenger",
          title2: "Men's 18cm (approx.) 2-in-1 Versatile Shorts",
          price: "MRP : ₹ 2 495.00"
        },
        {
          id: 42,
          img: "/shoe13.png",
          title: "Nike Court Vision Low",
          title2: "Men's Shoes",
          price: "MRP : ₹ 5 695.00"
        },
        {
          id: 43,
          img: "/shoe15.png",
          title: "Nike SB Zoom Janoski OG+",
          title2: " Shoes",
          price: "MRP : ₹ 8 595.00"
        },
        {
          id: 45,
          img: "/p5.png",
          title: "Nike Dri-FIT Ready",
          title2: "Men's Short-Sleeve Fitness Top",
          price: "MRP : ₹ 2 495.00"
        },
        {
          id: 46,
          img: "/shoe16.png",
          title: "Jordan Series ES",
          title2: "Men's Shoes",
          price: "MRP : ₹ 7 495.00"
        },
        {
          id: 48,
          img: "/shoe1.png",
          title: "Nike SB Force 58",
          title2: "Skate Shoe",
          price: "MRP : ₹ 5 995.00"
        },
      ];
      
    
      return (
        <div className="py-10">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Products List</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
          {Product.map(
            (item: { id: number; title: string; img: string; title2: string; price: string }) => (
              <div className="hover:scale-105 transform transition duration-300" key={item.id}>
                <Link
                  href={`/products/${item.id}`}
                  className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="bg-[#F5F5F5] aspect-square group p-0">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full  object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="mx-2 mt-2">
                    <h4 className="font-semibold text-[#9E3500] text-sm">Just In</h4>
                    <h1 className="font-semibold text-sm mt-2">{item.title}</h1>
                    <h3 className="text-sm text-[#757575]">{item.title2}</h3>
                    <h4 className="text-sm text-[#757575]">1 Colour</h4>
                    <h2 className="font-medium text-sm mt-2">MRP : {item.price}</h2>
                  </div>
                </Link>
              </div>
            )
          )}
        </div>
      </div>
      
  
        
      );
    } 

export default Man;