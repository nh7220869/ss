import Image from "next/image";

function Cart() {
  return (
    <div className="flex flex-wrap md:flex-nowrap p-20 gap-6">
      {/* Left Section: Updated Content (60%) */}
      <div className="w-full md:w-[60%] p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">How would you like to get your order?</h2> 
        <p className="text-gray-600 mb-6">
          Customs regulation for India require a copy of the recipient's KYC. The address on the KYC needs to match the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and used solely for the purpose of clearing customs (including sharing it with customs officials) for all orders and returns. If your KYC does not match your shipping address, please click the link for more information. 
          <a href="#" className="underline text-gray-900">Learn More</a>
        </p>
        
        {/* Rectangle Image with "Deliver It" */}
        <Image 
  src="/hori.png" 
  alt="Hori Image"
  width={720}  
  height={24}  
  className="h-24 w-[15cm]"
/>


        {/* Form for Name and Address */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Enter your name and address:</h2>
          <form className="space-y-4">
  {/* Name and Address Fields */}
  <div className="flex flex-col">
    <label htmlFor="name" className="text-gray-800 mb-2 font-semibold"></label>
    <input 
      type="text" 
      id="name" 
      name="name" 
      placeholder="First Name "
      className="p-2 border border-gray-300 rounded-md"
    />
  </div>
  <div className="flex flex-col">
    <label htmlFor="name" className="text-gray-600 mb-2"></label>
    <input 
      type="text" 
      id="name" 
      name="name" 
      placeholder="Last Name"
      className="p-2 border border-gray-300 rounded-md"
    />
  </div>

  <div className="flex flex-col">
    <label htmlFor="address" className="text-gray-600 mb-2"></label>
    <input 
      type="text" 
      id="address" 
      name="address" 
      placeholder="Address Line 1"
      className="p-2 border border-gray-300 rounded-md"
    />
    <p  className="ml-2 text-gray-400 mt-2">We do not ship to P.O. boxes</p>
  </div>
  <div className="flex flex-col">
    <label htmlFor="address" className="text-gray-400 mb-2"></label>
    <input 
      type="text" 
      id="address" 
      name="address" 
      placeholder="Address Line 2"
      className="p-2 border border-gray-300 rounded-md"
    />
  </div>
  <div className="flex flex-col">
    <label htmlFor="address" className="text-gray-400 mb-2"></label>
    <input 
      type="text" 
      id="address" 
      name="address" 
      placeholder="Address Line 3"
      className="p-2 border border-gray-300 rounded-md"
    />
  </div>

  {/* City and Zip Code Fields in 2 Columns */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div className="flex flex-col">
    <label htmlFor="city" className="text-gray-600 mb-2"></label>
    <input 
      type="text" 
      id="city" 
      name="city" 
      placeholder="Postal Code"
      className="p-2 border border-gray-300 rounded-md"
    />
  </div>

  <div className="flex flex-col">
    <label htmlFor="zipcode" className="text-gray-600 mb-2"></label>
    <input 
      type="text" 
      id="zipcode" 
      name="zipcode" 
      placeholder="Locality"
      className="p-2 border border-gray-300 rounded-md"
    />
  </div>
</div>


<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
 
  <div className="relative flex flex-col">
    <label htmlFor="city" className="text-gray-600 mb-2 "></label>
    <input 
      type="text" 
      id="city" 
      name="city" 
      placeholder="State/Territory"
      className="p-2 border border-gray-300 rounded-md pl-10"  
    />
   
    <div className="absolute top-8 ml-72 left-2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-600"></div>
  </div>


  <div className="relative flex flex-col">
    <label htmlFor="zipcode" className="text-gray-600 mb-2"></label>
    <input 
      type="text" 
      id="zipcode" 
      name="zipcode" 
      placeholder="Pakistan"
      className="p-2 border border-gray-300 rounded-md pl-10" 
    />
    {/* Green Dot placed inside the input field */}
    <div className="absolute top-8  right-2 transform -translate-y-1/2 w-3 h-3 bg-green-500 rounded-full"></div>
  </div>
</div>

<div className="flex flex-col space-y-6">
  <p className="flex items-center space-x-2 mt-3">
    <input type="checkbox" id="saveAddress" name="saveAddress" className="form-checkbox" />
    <label htmlFor="saveAddress" className="text-gray-600">Save this address to my profile</label>
  </p>

  <p className="flex items-center space-x-2 mb-6">
    <input type="checkbox" id="preferredAddress" name="preferredAddress" className="form-checkbox" />
    <label htmlFor="preferredAddress" className="text-gray-600">Make this my preferred address</label>
  </p>
</div>



  <div className="flex flex-col">
    <h1 className="text-2xl font-semibold">What's your contact information?</h1>
    <label htmlFor="phone" className="text-gray-600 mb-2">
    
    </label>
    <input 
      type="text" 
      id="phone" 
      name="phone" 
      placeholder="Email"
      className="p-2 border border-gray-300 rounded-md"
    />
    <p className="text-gray-400 ml-2 mt-2">A confirmation email will be sent after checkout.</p>
  </div>

  <div className="flex flex-col">
    <label htmlFor="email" className="text-gray-600 mb-2"></label>
    <input 
      type="email" 
      id="email" 
      name="email" 
      placeholder="Phone Number"
      className="p-2 border border-gray-300 rounded-md"
    />
    <p className="ml-2 text-gray-400 mt-2">A carrier might contact you to confirm delivery.</p>
  </div>

  <div className="flex flex-col">
    <label htmlFor="country" className="text-gray-600 mb-2 text-2xl font-semibold">What's your PAN?</label>
    <input 
      type="text" 
      id="country" 
      name="country" 
      placeholder="PAN"
      className="p-2 border border-gray-300 rounded-md"
    />
  </div>
  <p className="text-gray-400 ml-10">.Enter your PAN to enable payment with UPI, Net Banking or local <br /> card methods</p>

  <div className="flex flex-col space-y-6">
  <p className="flex items-center space-x-2 mt-4">
    <input type="checkbox" id="savePAN" name="savePAN" className="form-checkbox" />
    <label htmlFor="savePAN" className="text-gray-400">Save PAN details to Nike Profile</label>
  </p>

  <p className="flex items-center space-x-2">
    <input type="checkbox" id="consent" name="consent" className="form-checkbox" />
    <label htmlFor="consent" className="text-gray-400">
      I have read and consent to eShopWorld processing my information in accordance with the Privacy Statement and Cookie Policy. eShopWorld is a trusted Nike partner.
    </label>
  </p>
</div>

  

  {/* Submit Button */}
  <button type="submit" className="w-full text-gray-500 bg-gray-200 p-4 rounded-full font-medium shadow-md">
   Continue
  </button>

  <ul className="space-y-6 font-semibold text-xl space-">
  <li className="text-gray-600 leading-6">Delivery</li>
  <li className="text-gray-400 leading-6">Shipping</li>
  <li className="text-gray-400 leading-6">Billing</li>
  <li className="text-gray-400 leading-6">Payment</li>
</ul>

</form>

        </div>
      </div>

      {/* Right Section: Cart Details & Summary (40%) */}
      <div className="w-full md:w-[40%] p-6 rounded-lg">
        {/* Cart Details */}
        <div className="text-left mb-6 bg-gray-100 p-4">
          <h2 className="text-xl font-bold text-gray-800 mb-3">Free Delivery</h2>
          <p className="text-gray-600">
            Applies to orders of ₹ 14,000.00 or more.{' '}
            <a href="#" className="underline text-gray-900">View Details</a>
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">Bag</h2>

        {/* Summary Section */}
        <div className="mt-6">
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
            Member Checkout
          </button>
        </div>

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
            <div className="flex justify-between items-center text-base">
              <h3 className="font-semibold text-gray-800">Nike Dri-FIT ADV TechKnit Ultra</h3>
            </div>
            <div className="text-sm">
              <p className="text-gray-600 mb-2">Men's Short-Sleeve Running Top</p>
              <p className="text-gray-600 mb-2">Ashen Slate/Cobalt Bliss</p>
              <p className="text-gray-600">Size L &emsp; Quantity 1</p>
              <p className="text-gray-900 font-medium">MRP: ₹ 3,895.00</p>
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

        {/* Cart Item 2 */}
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
              <h3 className="font-semibold text-base text-gray-800">Nike Air Max 97 SE</h3>
            </div>
            <div className="text-sm">
              <p className="text-gray-600 mb-2">Men's Shoes</p>
              <p className="text-gray-600 mb-2">Flat Pewter/Light Bone/Black/White</p>
              <p className="text-gray-600">Size 8 &emsp; Quantity 1</p>
              <p className="text-gray-900 font-medium">MRP: ₹ 16,995.00</p>
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

        {/* Cart Item 3 */}
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
            </div>
            <div className="text-sm">
              <p className="text-gray-600 mb-2">Women's Shoes</p>
              <p className="text-gray-600 mb-2">White</p>
              <p className="text-gray-600">Size 9 &emsp; Quantity 1</p>
              <p className="text-gray-900 font-medium">MRP: ₹ 8,695.00</p>
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
    </div>
  );
}

export default Cart;
