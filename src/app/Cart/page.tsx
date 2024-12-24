import Image from "next/image";

function Cart() {
  return (
    <div className="flex flex-wrap md:flex-nowrap p-6 gap-6">
      {/* Left Section: Cart Details (60%) */}
      <div className="w-full md:w-[70%] p-6 rounded-lg">
        {/* Free Delivery Section */}
        <div className="text-left mb-6 bg-gray-100 p-4">
          <h2 className="text-xl font-bold text-gray-800 mb-3">Free Delivery</h2>
          <p className="text-gray-600">
            Applies to orders of ₹ 14,000.00 or more.{' '}
            <a href="#" className="underline text-gray-900">View Details</a>
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">Bag</h2>
        {/* Cart Item 1 */}
        <div className="p-4 bg-white shadow-md rounded-lg mb-4 flex items-start">
          <Image
            src="/g1.png"
            alt="Nike Dri-FIT"
            width={200}
            height={200}
            className="rounded-md object-cover"
          />
          <div className="ml-4 flex flex-col justify-between h-[200px]">
            <div className="flex justify-between items-center text-lg">
              <h3 className="font-semibold text-gray-800">Nike Dri-FIT ADV TechKnit Ultra</h3>
              <span className="ml-16 font-semibold"><p className="text-gray-900 font-medium">MRP: ₹ 3,895.00</p></span>
            </div>
            <div className="-mt-9">
              <p className="text-gray-600 mb-2">Men's Short-Sleeve Running Top</p>
              <p className="text-gray-600 mb-2">Ashen Slate/Cobalt Bliss</p>
              <p className="text-gray-600">Size L &emsp; Quantity 1</p>
            </div>
            <div className="flex space-x-4 mt-2">
              <Image
                src="/Vector.png"
                alt="Heart Icon"
                width={18}
                height={10}
                className="cursor-pointer"
              />
              <Image
                src="/Vector (1).png"
                alt="Delete Icon"
                width={18}
                height={10}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Cart Item 2 - Nike Air Max 97 SE */}
        <div className="p-4 bg-white shadow-md rounded-lg mb-4 flex items-start">
          <Image
            src="/g2.png"
            alt="Nike Air Max 97 SE"
            width={200}
            height={200}
            className="rounded-md object-cover"
          />
          <div className="ml-4 flex flex-col justify-between h-[200px]">
            <div className="flex justify-between items-center text-lg">
              <h3 className="font-semibold text-gray-800">Nike Air Max 97 SE</h3>
              <span className="ml-44 font-semibold"><p className="text-gray-900 font-medium">MRP: ₹ 16,995.00</p></span>
            </div>
            <div className="-mt-9">
              <p className="text-gray-600 mb-2">Men's Shoes</p>
              <p className="text-gray-600 mb-2">Flat Pewter/Light Bone/Black/White</p>
              <p className="text-gray-600">Size 8 &emsp; Quantity 1</p>
            </div>
            <div className="flex space-x-4 mt-2">
              <Image
                src="/Vector.png"
                alt="Heart Icon"
                width={18}
                height={10}
                className="cursor-pointer"
              />
              <Image
                src="/Vector (1).png"
                alt="Delete Icon"
                width={18}
                height={10}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Cart Item 3 - Nike Air Force 1 PLT.AF.ORM */}
        <div className="p-4 bg-white shadow-md rounded-lg mb-4 flex items-start">
          <Image
            src="/shoe3.png"
            alt="Nike Air Force 1 PLT.AF.ORM"
            width={200}
            height={200}
            className="rounded-md object-cover"
          />
          <div className="ml-4 flex flex-col justify-between h-[200px]">
            <div className="flex justify-between items-center text-lg">
              <h3 className="font-semibold text-gray-800">Nike Air Force 1 PLT.AF.ORM</h3>
              <span className="ml-24 font-semibold"><p className="text-gray-900 font-medium">MRP: ₹ 8,695.00</p></span>
            </div>
            <div className="-mt-9">
              <p className="text-gray-600 mb-2">Women's Shoes</p>
              <p className="text-gray-600 mb-2">White</p>
              <p className="text-gray-600">Size 9 &emsp; Quantity 1</p>
            </div>
            <div className="flex space-x-4 mt-2">
              <Image
                src="/Vector.png"
                alt="Heart Icon"
                width={18}
                height={10}
                className="cursor-pointer"
              />
              <Image
                src="/Vector (1).png"
                alt="Delete Icon"
                width={18}
                height={10}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>

      </div>

      {/* Right Section: Summary (40%) */}
      <div className="w-full md:w-[30%] p-6 rounded-lg mt-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Summary</h2>
        <div className="flex justify-between text-gray-800 mb-4">
          <p>Subtotal</p>
          <p>₹ 29,585.00</p>
        </div>
        <div className="flex justify-between text-gray-800 mb-4">
          <p>Estimated Delivery</p>
          <p>₹ 200.00</p>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between text-gray-800 font-semibold text-lg mb-4">
          <p>Total</p>
          <p>₹ 29,785.00</p>
        </div>
        <button className="w-full text-white bg-black p-4 rounded-full font-medium shadow-md">
          <a href="/Order">Member Checkout</a>
        </button>
      </div>
    </div>
  );
}

export default Cart;
