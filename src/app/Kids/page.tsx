
import Link from "next/link";


function Kids() {
   
      
       const Product: any[] = [
        {
            id: 38,
            img: "/shoe14.png",
            title: "Nike Air Max SYSTM",
            title2: "Older Kids' Shoes",
            price: "MRP : ₹ 6 495.00"
          },
          {
            id: 39,
            img: "/p13.png",
            title: "Nike Outdoor Play",
            title2: "Older Kids' Oversized Woven Jacket",
            price: "MRP : ₹ 3 895.00"
          },
  
        
      ];
      
    
      return (
        <div className="py-10 justify-items-center">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8"> Kid's Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {Product.map(
            (item: { id: number; title: string; img: string; title2: string; price: string }) => (
              <div className="hover:scale-105 transform transition duration-300" key={item.id }>
                <Link
                  href={`/products/${item.id}`}
                  className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="bg-[#F5F5F5] aspect-square group p-0">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full object-cover rounded-t-lg"
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

export default Kids; 