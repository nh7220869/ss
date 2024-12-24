
import Link from "next/link";

function WoMans() {
  const Product: any[] = [
    {
      id: 12,
      img: "/g3.png",
      title: "Nike Air Max 97 SE",
      title2: "Men's Shoes",
      price: "₹ 13 995",
    },
    {
      id: 32,
      img: "/p6.png",
      title: "Nike One Leak Protection: Period",
      title2: "Men's Mid-Rise 18cm (approx.) Biker Shorts",
      price: "MRP : ₹ 3 395.00",
    },
    {
      id: 1,
      img: "/b1.png",
      title: "Nike Air Max Pulse",
      title2: "Women's Shoes",
      price: "₹ 13 995",
    },
    {
      id: 10,
      img: "/g3.png",
      title: "Nike Air Max Pulse",
      title2: "Women's Shoes",
      price: "₹ 13 995",
    },
    {
      id: 17,
      img: "/shoe3.png",
      title: "Nike Air Force 1 PLT.AF.ORM",
      title2: "Women's Shoes",
      price: "₹ 8 995",
    },
    {
      id: 19,
      img: "/shoe5.png",
      title: "Air Jordan 1 Elevate Low",
      title2: "Women's Shoes",
      price: "₹ 11 895",
    },
    {
      id: 25,
      img: "/p1.png",
      title: "Nike Standard Issue",
      title2: "Women's Basketball Jersey",
      price: "MRP : ₹ 2 895.00",
    },
    {
      id: 26,
      img: "/shoe10.png",
      title: "Nike Air Max SC",
      title2: "Women's Shoes",
      price: "₹ 16 695",
    },
    {
      id: 27,
      img: "/shoe9.png",
      title: "Nike Air Force 1 PLT.AF.ORM",
      title2: "Women's Shoes",
      price: "₹ 8 995",
    },
    {
      id: 31,
      img: "/shoe4.png",
      title: "Air Jordan 1 Elevate Low",
      title2: "Women's Shoes",
      price: "₹ 11 895",
    },
    {
      id: 34,
      img: "/p9.png",
      title: "Nike Alate All U",
      title2:
        "Women's Light-Support Lightly Lined U-Neck Printed Sports Bra",
      price: "MRP : ₹ 2 195.00",
    },
    {
      id: 35,
      img: "/p10.png",
      title: "Nike Alate All U",
      title2: "Women's Medium-support Padded Sports Bra Tank",
      price: "MRP : ₹ 3 095.00",
    },
    {
      id: 40,
      img: "/shoe11.png",
      title: "Nike Air Max SC",
      title2: "Women's Shoes",
      price: "MRP : ₹ 5 995.00",
    },
    {
      id: 41,
      img: "/shoe12.png",
      title: "Nike Air Force 1 '07",
      title2: "Women's Shoes",
      price: "MRP : ₹ 8 195.00",
    },
    {
      id: 47,
      img: "/shoe17.png",
      title: "Nike Blazer Low '77 Jumbo",
      title2: "Women's Shoes",
      price: "MRP : ₹ 8 595.00",
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

export default WoMans;
